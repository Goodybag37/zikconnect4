// "use client";

// import ArrowIcon from "@/assets/arrow-right.svg";
// import cogImage from "@/assets/cog.png";
// import cylinderImage from "@/assets/cylinder.png";
// import noodleImage from "@/assets/noodle.png";
// import {
//   motion,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { useRef } from "react";

// export const Hero = () => {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   useMotionValueEvent(translateY, "change", (latestValue) =>
//     console.log(latestValue),
//   );

//   return (
//     <section
//       ref={heroRef}
//       className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip"
//     >
//       <div className="container">
//         <div className="md:flex items-center">
//           <div className="md:w-[478px]">
//             <div className="tag">Version 2.0 is here</div>
//             <h1 className="text-5xl md:text-7xl font-bold tracking-tigher bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
//               Pathway to productivity
//             </h1>
//             <p className="text-xl text-[#010d3e] tracking-tight mt-6">
//               Celebrate the joy of accomplishment with an app designed to track
//               your progress, motivate your efforts, and celebrate your success.
//             </p>
//             <div className="flex gap-1 items-center mt-[30px]">
//               <button className="btn btn-primary">Get for free</button>
//               <button className="btn btn-text gap-1">
//                 <span>Learn more</span>
//                 <ArrowIcon className="h-5 w-5" />
//               </button>
//             </div>
//           </div>

//           <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
//             <motion.img
//               src={cogImage.src}
//               alt="Cog image"
//               className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
//               animate={{
//                 translateY: [-30, 30],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 duration: 3,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.img
//               src={cylinderImage.src}
//               alt="cylinder Image"
//               width={220}
//               height={220}
//               className="hidden md:block -top-8 -left-32 md:absolute"
//               style={{
//                 translateY: translateY,
//               }}
//             />
//             <motion.img
//               src={noodleImage.src}
//               width={220}
//               alt="noodleImage"
//               className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
//               style={{
//                 rotate: 30,
//                 translateY: translateY,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import ArrowIcon from "@/assets/arrow-right.svg";
// import cogImage from "@/assets/cog.png";
// import cylinderImage from "@/assets/cylinder.png";
// import noodleImage from "@/assets/noodle.png";

// import { motion, useScroll, useTransform } from "framer-motion";

// import { useRef } from "react";

// export const Hero = () => {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   const whatsappLink =
//     "https://wa.me/2349169215343?text=Hello%20Zikconnect%2C%20I%20want%20to%20learn%20more%20about%20your%20payment%20automation%20services.";

//   return (
//     <section
//       ref={heroRef}
//       className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)]"
//     >
//       <div className="container">
//         <div className="md:flex items-center">
//           {/* Left Content */}
//           <div className="md:w-[540px]">
//             <div className="tag">Trusted payment automation infrastructure</div>

//             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
//               Automate Your Business Payments
//             </h1>

//             <p className="text-xl text-[#010d3e] tracking-tight mt-6">
//               Streamline bank transfers, payout operations, recipient
//               verification, and transaction tracking with secure and scalable
//               payment automation built for modern businesses.
//             </p>

//             {/* Buttons */}
//             <div className="flex gap-3 items-center mt-[30px]">
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-primary"
//               >
//                 Get Started
//               </a>

//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-text gap-1 inline-flex items-center"
//               >
//                 <span>Learn More</span>

//                 <ArrowIcon className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           {/* Right Images */}
//           <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
//             <motion.img
//               src={cogImage.src}
//               alt="Payment automation dashboard"
//               className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
//               animate={{
//                 translateY: [-30, 30],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 duration: 3,
//                 ease: "easeInOut",
//               }}
//             />

//             <motion.img
//               src={cylinderImage.src}
//               alt="Secure transfer system"
//               width={220}
//               height={220}
//               className="hidden md:block -top-8 -left-32 md:absolute"
//               style={{
//                 translateY,
//               }}
//             />

//             <motion.img
//               src={noodleImage.src}
//               width={220}
//               alt="Business payment infrastructure"
//               className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
//               style={{
//                 rotate: 30,
//                 translateY,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import ArrowIcon from "@/assets/arrow-right.svg";
// import cogImage from "@/assets/cog.png";
// import cylinderImage from "@/assets/cylinder.png";
// import noodleImage from "@/assets/noodle.png";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export const Hero = () => {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   const whatsappLink =
//     "https://wa.me/2349169215343?text=Hello%20ZikConnect%2C%20I%20want%20to%20learn%20more%20about%20your%20service%20platform%20and%20payment%20solutions.";

//   return (
//     <section
//       ref={heroRef}
//       className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)]"
//     >
//       <div className="container">
//         <div className="md:flex items-center">
//           {/* Left Content */}
//           <div className="md:w-[540px]">
//             <div className="tag">
//               Service marketplace and payment coordination platform
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
//               Connect Customers With Trusted Service Providers
//             </h1>

//             <p className="text-xl text-[#010d3e] tracking-tight mt-6">
//               ZikConnect is an online platform that connects customers with
//               service providers while simplifying service requests, payment
//               collection, transaction verification, account reconciliation,
//               reporting, and settlements. Manage business operations and
//               transactions efficiently through a single integrated platform.
//             </p>

//             {/* Buttons */}
//             <div className="flex gap-3 items-center mt-[30px]">
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-primary"
//               >
//                 Get Started
//               </a>

//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-text gap-1 inline-flex items-center"
//               >
//                 <span>Learn More</span>

//                 <ArrowIcon className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           {/* Right Images */}
//           <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
//             <motion.img
//               src={cogImage.src}
//               alt="Service management dashboard"
//               className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
//               animate={{
//                 translateY: [-30, 30],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 duration: 3,
//                 ease: "easeInOut",
//               }}
//             />

//             <motion.img
//               src={cylinderImage.src}
//               alt="Transaction verification system"
//               width={220}
//               height={220}
//               className="hidden md:block -top-8 -left-32 md:absolute"
//               style={{
//                 translateY,
//               }}
//             />

//             <motion.img
//               src={noodleImage.src}
//               width={220}
//               alt="Settlement and reporting platform"
//               className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
//               style={{
//                 rotate: 30,
//                 translateY,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Replace this with your actual Selar checkout URL
  const selarLink = "https://selar.com/788142vg2m";

  const whatsappLink =
    "https://wa.me/2349169215343?text=Hello%20ZikConnect%2C%20I'm%20interested%20in%20your%20AI%20courses%20and%20automation%20services.";

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)]"
    >
      <div className="container">
        <div className="md:flex items-center">
          {/* Left Content */}
          <div className="md:w-[540px]">
            <div className="tag">
              🚀 AI Content Creation • Face Swapping • P2P Automation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
              Learn AI Skills That Make Money
            </h1>

            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Learn how to create viral AI contents and AI movies on this
              course. build hyper-realistic face swaps. Connect to all your
              social media and how to monetize your page
            </p>

            {/* Buttons */}
            <div className="flex gap-3 items-center mt-[30px]">
              <a
                href={selarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enroll Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-text gap-1 inline-flex items-center"
              >
                <span>Chat on WhatsApp</span>

                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Images */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="AI Content Creation Platform"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={cylinderImage.src}
              alt="AI Automation Illustration"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY,
              }}
            />

            <motion.img
              src={noodleImage.src}
              width={220}
              alt="P2P Automation System"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
