import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import SectionWrapper from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
const ProjectCard = ({
     index,
     name,
     description,
     tags,
     image,
     source_code_link,
}) => {
     return (
          <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
               <Tilt
                    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
                    options={{ max: 45, scale: 1, speed: 450 }}>
                    <div className='relative w-full h-[230px]'>
                         <img
                              src={image}
                              alt={name}
                              className='rounded-2xl w-full h-full object-contain'
                         />
                         <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                              <div
                                   onClick={() => window.open(source_code_link)}
                                   className='rounded-full cursor-pointer flex items-center 
                                   justify-center black-gradient w-10 h-10 '>
                                   <img
                                        src={github}
                                        className='w-1/2 h-1/2 object-contain'
                                   />
                              </div>
                         </div>
                    </div>
                    <div className='mt-5'>
                         <h3 className='font-bold text-[24px] text-white'>
                              {name}
                         </h3>
                         <p className='mt-2 text-secondary text-[14px]'>
                              {description}
                         </p>
                    </div>
                    <div className='mt-4 flex flex-wrap gap-2'>
                         {tags.map((tag) => (
                              <p
                                   key={tag.name}
                                   className={`text-[14px] ${tag.color}`}>
                                   {tag.name}
                              </p>
                         ))}
                    </div>
               </Tilt>
          </motion.div>
     );
};
const Works = () => {
     return (
          <>
               <motion.div variants={textVariant()} className=''>
                    <p className={`${styles.sectionSubText}`}>My projects </p>
                    <h2 className={`${styles.sectionHeadText}`}>projects</h2>
               </motion.div>
               <div className='w-full flex flex-col '>
                    <motion.p
                         variants={fadeIn('', '', 0.1, 1)}
                         className='mt-3 mb-6 text-secondary text-[17px] max-w-3xl leading-8'>
                         the following projects is describe all my experience
                    </motion.p>
                    <div className='mt-220 flex flex-wrap gap-7 '>
                         {projects.map((project, index) => (
                              <ProjectCard
                                   key={index}
                                   index={index}
                                   {...project}
                              />
                         ))}
                    </div>
               </div>
          </>
     );
};

export default SectionWrapper(Works, 'work');
