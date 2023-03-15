import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import SectionWrapper from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({
     index,
     testimonial,
     name,
     designation,
     company,
     image,
}) => {
     return (
          <motion.div
               variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
               className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
               <p className='test-white font-black text-[48px]'>"</p>
               <div className='mt-1'>
                    <p className='text-white tracking-wider text-[18px]'>
                         {testimonial}
                    </p>
                    <div className='mt-7 flex justify-between gap-1 items-center'>
                         <div className='flex flex-1 flex-col '>
                              <p className='text-ehite font-medium text-[16px]'>
                                   <span className='blue-text-gradient'>@</span>
                                   {name}
                              </p>
                              <p className='text-secondary text-[12px] mt-1 '>
                                   {designation} of {company}
                              </p>
                         </div>
                         <div>
                              <img
                                   src={image}
                                   alt='profile Image'
                                   className='w-10 h-10 rounded-full object-cover'
                              />
                         </div>
                    </div>
               </div>
          </motion.div>
     );
};

const Feedbacks = () => {
     return (
          <div className='mt-12 bg-black-100 rounded-[20px]'>
               <div
                    className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
                    <motion.div variants={textVariant()}>
                         <p className={styles.sectionSubText}>
                              What's Others Says
                         </p>
                         <h2 className={styles.sectionHeadText}>
                              Testimonials
                         </h2>
                    </motion.div>
               </div>
               <div
                    className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                    {testimonials.map((testimonial, index) => (
                         <FeedbackCard
                              key={testimonial.name}
                              index={index}
                              {...testimonial}
                         />
                    ))}
               </div>
          </div>
     );
};

export default SectionWrapper(Feedbacks, '');
