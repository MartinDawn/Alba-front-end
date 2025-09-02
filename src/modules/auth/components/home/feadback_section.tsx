import Button from "../button";
import VerticalScrollFeedback from "./feadback";

export const FeedbackSection = () => {
  return (
    <div className="py-16 bg-black">
      {/* Giữ nguyên nội dung feedback */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white_text mb-4">
              Cảm nhận từ cộng đồng
            </h2>
            <p className="text-gray-300 mb-6">
              Hơn 10,000 người đã tin tưởng và đồng hành cùng chúng tôi
            </p>
            <Button variant="outline" className="w-fit text-white_text border-white_text hover:bg-white/10">
              Xem thêm câu chuyện
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <VerticalScrollFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};