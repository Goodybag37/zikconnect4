// "use client";

// import ArrowRight from "@/assets/arrow-right.svg";
// import starImage from "@/assets/star.png";
// import springImage from "@/assets/spring.png";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export const CallToAction = () => {

// const sectionRef = useRef(null);
//   const {scrollYProgress} = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   })

//   const translateY = useTransform(scrollYProgress, [0,1],[150,-150]);

//   return (
//     <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
//       <div className="container">
//         <div className="section-heading relative">
//           <h2 className="section-title">Sign up for free today</h2>
//           <p className="section-description mt-5">
//             Celebrate the joy of accomplishment with an app designed to track
//             your progress and motivate your efforts.
//           </p>
//           <motion.img
//             src={starImage.src}
//             alt="Star Image"
//             width={360}
//             className="absolute -left-[350px] -top-[137px]"
//             style={{
//               translateY,
//             }}
//           />
//           <motion.img
//             src={springImage.src}
//             alt="Spring Image"
//             width={360}
//             className="absolute -right-[331px] -top-[19px]"
//             style={{
//               translateY,
//             }}
//           />
//         </div>
//         <div className="flex gap-2 mt-10 justify-center">
//           <button className="btn btn-primary">Get for free</button>
//           <button className="btn btn-text gap-1">
//             <span>Learn more</span>
//             <ArrowRight className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const whatsappLink =
    "https://wa.me/2349169215343?text=Hello%20Zikconnect%2C%20I%20want%20to%20automate%20my%20business%20payments.";

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        {/* Heading */}
        <div className="section-heading relative">
          <h2 className="section-title">
            Automate Your Payment Operations Today
          </h2>

          <p className="section-description mt-5">
            Streamline bank transfers, automate payouts, verify recipients,
            monitor transactions, and scale your payment infrastructure with
            secure automation solutions built for modern businesses.
          </p>

          {/* Floating Star */}
          <motion.img
            src={starImage.src}
            alt="Payment automation"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />

          {/* Floating Spring */}
          <motion.img
            src={springImage.src}
            alt="Business payment infrastructure"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-10 justify-center flex-wrap">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get Started
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-text gap-1 inline-flex items-center"
          >
            <span>Learn More</span>

            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
