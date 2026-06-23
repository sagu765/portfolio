export default function TimelineItem({ title, subtitle, date, description }) {
  return (
    <div className="timeline-item" data-reveal>
      <div className="timeline-marker" />
      <div className="timeline-content">
        <span className="timeline-date">{date}</span>
        <h3>{title}</h3>
        <p className="timeline-subtitle">{subtitle}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
