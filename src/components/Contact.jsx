import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from '../hoc';
import { slideIn } from '../utils/motion';
const Contact = () => {
     const formRef = useRef();
     const [form, setForm] = useState({ name: '', email: '', message: '' });
     const [loading, setLoading] = useState(false);
     const handleChange = (e) => {};
     const handleSubmit = (e) => {};
     return (
          <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
               <motion.div
                    variants={slideIn('left', 'twin', 0.2, 1)}
                    className='flex-[0.75] rounded-2xl bg-black-100 p-8'>
                    <p className={`${styles.sectionSubText}`}>Get In touch</p>
                    <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
                    <form
                         ref={formRef}
                         onSubmit={handleSubmit}
                         className='flex flex-col mt-12 gap-8'>
                         <label className='flex flex-col'>
                              <span className='text-white font-medium mb-4'>
                                   Your Name
                              </span>
                              <input
                                   type='text'
                                   name='name'
                                   value={form.name}
                                   onChange={handleChange}
                                   placeholder="Waht's your name"
                                   className='bg-tertiary py-4 px-6 placeholder:text-secondary
                                    rounded-lg outline-none border-none font-medium'
                              />
                         </label>
                         <label className='flex flex-col'>
                              <span className='text-white font-medium mb-4'>
                                   Your Email
                              </span>
                              <input
                                   type='email'
                                   name='email'
                                   value={form.email}
                                   onChange={handleChange}
                                   placeholder="Waht's your email"
                                   className='bg-tertiary py-4 px-6 placeholder:text-secondary
                                    rounded-lg outline-none border-none font-medium'
                              />
                         </label>
                         <label className='flex flex-col'>
                              <span className='text-white font-medium mb-4'>
                                   Your Message
                              </span>
                              <input
                                   rows='7'
                                   type='text'
                                   name='message'
                                   value={form.message}
                                   onChange={handleChange}
                                   placeholder='Waht do u want to say'
                                   className='bg-tertiary py-4 px-6 placeholder:text-secondary
                                    rounded-lg outline-none border-none font-medium'
                              />
                         </label>
                         <button
                              type='submit'
                              className='bg-tertiary py-3 
                              px-8 outline-none w-fit text-white font-cold shadaw-md shadow-primary rounded-xl'>
                              {loading ? 'Sending ...' : 'Send'}
                         </button>
                    </form>
               </motion.div>
               <motion.div
                    variants={slideIn('fight', 'twin', 0.2, 1)}></motion.div>
          </div>
     );
};

export default SectionWrapper(Contact, '');
