import React, { useState, useEffect } from 'react';
// Components và Data cần được import từ thư mục cha. Đã sửa lỗi đường dẫn.
// Nếu WorkPage nằm trong 'src/Pages/', thì các components nằm trong 'src/components/'
// và data nằm trong 'src/data/'.
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import projectsData from '../constants/dataproject';

// View: Trang danh sách Work Portfolio (Pages/WorkPage.jsx)
const WorkPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Lấy categories từ dữ liệu chính xác
  const allCategories = [...new Set(projectsData.map(p => p.category))];
  const categories = ['all', ...allCategories];
  
  // Lọc dự án
  const filteredProjects = projectsData.filter(p => filter === 'all' || p.category === filter);

  // --- Logic Modal ---
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  // --- Kết thúc Logic Modal ---

  // Xử lý click vào Card
  const handleCardClick = (project) => {
    openModal(project);
  }

  return (
    <>
      <div className="w-full min-h-screen bg-black">
        {/* Header: Cố định và Full Width */}
        <div className="w-full bg-black py-10 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                
                {/* Tiêu đề chính */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 uppercase tracking-widest mb-4 md:mb-0">
                    OUR WORKS
                </h1>
                
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 md:gap-4">
                {categories.map(cat => (
                    <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`
                        px-4 py-2 text-sm font-semibold transition-all duration-200 uppercase
                        // Loại bỏ bo góc cho các nút filter
                        ${filter === cat ? 'bg-yellow-400 text-black shadow-none' : 'text-gray-400 hover:text-white border border-gray-800'}
                    `}
                    style={{ borderRadius: 0 }}
                    >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
                </div>
            </div>
        </div>

        {/* Project Grid: Full Width, No Gap */}
        {/* Sử dụng grid-cols-2 cho desktop và grid-cols-1 cho mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project}
                        onClick={handleCardClick}
                    />
                ))
            ) : (
                <p className="col-span-full text-center text-xl text-gray-400 py-20">
                    Không tìm thấy dự án nào.
                </p>
            )}
        </div>
      </div>

      {/* Modal / Popup Component */}
      {isModalOpen && <ProjectModal project={selectedProject} closeModal={closeModal} />}
    </>
  );
};

export default WorkPage;