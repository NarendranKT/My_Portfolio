import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { styles } from "../style"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { github } from "../assets"


const ProjectCard = ({name, description, tags, image, source_code_link, index}) => {
  
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.5)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
      >
        
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
        </div>

        {/* github and live too*/}
        <div className="absolute inset-0 flex justify-end m-8 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-semibold text-white text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag) => (
              <div key={tag.name} className={`text-[14px] ${tag.color}`}>
                <p className={`bg-secondary/15 px-2 rounded-2xl`}>#{tag.name}</p>
              </div>
            ))
          }
        </div>

      </Tilt>
    </motion.div>
  )

}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.    
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={ `project-${index}` } index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "project")