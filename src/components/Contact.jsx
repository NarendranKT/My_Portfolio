import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { styles } from "../style"

// yaxKkRA3He_XeLO29
// template_xpruai6
// service_0smw4z8

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name] : value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    //$ emailjs
    emailjs.send(
      "service_0smw4z8",
      "template_xpruai6",
      {
        from_name: form.name,
        to_name: "Narendran K T",
        from_email: form.email,
        to_email: 'naren.cse008@gmail.com',
        message: form.message,
      },
      "yaxKkRA3He_XeLO29" 
      )
      .then(() =>{
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible");
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);
        console.log(error.message);
        alert("Something went wrong");
      })

  }
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

      <motion.div variants={slideIn('left', "tween", 0.1, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              autoComplete="off"
              placeholder="What's your good name?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input type="email" name="email" value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              autoComplete="off"
              placeholder="What's your email?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7" name="message" value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              autoComplete="off"
              placeholder="What do you want to say?"
            />
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl">
            {loading? 'sending...': 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.1, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
          <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")