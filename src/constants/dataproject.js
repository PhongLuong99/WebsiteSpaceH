// src/projectsData.js

const projectsData = [
  {
    id: 1,
    title: "Trang Thương Mại Điện Tử",
    description: "Một nền tảng mua sắm trực tuyến hiện đại với React và Redux.",
	category: "Techart",
    thumbnail: "https://via.placeholder.com/300x180?text=E-Commerce+Thumbnail", // Thay bằng URL ảnh thật
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // URL nhúng YouTube (embed)
  },
  {
    id: 2,
    title: "Ứng Dụng Quản Lý Công Việc",
    description: "Công cụ quản lý dự án hiệu quả với tính năng kéo thả.",
	category: "Event",
    thumbnail: "https://via.placeholder.com/300x180?text=Todo+App+Thumbnail",
    videoUrl: "https://www.youtube.com/embed/q_D7kR8fMhY?autoplay=1",
  },
  {
    id: 3,
    title: "Trang Portfolio Cá Nhân",
    description: "Thiết kế đáp ứng, hiển thị các dự án đã hoàn thành.",
	category: "Tvc",
    thumbnail: "https://via.placeholder.com/300x180?text=Portfolio+Thumbnail",
    videoUrl: "https://www.youtube.com/embed/bM7L9f5_d78?autoplay=1",
  },
];

const Showcase_project =[
	{
    id: 1,
    title: "Ryde App Interface",
    description: "On-Demand Rides Made Simple with a Powerful, User-Friendly App",
    mainImage: "/images/project1.png",
    images: ["/images/project1_step1.png", "/images/project1_step2.png", "/images/project1_step3.png"],
    bgColor: "bg-gray-900" 
  },
  {
    id: 2,
    title: "Library Management Platform",
    description: "The Library Management Platform",
    mainImage: "/images/project2.png",
    images: ["/images/project2_step1.png", "/images/project2_step2.png"],
    bgColor: "bg-[#FFEFDB]" 
  },
  {
    id: 3,
    title: "YC Directory - A Startup Showcase App",
    description: "YC Directory - A Startup Showcase App",
    mainImage: "/images/project3.png",
    images: ["/images/project3_step1.png", "/images/project3_step2.png", "/images/project3_step3.png", "/images/project3_step4.png"],
    bgColor: "bg-[#FFE7EB]" 
  }
]
export default projectsData;