import React from 'react';
import MainLayout from './layout/layout';
import VideoPlayer from './components/video_player';
import VerticalScrollFeedback from './components/feadback';
import Button from './components/button';

const IntroductionPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section với Video */}
      <div className="relative">
        <VideoPlayer youtubeId="ukHK1GVyr0I" />
        <div className="absolute bottom-10 left-0 right-0 text-center">
        </div>
      </div>

      {/* Feedback Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Cảm nhận từ cộng đồng
            </h2>
            <p className="text-gray-300 mb-6">
              Hơn 10,000 người đã tin tưởng và đồng hành cùng chúng tôi
            </p>
            <Button variant="outline" className="w-fit text-white border-white hover:bg-white/10">
              Xem thêm câu chuyện
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <VerticalScrollFeedback />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Chúng tôi đã đạt được</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "50+", label: "Chiến dịch" },
              { value: "10,000+", label: "Người tham gia" },
              { value: "5 tỷ+", label: "Quyên góp" },
              { value: "100%", label: "Minh bạch" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn sẵn sàng tạo sự khác biệt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hãy cùng chúng tôi lan tỏa yêu thương đến những mảnh đời còn khó khăn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Đóng góp ngay
            </Button> */}
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
              Trở thành tình nguyện viên
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntroductionPage;