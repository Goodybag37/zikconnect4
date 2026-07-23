// "use client"

// import CheckIcon from "@/assets/check.svg";
// import { twMerge } from "tailwind-merge";
// import {motion} from "framer-motion";

// const pricingTiers = [
//   {
//     title: "Free",
//     monthlyPrice: 0,
//     buttonText: "Get started for free",
//     popular: false,
//     inverse: false,
//     features: [
//       "Up to 5 project members",
//       "Unlimited tasks and projects",
//       "2GB storage",
//       "Integrations",
//       "Basic support",
//     ],
//   },
//   {
//     title: "Pro",
//     monthlyPrice: 9,
//     buttonText: "Sign up now",
//     popular: true,
//     inverse: true,
//     features: [
//       "Up to 50 project members",
//       "Unlimited tasks and projects",
//       "50GB storage",
//       "Integrations",
//       "Priority support",
//       "Advanced support",
//       "Export support",
//     ],
//   },
//   {
//     title: "Business",
//     monthlyPrice: 19,
//     buttonText: "Sign up now",
//     popular: false,
//     inverse: false,
//     features: [
//       "Up to 5 project members",
//       "Unlimited tasks and projects",
//       "200GB storage",
//       "Integrations",
//       "Dedicated account manager",
//       "Custom fields",
//       "Advanced analytics",
//       "Export capabilities",
//       "API access",
//       "Advanced security features",
//     ],
//   },
// ];

// export const Pricing = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container">
//         <div className="section-heading">
//           <h2 className="section-title">Pricing</h2>
//           <p className="section-description mt-5">
//             Free forever. Upgrade for unlimited tasks, better security, and
//             exclusive features.
//           </p>
//         </div>
//         <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
//           {pricingTiers.map(
//             ({
//               title,
//               monthlyPrice,
//               buttonText,
//               popular,
//               inverse,
//               features,
//             }) => (
//               <div
//                 className={twMerge(
//                   "card",
//                   inverse === true && "border-black bg-black text-white"
//                 )}
//                 key={title}
//               >
//                 <div className="flex justify-between">
//                   <h3
//                     className={twMerge(
//                       "text-lg font-bold text-black/50",
//                       inverse === true && "text-white/60"
//                     )}
//                   >
//                     {title}
//                   </h3>
//                   {popular === true && (
//                     <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
//                       <motion.span
//                       animate={{
//                         backgroundPositionX: "100%",
//                       }}
//                       transition={{
//                         duration: 1,
//                         repeat: Infinity,
//                         ease: "linear",
//                         repeatType: "loop"
//                       }}
//                       className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium">
//                         Popular
//                       </motion.span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex items-baseline gap-1 mt-[30px]">
//                   <span className="text-4xl font-bold tracking-tighter leading-none">
//                     ${monthlyPrice}
//                   </span>
//                   <span className="tracking-tight font-bold text-black/50">
//                     /month
//                   </span>
//                 </div>
//                 <button
//                   className={twMerge(
//                     "btn btn-primary w-full mt-[30px]",
//                     inverse === true && "bg-white text-black"
//                   )}
//                 >
//                   {buttonText}
//                 </button>
//                 <ul className="flex flex-col gap-5 mt-8">
//                   {features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="text-sm flex items-center gap-4"
//                     >
//                       <CheckIcon className="h-6 w-6" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           )}
//           <div>
//             <h3></h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import CheckIcon from "@/assets/check.svg";
// import { motion } from "framer-motion";
// import { twMerge } from "tailwind-merge";

// const whatsappLink =
//   "https://wa.me/2349169215343?text=Hello%20Zikconnect%2C%20I%20want%20to%20automate%20my%20payment%20operations.";

// const pricingTiers = [
//   {
//     title: "AI Content Creation",
//     price: "₦3000",
//     buttonText: "Buy Now",
//     popular: false,
//     inverse: false,
//     features: [
//       "Create Trending AI Contents",
//       "Full Movie Creation ",
//       "No Code Required",
//       "Connect with Community",
//       "How to apply for job roles",
//       "Eye catching Contents",
//       "How To Monetize it",
//     ],
//   },

//   {
//     title: "Face Swapping",
//     price: "₦8000",
//     buttonText: "Buy Now",
//     popular: true,
//     inverse: true,
//     features: [
//       "Swap Into any face",
//       "Use it for live video calls ",
//       "Create Avatars",
//       "How to monetize it ",
//       "how to apply for job roles ",
//       "Hyper Realistic Characrter SwaP",
//       "Also Change Voice",
//     ],
//   },

