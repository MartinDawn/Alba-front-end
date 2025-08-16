import { AiOutlineHome, AiOutlinePlusSquare, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaCamera } from 'react-icons/fa';
import { BsImages } from 'react-icons/bs';
import { useState } from 'react';
import Navbar from './narbar';

interface Comment {
  id: number;
  text: string;
  author: string;
  likes: number;
}

interface Post {
  id: number;
  text: string;
  images: string[];
  author: string;
  avatar: string;
  likes: number;
  comments: Comment[];
}

interface SuggestedUser {
  id: number;
  name: string;
  avatar: string;
}

const UserPage = () => {
  const [avatar, setAvatar] = useState('/assets/Logo.jpg');
  const [postImages, setPostImages] = useState<string[]>([]);
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [commentText, setCommentText] = useState<{ [key: number]: string }>({});
  const [likedComments, setLikedComments] = useState<number[]>([]);
  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);

  const suggestedUsers: SuggestedUser[] = [
    { id: 1, name: 'Jane Smith', avatar: '/src/assets/Logo.jpg' },
    { id: 2, name: 'David Lee', avatar: '/src/assets/Logo.jpg' },
    { id: 3, name: 'Anna Kim', avatar: '/src/assets/Logo.jpg' },
    { id: 4, name: 'Mike Johnson', avatar: '/src/assets/Logo.jpg' },
    { id: 5, name: 'Emily White', avatar: '/src/assets/Logo.jpg' },
    { id: 6, name: 'Chris Green', avatar: '/src/assets/Logo.jpg' },
    { id: 7, name: 'Sarah Brown', avatar: '/src/assets/Logo.jpg' },
    { id: 8, name: 'Tom Wilson', avatar: '/src/assets/Logo.jpg' },
  ];

  const [otherPosts, setOtherPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Alice',
      avatar: '/src/assets/Logo.jpg',
      text: 'Đây là một bài đăng mẫu từ Alice.',
      images: ['/src/assets/Logo.jpg', '/src/assets/Logo.jpg'],
      likes: 15,
      comments: [
        { id: 1, author: 'John Doe', text: 'Bài viết hay quá!', likes: 5 },
        { id: 2, author: 'Jane Smith', text: 'Tuyệt vời!', likes: 2 },
      ],
    },
    {
      id: 2,
      author: 'Bob',
      avatar: '/src/assets/Logo.jpg',
      text: 'Chào mọi người, đây là Bob!',
      images: ['/src/assets/Logo.jpg'],
      likes: 8,
      comments: [],
    },
  ]);

  const handleFollow = (author: string) => {
    if (!following.includes(author)) {
      setFollowing([...following, author]);
    }
  };

  const handleLike = (postId: number, isOtherPost: boolean) => {
    const updateLikes = (posts: Post[]) =>
      posts.map((post) => {
        if (post.id === postId) {
          const newLikes = likedPosts.includes(postId) ? post.likes - 1 : post.likes + 1;
          return { ...post, likes: newLikes };
        }
        return post;
      });

    if (isOtherPost) {
      setOtherPosts(updateLikes(otherPosts));
    } else {
      setPosts(updateLikes(posts));
    }

    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleLikeComment = (postId: number, commentId: number, isOtherPost: boolean) => {
    const updateCommentLikes = (posts: Post[]) =>
      posts.map((post) => {
        if (post.id === postId) {
          const updatedComments = post.comments.map((comment) => {
            if (comment.id === commentId) {
              const newLikes = likedComments.includes(commentId) ? comment.likes - 1 : comment.likes + 1;
              return { ...comment, likes: newLikes };
            }
            return comment;
          });
          return { ...post, comments: updatedComments };
        }
        return post;
      });

    if (isOtherPost) {
      setOtherPosts(updateCommentLikes(otherPosts));
    } else {
      setPosts(updateCommentLikes(posts));
    }

    if (likedComments.includes(commentId)) {
      setLikedComments(likedComments.filter((id) => id !== commentId));
    } else {
      setLikedComments([...likedComments, commentId]);
    }
  };

  const handleCommentChange = (postId: number, text: string) => {
    setCommentText({ ...commentText, [postId]: text });
  };

  const handleAddComment = (postId: number, isOtherPost: boolean) => {
    const text = commentText[postId];
    if (!text || text.trim() === '') return;

    const newComment: Comment = {
      id: Date.now(),
      author: 'John Doe', // Current user
      text,
      likes: 0,
    };

    const updateComments = (posts: Post[]) =>
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, newComment] };
        }
        return post;
      });

    if (isOtherPost) {
      setOtherPosts(updateComments(otherPosts));
    } else {
      setPosts(updateComments(posts));
    }

    setCommentText({ ...commentText, [postId]: '' });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setAvatar(event.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlePostImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageUrls: string[] = [];
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target && typeof event.target.result === 'string') {
            imageUrls.push(event.target.result);
            if (imageUrls.length === files.length) {
              setPostImages((prevImages) => [...prevImages, ...imageUrls]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleCreatePost = () => {
    if (postText.trim() === '' && postImages.length === 0) {
      return; // Don't create empty posts
    }

    const newPost: Post = {
      id: Date.now(), // simple unique id
      text: postText,
      images: postImages,
      author: 'John Doe', // hardcoded for now
      avatar: avatar,
      likes: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setPostText('');
    setPostImages([]);
  };

  return (
    // Changed outer background to black with white text
    <div className="h-screen bg-black text-white flex flex-col">
      {/* Header */}
      {/* Changed header background to black and ensured text is white */}
      <header className="bg-black shadow py-4 px-8 flex items-center justify-between">

        <div className="flex items-center space-x-4">
          <AiOutlineHome size={24} />
          <AiOutlinePlusSquare size={24} />
        </div>
      </header>

      <Navbar />
      
      {/* Main Content with 3 Columns */}
      <main className="container mx-auto flex flex-grow py-8 overflow-hidden">
        {/* Column 1: User Info */}
        <div className="w-1/4 pr-4">
          <div className="p-4 mb-4">
            <div className="flex flex-col items-center">
              {/* Avatar Image */}
              <div className="relative">
                <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-2" />
                <label htmlFor="avatarUpload" className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer">
                  <FaCamera />
                </label>
                <input type="file" id="avatarUpload" className="hidden" onChange={handleAvatarChange} accept="image/*" />
              </div>
              <h2 className="text-xl font-bold mb-1">John Doe</h2>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="py-1 hover:bg-gray-700 rounded px-2">Hồ sơ</li>
              <li className="py-1 hover:bg-gray-700 rounded px-2">Bạn bè</li>
              <li className="py-1 hover:bg-gray-700 rounded px-2">Đã lưu</li>
              <li className="py-1 hover:bg-gray-700 rounded px-2">Cài đặt</li>
            </ul>
          </div>
        </div>

        {/* Column 2: Posts Feed */}
        <div className="w-1/2 px-4 overflow-y-auto hide-scrollbar">
          {/* Create Post Frame */}
          <div className="bg-gray-800 p-4 rounded shadow mb-4">
            <h2 className="font-bold mb-2">Tạo một bài đăng</h2>
            <textarea
              className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600"
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
            <div className="flex justify-between items-center mt-2">
              <label htmlFor="postImageUpload" className="cursor-pointer flex items-center">
                <BsImages size={24} className="text-white mr-2" />
                <span className="text-white">Ảnh/Video</span>
              </label>
              <input
                type="file"
                id="postImageUpload"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handlePostImageChange}
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreatePost}>
                Đăng
              </button>
            </div>
            <div className="flex flex-wrap mt-4">
              {postImages.map((image, index) => (
                <img key={index} src={image} alt={`post-preview-${index}`} className="w-24 h-24 object-cover rounded m-1" />
              ))}
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-800 p-4 rounded shadow">
                <div className="flex items-center mb-2">
                  <img src={post.avatar} alt="author avatar" className="w-10 h-10 rounded-full mr-2" />
                  <h2 className="font-bold">{post.author}</h2>
                </div>
                <p className="mb-2">{post.text}</p>
                {post.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-2">
                    {post.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`post-${post.id}-${index}`}
                        className="w-full h-auto rounded"
                      />
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center space-x-4">
                  <button onClick={() => handleLike(post.id, false)} className="flex items-center space-x-1">
                    {likedPosts.includes(post.id) ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                    <span>{post.likes} Thích</span>
                  </button>
                </div>
                <div className="mt-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex items-center justify-between mt-2">
                      <div className="flex items-start space-x-2">
                        <span className="font-bold">{comment.author}:</span>
                        <span>{comment.text}</span>
                      </div>
                      <button
                        onClick={() => handleLikeComment(post.id, comment.id, false)}
                        className="flex items-center space-x-1 text-gray-400"
                      >
                        {likedComments.includes(comment.id) ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  ))}
                  <div className="mt-2 flex">
                    <input
                      type="text"
                      placeholder="Thêm bình luận..."
                      value={commentText[post.id] || ''}
                      onChange={(e) => handleCommentChange(post.id, e.target.value)}
                      className="w-full bg-gray-700 text-white p-2 rounded-l border border-gray-600"
                    />
                    <button
                      onClick={() => handleAddComment(post.id, false)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-r"
                    >
                      Đăng
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other people's posts */}
          <div className="mt-8">
            <h2 className="font-bold text-xl mb-4">Bài đăng từ người khác</h2>
            <div className="space-y-4">
              {otherPosts.map((post) => (
                <div key={post.id} className="bg-gray-800 p-4 rounded shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <img src={post.avatar} alt="author avatar" className="w-10 h-10 rounded-full mr-2" />
                      <h2 className="font-bold">{post.author}</h2>
                    </div>
                    {!following.includes(post.author) && (
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                        onClick={() => handleFollow(post.author)}
                      >
                        Theo dõi
                      </button>
                    )}
                  </div>
                  <p className="mb-2">{post.text}</p>
                  {post.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {post.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`post-${post.id}-${index}`}
                          className="w-full h-auto rounded"
                        />
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex items-center space-x-4">
                    <button onClick={() => handleLike(post.id, true)} className="flex items-center space-x-1">
                      {likedPosts.includes(post.id) ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                      <span>{post.likes} Thích</span>
                    </button>
                  </div>
                  <div className="mt-4">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex items-center justify-between mt-2">
                        <div className="flex items-start space-x-2">
                          <span className="font-bold">{comment.author}:</span>
                          <span>{comment.text}</span>
                        </div>
                        <button
                          onClick={() => handleLikeComment(post.id, comment.id, true)}
                          className="flex items-center space-x-1 text-gray-400"
                        >
                          {likedComments.includes(comment.id) ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    ))}
                    <div className="mt-2 flex">
                      <input
                        type="text"
                        placeholder="Thêm bình luận..."
                        value={commentText[post.id] || ''}
                        onChange={(e) => handleCommentChange(post.id, e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded-l border border-gray-600"
                      />
                      <button
                        onClick={() => handleAddComment(post.id, true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r"
                      >
                        Đăng
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: Suggestions */}
        <div className="w-1/4 pl-4">
          {/* Changed panel background to dark gray */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold">Gợi ý theo dõi</h2>
              <button onClick={() => setShowSuggestionsModal(true)} className="text-blue-400 hover:text-blue-300">
                Xem tất cả
              </button>
            </div>
            <ul>
              {suggestedUsers.slice(0, 3).map((user) => (
                <li key={user.id} className="flex items-center justify-between py-2 border-b border-gray-700">
                  <div className="flex items-center">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                    <span>{user.name}</span>
                  </div>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Follow</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {showSuggestionsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg shadow-xl w-1/3 max-w-lg">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="font-bold text-lg">Gợi ý theo dõi</h2>
              <button onClick={() => setShowSuggestionsModal(false)} className="text-gray-400 hover:text-white">
                &times;
              </button>
            </div>
            <div className="p-4 h-96 overflow-y-auto hide-scrollbar">
              <ul>
                {suggestedUsers.map((user) => (
                  <li key={user.id} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                      <span>{user.name}</span>
                    </div>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Follow</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
