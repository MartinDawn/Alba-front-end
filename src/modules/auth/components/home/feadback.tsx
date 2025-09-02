import React, { useEffect, useRef } from 'react';

interface Feedback {
  id: number;
  name: string;
  comment: string;
  avatar?: string;
}

const VerticalScrollFeedback: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const feedbacks: Feedback[] = [
    {
      id: 1,
      name: "Nguyễn Thị Mai",
      comment: "Tham gia chiến dịch 'Áo ấm vùng cao' thật ý nghĩa. Tôi cảm thấy mình đã góp một phần nhỏ để mang lại niềm vui cho các em nhỏ.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Trần Văn Nam",
      comment: "Lần đầu quyên góp qua nền tảng này rất dễ dàng và minh bạch. Tôi chắc chắn sẽ tiếp tục ủng hộ.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Lê Thị Hoa",
      comment: "Cảm động khi nhận được hình ảnh các cụ già được tặng quà. Cảm ơn ban tổ chức đã kết nối mọi người.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      id: 4,
      name: "Phạm Minh Tuấn",
      comment: "Nền tảng hoạt động rất tốt, dễ theo dõi tiến độ quyên góp.",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
    {
      id: 5,
      name: "Hoàng Thị Lan",
      comment: "Tôi đã kêu gọi bạn bè cùng tham gia, ai cũng thấy đây là chương trình đáng tin cậy.",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 6,
      name: "Ngô Văn Hùng",
      comment: "Ứng dụng thân thiện, dễ dùng. Hy vọng sẽ có thêm nhiều chiến dịch ý nghĩa nữa.",
      avatar: "https://i.pravatar.cc/100?img=6",
    },
    {
      id: 7,
      name: "Đỗ Thu Hà",
      comment: "Tôi rất vui khi biết khoản đóng góp nhỏ của mình đã giúp đỡ những người khó khăn.",
      avatar: "https://i.pravatar.cc/100?img=7",
    },
    {
      id: 8,
      name: "Nguyễn Văn Quang",
      comment: "Thông tin minh bạch, tôi có thể kiểm tra chi tiết các khoản quyên góp.",
      avatar: "https://i.pravatar.cc/100?img=8",
    },
    {
      id: 9,
      name: "Trần Thị Kim",
      comment: "Thật tuyệt khi có một nơi để kết nối những tấm lòng thiện nguyện trên khắp cả nước.",
      avatar: "https://i.pravatar.cc/100?img=9",
    },
    {
      id: 10,
      name: "Bùi Thanh Tùng",
      comment: "Hy vọng nền tảng này ngày càng phát triển để giúp được nhiều người hơn nữa.",
      avatar: "https://i.pravatar.cc/100?img=10",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const contentHeight = scrollContainer.scrollHeight / 2;
    let scrollPosition = 0;
    const speed = 0.3;

    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= contentHeight) {
        scrollPosition = 0;
      }
      scrollContainer.scrollTop = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto bg-black rounded-xl overflow-hidden">
      <div ref={scrollRef} className="max-h-96 overflow-hidden">
        {[...feedbacks, ...feedbacks].map((feedback, index) => (
          <div
            key={`${feedback.id}-${index}`}
            className="p-6 border-b border-gray-700 last:border-b-0"
          >
            <div className="flex items-start space-x-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <img
                  src={feedback.avatar || "https://i.pravatar.cc/100"}
                  alt={feedback.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-500 object-cover"
                />
              </div>
              {/* Nội dung */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white">{feedback.name}</h3>
                <p className="mt-2 text-gray-300">{feedback.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalScrollFeedback;
