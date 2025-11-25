const About = () => {
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Whisky</p>
            <h2>
              The finest whisky brings warmth{" "}
              <span className="text-white">-</span>
              elegance and timeless memories
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Whisky tastes best on quiet nights, in warm bars, during rainy
              evenings, or special celebrations; bringing warmth, elegance,
              closeness, and unforgettable memories.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.8</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt1.png" alt="grid-img-1" />
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="noisy">
            <img src="/images/abt2.png" alt="grid-img-2" />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="noisy">
            <img src="/images/abt5.png" alt="grid-img-5" />
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy">
              <img src="/images/abt3.png" alt="grid-img-3" />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="noisy">
              <img src="/images/abt4.png" alt="grid-img-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
