import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
const ServiceCard = ({ title, index, icon }) => {
     return (
          <Tilt className='xs:w-[250px] w-full'>
               <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * index, 0.78)}
                    className='w-full  green-pink-gradient p-[1px] rounded-[20px] shadaw-card'>
                    <div
                         options={{ max: 45, scale: 1, speed: 450 }}
                         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
                    justify-center flex-col items-center'>
                         <img
                              src={icon}
                              alt={title}
                              className='object-contain w-16 h-16 '
                         />
                         <h1 className='text-white text-[20px] font-hold text-center'>
                              {title}
                         </h1>
                    </div>
               </motion.div>
          </Tilt>
     );
};

const About = () => {
     return (
          <>
               <motion.div variants={textVariant}>
                    <p className={`${styles.sectionSubText}`}>Introduction</p>
                    <h2 className={`${styles.sectionHeadText}`}>OverView</h2>
               </motion.div>
               <motion.p
                    variants={fadeIn('', '', 0.2, 1)}
                    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    Computer Science student who is really passionate about web
                    development, Proficient with JavaScript and its frameworks
               </motion.p>
               <div className='mt-20 flex flex-wrap gap-10 '>
                    {services.map((service, index) => (
                         <ServiceCard
                              key={service.title}
                              index={index}
                              {...service}
                         />
                    ))}
               </div>
          </>
     );
};

export default SectionWrapper(About, 'about');
