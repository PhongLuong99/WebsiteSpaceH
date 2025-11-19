// src/projectsData.js
import { 
	Chungvid1,
	Chungvid2,
	SkyEvid1,
	SkyEvid2,
	SkyEvid3,

 } from "../assets"; 

const projectsData = [
  {
    id: 'sky',
	category: "Art and Technology - Interactive Art",
    title: "Trang Thương Mại Điện Tử",
    description: "Một nền tảng mua sắm trực tuyến hiện đại với React và Redux.",
    thumbnail: "https://placehold.co/800x600/1e293b/white?text=Ryde+Main+Project+Image", // Thay bằng URL ảnh thật
    content: [
      { type: 'text', value: 'Ryde là một ứng dụng di động được thiết kế lại hoàn toàn để cung cấp trải nghiệm đặt xe nhanh chóng và trực quan. Giai đoạn đầu tập trung vào việc đơn giản hóa quy trình thanh toán.' },
      
      // Thêm nhiều Hình ảnh (Ví dụ 1)
      { type: 'image', value: 'https://placehold.co/1200x500/0f172a/white?text=Ryde+Wireframes+(Desktop+View)' },
      
      { type: 'text', value: 'Chúng tôi sử dụng một quy trình thiết kế lặp lại, bắt đầu từ wireframes cơ bản đến giao diện người dùng hoàn chỉnh. Sau đây là các phiên bản mobile đã thử nghiệm.' },

      // Thêm nhiều Hình ảnh (Ví dụ 2)
      { type: 'image', value: 'https://placehold.co/800x600/1e293b/white?text=Ryde+Mobile+Screen+1' },
      { type: 'image', value: 'https://placehold.co/800x600/1e293b/white?text=Ryde+Mobile+Screen+2' },

      { type: 'text', value: 'Video dưới đây mô tả giao diện người dùng và hành trình đặt xe, từ điểm đón đến điểm đến cuối cùng, bao gồm cả tính năng theo dõi thời gian thực. Sau đó là một video phỏng vấn người dùng.' },

      // Thêm nhiều Video (Ví dụ 1)
      { type: 'video', value: Chungvid1 }, // Placeholder YouTube video

      { type: 'text', value: 'Phần kết luận, chúng tôi đã đạt được mức tăng trưởng 30% về lượng người dùng hoạt động hàng ngày sau khi ra mắt giao diện mới. Phỏng vấn người dùng sau thử nghiệm A/B:' },
      
      // Thêm nhiều Video (Ví dụ 2)
      { type: 'video', value: 'https://www.youtube.com/embed/xvFZjo5PgG0' }, // Placeholder YouTube video (Video 2)
    ],
  },
  {
    id: 'Baonguyen',
	category: "Event",
    title: "Ứng Dụng Quản Lý Công Việc",
    description: "Công cụ quản lý dự án hiệu quả với tính năng kéo thả.",
    thumbnail: "https://via.placeholder.com/300x180?text=Todo+App+Thumbnail",
    content: [
      { type: 'text', value: 'Nền tảng này cho phép quản lý hàng nghìn đầu sách và hồ sơ độc giả một cách dễ dàng. Chúng tôi sử dụng kiến trúc microservices để đảm bảo tính mở rộng.' },
      { type: 'image', value: 'https://placehold.co/1200x500/fef3c7/0f172a?text=Techart+Dashboard+Design' },
      { type: 'video', value: 'https://player.vimeo.com/video/983935665' }, // Placeholder Vimeo video (Example)
      { type: 'text', value: 'Thách thức lớn nhất là thiết kế một giao diện trực quan cho cả thủ thư và người dùng cuối, duy trì sự cân bằng giữa dữ liệu phức tạp và thẩm mỹ.' },
    ],
  },
  {
    id: 'Alab',
	category: "Event",
    title: "Trang Portfolio Cá Nhân",
    description: "Thiết kế đáp ứng, hiển thị các dự án đã hoàn thành.",
    thumbnail: "https://via.placeholder.com/300x180?text=Portfolio+Thumbnail",
    content: [
      { type: 'text', value: 'YC Directory là nơi các founder tìm kiếm đối tác và đầu tư. Giao diện được tối ưu hóa cho di động, cho phép tìm kiếm nhanh và lọc thông tin theo ngành.' },
      { type: 'video', value: 'https://www.youtube.com/embed/xvFZjo5PgG0' }, // Placeholder YouTube video (Example)
      { type: 'image', value: 'https://placehold.co/1200x500/ffe7eb/0f172a?text=Mobile+Screenshots' },
      { type: 'text', value: 'TVC quảng cáo tập trung vào câu chuyện thành công của các founder sử dụng ứng dụng, truyền tải thông điệp về sự hợp tác và đổi mới.' },
    ],
  },
];


export default projectsData;