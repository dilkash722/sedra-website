
"use client"
const services = [
  {
    title: 'Customization Services',
    description: 'Our team of Zoho experts will workclosely with you to understand your unique business needs and customizeZoho to meet those needs. Ourcustomization services include:',
    icon: '/images/zoho/customise_services.svg',
    points: [
      'Custom workflow automation',
      'Custom report generation',
      'Custom dashboard creation',
      'Custom integration  applications',
      'Custom module creation',
    ],
  },
  {
    title: 'Integration Services',
    description: 'Seamless integration with third-party services.',
    icon: '/images/zoho/Integration_services.svg',
    points: [
      'Microsoft 365',
      'Google Workspace',
      'Slack',
      'Zapier',
      'Custom APIs',
    ],
  },
  {
    title: 'Implementation Services',
    description: 'Our implementation services ensure a smooth transition to Zoho, minimizing disruption to your business. Our services include:',
    icon: '/images/zoho/Implementaion_services.svg',
    points: [
      'Data migration',
      'System configuration',
      'User training',
      'Ongoing support & maintenance',
    ],
  },
  {
    title: 'Deployment Services',
    description: 'Cloud deployment (Zoho Cloud) On-premise deployment (Zoho One) Hybrid deployment (combination of cloud and on-premise)',
    icon: '/images/zoho/deployment_services.svg',
    points: [
      'Cloud deployment (Zoho Cloud)',
      'Data backup and recovery',
      'Security and compliance',
      'Ongoing support & maintenance',
    ],
  },
];
import Image from 'next/image';
import Head from 'next/head';
import { useRef } from 'react';

