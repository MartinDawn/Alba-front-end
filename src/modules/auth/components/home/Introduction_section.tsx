import { HeartIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/solid";

export const IntroductionSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Chào mừng đến với dự án của chúng tôi
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Chúng tôi kết nối những trái tim thiện nguyện, lan tỏa yêu thương và mang lại hy vọng cho những người kém may mắn. 
          Mỗi hành động nhỏ của bạn đều có thể tạo nên sự khác biệt lớn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black rounded-full">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Lan tỏa yêu thương</h3>
            <p className="text-gray-600">
              Góp phần giúp đỡ những hoàn cảnh khó khăn thông qua các chiến dịch nhân ái.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black rounded-full">
              <UsersIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Kết nối cộng đồng</h3>
            <p className="text-gray-600">
              Xây dựng một mạng lưới tình nguyện viên rộng khắp, sẵn sàng hành động vì cộng đồng.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black rounded-full">
              <ChartBarIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Minh bạch và bền vững</h3>
            <p className="text-gray-600">
              Cam kết minh bạch 100% trong mọi hoạt động để bạn an tâm khi đồng hành.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};