import React, { useState } from "react";
import { GiftIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/24/solid";
import { BookmarkIcon as BookmarkOutline } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import {
  EllipsisHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline,ChatBubbleOvalLeftEllipsisIcon  } from "@heroicons/react/24/outline";

interface PostCardProps {
  username: string;
  images: string[];
  timeAgo?: string;
  caption: string;
  avatar?: string;
  initialLikes?: number;
  initialComments?: number;
  initialDonations?: number;
}

const PostCard: React.FC<PostCardProps> = ({
  username,
  timeAgo = "2h",
  images,
  caption,
  avatar = "https://i.pravatar.cc/150?img=32",
  initialLikes = 1234,
  initialComments = 56,
  initialDonations = 12
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [saved, setSaved] = useState(false);
  const [donated, setDonated] = useState(false);
  const [donations, setDonations] = useState(initialDonations);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [donateAmount, setDonateAmount] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleDonate = () => {
    if ((donateAmount || selectedAmount) && !donated) {
      setDonations(donations + 1);
      setDonated(true);
      setShowDonateModal(false);
      setDonateAmount("");
      setSelectedAmount(null);
      alert(`Cảm ơn bạn đã donate ${selectedAmount || donateAmount} coins cho ${username}!`);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const amountOptions = [10000, 20000, 50000, 100000];

  return (
    <div className="max-w-md mx-auto bg-black border border-white rounded-md overflow-hidden mb-1">
      {/* Header với avatar và tên người dùng */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full object-cover mr-3"
            src={avatar}
            alt={username}
          />
          <div className="font-semibold text-white">{username } •</div>
          <div className="text-gray-400 p-1"> {timeAgo}</div>
        </div>
        <EllipsisHorizontalIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
      </div>

      {/* Ảnh bài viết */}
<div className="relative group">
  <Swiper
    modules={[Navigation, Pagination]}
    navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  pagination={{
    clickable: true,
    bulletClass: "swiper-pagination-bullet bg-white/60 w-3 h-3 rounded-full", // class mặc định cho dot
    bulletActiveClass: "swiper-pagination-bullet-active bg-white w-3 h-3",    // class cho dot active
  }}
  className="relative w-full aspect-square"
>
    {images.map((images, i) => (
    <SwiperSlide key={i}>
          {images.endsWith(".mp4") ? (
            <video
              src={images}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={images}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          )}
        </SwiperSlide>
        ))}

    {/* Custom buttons - Thêm opacity-0 và group-hover:opacity-100 */}
    <button className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
      <ChevronLeftIcon className="h-6 w-6 text-white" />
    </button>
    <button className="custom-next absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
      <ChevronRightIcon className="h-6 w-6 text-white" />
    </button>
  </Swiper>
</div>

      {/* Khu vực tương tác */}
      <div className="p-4">
        {/* Các nút hành động */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-4">
            <button onClick={handleLike} className="focus:outline-none">
              {liked ? (
                <HeartIconSolid className="h-6 w-6 text-red-600" />
              ) : (
                <HeartIconOutline className="h-6 w-6 stroke-white fill-black" />
              )}
            </button>
            <button className="text-white focus:outline-none">
              <ChatBubbleOvalLeftEllipsisIcon  className="h-6 w-6" />
            </button>
            <button
              onClick={() => setShowDonateModal(true)}
              className="h-6 w-5 stroke-white fill-black"
            >
              <GiftIcon className="h-6 w-6" />
            </button>
          </div>
          <button 
            onClick={() => setSaved(!saved)}
            className="focus:outline-none"
          >
            {saved ? (
              <BookmarkSolid className="h-6 w-6 text-blue-500" />
            ) : (
              <BookmarkOutline className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Hiển thị số lượt thích và donate */}
        <div className="text-sm text-gray-300 mb-2">
          {likes.toLocaleString()} lượt thích • {donations} lượt donate
        </div>

        {/* Caption */}
        <div className="text-sm text-gray-100 mb-4">
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </div>

        {/* Hiển thị bình luận */}
        {comments.length > 0 && (
          <div className="mt-2 mb-3">
            {comments.slice(0, 2).map((cmt, index) => (
              <div key={index} className="text-sm text-gray-400 mb-1">
                <span className="font-semibold mr-2">{username}</span>
                {cmt}
              </div>
            ))}
            {comments.length > 2 && (
              <button className="text-xs text-gray-500">
                Xem thêm {comments.length - 2} bình luận
              </button>
            )}
          </div>
        )}

        {/* Form bình luận */}
        <form onSubmit={handleCommentSubmit} className="mt-2 flex border-t border-gray-800 pt-3">
          <input
            type="text"
            placeholder="Thêm bình luận..."
            className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder-gray-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="text-blue-400 text-sm font-semibold ml-2 disabled:text-blue-200 disabled:opacity-50"
            disabled={!comment.trim()}
          >
            Đăng
          </button>
        </form>
      </div>

      {/* Modal donate */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-md border border-gray-800">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h3 className="text-lg font-semibold text-white">Donate cho {username}</h3>
              <button 
                onClick={() => setShowDonateModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-4">
                Hãy hỗ trợ {username} bằng một khoản donate!
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {amountOptions.map(amount => (
                  <button
                    key={amount}
                    className={`p-3 border rounded-md text-center text-sm font-medium ${
                      selectedAmount === amount 
                        ? 'bg-blue-500 text-white border-blue-500' 
                        : 'border-gray-700 text-gray-300 hover:border-gray-600'
                    }`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setDonateAmount("");
                    }}
                  >
                    {amount.toLocaleString()}₫
                  </button>
                ))}
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Hoặc nhập số tiền khác
                </label>
                <input
                  type="number"
                  placeholder="Số tiền (đồng)"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={donateAmount}
                  onChange={(e) => {
                    setDonateAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
              </div>
              
              <button
                onClick={handleDonate}
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-colors font-medium text-sm disabled:bg-blue-800 disabled:cursor-not-allowed"
                disabled={!donateAmount && !selectedAmount}
              >
                Xác nhận Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;