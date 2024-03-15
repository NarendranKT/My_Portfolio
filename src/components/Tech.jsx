import { motion } from "framer-motion"
import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"
import { BallCanvas } from "./canvas"
import { fadeIn, textVariant } from "../utils/motion"


const Tech = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  const Map = (isMobile ,technologies)=>{
    if(isMobile){
      return (
        technologies.slice(0, 4).map((technology, index) => (
          <motion.div variants={fadeIn('up', 'spring', index*0.2, 1)} className='w-28 h-28' key={technology.name}>
    <BallCanvas icon={technology.icon}/>
    <p className="flex justify-center text-white font-bold">{technology.name}</p>
    </motion.div>
    )))
    }
    else{return(
      technologies.map((technology, index)=>(
        <motion.div className='w-28 h-28' key={technology.name} variants={fadeIn('up', 'spring', index*0.2, 1)}>
        <BallCanvas icon={technology.icon}/>
        <p className="flex justify-center text-white font-bold">{technology.name}</p>
        </motion.div>
      )))
    }
  }
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>what i have learnt so far</p>
        <h1 className={styles.sectionHeadText}>Technology Stack</h1>        
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-5'>
      {Map(isMobile ,technologies)}
    </div>
    </>
  );
};



export default SectionWrapper(Tech, "")