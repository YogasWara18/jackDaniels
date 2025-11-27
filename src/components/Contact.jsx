import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline
        .from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .to('#f-right-leaf', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        })
        .to('#f-left-leaft', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        })
    })


  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
        className="w-45"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-right"
        id="f-left-leaf"
        className="w-90"
      />

      <div className="content">
        <h2> “Raise Your Glass Higher” </h2>
        <div>
          <h3>Welcome To</h3>
          <p>
            Jack Daniel Distillery, 280 Lynchburg Hwy, Lynchburg, TN 37352, USA
          </p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>+1-888-551-5225</p>
          <p>tonyc@gwfg.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
            <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
                <a key={social.name} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    >
                        <img src={social.icon} />
                    </a>
            ))}
          </div>

        </div>

       
      </div>
       <div>
            <p>© 2025 Yogas Wara. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Contact;
