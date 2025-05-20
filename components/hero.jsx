"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          {/* <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link> */}
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { motion, useAnimation } from "framer-motion";

// const HeroSection = () => {
//   const imageRef = useRef(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       if (scrollY > 100) {
//         controls.start({ opacity: 1, y: 0 });
//       } else {
//         controls.start({ opacity: 0, y: 30 });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls]);

//   return (
//     <section className="relative pt-32 pb-24 px-6 bg-gradient-to-b from-white to-blue-50">
//       <div className="container mx-auto text-center max-w-6xl">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//           Smarter Financial Control <br className="hidden md:block" />
//           Powered by AI
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 mt-6 mb-10 max-w-3xl mx-auto">
//           Simplify your finances with intelligent tracking, real-time analytics, and seamless insights into your spending behavior.
//         </p>

//         <div className="flex justify-center gap-4 flex-wrap">
//           <Link href="/dashboard">
//             <Button
//               size="lg"
//               className="px-8 py-5 text-lg font-semibold transition-transform hover:scale-105 shadow-md"
//             >
//               Start Free Trial
//             </Button>
//           </Link>
//           <Link href="#features">
//             <Button
//               size="lg"
//               variant="outline"
//               className="px-8 py-5 text-lg border-gray-300 transition-transform hover:scale-105"
//             >
//               Learn More
//             </Button>
//           </Link>
//         </div>

//         <motion.div
//           ref={imageRef}
//           initial={{ opacity: 0, y: 30 }}
//           animate={controls}
//           transition={{ duration: 0.8 }}
//           className="mt-16"
//         >
//           <Image
//             src="/banner.jpg"
//             width={1280}
//             height={720}
//             alt="Dashboard Preview"
//             className="rounded-2xl shadow-xl border-4 border-white mx-auto"
//             priority
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

