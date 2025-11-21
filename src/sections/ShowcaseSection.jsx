import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCardAnimated from "../components/ProjectCardAnimated";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------------------------------------
// 1. DỮ LIỆU DỰ ÁN (PROJECTS_DATA) - Đã di chuyển vào đây
// ----------------------------------------------------------------------
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Art and Technology - Interactive Art",
    description: "On-Demand Rides Made Simple with a Powerful, User-Friendly App",
    mainImage: "https://placehold.co/800x600/1e293b/white?text=Ryde+Main", // Placeholder
    images: ["https://placehold.co/400x300/1e293b/white?text=Step+1", "https://placehold.co/400x300/1e293b/white?text=Step+2", "https://placehold.co/400x300/1e293b/white?text=Step+3"],
    bgColor: "bg-gray-900" 
  },
  {
    id: 2,
    title: "Library Management Platform",
    description: "The Library Management Platform",
    mainImage: "https://placehold.co/800x600/FFEFDB/black?text=Library+Main", // Placeholder
    images: ["https://placehold.co/400x300/FFEFDB/black?text=Step+1", "https://placehold.co/400x300/FFEFDB/black?text=Step+2"],
    bgColor: "bg-[#FFEFDB]" 
  },
  {
    id: 3,
    title: "YC Directory - A Startup Showcase App",
    description: "YC Directory - A Startup Showcase App",
    mainImage: "https://placehold.co/800x600/FFE7EB/black?text=YC+Directory+Main", // Placeholder
    images: ["https://placehold.co/400x300/FFE7EB/black?text=Step+1", "https://placehold.co/400x300/FFE7EB/black?text=Step+2", "https://placehold.co/400x300/FFE7EB/black?text=Step+3", "https://placehold.co/400x300/FFE7EB/black?text=Step+4"],
    bgColor: "bg-[#FFE7EB]" 
  }
];

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  // Ref cho từng card
  const cardRefs = useRef([]);
  cardRefs.current = [];

  // Hàm thêm ref cho mảng
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations cho từng card (sử dụng mảng cardRefs.current)
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1), // Giảm delay một chút
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            // markers: true, // Bỏ comment để debug ScrollTrigger
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
		{/* Tiêu đề chính - Căn trái và sử dụng font chữ lớn hơn */}
		
        <div className="mb-16">
            <h2 className="text-7xl md:text-9xl font-extrabold text-white uppercase leading-none tracking-tight">
                <span className="block text-4xl font-light text-gray-400 mb-2">Featured</span>
                Works
            </h2>
			
        </div>

        {/* Main Layout */}
    <div className="showcaselayout">
      
      {/* LEFT — first project (featured) */}
      <div className="first-project-wrapper">
        <ProjectCardAnimated 
          project={PROJECTS_DATA[0]} 
          className="h-full"
        />
      </div>

      {/* RIGHT — list projects */}
      <div className="project-list-wrapper overflow-hidden">
        {PROJECTS_DATA.slice(1).map((project, i) => (
          <div className="project" key={project.id}>
            <ProjectCardAnimated 
              project={project}
            />
          </div>
        ))}
      </div>
    	</div>
      </div>
    </div>
  );
};

export default AppShowcase;
