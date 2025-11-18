// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <div 
      // Kiểu dáng card: bo tròn, đổ bóng, màu nền
      className=" rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1" 
      onClick={() => onCardClick(project.videoUrl)}
    >
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        // Đảm bảo ảnh chiếm hết chiều rộng
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        
        <button 
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-150"
        >
          Xem Video
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;