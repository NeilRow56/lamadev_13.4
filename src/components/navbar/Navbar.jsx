'use client'

import Link from "next/link";

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const Navbar = () => {
  return (
    <nav className='flex h-24 flex-col md:flex-row justify-center items-center bg-slate-800 text-white'>
        
        <div className="container  ">
        
            <ul className='text-sm  uppercase tracking-widest text-slate-200 flex items-center justify-center gap-12'>
            <Link className="mr-24 text-yellow-600 font-bold text-xl hover:opacity-70" href='/'>lamamia</Link>
        {links.map((link) => (
            <li key={link.id} >
          <Link href={link.url} className="hover:opacity-70">
            {link.title}
          </Link>
          </li>
        ))}   
             <button className="primary-button ">
            Logout
        </button>
        </ul>
        
      </div>
    </nav>
  )
}

export default Navbar