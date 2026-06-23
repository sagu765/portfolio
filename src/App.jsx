import { useEffect, useState } from 'react'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import SkillCard from './components/SkillCard.jsx'
import TimelineItem from './components/TimelineItem.jsx'
import './App.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const skills = ['C', 'C++', 'Java', 'Python', 'React', 'Node.js']

const projects = [
  {
    title: 'Todo App',
    description:
      'A responsive task management application with add, edit, delete and organization features.',
    tech: 'React · JavaScript',
    url: 'https://github.com/sagu765/todo-app',
  },
  {
    title: 'Email Website',
    description:
      'A modern email interface with a clean UI design, responsive layout and polished interactions.',
    tech: 'React · CSS',
    url: 'https://github.com/sagu765/email-website',
  },
  {
    title: 'Counter Website',
    description:
      'An interactive counter application with increment, decrement, and reset functionality.',
    tech: 'JavaScript · Responsive UI',
    url: 'https://github.com/sagu765/counter-website',
  },
]

const experience = [
  {
    title: 'Frontend Development Intern',
    subtitle: 'CodeMe Hub',
    date: '2024 - Present',
    description:
      'Worked on responsive UI features and built reusable components for modern web pages.',
  },
]

const certifications = [
  'NIT Calicut Certificate',
  'Computer Organization and Architecture (COA)',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setMenuOpen((state) => !state)

  return (
    <div className="app-shell">
      <Navbar links={navLinks} menuOpen={menuOpen} onToggleMenu={toggleMenu} />

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Hello, I&apos;m</span>
            <h1>Sageth Sanal</h1>
            <p className="hero-role">CSE Student & Frontend Developer</p>
            <p className="hero-description">
              I build responsive and polished web applications with React, JavaScript,
              and modern frontend tooling. Currently studying Computer Science
              Engineering at SNGCET and seeking internship opportunities.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/resume.txt" download>
                Download Resume
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-panel" data-reveal>
            <div className="hero-panel-glow" />
            <div className="hero-panel-content">
              <p className="panel-eyebrow">Profile</p>
              <h2>SNGCET · B.Tech CSE · 3rd Year</h2>
              <div className="profile-list">
                <div>
                  <span>Role</span>
                  <strong>Frontend Developer</strong>
                </div>
                <div>
                  <span>Internship</span>
                  <strong>CodeMe Hub</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>India</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-grid" id="about" data-reveal>
          <SectionHeader
            title="About"
            subtitle="A driven student creating modern user experiences."
          />
          <div className="glass-card">
            <p>
              I am a 3rd-year Computer Science Engineering student at SNGCET with a strong interest
              in frontend development and modern web technologies. I enjoy building responsive
              and user-friendly web applications using React and JavaScript. I am passionate about
              learning new technologies, solving real-world problems, and continuously improving
              my development skills.
            </p>
          </div>
        </section>

        <section className="section-grid" id="education" data-reveal>
          <SectionHeader
            title="Education"
            subtitle="Academic foundation for software engineering."
          />
          <div className="glass-card">
            <h3>SNGCET</h3>
            <p>B.Tech Computer Science Engineering</p>
            <span>3rd Year Student</span>
          </div>
        </section>

        <section className="section-grid" id="skills" data-reveal>
          <SectionHeader
            title="Skills"
            subtitle="Core languages and tools I use today."
          />
          <div className="skill-grid">
            {skills.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </div>
        </section>

        <section className="section-grid" id="experience" data-reveal>
          <SectionHeader
            title="Internship Experience"
            subtitle="Hands-on frontend development work."
          />
          <div className="timeline-grid">
            {experience.map((item) => (
              <TimelineItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="section-grid" id="projects" data-reveal>
          <SectionHeader
            title="Projects"
            subtitle="Featured work built for learning and impact."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="section-grid" id="certifications" data-reveal>
          <SectionHeader
            title="Certifications"
            subtitle="Credentials that reflect my learning journey."
          />
          <div className="certification-grid">
            {certifications.map((certification) => (
              <div key={certification} className="cert-card">
                <span>•</span>
                <p>{certification}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-grid contact-section" id="contact" data-reveal>
          <SectionHeader
            title="Contact"
            subtitle="Open to internships, collaborations, and new ideas."
          />
          <div className="contact-panel glass-card">
            <div>
              <p className="contact-label">Email</p>
              <a href="mailto:sagethsanalsageth@gmail.com">sagethsanalsageth@gmail.com</a>
            </div>
            <div>
              <p className="contact-label">GitHub</p>
              <a href="https://github.com/sagu765" target="_blank" rel="noreferrer">
                github.com/sagu765
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
