// src/components/VideoPopup.jsx
import React from 'react';

const VideoPopup = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null; 

  return (
    // Overlay: cố định (fixed), full màn hình, nền đen mờ (opacity-75), z-index cao, căn giữa
    <div className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex justify-center items-center p-4" onClick={onClose}>
      <div 
        // Nội dung popup: màu nền, bo tròn, giới hạn kích thước
        className="bg-white rounded-lg max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Ngăn chặn đóng popup khi click vào nội dung
      >
        {/* Nút đóng */}
        <button 
          className="absolute top-0 right-0 m-4 text-3xl font-light text-gray-800 hover:text-gray-900 z-[101]" 
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* Wrapper video: Dùng padding-bottom để tạo tỷ lệ khung hình 16:9 */}
        <div className="relative pt-[56.25%]"> {/* 56.25% = 9/16 * 100 */}
          <iframe
            title="Project Video"
            src={videoUrl}
            frameBorder="0"
            // Vị trí tuyệt đối để chiếm trọn wrapper
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;