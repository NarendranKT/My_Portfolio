import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style'
import { logo, menu, close } from '../assets'
import {navLinks} from '../constants'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt="logo" className='w-14 h-14 object-cover' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Narendran&nbsp;<span className='sm:block hidden'>| Developer</span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((navlink) => (
              <li key={navlink.id}
              className={`${active === navlink.title? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
                <a href={`#${navlink.id}`}
                  onClick={() => {
                    setActive(navlink.title)
                  }}
                >
                  {navlink.title}
                </a>
              </li>
            ))
          }
        </ul>
        

        {/* MOBILE VIEW */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>{setToggle(!toggle)}}
          />

          <div className={`${!toggle?'hidden' : 'flex'} p-6 absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl border bg-white/5 `}>

            <ul className='list-none flex sm:hidden flex-col justify-end items-start gap-4'>
              {
                navLinks.map((navlink) => (
                  <li key={navlink.id}
                  className={`${active === navlink.title? "text-white":"text-secondary"} hover:text-white text-[16px] font-medium cursor-pointer font-poppins `}>
                    <a href={`#${navlink.id}`}
                      onClick={() => {
                        setToggle(!toggle)
                        setActive(navlink.title)
                      }}
                    >
                      {navlink.title}
                    </a>
                  </li>
                ))
              }
            </ul>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar