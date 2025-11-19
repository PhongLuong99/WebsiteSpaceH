import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ProjectContent from './ProjectContent'; // Đã sửa: Import ProjectContent

const ProjectModal = ({ project, closeModal }) => {
    if (!project) return null;

    // Ngăn cuộn nền khi modal mở
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal} // Đóng khi click ra ngoài
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col transform transition-all duration-300 scale-100 opacity-100"
                onClick={e => e.stopPropagation()} // Ngăn sự kiện click lan truyền
            >
                {/* Header Modal */}
                <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10 rounded-t-xl">
                    <h2 className="text-2xl font-bold text-gray-900 truncate">{project.title}</h2>
                    <button 
                        onClick={closeModal}
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                        aria-label="Đóng"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Nội dung cuộn */}
                <div className="flex-1 overflow-y-auto p-6 space-y-10">
                    {/* Summary */}
                    <div className="mb-8">
                        <span className="text-sm font-semibold uppercase text-indigo-600">{project.category}</span>
                        <p className="text-xl text-gray-700 mt-2">{project.description}</p>
                    </div>

                    {/* Hình ảnh chính (trên cùng) */}
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img 
                            src={project.thumbnail} 
                            alt={project.title} 
                            className="w-full h-auto"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x600/cccccc/333333?text=Project+Main+Image+Error"; }}
                        />
                    </div>

                    {/* Nội dung động (Sử dụng component ProjectContent) */}
                    <ProjectContent content={project.content} />
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;