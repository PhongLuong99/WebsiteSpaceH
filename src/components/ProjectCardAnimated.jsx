import React, { useState, useEffect, useRef } from 'react';

const ProjectCardAnimated = ({ project, cardRef, className }) => {
  // Thêm kiểm tra điều kiện (Guard Clause)
  if (!project) {
      console.error("ProjectCardAnimated received undefined project prop.");
      return null;
  }
    
  // State quản lý trạng thái hover
  const [isHovered, setIsHovered] = useState(false);
  // State quản lý chỉ mục hình ảnh đang hiển thị
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect để tạo vòng lặp hình ảnh khi hover
  useEffect(() => {
    let intervalId;
    // Kiểm tra tính hợp lệ của project.images trước khi sử dụng
    const hasMultipleImages = project.images && project.images.length > 1;

    if (isHovered && hasMultipleImages) {
      // Thiết lập interval 500ms để chuyển ảnh
      intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex => 
          (prevIndex + 1) % project.images.length
        );
      }, 500); // Tốc độ loop: 500ms
    } else {
      setCurrentImageIndex(0); // Reset ảnh về ảnh đầu tiên khi không hover
    }

    // Dependency array chỉ bao gồm isHovered, project.images (để tránh warning)
    return () => clearInterval(intervalId);
  }, [isHovered, project.images]);

  // Kiểm tra lần nữa trước khi gán displayedImage
  const hasImages = project.images && project.images.length > 0;

  // Chọn hình ảnh để hiển thị (hình chính khi không hover, hình loop khi hover)
  const displayedImage = isHovered && hasImages
    ? project.images[currentImageIndex]
    : project.mainImage;

  return (
    <div 
      ref={cardRef} 
      className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Hình ảnh: Blur và Background */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${project.bgColor || 'bg-gray-800'}`}
      >
        <img
          src={displayedImage}
          alt={project.title}
          className={`
            w-full h-full object-cover object-top transition-all duration-300
            ${isHovered ? 'blur-sm scale-[1.05]' : 'blur-0 scale-100'} 
            ${project.bgColor === 'bg-gray-900' ? 'mix-blend-luminosity' : 'mix-blend-normal'}
          `}
          // Thêm key để React ép render lại img khi source thay đổi (quan trọng cho loop)
          key={displayedImage} 
        />
      </div>

      {/* Title Hiển thị khi Hover (Ở dưới cùng) */}
      <div 
        className={`
          absolute inset-x-0 bottom-0 p-6 
          transform transition-all duration-300
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          bg-gradient-to-t from-black/80 to-transparent 
          text-white
        `}
      >
        <h3 className="text-2xl font-bold tracking-tight">
          {project.title}
        </h3>
        {/* Kiểm tra project.description trước khi hiển thị */}
        {project.description && (
            <p className="text-sm text-gray-300 mt-1">{project.description}</p>
        )}
      </div>

      {/* Overlay Tương tác (Chỉ visible trên mobile/khi không hover) - Nút ẩn đi trên hover */}
      <div 
        className={`
          absolute inset-0 flex justify-center items-center transition-opacity duration-300
          ${isHovered ? 'opacity-0' : 'opacity-100'} 
          lg:hidden /* Ẩn overlay khi desktop để hover hoạt động*/
          bg-black/30 
        `}
      >
        <span className="text-white text-lg font-semibold border-2 border-white px-4 py-2 rounded-lg">
            Xem Chi Tiết
        </span>
      </div>
    </div>
  );
};

export default ProjectCardAnimated;