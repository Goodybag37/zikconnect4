// "use client";

// import avatar1 from "@/assets/avatar-1.png";
// import avatar2 from "@/assets/avatar-2.png";
// import avatar3 from "@/assets/avatar-3.png";
// import avatar4 from "@/assets/avatar-4.png";
// import avatar5 from "@/assets/avatar-5.png";
// import avatar6 from "@/assets/avatar-6.png";
// import avatar7 from "@/assets/avatar-7.png";
// import avatar8 from "@/assets/avatar-8.png";
// import avatar9 from "@/assets/avatar-9.png";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";
// import { motion } from "framer-motion";
// import React from "react";

// const testimonials = [
//   {
//     text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
//     imageSrc: avatar1.src,
//     name: "Jamie Rivera",
//     username: "@jamietechguru00",
//   },
//   {
//     text: "Our team's productivity has skyrocketed since we started using this tool. ",
//     imageSrc: avatar2.src,
//     name: "Josh Smith",
//     username: "@jjsmith",
//   },
//   {
//     text: "This app has completely transformed how I manage my projects and deadlines.",
//     imageSrc: avatar3.src,
//     name: "Morgan Lee",
//     username: "@morganleewhiz",
//   },
//   {
//     text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
//     imageSrc: avatar4.src,
//     name: "Casey Jordan",
//     username: "@caseyj",
//   },
//   {
//     text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
//     imageSrc: avatar5.src,
//     name: "Taylor Kim",
//     username: "@taylorkimm",
//   },
//   {
//     text: "The customizability and integration capabilities of this app are top-notch.",
//     imageSrc: avatar6.src,
//     name: "Riley Smith",
//     username: "@rileysmith1",
//   },
//   {
//     text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
//     imageSrc: avatar7.src,
//     name: "Jordan Patels",
//     username: "@jpatelsdesign",
//   },
//   {
//     text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
//     imageSrc: avatar8.src,
//     name: "Sam Dawson",
//     username: "@dawsontechtips",
//   },
//   {
//     text: "Its user-friendly interface and robust features support our diverse needs.",
//     imageSrc: avatar9.src,
//     name: "Casey Harper",
//     username: "@casey09",
//   },
// ];

// const firstColumn = testimonials.slice(0, 3);
// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

// const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: typeof testimonials;
//   duration?: number
// }) => (
//   <div className={props.className}>
//     <motion.div
//       animate={{
//         translateY: "-50%"
//       }}
//       transition={{
//         duration: props.duration || 10,
//         repeat: Infinity,
//         ease: "linear",
//         repeatType: "loop",
//       }}
//       className="flex flex-col gap-6 pb-6"
//     >
//       {/* React Fragment  */}
//       {[...new Array(2)].fill(0).map((_, index) => (
//         <React.Fragment key={index}>
//           {props.testimonials.map(({ text, imageSrc, name, username }) => (
//             <div className="card" key={text}>
//               <div>{text}</div>
//               <div className="flex items-center gap-2 mt-5">
//                 <Image
//                   src={imageSrc}
//                   alt={name}
//                   width={40}
//                   height={40}
//                   className="h-10 w-10 rounded-full"
//                 />
//                 <div className="flex flex-col">
//                   <div className="font-medium tracking-tight leading-5">
//                     {name}
//                   </div>
//                   <div className="leading-5 tracking-tight">{username}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   </div>
// );

// export const Testimonials = () => {
//   return (
//     <section className="bg-white">
//       <div className="container">
//         <div className="section-heading">
//           <div className="flex justify-center">
//             <div className="tag">Testimonials</div>
//           </div>
//           <h2 className="section-title mt-5">What our users say</h2>
//           <p className="section-description">
//             From intutive design to powerful features, our app has become an
//             essential tool for users around the world.
//           </p>
//         </div>

