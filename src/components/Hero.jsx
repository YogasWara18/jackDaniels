const Hero = () => {
  return (
    <section id="hero" className="noisy">
        <h1 className="title">JackDaniel's</h1>

        <img 
        src="/images/hero-left-leaf.png" 
        alt="left-leaf"
        className="left-leaf"
        />

          <img 
        src="/images/hero-right-leaf.png" 
        alt="right-leaf"
        className="right-leaf w-40"
        />

        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Cool. Crisp. Classic.</p>
                    <p className="subtitle">
                        Sip the Spirit <br /> of Summer
                    </p>
                </div>

                <div className="view-cocktails">
                    <p className="subtitle">
                        Whisky is a distilled spirit crafted from grains, rich in aroma, warm in taste, layered in character, savored slowly as a timeless symbol of tradition, elegance, and camaraderie.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
