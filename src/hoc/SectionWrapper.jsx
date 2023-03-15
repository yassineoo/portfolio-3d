import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
const SectionWrapper = (Component, idname) =>
     function HOC() {
          return (
               <motion.section
                    variants={staggerContainer}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, anount: 0.75 }}
                    className={`${styles.padding} mx-auto relative z-0 max-w-7xl'`}>
                    <span className='hash-span' id={idname}>
                         &nbsp;
                    </span>
                    <Component />
               </motion.section>
          );
     };

export default SectionWrapper;
