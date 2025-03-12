
"use client";
import React, { useState, useEffect, useRef } from "react";
import AnimatedWords from "../animate/animatewords";
import TypewriterComponent from "../typedText";
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  const words = ["Potential", "Performance", "Investment"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const letterIndexRef = useRef(0);

  useEffect(() => {
    const typeWord = () => {
      const currentWord = words[currentWordIndex];

      if (letterIndexRef.current < currentWord.length) {
        // Add the next letter to displayedWord
        setDisplayedWord((prev) => prev + currentWord[letterIndexRef.current]);
        letterIndexRef.current += 1;
      } else {
        // Wait for a second before clearing the word and typing the next one
        setTimeout(() => {
          // After completing the word, reset the word and move to the next
          setDisplayedWord(""); // Clear the current word
          letterIndexRef.current = 0; // Reset letter index for the next word
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        }, 1000); // Delay before switching to next word
      }
    };

    const typingInterval = setInterval(typeWord, 150); // Speed of typing each letter

    return () => clearInterval(typingInterval); // Cleanup on component unmount
  }, [currentWordIndex]);


  const [currentWordIndexs, setCurrentWordIndexs] = useState(0);
  const wordss = ['Power', 'Boss', 'Learn'];

  // Handle the transition between words
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        if (prevIndex < words.length - 1) {
          return prevIndex + 1;
        }
        return prevIndex;
      });
    }, 100000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center min-h-screen mt-[61px] overflow-hidden" // Margin-top added to prevent overlap
      // style=
      // {{
      //   backgroundImage:
      //     "url('https://templatekit.jegtheme.com/verines/wp-content/uploads/sites/199/2021/10/relaxed-informal-it-business-startup-company-meeting-e1635759321264.jpg')",
      // }}
      // backgroundImage:'/images/home1.jpg"
      

    >
      <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    // src="https://v.ftcdn.net/08/58/76/52/700_F_858765280_1zOAAlsBEbjzKDTQYQoTgUSR9ILiDgo8_ST.mp4"
    
    src="/images/video/homevid.mov"
    // src="https://v.ftcdn.net/10/14/25/70/700_F_1014257030_upAMrMiKMYaq8QFwCU4RCyjxR0V4VgzG_ST.mp4"
    // src="https://www.daamesnad.com/video/kafad.mp4"
    // src ="https://videos.pexels.com/video-files/17564202/17564202-uhd_2560_1440_30fps.mp4"
    // src="/images/video/zoom.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0  opacity-40 z-0"></div>

      {/* Shape divider */}
      <div className="relative overflow-hidden z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2600 131.1"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-0"
        >
          <path
            d="M0 0L2600 0 2600 69.1 0 0z"
            fill="currentColor"
            className="text-gray-900"
          ></path>
          <path
            d="M0 0L2600 0 2600 69.1 0 69.1z"
            fill="currentColor"
            className="text-gray-900 opacity-50"
          ></path>
          <path
            d="M2600 0L0 0 0 130.1 2600 69.1z"
            fill="currentColor"
            className="text-gray-900 opacity-25"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 relative z-10 mt-[15rem] ">
        <div className="md:w-1/2 space-y-4  lg:mt-8">
          
          
          {/* <h1 className="text-4xl font-bold text-white">
  From Imagination to Reality   Lets Begin Your Transformation Journey

  <br />
  Lets Begin Your Transformation Journey
  <br/>

</h1> */}
{/* From Imagination to Reality in single line */}
<div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"> 

{/* <div className="font-extrabold text-3xl md:text-4xl text-wrap:balance bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
   From Imagination to Reality
</div> */}
<div className="font-extrabold text-3xl md:text-4xl  font-quicksand text-wrap:balance bg-clip-text text-white bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
  style={{ textShadow: '2px 2px 4px #323333' }}

>
Let&apos;s Begin Your Digital Transformation Journey 
</div>

 {/* From Imagination to Reality   Lets Begin Your  Digital Transformation  Journey */}
{/* <span className="text-mai inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-textslide text-left"> */}
                    {/* <span className=" ml-2 text-mai inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-textslide text-left text-5xl">
                        {/* <li>Journey</li> */}
                        {/* <li>iPaaS</li> 
                        <li>Zoho</li>
                        <li>Cloud</li>
                        <li>AI & ML</li>
                        <li>Data Analytics & BI </li>

                        <li aria-hidden="true"></li>
                        
                    </ul>
                </span> */} 
<h1 className="text-4xl font-bold text-maiy" style={{ textShadow: '2px 2px 4px #323333' }}
>
        <Typewriter
          options={{
            strings: ['AI & ML','ERP','IoT',   'Data Analytics ','iPaaS Integration','Cloud Security'],
            autoStart: true,
            loop: true,
            // pauseFor: 1500, // Time to pause before moving to the next string
            deleteSpeed: 0, // Speed of deleting

            cursor: '', // Hides the cursor

          }}
          
        />
      </h1>

                {/* <TypewriterComponent/> */}
                </div>
                
                {/* <div className="text-center flex justify-center items-center h-screen"> */}
      {/* <div className="relative">
        <div
          className={`text-4xl font-bold ${
            currentWordIndex === 0 ? 'text-red-500 animate-typing' : 'hidden'
          }`}
        >
          {words[0]}
        </div>
        <div
          className={`text-4xl font-bold ${
            currentWordIndex === 1 ? 'text-red-500 animate-typing' : 'hidden'
          }`}
        >
          {words[1]}
        </div>
        <div
          className={`text-4xl font-bold ${
            currentWordIndex === 2 ? 'text-red-500 animate-typing' : 'hidden'
          }`}
        >
          {words[2]}
        </div>
      </div> */}
    {/* </div> */}
{/* <AnimatedWords/> */}

         
         
          <p className="text-white"  style={{ textShadow: '2px 2px 4px #323333' }}>
          With Sedra, imagination knows no bounds. We invite you to experience the transformative potential of our exceptional solutions, designed to elevate your business to new heights. 
          </p>
          <div>
           


  
<a
  className="inline-flex items-center justify-center py-1 text-center text-white font-normal text-body-color hover:text-mai hover:text-bold transition-all duration-300 ease-in-out"
  href="#"
  onClick={async (e) => {
    e.preventDefault();

    try {
      // Fetch the file as a blob
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/crmcv-dd711.appspot.com/o/sample.pdf?alt=media&token=7db236be-e7e8-4678-8d73-72e58a7f5c71"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();

      // Create a download link for the blob
      const downloadLink = document.createElement("a");
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.setAttribute("download", "brochure.pdf"); // Set the download file name

      // Trigger the download
      downloadLink.click();

      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  }}
>
  <span className="mr-2">
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="11" fill="#ffcc00ff"></circle>
      <rect
        x="6.90906"
        y="13.3636"
        width="8.18182"
        height="1.63636"
        fill="white"
      ></rect>
      <rect
        x="10.1818"
        y="6"
        width="1.63636"
        height="4.09091"
        fill="white"
      ></rect>
      <path
        d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
        fill="white"
      ></path>
    </svg>
  </span>
  <span className="animate-float">Download Brochure</span>
</a>

          </div>


          

        </div>

       
      </div>
    </section>
  );
}
