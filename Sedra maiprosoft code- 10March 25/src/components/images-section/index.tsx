const FullScreenImage = () => {
  return (
    // <div className="w-screen h-screen">
    //   <img
    //     src="/images/Clients & Partners.png"
    //     alt="Full Screen"
    //     className="w-full h-full object-contain sm:object-cover"
    //   />
    // </div>
    // <div className="relative w-screen h-screen">
    //   <img
    //     src="/images/Clients & Partners.png"

    //     "/images/mobile screen size.png"
    //     alt="Full Screen"
    //     className="absolute top-0 left-0 w-full h-full object-cover"
    //   />
    // </div>

    <div className="relative w-full h-screen overflow-hidden">
  {/* Default image for large screens */}
  <img
    src="/images/Clients & Partners.png"
    alt="Full Screen"
    className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover"
  />
  
  {/* Image for mobile screens */}
  <img
    src="/images/mobile screen size.png"
    alt="Mobile Screen"
    className="sm:hidden absolute top-0 left-0 w-full h-full object-cover"
  />
</div>


  );
};

export default FullScreenImage;
