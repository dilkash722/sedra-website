//2
// components/Testimonials.js
"use client";
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const sliderRef = useRef(null); // Reference to the slider

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//   };

//   const testimonials = [
//     {
//       quote: "HCLTech helped us do the integration of our acquired businesses, not only faster but also better and cheaper. They have been a trusted and transparent partner who has always been willing to travel fast!",
//       name: "Andy Nallappan",
//       position: "Former CTO and Head of Software Business Operations, Broadcom Software",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Andy-Nallappan.webp",
//     },
//     {
//       quote: "Having a partner in a fast-changing environment who keeps their promises even though there’s major disruption is super valuable, and HCLTech always stood up to their promises and played a major role for us.",
//       name: "Dr. Victoria Ossadnik",
//       position: "COO, Digital and Member of the Board of Management of E.ON",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Dr.-Victoria-Ossadnik.webp",
//     },
//     {
//       quote: "HCLTech has been a great partner in our digital work. Our teams have worked collaboratively and innovatively to accelerate the delivery of our amazing digital mortgage buying experience.",
//       name: "Wendy Redshaw",
//       position: "Chief Digital Information Officer, Retail Banking, NatWest Group",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Wendy-Redshaw.webp",
//     },
//     {
//       quote: "HCLTech has been paramount in building digital at scale through technology and innovation. Our evolving partnership has not only been a convergence of experience and technology but has also supercharged our ecosystem to create memorable customer experiences.",
//       name: "Koos van der Veen",
//       position: "IT Director, Aegon Netherlands",
//       image: "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/Partner-Avatar-Koos-van-der-Veen.webp",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 relative py-12">
//       <div className="absolute inset-0">
//         <img
//           src="https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/light-gradient.webp"
//           alt="Testimonials Background"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="relative container mx-auto px-4">
//         <h2 className="text-center text-4xl font-light mb-8">Testimonials</h2>
//         <div className="max-w-4xl mx-auto">
//           <Slider ref={sliderRef} {...settings}>
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="px-4">
//                 {/* <div className="bg-white rounded-lg shadow-md p-16"> */}
//                 <div className="bg-white rounded-lg shadow-md p-16 relative"> {/* Changed padding */}

//                   <p className="text-lg italic mb-4">“{testimonial.quote}”</p>
//                   <div className="flex items-center mt-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full object-cover"
//                     />
//                     <div className="ml-4">
//                       <h3 className="font-semibold">{testimonial.name}</h3>
//                       <p className="text-sm text-gray-600">{testimonial.position}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-4 left-4 flex space-x-4">
//           <button
//             className="slick-prev slick-arrow bg-blue-500 text-white rounded px-4 py-2"
//             aria-label="Previous"
//             onClick={() => sliderRef.current.slickPrev()}
//           >
//             Previous
//           </button>
//           <button
//             className="slick-next slick-arrow bg-blue-500 text-white rounded px-4 py-2"
//             aria-label="Next"
//             onClick={() => sliderRef.current.slickNext()}
//           >
//             Next
//           </button>
//         </div>
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* Navigation Buttons */}

