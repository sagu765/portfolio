export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{title}</p>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  )
}
