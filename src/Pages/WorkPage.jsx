import React, {useState, useMemo} from 'react';
import projectsData from '../constants/dataproject';
import ProjectCard from '../components/ProjectCard';
import VideoPopup from '../components/VideoPopup';

const categories = ["All", "Event", "Techart", "Tvc"];

const WorkPage = () => {

	const [selectedVideoUrl, setSelectedVideoUrl] = useState(null)
	// Trạng thái để lưu trữ mục đang được chọn (mặc định là "All")
    const [activeFilter, setActiveFilter] = useState("All");

	const handleCardClick = (videoUrl) => {
		setSelectedVideoUrl(videoUrl);
	};

	const handleClosePopup = () => {
    	setSelectedVideoUrl(null);
  	};

	// 🔑 LOGIC LỌC DỮ LIỆU
    // Sử dụng useMemo để đảm bảo danh sách chỉ được tính toán lại khi projectsData hoặc activeFilter thay đổi
    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") {
            return projectsData;
        }
        return projectsData.filter(project => project.category === activeFilter);
    }, [activeFilter]);
    // ----------------------------------------------------

  return (
	<div className="min-h-screen  py-10">
		{/* KHU VỰC LOGO VÀ NAV (Top Left) */}
      <header className="absolute top-0 left-0 w-full p-4 md:p-8 z-50">
          <div className="container mx-auto px-4">
              <h1>SpaceH</h1>
              {/* Nếu bạn có Nav bar đầy đủ, bạn sẽ đặt nó ở đây */}
          </div>
      </header>
      <div className="container mx-auto px-4 mt-16 md:mt-20">
        <h2 className="text-4xl font-bold text-center text-amber-50 mb-20">
          Các Dự Án Đã Thực Hiện
        </h2>

		{/* ------------------------------------------------------------------ */}
        {/* KHU VỰC TAGS PHÂN LOẠI */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`
                        py-2 px-4 rounded-full font-medium transition-colors duration-200
                        ${activeFilter === category 
                            ? 'bg-amber-50 text-black shadow-lg' // Màu khi đang chọn
                            : 'bg-gray-800 text-amber-50 hover:bg-gray-700' // Màu mặc định
                        }
                    `}
                >
                    {category}
                </button>
            ))}
        </div>
        {/* ------------------------------------------------------------------ */}
        
		{/* HIỂN THỊ DỰ ÁN ĐÃ LỌC */}
        {/* LAYOUT GRID VÀ RESPONSIVE BẰNG TAILWIND:
          - grid: Bật chế độ grid
          - gap-8: Khoảng cách giữa các item
          - sm:grid-cols-1: Màn hình nhỏ (mobile) -> 1 cột
          - md:grid-cols-2: Màn hình trung bình (tablet) -> 2 cột
          - lg:grid-cols-3: Màn hình lớn (desktop) -> 3 cột
        */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* SỬ DỤNG DANH SÁCH ĐÃ LỌC (filteredProjects) */}
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      <VideoPopup
        videoUrl={selectedVideoUrl}
        onClose={handleClosePopup}
      />
    </div>
  )
}

export default WorkPage