//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// components/Testimonials.js
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      quote:
        "Sedra helped us streamline our operations with efficiency and precision. Their team brought incredible value, allowing us to accelerate our timelines while staying within budget. Their expertise made all the difference for us!",
      name: "Mahmoud Abbas",
      position: "General Manager, Alomair",
      image: "/images/testimonials/men.jpg",
    },
    {
      quote:
        "With Sedra's support, we achieved seamless integration and improved productivity across departments. They have been an invaluable partner, and their solutions consistently exceed our expectations.",
      name: "Mohammed Shabaan",
      position: "Chief Financial Officer, Electro Power Systems",
      image: "/images/testimonials/men.jpg",
    },
    {
      quote:
        "The expertise and dedication from Sedra's team have allowed us to integrate our new processes faster and more efficiently. They have been an exceptional partner, going above and beyond to meet our needs.",
      name: "Mr. Indika",
      position: "Chief Financial Officer, Saudi Projects & Suppliers",
      image: "/images/testimonials/men.jpg",
    },
  ];

  return (
    <div className="from- to-yellow-300 relative bg-[#ffcc00b0] bg-gradient-to-r py-12">
      <div className="absolute inset-0">
        {/* <img
          src="https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/light-gradient.webp"
          alt="Testimonials Background"
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="container relative mx-auto px-4">
        <h2 className="mb-8 text-center  text-3xl text-black ">
          {" "}
          Voices That Inspire
        </h2>
        <div className="mx-auto max-w-4xl">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                {/* <div className="bg-white shadow-lg shadow-maib rounded-lg p-16 relative"> */}
                <div className="relative rounded-lg bg-white p-16 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] shadow-lg shadow-black">
                  {/* <div className="bg-white shadow-white-lg rounded-lg p-16 relative"> Changed padding */}
                  <p className="mb-4 text-lg italic text-black">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-semibold text-mai">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-black">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  {/* <div className="absolute bottom-4 left-4 flex space-x-2">
                    <button
                      className="slick-prev slick-arrow bg-blue-500 text-white rounded px-4 py-2"
                      aria-label="Previous"
                      onClick={() => sliderRef.current.slickPrev()}
                    >
                      Previous
                    </button>
                    <button
                      className="slick-next slick-arrow bg-blue-500 text-white rounded px-4 py-2"
                      aria-label="Next"
                      onClick={() => sliderRef.current.slickNext()}
                    >
                      Next
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const testimonialData = [
//   {
//     quote:
//       "Sedra has been an incredible technology partner, offering reliable and forward-thinking solutions for our digital growth. Their team demonstrated an outstanding understanding of our challenges and delivered tailored solutions that boosted our performance. Their commitment to innovation and quality ensured everything ran smoothly.",
//     name: "Faisal Al Qahtani",
//     role: "IT Manager at Sedra",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "Their team delivered beyond expectations — fast, reliable, and innovative! They understood our unique challenges and delivered tailored solutions. Communication was clear and proactive throughout the project. Sedra's professionalism and delivery speed truly impressed us. Highly recommended for digital growth initiatives.",
//     name: "Sara Khan",
//     role: "CTO at DigiCore",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "I’ve worked with several tech firms, but this one truly stands out for its dedication and knowledge. Sedra brings not just skills, but vision and commitment. They were responsive, professional, and very easy to collaborate with. The team handled everything with precision and care. Looking forward to many more projects together.",
//     name: "Aisha Al Malki",
//     role: "Director at CloudUnity",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "They supported us through every phase of our tech upgrade — highly recommend! From planning to execution, everything was smooth. Their solutions have brought agility and automation to our operations. We appreciated their transparency and guidance. Sedra delivered exactly what we needed — on time and beyond expectation.",
//     name: "James Holden",
//     role: "Product Manager at LogicBridge",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
//   {
//     quote:
//       "Our operations became 3x faster with their IT automation solutions. Game changer. The Sedra team took the time to understand our workflow. Their process improvements saved us significant time and cost. They empowered our staff with training and support. Partnering with Sedra has transformed our internal systems.",
//     name: "Pooja Mehta",
//     role: "Head of Ops at Infinitix",
//     logo: "/images/bms_testmonial_logo/sedra2.jpeg",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <div className="mx-auto mb-20 mt-20 w-full max-w-6xl px-4">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 7000 }}
//         pagination={{ clickable: true }}
//         loop={true}
//         slidesPerView={1}
//         className="w-full"
//       >
//         {testimonialData.map((t, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-black text-white md:flex-row"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.95) 45%, rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1581092334648-4b8b4d9fa0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="p-10 md:w-2/3">
//                 <p className="text-lg font-light leading-relaxed text-white md:text-2xl">
//                   <span className="text-blue-400 text-3xl">"</span>
//                   {t.quote}
//                   <span className="text-blue-400 text-3xl">"</span>
//                 </p>
//                 <p className="mt-6 font-semibold text-white">
//                   {t.name},{" "}
//                   <span className="text-sm font-normal text-gray-300">
//                     {t.role}
//                   </span>
//                 </p>
//               </div>
//               <div className="flex items-center justify-center p-10 md:w-1/3">
//                 <img
//                   src={t.logo}
//                   alt={t.name}
//                   className="max-h-16 w-auto object-contain"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;
