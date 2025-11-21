import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react'; 

// Component Card Project với hiệu ứng video/ảnh khi hover
const ProjectCard = ({ project, onClick }) => {
  if (!project) {
      console.error("ProjectCard received undefined project prop.");
      return null;
  }
    
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const hasDirectVideo = !!project.videoUrl;

  // Logic tự động Play/Pause video khi hover
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        // Tải lại video và tự động phát khi hover
        videoRef.current.load();
        // Dùng setTimeout ngắn để đảm bảo video tải trước khi play, tránh lỗi
        setTimeout(() => {
            videoRef.current.play().catch(e => console.error("Video play failed:", e));
        }, 100); 
      } else {
        // Dừng video khi không hover
        videoRef.current.pause();
        // Không reset currentTime ngay lập tức mà đợi 300ms (bằng thời gian transition) 
        // để video mờ hẳn rồi mới reset, tránh video giật.
        const resetTimer = setTimeout(() => {
            if(videoRef.current) videoRef.current.currentTime = 0; 
        }, 300);
        return () => clearTimeout(resetTimer);
      }
    }
  }, [isHovered, project.videoUrl]);


  return (
    <div 
      onClick={() => onClick(project)} 
      // 1. Thêm viền xám 1px (border border-gray-700)
      className={`
        relative w-full overflow-hidden cursor-pointer transition-all duration-500 group 
        bg-black aspect-[16/9] 
        border border-gray-700
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Media */}
      <div 
        className="absolute inset-0"
      >
        
        {/* 1. ẢNH TĨNH: Mờ dần đi khi hover */}
        <img
            src={project.thumbnail}
            alt={project.title}
            className={`
                w-full h-full object-cover object-center 
                transition-opacity duration-300 ease-in-out
                ${isHovered && hasDirectVideo ? 'opacity-0' : 'opacity-100'} 
            `}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x800/18181b/ffffff?text=Image+Error"; }}
        />
        
        {/* 2. VIDEO: Mờ dần xuất hiện khi hover (Chỉ khi có videoUrl) */}
        {hasDirectVideo && (
            <video
                ref={videoRef}
                className={`
                    absolute inset-0 w-full h-full object-cover object-center 
                    transition-opacity duration-300 ease-in-out
                    // Video nằm trên cùng và mờ dần xuất hiện
                    ${isHovered ? 'opacity-100 z-10' : 'opacity-0 z-0'} 
                `}
                src={project.videoUrl}
                loop
                muted
                playsInline
                poster={project.thumbnail} 
                title={project.title}
            >
                Trình duyệt của bạn không hỗ trợ video.
            </video>
        )}
      </div>

      {/* Thông tin Chi tiết: Overlay (Title và Category) */}
      {/* Đặt Overlay trên cùng (z-20) để nó luôn đè lên cả ảnh và video */}
      <div 
        className={`
          absolute inset-0 p-6 sm:p-8 z-20
          // Gradient từ dưới lên để làm nổi bật text
          bg-gradient-to-t from-black/80 to-black/20 
          text-white flex flex-col justify-end 
          transition-colors duration-300
        `}
      >
        
        {/* Play Icon (Chỉ hiển thị nếu có video và đang hover) */}
        {hasDirectVideo && (
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}
            >
                <Play className="w-8 h-8 text-black fill-black" />
            </div>
        )}

        {/* Nội dung (Luôn ở dưới cùng bên trái) */}
        <div className="mt-auto">
            {/* Tiêu đề: Di chuyển lên trên 4px khi hover */}
            <h3 className={`
                text-xl md:text-2xl font-bold tracking-tight leading-tight 
                transition-transform duration-300
                ${isHovered ? '-translate-y-1' : 'translate-y-4'} // Dùng 4px = 1rem = 4px
            `}>
                {project.title}
            </h3>
            
            {/* Mô tả: Ẩn/Hiện và di chuyển lên khi hover */}
            <p className={`
                text-sm text-gray-400 mt-1 mb-4 
                transition-all duration-300 ease-in-out
                ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}>
                {project.description}
            </p>
        </div>
        
        {/* Badge Category (Ở góc dưới bên phải) */}
        <div
            className="absolute bottom-6 right-6 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black bg-yellow-400 opacity-90"
            // Loại bỏ bo góc
        >
            {project.category || 'WORK'}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;