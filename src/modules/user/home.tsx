import React from "react";
import UserLayout from "./layout/layout";
import PostCard from "./components/post_card";
import Logo from '../../assets/Logo.jpg';
const Home: React.FC = () => {
  return (
    <UserLayout>
      <div className="space-y-1">
        <PostCard
  username="nguyenvana"
  images={["https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  ]}
  caption="Chào mừng đến với trang mạng xã hội mới của chúng tôi! Nơi mọi người có thể kết nối và hỗ trợ lẫn nhau thông qua tính năng donate độc đáo."
  avatar="https://i.pravatar.cc/150?img=32"
  initialLikes={1234}
  initialComments={56}
  initialDonations={12}
/>
<PostCard
  username="nguyenvana"
  images={["https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  ]}
  caption="Chào mừng đến với trang mạng xã hội mới của chúng tôi! Nơi mọi người có thể kết nối và hỗ trợ lẫn nhau thông qua tính năng donate độc đáo."
  avatar="https://i.pravatar.cc/150?img=32"
  initialLikes={1234}
  initialComments={56}
  initialDonations={12}
/>
      </div>
    </UserLayout>
  );
};

export default Home;
