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
  
  // Tạo danh sách category duy nhất
  const categories = ['all', ...new Set(projectsData.map(p => p.category))];
  
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


  // Effect để đọc filter từ URL (giữ lại logic cũ)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category');
    if (initialCategory) {
      setFilter(categories.includes(initialCategory) ? initialCategory : 'all');
    }

    // Lấy dự án từ URL khi tải lần đầu
    const projectId = urlParams.get('project');
    if (projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (project) {
            setSelectedProject(project);
            setIsModalOpen(true); 
        }
    }
  }, []);

  // Xử lý click vào Card
  const handleCardClick = (project) => {
    openModal(project);
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Our Work</h1>
        <p className="text-xl text-gray-500 mb-12">Khám phá các dự án nổi bật của chúng tôi theo từng danh mục.</p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200
                ${filter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-indigo-100'}
              `}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project}
                onClick={handleCardClick} // Truyền hàm xử lý click
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-500">
              Không tìm thấy dự án nào trong danh mục "{filter}".
            </p>
          )}
        </div>
      </div>

      {/* Modal / Popup Component (Được đặt trong Page) */}
      {isModalOpen && <ProjectModal project={selectedProject} closeModal={closeModal} />}
    </>
  );
};

export default WorkPage;