//   {
//     title: "P2P Automation",
//     price: "₦200,000",
//     oldPrice: "₦400,000",
//     buttonText: "Buy Now",
//     popular: false,
//     inverse: false,
//     features: [
//       "Bybit P2P automation",
//       "Bitget P2P automation",
//       "Gate.io P2P automation",
//       "OKX P2P automation",
//       "n8n infrastructure setup",
//       "Webhook integrations",
//       "Advanced automation logic",
//       "Technical deployment support",
//     ],
//   },
// ];

// export const Pricing = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container">
//         {/* Heading */}
//         <div className="section-heading">
//           <h2 className="section-title">Automation Pricing</h2>

//           <p className="section-description mt-5">
//             Here are our pricing on different AI products and services, ensure to select the one that best suits your needs
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
//           {pricingTiers.map(
//             ({
//               title,
//               price,
//               oldPrice,
//               buttonText,
//               popular,
//               inverse,
//               features,
//             }) => (
//               <div
//                 key={title}
//                 className={twMerge(
//                   "card max-w-xs w-full",
//                   inverse === true && "border-black bg-black text-white",
//                 )}
//               >
//                 {/* Header */}
//                 <div className="flex justify-between items-center">
//                   <h3
//                     className={twMerge(
//                       "text-lg font-bold text-black/50",
//                       inverse === true && "text-white/60",
//                     )}
//                   >
//                     {title}
//                   </h3>

//                   {popular === true && (
//                     <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
//                       <motion.span
//                         animate={{
//                           backgroundPositionX: "100%",
//                         }}
//                         transition={{
//                           duration: 1,
//                           repeat: Infinity,
//                           ease: "linear",
//                           repeatType: "loop",
//                         }}
//                         className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
//                       >
//                         Popular
//                       </motion.span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Pricing */}
//                 <div className="mt-[30px]">
//                   {oldPrice && (
//                     <p className="text-lg line-through text-black/40 mb-2">
//                       {oldPrice}
//                     </p>
//                   )}

//                   <span className="text-4xl font-bold tracking-tighter leading-none">
//                     {price}
//                   </span>
//                 </div>

//                 {/* Button */}
//                 <a
//                   href={whatsappLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={twMerge(
//                     "btn btn-primary w-full mt-[30px] text-center inline-flex items-center justify-center",
//                     inverse === true && "bg-white text-black",
//                   )}
//                 >
//                   {buttonText}
//                 </a>

//                 {/* Features */}
//                 <ul className="flex flex-col gap-5 mt-8">
//                   {features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="text-sm flex items-center gap-4"
//                     >
//                       <CheckIcon className="h-6 w-6" />

//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import CheckIcon from "@/assets/check.svg";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const whatsappLink =
  "https://wa.me/2349169215343?text=Hello%20Zikconnect%2C%20I%20want%20to%20automate%20my%20payment%20operations.";

const pricingTiers = [
  {
    title: "AI Content Creation",
    price: "₦3000",
    buttonText: "Enroll Now",
    buttonLink: "https://selar.com/788142vg2m", // Replace with your Selar checkout link
    popular: false,
    inverse: false,
    features: [
      "🎬 Create Viral AI Videos for TikTok, Instagram & YouTube",
      "🔥 Discover Trending Topics Before They Peak",
      "🤖 Learn the Complete AI Movie Creation Workflow",
      "🎙️ Generate AI Scripts, Voiceovers & Cinematic Visuals",
      "📱 Beginner-Friendly — No Coding or Editing Experience Needed",
      "💰 Learn Proven Ways to Monetize Your AI Content",
      "👥 Get Lifetime Access to Our Private WhatsApp Community",
    ],
  },

  {
    title: "Face Swapping",
    price: "₦8000",
    buttonText: "Enroll Now",
    buttonLink: whatsappLink,
    popular: true,
    inverse: true,
    features: [
      "Swap Into Any Face",
      "Use It for Live Video Calls",
      "Create Avatars",
      "How to Monetize It",
      "How to Apply for Job Roles",
      "Hyper Realistic Character Swap",
      "Also Change Voice",
    ],
  },

  {
    title: "P2P Automation",
    price: "₦200,000",
    oldPrice: "₦400,000",
    buttonText: "Enroll Now",
    buttonLink: whatsappLink,
    popular: false,
    inverse: false,
    features: [
      "⚡ Fully Automate Bybit, Bitget, OKX & Gate.io P2P",
      "🏦 Automatic Naira Bank Transfers",
      "🔄 Deduct Any amount of Fee from Each Order",
      "🤖 Connect To Telegram for Fast resoponse",
      "🔐 Connect your Phone Number(calls you on missed orders) ",
      "📈 Scale to Hundreds of Orders Daily",
      "🛠️ Fully Manage the Software (no intervention from any third party)",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="section-heading">
          <h2 className="section-title">Automation Pricing</h2>

          <p className="section-description mt-5">
            Here are our pricing on different AI products and services. Ensure
            you select the one that best suits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              price,
              oldPrice,
              buttonText,
              buttonLink,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "card max-w-xs w-full",
                  inverse && "border-black bg-black text-white",
                )}
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60",
                    )}
                  >
                    {title}
                  </h3>

                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="mt-[30px]">
                  {oldPrice && (
                    <p className="text-lg line-through text-black/40 mb-2">
                      {oldPrice}
                    </p>
                  )}

                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {price}
                  </span>
                </div>

                {/* Button */}
                <a
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px] text-center inline-flex items-center justify-center",
                    inverse && "bg-white text-black",
                  )}
                >
                  {buttonText}
                </a>

                {/* Features */}
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

