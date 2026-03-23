import { Link } from 'react-router-dom'
import { navLinks } from '../data/siteContent'

const Footer = () => {
  return (
    <footer className="border-t border-gold/25 bg-[#111111] text-[#d8d8d8]">
      <div className="section-shell grid gap-10 py-12 text-sm md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h3 className="font-serif text-3xl text-[#f6f1e8]">InaaRe Consulting Group</h3>
          <p className="text-measure mt-4">
            Trusted advisory for boards and executive leaders seeking stronger governance,
            resilient institutions, and sustainable strategic outcomes.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Navigation</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="link-underline inline-block hover:text-gold">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-gold">Contact</p>
          <p className="mt-4 leading-relaxed">
            Email: ndaizeek@gmail.com
            <br />
            Phone: +254 721 389696
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em]">
            Strategic advisory excellence.
          </p>
        </div>
      </div>

      <div className="border-t border-gold/20 px-6 py-4 text-center text-xs text-[#bcb6ab] md:px-10">
        © {new Date().getFullYear()} InaaRe Consulting Group. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
