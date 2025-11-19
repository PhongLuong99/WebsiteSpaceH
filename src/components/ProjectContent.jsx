import React from 'react';

// Hàm kiểm tra xem URL có phải là của YouTube/Vimeo hay không
const isExternalVideoUrl = (url) => {
  return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com');
};

// Component render nội dung chi tiết (Text, Image, Video)
const ProjectContent = ({ content }) => {
  return (
    <div className="space-y-10">
      {/* Đảm bảo content là mảng và không rỗng */}
      {content && Array.isArray(content) && content.map((item, index) => {
        const isVideo = item.type === 'video';
        const isExternal = isVideo && isExternalVideoUrl(item.value);

        return (
          <div key={index} className="w-full">
            {/* Render Text */}
            {item.type === 'text' && (
              <p className="text-gray-700 leading-relaxed text-lg">{item.value}</p>
            )}
            
            {/* Render Image */}
            {item.type === 'image' && (
              <img 
                src={item.value} 
                alt={`Project asset ${index}`} 
                className="w-full h-auto rounded-lg shadow-xl"
                // Xử lý lỗi tải ảnh
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x500/cccccc/333333?text=Image+Load+Error"; }}
              />
            )}
            
            {/* Render Video */}
            {isVideo && (
              // Container cho video
              <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
                
                {/* 1. Video từ Nguồn Bên ngoài (YouTube/Vimeo) - Dùng Iframe */}
                {isExternal ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={item.value} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Project Video External ${index}`}
                  ></iframe>
                ) : (
                /* 2. Video Tệp Trực tiếp (mp4) - Dùng Thẻ Video */
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    src={item.value}
                    controls
                    // Thuộc tính quan trọng: Ngăn hiển thị nút tải xuống (download)
                    controlsList="nodownload" 
                    title={`Project Video Direct ${index}`}
                    // Thêm thuộc tính để video không bị right-click download
                    onContextMenu={(e) => e.preventDefault()} 
                  >
                    Trình duyệt của bạn không hỗ trợ thẻ video.
                  </video>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContent;