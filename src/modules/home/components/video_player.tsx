import React from 'react';

interface VideoPlayerProps {
  youtubeId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ youtubeId }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&mute=1&playsinline=1&disablekb=1&loop=1&playlist=${youtubeId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50"
        frameBorder="0"
      ></iframe>  

            {/* Overlay radial gradient */}
<div className="absolute top-0 left-0 w-full h-full pointer-events-none"
     style={{
       background: "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)"
     }}
></div>


      {/* Nội dung chồng lên video */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-white text-center md:text-left px-4 md:px-20 gap-8">
        {/* Bên trái */}
        <div className="md:w-1/2 max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Giới thiệu về Alba</h1>
          <p className="mb-4 leading-relaxed">
            Trong mỗi chúng ta, hầu hết lớn lên trong một tuổi thơ trọn vẹn, được bao bọc bởi tình yêu thương của gia đình, tiếng cười ấm áp và những bữa cơm đầm ấm.
          </p>
          <p className="leading-relaxed">
            Nhưng ngoài kia, vẫn còn biết bao trẻ em và người lớn phải đối mặt với cơn đói, giá lạnh, bệnh tật và cô đơn. Họ không có bờ vai để dựa, không có bàn tay nâng đỡ, và đôi khi cả hy vọng dường như cũng mờ nhạt.
          </p>
        </div>

        {/* Bên phải */}
        <div className="md:w-1/2 max-w-lg">
          <p className="mb-4 leading-relaxed">
            Chỉ một hành động nhỏ – một bữa ăn, một tấm chăn, một lời hỏi han – thôi cũng đủ thắp lên trong họ một tia sáng hy vọng.
          </p>
          <p className="mb-4 leading-relaxed">
            Khi mở lòng giúp đỡ, chúng ta không chỉ trao đi vật chất, mà còn gửi gắm tình thương, niềm tin, và khơi dậy sức mạnh để họ bước tiếp.
          </p>
          <p className="leading-relaxed">
            Hãy cùng Alba chung tay, không chỉ để thay đổi cuộc sống của những người cần giúp đỡ, mà còn để làm giàu thêm tâm hồn của chính mình. Mỗi hành động tử tế đều có giá trị, và chúng ta có thể tạo nên một thế giới tốt đẹp hơn.
          </p>
          
        </div>
        
      </div>
      {/* Button ở góc dưới */}
      <button className="absolute bottom-12 right-8 bg-white text-black px-6 py-3 rounded-lg transition-colors duration-300 font-extrabold">
        Tham gia ngay
      </button>
      
    </div>
  );
};

export default VideoPlayer;