//         <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
//           <TestimonialsColumn testimonials={firstColumn} duration={15} />
//           <TestimonialsColumn
//             testimonials={secondColumn}
//             className="hidden md:block"
//             duration={19}
//           />
//           <TestimonialsColumn
//             testimonials={thirdColumn}
//             className="hidden lg:block"
//             duration={17}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";

// import avatar1 from "@/assets/avatar-1.png";
// import avatar2 from "@/assets/avatar-2.png";
// import avatar3 from "@/assets/avatar-3.png";
// import avatar4 from "@/assets/avatar-4.png";
// import avatar5 from "@/assets/avatar-5.png";
// import avatar6 from "@/assets/avatar-6.png";
// import avatar7 from "@/assets/avatar-7.png";
// import avatar8 from "@/assets/avatar-8.png";
// import avatar9 from "@/assets/avatar-9.png";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";

// const whatsappLink =
//   "https://wa.me/2349169215343?text=Hello%20Zikconnect%2C%20I%20want%20to%20learn%20more%20about%20your%20payment%20automation%20services.";

// const testimonials = [
//   {
//     text: "Zikconnect helped us automate our payout operations and reduce manual bank transfer processes completely.",
//     imageSrc: avatar1.src,
//     name: "Michael Johnson",
//     username: "@michaelbiz",
//   },

//   {
//     text: "The automation workflow integration was smooth and saved our business countless operational hours weekly.",
//     imageSrc: avatar2.src,
//     name: "Sarah Williams",
//     username: "@sarahtech",
//   },

//   {
//     text: "We now process customer payouts faster with secure recipient verification and automated tracking.",
//     imageSrc: avatar3.src,
//     name: "Daniel Roberts",
//     username: "@danielpayments",
//   },

//   {
//     text: "Professional automation setup and reliable support throughout the entire deployment process.",
//     imageSrc: avatar4.src,
//     name: "David Clark",
//     username: "@davidclark",
//   },

//   {
//     text: "Our transaction workflow became significantly more efficient after integrating automated payout systems.",
//     imageSrc: avatar5.src,
//     name: "Jessica Adams",
//     username: "@jessicabusiness",
//   },

//   {
//     text: "Zikconnect simplified our payment operations with scalable automation and webhook integrations.",
//     imageSrc: avatar6.src,
//     name: "Andrew Wilson",
//     username: "@andrewwilson",
//   },

//   {
//     text: "The transfer automation infrastructure works reliably and handles business operations efficiently.",
//     imageSrc: avatar7.src,
//     name: "Olivia Brown",
//     username: "@oliviabrown",
//   },

//   {
//     text: "Excellent automation solutions for businesses looking to streamline payment processing and transfers.",
//     imageSrc: avatar8.src,
//     name: "James Taylor",
//     username: "@jamestaylor",
//   },

//   {
//     text: "Fast setup, secure systems, and professional workflow automation tailored for our payment needs.",
//     imageSrc: avatar9.src,
//     name: "Emily Davis",
//     username: "@emilydavis",
//   },
// ];

// const firstColumn = testimonials.slice(0, 3);
// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

// const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: typeof testimonials;
//   duration?: number;
// }) => (
//   <div className={props.className}>
//     <motion.div
//       animate={{
//         translateY: "-50%",
//       }}
//       transition={{
//         duration: props.duration || 10,
//         repeat: Infinity,
//         ease: "linear",
//         repeatType: "loop",
//       }}
//       className="flex flex-col gap-6 pb-6"
//     >
//       {[...new Array(2)].fill(0).map((_, index) => (
//         <React.Fragment key={index}>
//           {props.testimonials.map(({ text, imageSrc, name, username }) => (
//             <a
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               key={text}
//               className="card hover:scale-[1.02] transition duration-300 cursor-pointer"
//             >
//               <div>{text}</div>

//               <div className="flex items-center gap-2 mt-5">
//                 <Image
//                   src={imageSrc}
//                   alt={name}
//                   width={40}
//                   height={40}
//                   className="h-10 w-10 rounded-full"
//                 />

