import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { navItems } from '../data/nav'
import Mix from './Mix'

export default function Footer() {
  return (
    <footer className="footer" data-reveal>
      <div className="footer-brand">
        <img src={logo} alt="Xyfra Technologies Logo" height="32" />
        <span>
          <Mix
            parts={[
              ['© 2026', 'muted'],
              ['Xyfra', 'green'],
              ['Technologies. Software • App • Web • Marketing • SEO', 'light'],
            ]}
          />
        </span>
      </div>

      <ul className="footer-links">
        {navItems
          .filter((item) => item.to !== '/')
          .map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
      </ul>
    </footer>
  )
}
