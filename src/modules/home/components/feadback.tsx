import React, { useEffect, useRef } from 'react';

interface Feedback {
  id: number;
  name: string;
  comment: string;
}

const VerticalScrollFeedback: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Dữ liệu feedback từ học viên (lấy từ file ảnh)
  const feedbacks: Feedback[] = [
    {
    id: 1,
    name: "Nguyễn Thị Mai",
    comment: "Tham gia chiến dịch 'Áo ấm vùng cao' thật ý nghĩa. Cảm ơn cộng đồng đã giúp tôi có cơ hội san sẻ yêu thương tới các em nhỏ khó khăn.",

  },
  {
    id: 2,
    name: "Trần Văn Nam",
    comment: "Lần đầu quyên góp qua nền tảng này rất dễ dàng. Minh bạch từng đồng tiền giúp tôi hoàn toàn yên tâm khi đóng góp.",

  },
  {
    id: 3,
    name: "Lê Thị Hoa",
    comment: "Cảm động khi nhận được hình ảnh các cụ già được nhận suất ăn từ quỹ của chúng ta. Mong sẽ có thêm nhiều người chung tay!",

  },
  {
    id: 4,
    name: "Phạm Đức Anh",
    comment: "Ủng hộ chương trình xây trường học cho trẻ em nghèo. Hy vọng các em sẽ có ngôi trường khang trang để học tập.",

  },
  {
    id: 5,
    name: "Hoàng Thị Lan",
    comment: "Tôi đã cùng nhóm tình nguyện phân phát 200 phần quà Tết cho người vô gia cư. Cảm ơn nền tảng đã kết nối!",

  },
  {
    id: 6,
    name: "Vũ Minh Tuấn",
    comment: "Hệ thống đánh giá minh bạch giúp tôi theo dõi được số tiền mình quyên góp đã giúp được ai. Rất đáng tin cậy!",

  },
  {
    id: 7,
    name: "Đặng Thị Hương",
    comment: "Vừa tham gia hiến máu nhân đạo qua lời kêu gọi trên nền tảng. Mọi thủ tục đều rất thuận tiện và nhanh chóng.",

  },
  {
    id: 8,
    name: "Ngô Văn Bình",
    comment: "Là giáo viên, tôi rất cảm kích khi nhận được sách vở ủng hộ từ chương trình 'Tiếp bước đến trường' cho học sinh nghèo.",

  },
  {
    id: 9,
    name: "Bùi Thị Ngọc",
    comment: "Đã cùng nhóm xây được 3 ngôi nhà tình thương cho hộ nghèo. Cảm ơn cộng đồng đã đóng góp và hỗ trợ!",

  },
  {
    id: 10,
    name: "Lý Văn Cường",
    comment: "Nền tảng này thực sự kết nối những trái tim nhân ái. Tôi sẽ tiếp tục đồng hành cùng các chương trình từ thiện ở đây.",
  }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Tạo bản sao để scroll liền mạch
    const contentHeight = scrollContainer.scrollHeight / 2;
    let scrollPosition = 0;
    const speed = 0.3; 

    const scroll = () => {
      scrollPosition += speed;
      
      // Reset khi chạm cuối
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
      <div 
        ref={scrollRef}
        className="max-h-96 overflow-hidden"
      >
        {/* Nhân đôi dữ liệu để tạo hiệu ứng liền mạch */}
        {[...feedbacks, ...feedbacks].map((feedback, index) => (
          <div 
            key={`${feedback.id}-${index}`}
            className="p-6 border-b border-gray-700 last:border-b-0"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
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