export default function Home() {
  const consultationRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    if (consultationRef.current) {
      consultationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Head>
        <title>Zoho with Maiprosoft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-gray-100 min-h-screen font-[Poppins, sans-serif] pt-[61px]"
      
      >
       

<div className="w-full p-4 flex flex-col lg:flex-row items-center" style={{ background: 'linear-gradient(to right, #e8eef8, #ffffff)', color: '#000000' }}>
  <div className="lg:w-1/2 p-4">
  <div className="flex justify-center w-full">
    <Image
      src="/images/zoho/ZOHO_logo_2023.svg.png"
      alt="Zoho logo with colorful squares"
      width={250}
      height={250}
      className="mb-10"
    />
  </div>
    {/* <Image
      src="/images/zoho/ZOHO_logo_2023.svg.png"
      alt="Zoho logo with colorful squares"
      width={200}
      height={200}
      className="mb-4 mx-auto"
      /> */}
    {/* <h1 className="text-4xl font-bold mb-4 font-medium" style={{ fontFamily: 'Poppins', fontWeight: 450}}>
      Unlock the full potential of Zoho with Maiprosoft
    </h1> */}

{/* <h1 
  className="text-4xl font-bold mb-4" 
  style={{ fontFamily: 'Poppins', fontWeight: 500 }}
>
  Unlock the full potential of Zoho with Maiprosoft
</h1> */}

{/* <h1 
  className="text-4xl font-bold mb-4" 
  style={{ fontFamily: 'Poppins', fontWeight: 700 }}
>
  Unlock the full potential of Zoho with Maiprosoft
</h1> */}

<h1 className="font-poppins text-4xl font-normal">
  Unlock the full potential of Zoho with Maiprosoft,
</h1>


    {/* <p className="text-lg mb-6" style={{ fontFamily: 'Quicksand', fontWeight: 200 }}>
      Your trusted partner for Zoho projects, implementation, and management.
    </p> */}
    <p 
  className="text-lg mb-6" 
  style={{ fontFamily: 'Quicksand', fontWeight: 400 }}
>
  Your trusted partner for Zoho projects, implementation, and management.
</p>
    <button className="bg-[#0078d4ff] text-white px-6 py-3 rounded shadow hover:bg-blue-600"
            onClick={scrollToConsultation}
    >
      Book a free Consultation
    </button>
  </div>

  <div className="lg:w-1/2 p-4 grid grid-cols-2 gap-4">
    {[ 
      // 'nYNMV680JeyCMShIOdf28lpf2sIfsuY2WNWcxYttSgwz4r9PB',
      // 'oenvbaGmx4VACyeS6DkHsjW5V0U7qIf7TaSPTQAATLJK81ePB',
      // 'cNHpNoEbuM5eXqfU1jyRSW4z0NCVYQZjobmWmEnyheLU81ePB',
      // '88YSqw9wGEaxNtjGzH8rKsHKWRfVuHlvtHUIAYC8NKWDfafnA'

       '/images/zoho/Zoho/Images/image1.png',
      '/images/zoho/Zoho/Images/image2.png',
      '/images/zoho/Zoho/Images/image3.png',
      '/images/zoho/Zoho/Images/image4.png',
    ].map((img, idx) => (
      <Image
        key={idx}
        
        src={img}
        alt={`Local project visual ${idx + 1}`}
        width={260}
        height={260}
        className="w-full h-full object-cover rounded shadow-lg"
      />
    ))}
  </div>

{/* 
  <div className="grid grid-cols-2 gap-4 w-full">
    {[
      '/images/zoho/Zoho/Images/image1.png',
      '/images/zoho/Zoho/Images/image2.png',
      '/images/zoho/Zoho/Images/image3.png',
      '/images/zoho/Zoho/Images/image4.png',
  
    ].map((img, idx) => (
      <div
        key={idx}
        className="rounded shadow-lg flex-shrink-0"
        style={{ width: '80px', height: '80px', overflow: 'hidden' }}
      >
        <Image
          src={img}
          alt={`Local project visual ${idx + 1}`}
          width={80} // Adjust the image width
          height={80} // Adjust the image height
          className="object-cover"
        />
      </div>
    ))}
  </div> */}
</div>




       

<section className="bg-white text-gray-800 py-12">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-medium text-center mb-6 font-poppins">
      Get Started Today!
    </h1>
    <p className="text-center mb-8 max-w-2xl lg:max-w-full mx-auto font-poppins font-normal">
      Maiprosoft is a certified Zoho partner, offering expert customization, implementation, and deployment services to help businesses like yours get the most out of Zoho&#39;s suite of productivity applications.
    </p>

    <div className="text-center mb-12">
      <button className="bg-[#0078d4ff] text-white px-6 py-3 rounded shadow hover:bg-blue-600"
              onClick={scrollToConsultation}>
        Book a free Consultation
      </button>
    </div>

    <div className="grid place-items-center mb-12">
      <Image
        src="https://storage.googleapis.com/a1aa/image/MxDrADgxKsJhFRV4QJNsnUp9uF2chhOxcQbY0QfI1RDnA1fTA.jpg"
        alt="People working on a flow chart with sticky notes and laptops"
        width={1200}
        height={250}
        className="rounded-lg shadow-lg"
      />
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 relative">
      {services.map((service, index) => (
        <div key={index} className="bg-[#0078d4ff] text-white p-6 rounded-lg shadow-lg relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 bg-[#0078d4ff] p-2 rounded-full"
            />
          </div>
          <div className="text-center mt-10 mb-4">
            {/* <h2 className=" mb-2  font-poppins whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
              {service.title}
            </h2>
            {/* <p className="font-[Poppins]">{service.description}</p> */}
            {/* <p className="font-poppins font-normal text-[#f0f0f0]  leading-tight">{service.description}</p> */} 

            <h2 className="mb-2 font-poppins font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
  {service.title}
</h2>
{/* <p className="font-poppins font-normal text-[#f0f0f0] leading-tight text-sm ">
  {service.description}
</p> */}

{/* <p className="font-poppins font-normal text-[#f0f0f0] leading-tight text-sm h-30 ">
  {service.description}
</p> */}

<div className="h-38 ">
  <p className="font-poppins font-normal text-[#f0f0f0]  text-sm">
    {service.description}
  </p>
</div>



          </div>

         
          <ul className="list-disc list-none list-inside space-y-2 font-[Poppins]">
  {service.points.map((point, i) => (
    // <li key={i} className="text-yellow-400 list-inside">
    //   {/* <span className="text-maiy">•</span> {point} */}
    //   <span className="text-maiy inline-block text-2xl mr-2">•</span> {point}

    // </li>


    <li key={i} className="text-yellow-400 list-inside flex items-center">
  <span className="text-maiy text-2xl mr-2">•</span> {point}
</li>


//     <li key={i} className="text-yellow-400 list-inside">
//   <span className="text-maiy text-2xl">•</span> {point}
// </li>

  ))}
</ul>

        </div>
      ))}
    </div>
  </div>
</section>


    <section className="bg-gray-800 text-white py-12">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-poppins font-medium mb-4">Managed Services</h2>
      <p className="text-lg mb-6 font-poppins font-normal">
        Ongoing support and management of your Zoho setup.
        <br /> Regular updates, backups, and security checks.
        <br /> Performance optimization and troubleshooting.
      </p>
      <h2 className="text-3xl font-poppins font-medium mb-4">Support Services</h2>
      <p className="text-lg mb-6">
        Priority support for Zoho-related issues.
        <br /> Timely resolution of errors and bugs.
        <br /> Guidance on best practices and usage.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Benefits of Our Zoho Services</h2>
      {/* <ul className="list-disc pl-5 space-y-3">
  <li className="text-yellow-400">Improved productivity and efficiency</li>
  <li className="text-yellow-400">Enhanced collaboration and communication</li>
  <li className="text-yellow-400">Customized solutions tailored to your business</li>
  <li className="text-yellow-400">Seamless integration with existing systems</li>
  <li className="text-yellow-400">Ongoing support and maintenance</li>
</ul> */}
<ul className="list-none pl-1 space-y-3">
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Improved productivity and efficiency</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Enhanced collaboration and communication</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Customized solutions tailored to your business</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Seamless integration with existing systems</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Ongoing support and maintenance</span>
  </li>
</ul>


    </div>
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://storage.googleapis.com/a1aa/image/hFDTeIZSigxfkUMjIuu7owi2eZCsV7N1F2bhRAKx6fYjfN9fE.jpg"
        alt="A person working on multiple computer screens"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
<section className="bg-[#fed600ff] text-black py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-poppins font-medium mb-6">Zoho CRM</h1>
            <p className="mb-8 font-poppins">
            Transform customer interactions with Zoho CRM. Automate sales, marketing, and support processes. Enhance lead
management, pipeline visibility, and team collaboration. Make data-driven decisions with real-time analytics.
Deliver exceptional customer experiences and drive business growth.
            </p>

            <h1 className=" text-3xl font-poppins font-medium  mb-6">Zoho Projects</h1>
            <p className="mb-8 font-poppins">
            Simplify project execution with Zoho Projects. Plan, track, and collaborate on projects with ease. Automate workflows,
set milestones, and allocate tasks. Enhance team productivity, reduce timelines, and boost profitability. Make
informed decisions with real-time reports and analytics.
            </p>

            <h1 className="text-3xl font-poppins font-medium mb-6">Zoho Inventory</h1>
            <p className="mb-8 font-poppins">
            Effortlessly manage your inventory with Zoho Inventory. Track stock levels, automate orders, and optimize
warehouse operations. Streamline product management, shipping, and fulfillment. Get real-time insights and make
data-driven decisions to reduce costs, improve efficiency, and boost profitability.
            </p>

            <h1 className="text-3xl text-3xl font-poppins font-medium mb-6">Zoho Books</h1>
            <p className="mb-8 font-poppins">
            Streamline financial management with Zoho Books. Automate invoicing, inventory, and expense tracking. Get realtime insights into cash flow, profits, and expenses. Make informed decisions with customizable reports and analytics.
            Ensure compliance and scalability with secure, cloud-based accounting solutions.
            </p>

            <h1 className="text-3xl  font-poppins font-medium mb-6">Zoho People</h1>
            <p className="mb-8 font-poppins">
            Revolutionize human resources with Zoho People. Automate employee data, attendance, and leave management.
Streamline recruitment, performance tracking, and benefits administration. Enhance employee engagement and
self-service capabilities. Make data-driven decisions with customizable reports and analytics for a more productive
workforce.
            </p>

            <h1 className="text-3xl  font-poppins font-medium mb-6">Zoho Creator</h1>
            <p className="mb-8 font-poppins">
            Custom application development using Zoho Creator
            Automate workflows, streamline processes, and enhance productivity.
            </p>

            <h1 className="text-3xl text-3xl font-poppins font-medium mb-6">Zoho One</h1>
            <p className="mb-8 font-poppins">
            Expert implementation and management of Zoho One, the all-in-one suite
            Streamline your business operations with a single, unified platform.
            </p>

            
          </div>

          {/* <div className="flex justify-center">
            <Image
              src="/images/zoho/Zoho/Images/ZohoProducts.png"
              alt="Zoho Products Image"
              width={400}
              height={400}
              className=" "
            />
          </div> */}
          <div className="flex justify-center">
  <Image
    src="/images/zoho/Zoho/Images/ZohoProducts.png"
    alt="Zoho Products Image"
    width={500}
    height={500}
    className="lg:mt-80" // Adds top margin to push the image down
  />
</div>

        </div>
      </div>
    </section>
   
    <section className="bg-[#71cbd1ff] py-12 flex justify-center">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12 px-6">
    {/* Text Section */}
    <div className="text-left max-w-lg">
      <h2 className="text-3xl font-poppins font-medium text-black mb-4">Why Choose Maiprosoft?</h2>
      <ul className="text-lg text-black space-y-2 ">
        <li>Proven expertise in Zoho implementation and management</li>
        <li>Customized solutions tailored to your business needs</li>
        <li>Responsive support and timely issue resolution</li>
        <li>Cost-effective solutions without compromising on quality</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-cover bg-center  overflow-hidden">
      <img
        src="/images/zoho/Zoho/Images/speaker.png"
        alt="Why choose us image"
        className="object-cover w-full h-full"
      />
      
  </div>
  {/* <div className=" inset-0 bg-black opacity-50"></div> */}
      {/* <h1 className=" text-2xl md:text-3xl font-bold text-white text-center">
        WHY CHOOSE US?
      </h1> */}
    </div>
</section>


    <section className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://storage.googleapis.com/a1aa/image/Us2JN7WsDLaJNNJMIpqaYHzywSI4pbgUTaZqojgtWCQvr6fJA.jpg"
          alt="Person working on a laptop"
          className="w-full h-full object-cover"
          height="400"
          width="600"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg" ref={consultationRef}>
        <h1 className="font-poppins text-3xl font-bold mb-4">
          Book a <span className="text-blue-500">free</span> Consultation
        </h1>
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Number */}
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700 font-medium">
              Number
            </label>
            <input
              id="number"
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <label htmlFor="project" className="block text-gray-700 font-medium">
              Describe Your Project Need
            </label>
            <textarea
              id="project"
              placeholder="Briefly describe your project need"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
            ></textarea>
          </div>

          {/* Privacy Policy */}
          <div className="mb-4 text-sm text-gray-600">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300 ease-in-out"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>



      </main>
    </>
  );
}
