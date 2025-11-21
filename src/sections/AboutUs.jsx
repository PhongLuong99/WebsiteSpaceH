import TitleHeader from "../components/TitleHeader"
import GlowCard from "../components/GlowCard"

const aboutItems = [
  {
    title: "Our Vision",
    desc: "We aim to shape digital experiences that connect people and bring ideas to life with modern technology.",
    icon: "/images/vision.png"
  },
  {
    title: "Our Mission",
    desc: "Deliver high-quality products through creativity, precision and a deep understanding of our customers' needs.",
    icon: "/images/mission.png"
  },
  {
    title: "Our Values",
    desc: "We believe in creativity, transparency, dedication, and continuous improvement in every project.",
    icon: "/images/values.png"
  }
];

const AboutUs = () => {
  return (
    <section id="about" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        
        <TitleHeader 
          title="About Us" 
          sub="💡 Who we are & what we believe"
        />

        {/* Cards Layout */}
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {aboutItems.map((item, index) => (
            <GlowCard 
              key={index} 
              card={{ review: item.desc }} 
              index={index}
            >
              <div className="flex items-center gap-3">
                <img 
                  src={item.icon} 
                  alt={item.title} 
                  className="size-12 object-contain" 
                />
                <p className="font-bold text-lg">{item.title}</p>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
