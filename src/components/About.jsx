import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";



const About = () => {

  const slides = [
    {
      src: "/images/abt1.png",
      alt: "grid-img-1",
      title: "Jack Daniel’s Old No. 7 Tennessee Whiskey",
      desc: "An iconic product with a smooth, slightly sweet taste, the result of a charcoal mellowing process using maple charcoal.",
    },
    {
      src: "/images/abt2.png",
      alt: "grid-img-2",
      title: "Jack Daniel’s Tennessee Honey",
      desc: "A blend of classic whiskey and natural honey, resulting in a soft sweetness that is perfect for light cocktails.",
    },
    {
      src: "/images/abt5.png",
      alt: "grid-img-5",
      title: "Gentleman Jack",
      desc: "Premium whiskey that is double-filtered through maple charcoal, resulting in a smoother and more elegant taste.",
    },
    {
      src: "/images/abt3.png",
      alt: "grid-img-3",
      title: "Jack Daniel’s Tennessee Fire",
      desc: "Whiskey with added spicy cinnamon, providing a warm and bold sensation.",
    },
    {
      src: "/images/abt4.png",
      alt: "grid-img-4",
      title: "Jack Daniel’s Single Barrel Select",
      desc: "Each bottle comes from a unique barrel, imparting a distinct flavor character with rich and complex nuances.",
    },
    {
      src: "/images/abt6.png",
      alt: "grid-img-6",
      title: "Jack Daniel’s Rye Whiskey",
      desc: "Made with 70% rye, it delivers a spicy, spicy flavor that's distinct from classic whiskey.",
    },
    {
      src: "/images/abt7.png",
      alt: "grid-img-7",
      title: "Jack Daniel’s Eric Church Special Edition",
      desc: "A limited release from the Single Barrel Select series created specifically to honor country musician Eric Church. This whiskey is hand-selected from barrels in the Jack Daniel's barrelhouse.",
    },
    {
      src: "/images/abt8.png",
      alt: "grid-img-8",
      title: "Jack Daniel’s 150th Anniversary Tennessee Whiskey",
      desc: "It is a special edition created to celebrate the 150th anniversary of Jack Daniel’s Distillery.",
    },
    {
      src: "/images/abt9.png",
      alt: "grid-img-9",
      title: "Jack Daniel’s Tennessee Apple",
      desc: "A blend of whiskey with fresh, sweet, and slightly sour apple flavors, popular for mixed drinks.",
    },
    {
      src: "/images/abt10.png",
      alt: "grid-img-10",
      title: "Jack Daniel’s 1907 Brand Tennessee Sour Mash Whiskey",
      desc: "This whiskey is designed as a lighter alternative to the classic variant, while maintaining the quality and signature process of Jack Daniel's.",
    }
  ];

  

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Whisky</p>
            <h2>
              The finest whisky brings warmth{" "}
              <span className="text-white">-</span>
              elegance and timeless memories
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Whisky tastes best on quiet nights, in warm bars, during rainy
              evenings, or special celebrations; bringing warmth, elegance,
              closeness, and unforgettable memories.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.8</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div id="about" className="py-20 container mx-auto">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-5xl"
      >
        {slides.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-transparent rounded-xl overflow-hidden p-5 flex flex-col items-center justify-center text-center"
            style={{ width: "400px" }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full max-h-100 object-contain rounded-md"
            />
            <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
            <button className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
              More Info
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

        </div>

  );
};

export default About;
