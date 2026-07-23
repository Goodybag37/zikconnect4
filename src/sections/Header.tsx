// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from "@/assets/logosaas.png";
// import MenuIcon from "@/assets/menu.svg";
// import Image from "next/image";

// export const Header = () => {
//   return (
//     <header className="sticky top-0 backdrop-blur-sm z-20">
//       <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
//         <p className="text-white/60 hidden md:block">
//           Streamline your trading and boost your productivity with zikconnect
//         </p>
//         <div className="inline-flex gap-1 items-center">
//           <p>Get started with Zikconnect</p>
//           <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
//         </div>
//       </div>

//       <div className="py-5">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             <Image src={Logo} alt="Saas Logo" height={40} width={40} />
//             <MenuIcon className="h-5 w-5 md:hidden" />

//             <nav className="hidden md:flex gap-6 text-black/60 items-center">
//               <a href="#">About</a>
//               <a href="#">Features</a>
//               <a href="#">Customers</a>
//               <a href="#">Updates</a>
//               <a href="#">Help</a>
//               <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
//                 Get for free
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// import ArrowRight from "@/assets/arrow-right.svg";
// import Logo from "@/assets/logosaas.png";
// import MenuIcon from "@/assets/menu.svg";
// import Image from "next/image";

// export const Header = () => {
//   const whatsappLink =
//     "https://wa.me/2349169215343?text=Hello%20Zikconnect%2C%20I%20want%20to%20learn%20more%20about%20your%20payment%20automation%20services.";

//   return (
//     <header className="sticky top-0 backdrop-blur-sm z-20">
//       {/* Top Banner */}
//       <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 px-4 text-center">
//         <p className="text-white/60 hidden md:block">
//           Automate bank transfers, payment verification, and payout operations
//           with Zikconnect
//         </p>

//         <a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex gap-1 items-center hover:opacity-80 transition"
//         >
//           <p>Get Started with Zikconnect</p>

//           <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
//         </a>
//       </div>

//       {/* Navbar */}
//       <div className="py-5">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//               <Image src={Logo} alt="Zikconnect Logo" height={40} width={40} />
//             </a>

//             {/* Mobile Menu Icon */}
//             <a
//               href={whatsappLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="md:hidden"
//             >
//               <MenuIcon className="h-5 w-5" />
//             </a>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex gap-6 text-black/60 items-center">
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-black transition"
//               >
//                 About
//               </a>

//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-black transition"
//               >
//                 Features
//               </a>

//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-black transition"
//               >
//                 Solutions
//               </a>

//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-black transition"
//               >
//                 Developers
//               </a>

//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-black transition"
//               >
//                 Support
//               </a>

//               {/* CTA Button */}
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:opacity-90 transition"
//               >
//                 Get Started
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  const whatsappLink =
    "https://wa.me/2349169215343?text=Hello%20ZikConnect%2C%20I%20want%20to%20learn%20more%20about%20your%20business%20payment%20solutions.";

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top Banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 px-4 text-center">
        <p className="text-white/60 hidden md:block">
          Learn AI content creation, face swapping, and P2P automation from
          industry professionals.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-1 items-center hover:opacity-80 transition"
        >
          <p>Explore ZikConnect Solutions</p>

          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </a>
      </div>

      {/* Navbar */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Image src={Logo} alt="ZikConnect Logo" height={40} width={40} />
            </a>

            {/* Mobile Menu Icon */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                About Us
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                Services
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                Payment Solutions
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                Business API
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                Contact
              </a>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:opacity-90 transition"
              >
                Contact Sales
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