// "use client";

// import CheckIcon from "@/assets/check.svg";
// import { motion } from "framer-motion";
// import { twMerge } from "tailwind-merge";

// const whatsappLink =
//   "https://wa.me/2349169215343?text=Hello%20ZikConnect%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20business%20service%20and%20payment%20solutions.";

// const pricingTiers = [
//   {
//     title: "Starter",
//     price: "₦200,000",
//     buttonText: "Get Started",
//     popular: false,
//     inverse: false,
//     features: [
//       "Service request management",
//       "Payment collection setup",
//       "Transaction verification",
//       "Basic reporting tools",
//       "Customer onboarding support",
//       "Business workflow automation",
//       "Operational dashboard access",
//     ],
//   },

//   {
//     title: "Business",
//     price: "₦350,000",
//     buttonText: "Start Now",
//     popular: true,
//     inverse: true,
//     features: [
//       "Advanced payment workflows",
//       "Automated reconciliation",
//       "Settlement management",
//       "Service provider management",
//       "Business reporting dashboard",
//       "Workflow automation setup",
//       "Priority support",
//     ],
//   },

//   {
//     title: "Enterprise",
//     price: "₦500,000",
//     oldPrice: "₦400,000",
//     buttonText: "Contact Sales",
//     popular: false,
//     inverse: false,
//     features: [
//       "Custom business workflows",
//       "Payment collection automation",
//       "Settlement coordination",
//       "Advanced reporting and analytics",
//       "API integrations",
//       "Dedicated implementation support",
//       "Operational process optimization",
//       "Enterprise onboarding assistance",
//     ],
//   },
// ];

// export const Pricing = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container">
//         {/* Heading */}
//         <div className="section-heading">
//           <h2 className="section-title">Solutions for Growing Businesses</h2>

//           <p className="section-description mt-5">
//             Flexible solutions for managing service requests, payment
//             collection, transaction verification, reconciliation, reporting, and
//             settlement operations through a single platform.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
//           {pricingTiers.map(
//             ({
//               title,
//               price,
//               oldPrice,
//               buttonText,
//               popular,
//               inverse,
//               features,
//             }) => (
//               <div
//                 key={title}
//                 className={twMerge(
//                   "card max-w-xs w-full",
//                   inverse === true && "border-black bg-black text-white",
//                 )}
//               >
//                 {/* Header */}
//                 <div className="flex justify-between items-center">
//                   <h3
//                     className={twMerge(
//                       "text-lg font-bold text-black/50",
//                       inverse === true && "text-white/60",
//                     )}
//                   >
//                     {title}
//                   </h3>

//                   {popular === true && (
//                     <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
//                       <motion.span
//                         animate={{
//                           backgroundPositionX: "100%",
//                         }}
//                         transition={{
//                           duration: 1,
//                           repeat: Infinity,
//                           ease: "linear",
//                           repeatType: "loop",
//                         }}
//                         className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
//                       >
//                         Popular
//                       </motion.span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Pricing */}
//                 <div className="mt-[30px]">
//                   {oldPrice && (
//                     <p className="text-lg line-through text-black/40 mb-2">
//                       {oldPrice}
//                     </p>
//                   )}

//                   <span className="text-4xl font-bold tracking-tighter leading-none">
//                     {price}
//                   </span>
//                 </div>

//                 {/* Button */}
//                 <a
//                   href={whatsappLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={twMerge(
//                     "btn btn-primary w-full mt-[30px] text-center inline-flex items-center justify-center",
//                     inverse === true && "bg-white text-black",
//                   )}
//                 >
//                   {buttonText}
//                 </a>

//                 {/* Features */}
//                 <ul className="flex flex-col gap-5 mt-8">
//                   {features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="text-sm flex items-center gap-4"
//                     >
//                       <CheckIcon className="h-6 w-6" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
