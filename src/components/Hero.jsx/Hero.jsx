import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
import BackgroundVideo from "../../assets/background-video.mp4"; // Add your video path here

const Hero = () => {
  return (
    <main className="relative bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening video */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content Section */}
      <section className="container relative z-20 flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className="text-6xl">
              OUR VISION
            </h1>
            <p className="">
            Our mission is to develop innovative and intelligent solutions, leveraging the latest technologies to bring our vision to life.
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Get Started
              </button>
              <button className="border-1 rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
         
        </div>
      </section>
    </main>
  );
};

export default Hero;
