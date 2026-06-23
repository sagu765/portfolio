import { useMemo } from 'react'

export default function Navbar({ links, menuOpen, onToggleMenu }) {
  const buttonLabel = useMemo(
    () => (menuOpen ? 'Close navigation menu' : 'Open navigation menu'),
    [menuOpen],
  )

  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <a className="nav-brand" href="#home">
          Sageth<span>_</span>
        </a>
        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-label={buttonLabel}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={onToggleMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="/resume.txt" download>
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
