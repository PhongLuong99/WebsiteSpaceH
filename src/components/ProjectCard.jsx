import React from 'react';
import { ChevronLeft } from 'lucide-react';

// Component Project Card (Dynamic, sử dụng cho cả trang Work)
const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all 
	  duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1 group"
      onClick={() => onClick(project)} // Truyền project khi click
    >
      {/* Hình ảnh chính */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/cccccc/333333?text=${project.title}`; }}
        />
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1 text-blue-800 bg-blue-100">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 mt-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-500 mt-1 text-sm line-clamp-3">
          {project.description}
        </p>
        <button className="mt-4 text-indigo-600 font-semibold flex items-center group-hover:text-indigo-800 transition-colors">
          Xem chi tiết
          <ChevronLeft className="w-4 h-4 ml-1 rotate-180 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;