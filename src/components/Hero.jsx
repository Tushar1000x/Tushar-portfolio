// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
 
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Tushar</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             "A software developer  <br className='sm:block hidden' />
//             Solving real problems  <br className='sm:block hidden' />
//             with CODE".
//           </p>
//         </div>
//       </div>

//   <ComputersCanvas />
     

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           {/* <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div> */}
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Content Section */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Side line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text + Links */}
        <div className="ml-5 z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Tushar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            "A software developer <br className="sm:block hidden" />
            Solving real problems <br className="sm:block hidden" />
            with CODE".
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-6">
            <a
              href="https://www.linkedin.com/in/tushar-singh-8b4452198/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#915EFF] transition"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1aHNYYaR2lOazkPkzci_7dAVQBs-ZW8kY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#915EFF] transition"
            >
              <FaFileAlt size={20} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Model Canvas shifted to the right, with pointer-events-none */}
      <div className="absolute bottom-0 right-[-50px] sm:right-[-100px] w-full h-full pointer-events-none">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
