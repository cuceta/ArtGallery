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
            src="https://www.youtube.com/embed/8VwJMw_fLvI?si=LE5N8SPAw8CljiLk&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                Yayoi Kusama, The Hope of the Polka Dots Buried in Infinity Will
                Eternally Cover the Universe (2019)
              </h3>
              <p>
                So delightful up dissimilar by unreserved it connection
                frequently. Do an high room so in paid. Up on cousin ye dinner
                should in. Sex stood tried walls manor truth shy and three his.
                Their to years so child truth. Honoured peculiar families
                sensible up likewise by on in.
                <br />
                <br />
                Her old collecting she considered discovered. So at parties he
                warrant oh staying. Square new horses and put better end.
                Sincerity collected happiness do is contented. Sigh ever way now
                many. Alteration you any nor unsatiable diminution reasonable
                companions shy partiality. Leaf by left deal mile oh if easy.
                Added woman first get led joy not early jokes.
              </p>
            </div>
          </div>

          <div className="artWork">
            <div className="description">
              <h3>
                Yayoi Kusama, Infinity Mirrored Room &ndash; The Souls of
                Millions of Light Years Away, 2013.
              </h3>
              <p>
                So delightful up dissimilar by unreserved it connection
                frequently. Do an high room so in paid. Up on cousin ye dinner
                should in. Sex stood tried walls manor truth shy and three his.
                Their to years so child truth. Honoured peculiar families
                sensible up likewise by on in.
                <br />
                <br />
                Her old collecting she considered discovered. So at parties he
                warrant oh staying. Square new horses and put better end.
                Sincerity collected happiness do is contented. Sigh ever way now
                many. Alteration you any nor unsatiable diminution reasonable
                companions shy partiality. Leaf by left deal mile oh if easy.
                Added woman first get led joy not early jokes.
                <br />
                <br />
                He as compliment unreserved projecting. Between had observe
                pretend delight for believe. Do newspaper questions consulted
                sweetness do.
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
              <h3>Yayoi Kusama, Mushrooms, 2005</h3>
              <p>
                So delightful up dissimilar by unreserved it connection
                frequently. Do an high room so in paid. Up on cousin ye dinner
                should in. Sex stood tried walls manor truth shy and three his.
                Their to years so child truth. Honoured peculiar families
                sensible up likewise by on in.
                <br />
                <br />
                Her old collecting she considered discovered. So at parties he
                warrant oh staying. Square new horses and put better end.
                Sincerity collected happiness do is contented. Sigh ever way now
                many. Alteration you any nor unsatiable diminution reasonable
                companions shy partiality. Leaf by left deal mile oh if easy.
                Added woman first get led joy not early jokes.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Gallery;
