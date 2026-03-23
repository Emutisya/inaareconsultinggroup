import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LogoMark from './LogoMark'
import { navLinks } from '../data/siteContent'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const filteredLinks = navLinks.filter((link) => link.name !== 'Services')

  const getLinkStyle = ({ isActive }) =>
    `link-underline relative text-[13px] uppercase tracking-[0.13em] ${isActive ? 'active-link text-gold' : 'text-ivory/90 hover:text-[#c67b8d]'}`

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-ink/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-14 w-16 md:h-16 md:w-20" />
          <div>
            <span className="block font-serif text-2xl font-semibold tracking-wide text-ivory">
              InaaRe Consulting Group
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.35em] text-muted md:block">
              Reshaping Perspectives, Restoring Values
            </span>
          </div>
        </NavLink>

        <button
          type="button"
          className="rounded-[12px] border border-gold/40 px-4 py-2 text-sm text-ivory hover:-translate-y-0.5 hover:scale-[1.02] hover:border-[#c67b8d]/60 hover:text-[#c67b8d] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {filteredLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} className={getLinkStyle}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="space-y-2 border-t border-gold/15 px-6 py-4 md:hidden">
          {filteredLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm transition-colors duration-300 ${
                    isActive ? 'bg-gold/15 text-gold' : 'text-ivory/90 hover:bg-[#c67b8d]/10 hover:text-[#c67b8d]'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
