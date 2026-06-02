export default function StatsBar() {
  return (
    <section className="statsbar">
      <div className="statsbar-grid">
        <div className="statsbar-cell reveal">
          <div className="n">
            500<span className="accent">+</span>
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
          <div className="n">DGQA</div>
          <div className="l">Approved vendor</div>
        </div>
      </div>
    </section>
  )
}
