export default function StatsBar() {
  return (
    <section className="statsbar">
      <div className="statsbar-grid">
        <div className="statsbar-cell reveal">
          <div className="n">
            2000<span className="accent">+</span>
          </div>
          <div className="l">Vehicles delivered</div>
        </div>
        <div className="statsbar-cell reveal">
          <div className="n">
            15<span className="accent">+</span>
          </div>
          <div className="l">States served</div>
        </div>
        <div className="statsbar-cell reveal">
          <div className="n">
            50<span className="accent">+</span>
          </div>
          <div className="l">PSU clients</div>
        </div>
        <div className="statsbar-cell reveal">
          <div className="n">
            38<span className="accent">+</span>
          </div>
          <div className="l">Years of expertise</div>
        </div>
      </div>
    </section>
  )
}
