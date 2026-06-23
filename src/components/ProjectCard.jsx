export default function ProjectCard({ title, description, tech, url }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-meta">
        <span>{tech}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="project-link" href={url} target="_blank" rel="noreferrer">
        View Live
      </a>
    </article>
  )
}
