import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { educations } from "../constants"; // You’ll need to define this
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion"; // Custom fade-in utility

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-tertiary p-6 rounded-xl shadow-lg text-center w-full sm:w-[400px]"
    >
      <h3 className="text-white text-[20px] font-bold">{education.degree}</h3>
      <p className="text-secondary text-[16px] font-semibold mb-2">
        {education.institution}
      </p>
      <p className="text-white-100 text-[14px]">{education.duration}</p>
      <ul className="mt-4 list-disc ml-5 text-left text-white-100 text-[14px] space-y-1">
        {education.points.map((point, idx) => (
          <li key={`edu-point-${idx}`}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", 0, 0.5)}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where I’ve studied
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {educations.map((education, index) => (
          <EducationCard key={`education-${index}`} education={education} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
