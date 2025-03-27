"use client";
import { useState } from "react";
import Image from "next/image";
import { User, Mail, Phone, Building, MessageCircle } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import ContactModal from "@/components/ContactModal/ContactModal";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const testimonialData = [
    {
      quote:
        "Sedra has been an incredible technology partner, offering reliable and forward-thinking solutions for our digital growth. Their team demonstrated an outstanding understanding of our challenges and delivered tailored solutions that boosted our performance. Their commitment to innovation and quality ensured everything ran smoothly.",
      name: "Faisal Al Qahtani",
      role: "IT Manager at Sedra",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "Their team delivered beyond expectations — fast, reliable, and innovative! They understood our unique challenges and delivered tailored solutions. Communication was clear and proactive throughout the project. Sedra's professionalism and delivery speed truly impressed us. Highly recommended for digital growth initiatives.",
      name: "Sara Khan",
      role: "CTO at DigiCore",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "I’ve worked with several tech firms, but this one truly stands out for its dedication and knowledge. Sedra brings not just skills, but vision and commitment. They were responsive, professional, and very easy to collaborate with. The team handled everything with precision and care. Looking forward to many more projects together.",
      name: "Aisha Al Malki",
      role: "Director at CloudUnity",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "They supported us through every phase of our tech upgrade — highly recommend! From planning to execution, everything was smooth. Their solutions have brought agility and automation to our operations. We appreciated their transparency and guidance. Sedra delivered exactly what we needed — on time and beyond expectation.",
      name: "James Holden",
      role: "Product Manager at LogicBridge",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
    {
      quote:
        "Our operations became 3x faster with their IT automation solutions. Game changer. The Sedra team took the time to understand our workflow. Their process improvements saved us significant time and cost. They empowered our staff with training and support. Partnering with Sedra has transformed our internal systems.",
      name: "Pooja Mehta",
      role: "Head of Ops at Infinitix",
      logo: "/images/bms_testmonial_logo/sedra2.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white px-8 py-12">
      {/* BMS Section */}
      <div className="grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Guest Room Management System (GRMS)
          </h1>
          <p className="mb-4 text-gray-900">
            A Guest Room Management System (GRMS) is a centralized solution used
            in the hospitality industry to automate and optimize various in-room
            functions such as lighting, HVAC, curtains, door access, and
            entertainment systems. It enhances guest comfort and convenience
            while enabling hotel staff to monitor, control, and manage rooms
            efficiently in real-time.
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Smart Sensors",
              "Room Controllers",
              "Touch Panels / Mobile Apps",
              "Central Monitoring Software",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-900">
                <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-green">
                  <FaCheck size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="relative ml-0 mt-14 w-full rounded-xl bg-white p-6 shadow-xl md:ml-24 md:max-w-sm">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Interested?
          </h2>
          <p className="mb-4 text-sm text-gray-500">
            Fill in this form to let us get back to you ASAP!
          </p>
          <form className="space-y-3">
            {[
              { icon: User, placeholder: "Full Name", type: "text" },
              { icon: Mail, placeholder: "Business Email", type: "email" },
              { icon: Phone, placeholder: "Mobile Number", type: "tel" },
              { icon: Building, placeholder: "Company Name", type: "text" },
            ].map(({ icon: Icon, ...props }, i) => (
              <div
                key={i}
                className="flex items-center rounded-lg border border-gray-300 bg-white px-3 shadow-sm"
              >
                <Icon size={18} className="text-gray-400" />
                <input
                  {...props}
                  className="w-full bg-transparent p-2 text-gray-900 outline-none"
                  required
                />
              </div>
            ))}
            <div className="flex items-start rounded-lg border border-gray-300 bg-white px-3 shadow-sm">
              <MessageCircle size={18} className="mt-3 text-gray-400" />
              <textarea
                placeholder="More details about your requirements"
                className="w-full bg-transparent p-2 text-gray-900 outline-none"
                rows="3"
                required
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="hover:bg-purple w-full rounded-lg bg-blue p-2 text-white shadow-md transition duration-300"
            >
              Talk to Sales
            </button>
          </form>
          <ContactModal
            showModal={showModal}
            closeModal={() => setShowModal(false)}
          />
        </div>
      </div>

      {/* Services Section 1 */}
      <div className="mt-20 w-full max-w-6xl p-10">
        <p className="text-center text-sm font-bold text-blue">
          What’s included?
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="mb-6 text-center text-gray-700">
          Find our services that help you align technology with your business
          goals and vision.
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {" "}
              Key Components of GRMS
            </h3>
            <p className="mb-4 text-gray-600">
              Guest Room Management Systems (GRMS) consist of intelligent
              hardware and software components that work together to enhance
              guest comfort and optimize hotel operations. These systems offer
              seamless control over in-room features like lighting, climate, and
              entertainment, while also enabling staff to monitor usage in
              real-time and reduce energy waste.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                " Sensors – Measure temperature, humidity, motion, occupancy",
                " Controllers – Process sensor data and make system",
                "Integration Capabilities – Connect with other hotel systems",
                " Enables system-wide integration with elevators",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-900">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-green">
                    <FaCheck size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://cdn-jhpip.nitrocdn.com/GENdBIltwBtSZkSFCgaXAqdoCWxpqhRH/assets/images/optimized/rev-e3be399/alnafitha.com/wp-content/uploads/2023/06/Develop-a-Strategic-Plan-Strategic-Planning-Strategy-Development-Aktia-Solutions-e1687670438907.png"
              alt="IT Strategy"
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Services Section 2 */}
      <div className="mt-20 w-full max-w-6xl p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-1 flex items-center justify-center md:order-none">
            <img
              src="https://cdn-jhpip.nitrocdn.com/GENdBIltwBtSZkSFCgaXAqdoCWxpqhRH/assets/images/optimized/rev-e3be399/alnafitha.com/wp-content/uploads/2023/06/business-training-2750497-2289787.png"
              alt="Digital Planning"
              className="h-auto w-full max-w-md"
            />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Benefits of Implementing GRMS
            </h3>
            <p className="mb-4 text-gray-600">
              Installing GRMS in modern hotels provides long-term savings,
              streamlined operations, and improved guest satisfaction. It helps
              reduce unnecessary energy consumption, ensures safety, and creates
              a smart, luxurious guest experience.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Energy Efficiency",
                "Enhanced Guest Experience",
                " Operational Efficiency",
                "Increased Safety",
                "Cost Reduction",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-900">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-green">
                    <FaCheck size={14} />
                  </span>
                  {item}
                </li>
              ))}
              ;
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial Slider - Sedra Style */}
      <div className="mt-20 w-full max-w-6xl px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          className="w-full"
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-between overflow-hidden rounded-xl bg-black text-white md:flex-row"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1581092334648-4b8b4d9fa0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-10 md:w-2/3">
                  <p className="text-2xl font-light leading-relaxed">
                    <span className="text-blue-400 text-4xl">"</span>
                    {testimonial.quote}
                    <span className="text-blue-400 text-4xl">"</span>
                  </p>
                  <p className="mt-6 font-semibold">
                    {testimonial.name}
                    <span className="text-sm font-normal">
                      , {testimonial.role}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center p-10 md:w-1/3">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.name} Logo`}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
