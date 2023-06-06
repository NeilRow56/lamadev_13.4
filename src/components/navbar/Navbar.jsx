'use client'

import ThemeChanger from '../providers/ThemeSwitcher'
import Link from 'next/link'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  }
]

const Navbar = () => {
  return (
    <nav className='flex h-24 flex-col items-center justify-center bg-slate-800 text-white md:flex-row'>
      <div className='container  '>
        <ul className='flex  items-center justify-center gap-12 text-sm uppercase tracking-widest text-slate-200'>
          <Link
            className='mr-24 text-xl font-bold text-yellow-600 hover:opacity-70'
            href='/'
          >
            lamamia
          </Link>
          {links.map(link => (
            <li key={link.id}>
              <Link href={link.url} className='hover:opacity-70'>
                {link.title}
              </Link>
            </li>
          ))}
          <ThemeChanger />
          <button className='primary-button '>Logout</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
