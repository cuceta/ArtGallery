import "../styles/galleryPage.css";

import polkaDots from "../assets/artWork/theHopeOfThePolkaDots.png";
import infinityMirrorRoom from "../assets/artWork/infinityMirroredRoom.jpg";
import mushrooms from "../assets/artWork/mushrooms.png";

const Gallery = () => {
  return (
    <>
      <div className="galleryPage">
        <h2>Immersive Experience</h2>
        <div className="VRGallery">
          <p>Check out our virtual gallery of Yayoi Kusama's work</p>
          <button>
            <a
              href="https://www.spatial.io/s/CrislennyUs-Hi-Fi-Hangout-69ded9d777252f463dff5ec5?share=7581928211790252330"
              target="_blank"
            >
              VR Gallery
            </a>
          </button>
        </div>
        <div className="video">
          <iframe
            width="1100"
            height="680"
            src="https://www.youtube.com/embed/8VwJMw_fLvI?si=LE5N8SPAw8CljiLk&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; mute"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2>Best Known Works</h2>
          <p style={{ textAlign: "center", marginBottom: "0" }}>
            These are some of Yayoi Kusama's best known pieces
          </p>

          <div className="artWork" style={{ marginTop: "50px" }}>
            <img
              src={polkaDots}
              alt="Yayoi Kusama, The Hope of the Polka Dots Buried in Infinity Will Eternally Cover the Universe (2019)"
            ></img>
            <div className="description">
              <h3>
                The Hope of the Polka Dots Buried in Infinity Will Eternally
                Cover the Universe, 2019.
              </h3>
              <p>
                Created in 2019, this large scale painting belongs to Kusama's
                celebrated My Eternal Soul series, a body of work she began in
                2009 that now numbers in the hundreds. Bold, black outlines
                define swirling, densely packed forms across a vivid background,
                every inch of the canvas humming with restless energy. The
                composition leaves no room to breathe, which is precisely the
                point.
                <br />
                <br />
                This is not a dark vision of being swallowed by infinity, but a
                joyful surrender to it. In her view the universe does not erase
                us, it instead holds us, endlessly and completely.
              </p>
            </div>
          </div>

          <div className="artWork">
            <div className="description">
              <h3>
                Infinity Mirrored Room &ndash; The Souls of Millions of Light
                Years Away, 2013.
              </h3>
              <p>
                Created in 2013 and now one of the most sought-after museum
                experiences in the world, this installation places visitors
                inside a darkened chamber lined floor to ceiling with mirrors.
                Suspended throughout the space are hundreds of small LED lights,
                each one shifting slowly through a spectrum of color. The effect
                is immediate, the room appears to extend outward in every
                direction without limit.
                <br />
                <br />
                Visitors are admitted one or two at a time, given just 45
                seconds inside before the next person enters. That brief window
                is intentional. Kusama wants the encounter to feel fleeting,
                almost dreamlike. The lights suggest stars, souls, or cells; the
                mirrors ensure they never end.
                <br />
                <br />
                The work draws directly from her lifelong experience of
                hallucination and her philosophical preoccupation with
                self-obliteration, a momentary dissolving of the self into
                something vast and uncontainable. Standing inside, it becomes
                easy to believe her. The room gives the genuine sensation of
                infinity.
              </p>
            </div>
            <img
              src={infinityMirrorRoom}
              alt="Yayoi Kusama, The Hope of the Polka Dots Buried in Infinity Will Eternally Cover the Universe (2019)"
            ></img>
          </div>

          <div className="artWork">
            <img
              src={mushrooms}
              alt="Yayoi Kusama, The Hope of the Polka Dots Buried in Infinity Will Eternally Cover the Universe (2019)"
            ></img>
            <div className="description">
              <h3>Mushrooms, 2005.</h3>
              <p>
                Created in 2005, Mushrooms belongs to a recurring cast of
                organic forms that have populated Kusama's visual world for
                decades. Rendered in her signature style, the mushrooms rise
                from the canvas in clusters, their caps dense with dots and bold
                black contours that pulse with the same obsessive energy found
                across her broader practice. They are familiar yet strange,
                natural objects pushed through her singular lens until they
                become something otherworldly.
                <br />
                <br />
                Mushrooms held a particular psychological resonance for Kusama
                from early in her life. As a child in rural Japan, she reported
                seeing the natural world around her (things like flowers, plants, and fungi
                 ) begin to speak and vibrate with threatening energy. Painting
                these forms was her way of confronting and neutralizing that
                fear, pinning the vision to canvas before it could overwhelm
                her.
                <br />
                <br />
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
