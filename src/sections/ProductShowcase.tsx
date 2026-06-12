// "use client";

// import productImage from "@/assets/product-image.png";
// import pyramidImage from "@/assets/pyramid.png";
// import tubeImage from "@/assets/tube.png";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export const ProductShowcase = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
//     >
//       <div className="container">
//         <div className="section-heading">
//           <div className="flex justify-center items-center">
//             <div className="tag">Boost your productivity</div>
//           </div>
//           <h2 className="section-title mt-5">
//             A more effective way to track progress
//           </h2>
//           <p className="section-description mt-5">
//             Effortlessly turn your ideas into a fully functional, response, SaaS
//             website in just minutes with this template.
//           </p>
//         </div>
//         <div className="relative">
//           <Image src={productImage} alt="product Image" className="mt-10" />
//           <motion.img
//             src={pyramidImage.src}
//             alt="pyramid Image"
//             width={262}
//             height={262}
//             className="hidden md:block absolute -right-36 -top-32"
//             style={{
//               translateY
//             }}
//           />
//           <motion.img
//             src={tubeImage.src}
//             alt="tube Image"
//             width={248}
//             height={248}
//             className="hidden md:block absolute bottom-24 -left-36"
//             style={{
//               translateY
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import productImage from "@/assets/product-image.png";
// import pyramidImage from "@/assets/pyramid.png";
// import tubeImage from "@/assets/tube.png";

// import Image from "next/image";

// import { motion, useScroll, useTransform } from "framer-motion";

// import { useRef } from "react";

// export const ProductShowcase = () => {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   const whatsappLink =
//     "https://wa.me/2349169215343?text=Hello%20Zikconnect%2C%20I%20want%20to%20learn%20more%20about%20your%20payment%20automation%20services.";

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
//     >
//       <div className="container">
//         {/* Section Heading */}
//         <div className="section-heading">
//           <div className="flex justify-center items-center">
//             <div className="tag">
//               Smart payment automation for modern businesses
//             </div>
//           </div>

//           <h2 className="section-title mt-5">
//             Faster payouts and seamless transaction management
//           </h2>

//           <p className="section-description mt-5">
//             Automate transfers, verify recipient accounts, monitor payment
//             activity, and manage business payouts efficiently with secure and
//             scalable payment infrastructure.
//           </p>

//           {/* CTA */}
//           <div className="flex justify-center mt-8">
//             <a
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
//             >
//               Contact Us on WhatsApp
//             </a>
//           </div>
//         </div>

//         {/* Product Image */}
//         <div className="relative">
//           <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//             <Image
//               src={productImage}
//               alt="Payment automation platform"
//               className="mt-10 cursor-pointer"
//             />
//           </a>

//           {/* Floating Pyramid */}
//           <motion.img
//             src={pyramidImage.src}
//             alt="Secure transaction infrastructure"
//             width={262}
//             height={262}
//             className="hidden md:block absolute -right-36 -top-32"
//             style={{
//               translateY,
//             }}
//           />

//           {/* Floating Tube */}
//           <motion.img
//             src={tubeImage.src}
//             alt="Automated payout system"
//             width={248}
//             height={248}
//             className="hidden md:block absolute bottom-24 -left-36"
//             style={{
//               translateY,
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const whatsappLink =
    "https://wa.me/2349169215343?text=Hello%20ZikConnect%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20service%20platform%20and%20payment%20solutions.";

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="flex justify-center items-center">
            <div className="tag">
              Service management and payment coordination platform
            </div>
          </div>

          <h2 className="section-title mt-5">
            Manage Customers, Payments, and Settlements From One Platform
          </h2>

          <p className="section-description mt-5">
            ZikConnect helps businesses connect customers with service providers
            while simplifying payment collection, transaction verification,
            account reconciliation, reporting, and settlement workflows. Operate
            efficiently with a centralized platform built for modern
            service-based businesses.
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={productImage}
              alt="Service management and payment platform"
              className="mt-10 cursor-pointer"
            />
          </a>

          {/* Floating Pyramid */}
          <motion.img
            src={pyramidImage.src}
            alt="Business workflow management"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />

          {/* Floating Tube */}
          <motion.img
            src={tubeImage.src}
            alt="Settlement and reporting infrastructure"
            width={248}
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
