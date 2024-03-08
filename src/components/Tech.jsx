import { motion } from "framer-motion"
import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"
import { BallCanvas } from "./canvas"
import { fadeIn, textVariant } from "../utils/motion"


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>what i have learnt so far</p>
        <h1 className={styles.sectionHeadText}>Technology Stack</h1>        
      </motion.div>
      <motion.div className="flex flex-row flex-wrap justify-center gap-10 mt-10" >
          {
          technologies.map((technology, index) => (
              <motion.div className="w-28 h-28" key={technology.name} variants={fadeIn("up", "spring", index*0.2, 1)}>
              <BallCanvas icon={ technology.icon } />
              </motion.div>
            ))
          }
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "")