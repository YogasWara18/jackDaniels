import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stragger: 0.06,
            delay: 1, 
        })
    }, []);

  return (
    <section id="hero" className="noisy">
      <h1 className="title">JackDaniel's</h1>

      <img
        src="/images/hero-left-leaf.png"
        alt="left-leaf"
        className="left-leaf w-45"
      />

      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        className="right-leaf w-90"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-2 hidden md:block">
            <p className="pl-16">Characterful. Warm. Elegant.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className="space-y-3 view-cocktails">
            <p className="subtitle">
              Whisky is an elegant, warm, characterful spirit with smoky aroma, complex flavors, and a smooth, captivating finish.
            </p>
            <a href="#whisky">View Whisky</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
