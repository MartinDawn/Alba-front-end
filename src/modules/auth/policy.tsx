import React from "react";
import MainLayout from "./layout/layout";

const PolicyPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Wrapper */}
      <div className="pt-24 pb-16 bg-white min-h-screen">
        {/* Hero */}
        <section className="py-12 px-6 text-center border-b">
          <h1 className="text-4xl font-bold mb-4">Điều khoản & Chính sách</h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trang web của chúng tôi là nền tảng kết nối cộng đồng thiện nguyện,
            cho phép mọi người dễ dàng tạo, tham gia và theo dõi các hoạt động gây quỹ.
            Việc sử dụng nền tảng đồng nghĩa với việc bạn đồng ý và cam kết tuân thủ
            những điều khoản dưới đây. Vui lòng đọc kỹ để hiểu rõ quyền lợi và trách nhiệm của mình.
          </p>
        </section>

        {/* 1. Quy định sử dụng */}
        <section className="py-12 px-6 max-w-5xl mx-auto border-b">
          <h2 className="text-2xl font-semibold mb-4">1. Quy định sử dụng</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Người dùng cần đảm bảo thông tin cung cấp khi đăng ký tài khoản là chính xác và cập nhật.
            Nghiêm cấm sử dụng nền tảng cho các mục đích trái pháp luật, gian lận hoặc gây ảnh hưởng
            tiêu cực đến cộng đồng. Chúng tôi có quyền tạm ngưng hoặc chấm dứt tài khoản nếu phát hiện
            hành vi vi phạm.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Không mạo danh cá nhân hoặc tổ chức khác để tạo chiến dịch.</li>
            <li>Không đăng tải nội dung mang tính bạo lực, phản cảm hoặc gây chia rẽ.</li>
            <li>Không sử dụng nền tảng cho mục đích thương mại trái phép.</li>
          </ul>
        </section>

        {/* 2. Đóng góp & gây quỹ */}
        <section className="py-12 px-6 bg-gray-50 max-w-5xl mx-auto border-b">
          <h2 className="text-2xl font-semibold mb-4">2. Đóng góp & Gây quỹ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Các chiến dịch gây quỹ được khởi tạo trên nền tảng phải minh bạch về mục tiêu, cách sử dụng,
            và cam kết công khai kết quả sau khi kết thúc. Người khởi tạo chịu trách nhiệm pháp lý
            đối với mọi thông tin đã công bố.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Chiến dịch cần có mô tả rõ ràng, minh chứng cụ thể (giấy tờ, hình ảnh).</li>
            <li>Toàn bộ số tiền quyên góp sẽ được quản lý thông qua cổng thanh toán an toàn.</li>
            <li>Trường hợp chiến dịch bị hủy hoặc không đạt yêu cầu, tiền sẽ được hoàn trả theo chính sách hoàn tiền.</li>
            <li>Nền tảng có quyền từ chối hoặc gỡ bỏ chiến dịch nếu phát hiện thông tin sai lệch.</li>
          </ul>
        </section>

        {/* 3. Bảo mật */}
        <section className="py-12 px-6 max-w-5xl mx-auto border-b">
          <h2 className="text-2xl font-semibold mb-4">3. Bảo mật & Quyền riêng tư</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chúng tôi cam kết bảo vệ dữ liệu cá nhân và tài chính của người dùng.
            Mọi thông tin nhạy cảm (mật khẩu, thông tin thanh toán) đều được mã hóa và lưu trữ an toàn.
            Người dùng có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa dữ liệu cá nhân của mình bất kỳ lúc nào.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dữ liệu của bạn sẽ không được chia sẻ cho bên thứ ba trừ khi:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
            <li>Bạn đồng ý chia sẻ.</li>
            <li>Việc chia sẻ cần thiết để hoàn thành giao dịch.</li>
            <li>Có yêu cầu từ cơ quan chức năng theo quy định pháp luật.</li>
          </ul>
        </section>

        {/* 4. Báo cáo vi phạm */}
        <section className="py-12 px-6 bg-gray-50 max-w-5xl mx-auto border-b">
          <h2 className="text-2xl font-semibold mb-4">4. Báo cáo & Xử lý vi phạm</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chúng tôi khuyến khích cộng đồng tích cực giám sát và báo cáo những chiến dịch hoặc tài khoản có dấu hiệu vi phạm.
            Các báo cáo sẽ được xem xét và xử lý trong thời gian sớm nhất. 
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Tạm ngưng chiến dịch để xác minh thông tin.</li>
            <li>Xóa bỏ nội dung hoặc khóa tài khoản vi phạm.</li>
            <li>Thông báo công khai nếu phát hiện gian lận nhằm cảnh báo cộng đồng.</li>
          </ul>
        </section>

        {/* 5. Trách nhiệm pháp lý */}
        <section className="py-12 px-6 max-w-5xl mx-auto border-b">
          <h2 className="text-2xl font-semibold mb-4">5. Trách nhiệm pháp lý</h2>
          <p className="text-gray-700 leading-relaxed">
            Nền tảng đóng vai trò trung gian kết nối, không chịu trách nhiệm trực tiếp về tính xác thực
            của từng chiến dịch trừ khi có xác minh chính thức. Người khởi tạo chiến dịch phải chịu trách nhiệm
            pháp lý trước pháp luật đối với thông tin và cam kết của mình. Người đóng góp cần cân nhắc kỹ
            trước khi ủng hộ.
          </p>
        </section>

        {/* 6. Liên hệ & Hỗ trợ */}
        <section className="py-12 px-6 bg-gray-50 max-w-5xl mx-auto border-b">
        <h2 className="text-2xl font-semibold mb-4">6. Liên hệ & Hỗ trợ</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
            Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc khiếu nại nào liên quan đến điều khoản
            và chính sách, vui lòng liên hệ với chúng tôi qua:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Email: support@tenmiencuaban.com</li>
            <li>Hotline: 0123 456 789</li>
            <li>Địa chỉ: 123 Đường ABC, Quận X, TP. HCM</li>
        </ul>
        </section>
        
        {/* Footer */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Xin cảm ơn</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi đánh giá cao sự tin tưởng và đồng hành của bạn. 
            Việc tiếp tục sử dụng nền tảng đồng nghĩa rằng bạn đã đọc, hiểu và đồng ý
            với toàn bộ điều khoản ở trên.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default PolicyPage;