//                 <div className="flex flex-col">
//                   <div className="font-medium tracking-tight leading-5">
//                     {name}
//                   </div>

//                   <div className="leading-5 tracking-tight">{username}</div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   </div>
// );

// export const Testimonials = () => {
//   return (
//     <section className="bg-white py-24">
//       <div className="container">
//         {/* Heading */}
//         <div className="section-heading">
//           <div className="flex justify-center">
//             <div className="tag">Trusted by growing businesses</div>
//           </div>

//           <h2 className="section-title mt-5">
//             What businesses say about Zikconnect
//           </h2>

//           <p className="section-description">
//             Businesses use Zikconnect to automate transfers, streamline payout
//             operations, verify recipients, and improve payment workflow
//             efficiency securely and reliably.
//           </p>
//         </div>

//         {/* Testimonials */}
//         <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
//           <TestimonialsColumn testimonials={firstColumn} duration={15} />

//           <TestimonialsColumn
//             testimonials={secondColumn}
//             className="hidden md:block"
//             duration={19}
//           />

//           <TestimonialsColumn
//             testimonials={thirdColumn}
//             className="hidden lg:block"
//             duration={17}
//           />
//         </div>

//         {/* CTA */}
//         <div className="flex justify-center mt-12">
//           <a
//             href={whatsappLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition"
//           >
//             Contact Us on WhatsApp
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const whatsappLink =
  "https://wa.me/2349169215343?text=Hello%20ZikConnect%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20service%20platform%20and%20payment%20solutions.";

const testimonials = [
  {
    text: "ZikConnect helped us organize service requests, customer payments, and provider settlements from a single platform.",
    imageSrc: avatar1.src,
    name: "Michael Johnson",
    username: "@michaelbiz",
  },

  {
    text: "The platform made it easier to manage customer transactions and coordinate service delivery across our business.",
    imageSrc: avatar2.src,
    name: "Sarah Williams",
    username: "@sarahtech",
  },

  {
    text: "We reduced administrative work significantly through automated transaction verification and reporting.",
    imageSrc: avatar3.src,
    name: "Daniel Roberts",
    username: "@danielservices",
  },

  {
    text: "Professional onboarding experience and reliable support throughout implementation.",
    imageSrc: avatar4.src,
    name: "David Clark",
    username: "@davidclark",
  },

  {
    text: "The reconciliation and reporting tools gave us much better visibility into daily business operations.",
    imageSrc: avatar5.src,
    name: "Jessica Adams",
    username: "@jessicabusiness",
  },

  {
    text: "Managing customers, payments, and service providers is now much more efficient with ZikConnect.",
    imageSrc: avatar6.src,
    name: "Andrew Wilson",
    username: "@andrewwilson",
  },

  {
    text: "The settlement workflow reduced manual follow-ups and improved our operational efficiency.",
    imageSrc: avatar7.src,
    name: "Olivia Brown",
    username: "@oliviabrown",
  },

  {
    text: "Excellent platform for businesses that need service management, payment coordination, and reporting.",
    imageSrc: avatar8.src,
    name: "James Taylor",
    username: "@jamestaylor",
  },

  {
    text: "Simple to use, reliable, and flexible enough to support our growing business requirements.",
    imageSrc: avatar9.src,
    name: "Emily Davis",
    username: "@emilydavis",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              key={text}
              className="card hover:scale-[1.02] transition duration-300 cursor-pointer"
            >
              <div>{text}</div>

              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />

                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>

                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </a>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        {/* Heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Trusted by growing businesses</div>
          </div>

          <h2 className="section-title mt-5">
            What businesses say about ZikConnect
          </h2>

          <p className="section-description">
            Businesses use ZikConnect to manage service requests, coordinate
            customer payments, automate reconciliation, generate reports, and
            streamline settlement workflows.
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />

          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />

          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
