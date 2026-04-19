import "../styles/bioPage.css";
import hero from "../assets/heroBackground.png";
import Footer from "../components/footer";

const Bio = () => {
  return (
    <>
      <div className="heroSection">
        <img
          src={hero}
          alt="Yayoi Kusama, All the Eternal Love I Have for the Pumpkins"
        ></img>
        <div class="text-overlay">Yayoi Kusama</div>
      </div>

      <div className="content">
        <div className="leftAligned">
          <h1>Japanese Contemporary Artist</h1>
          <p>
            Yayoi Kusama is one of the most influential and celebrated artists
            of the 21st century. Her prolific career, which spans over seven
            decades, encompasses painting, sculpture, installation, performance
            art, and fashion. Known globally as the "<u>Queen of Polka Dots</u>
            ", Kusama&#39;s work is characterized by repetitive patterns,
            obsessive motifs, and immersive environments that explore the
            boundary between the self and the infinite.
          </p>
        </div>

        <div className="rightAligned">
          <h1>Early Life and "Self-Obliteration"</h1>
          <p>
            Born in 1929 in Matsumoto, Japan, Kusama began experiencing vivid
            hallucinations at the age of ten, described as "flashes of light,
            auras, or dense fields of dots." These visions, where patterns in
            fabric or flowers would multiply and surround her, became the
            foundation of her artistic philosophy:{" "}
            <strong>Self-Obliteration</strong>. To manage her anxiety and
            trauma, she began translating these hallucinations into art, using
            dots and nets to "obliterate" the world around her.
            <br />
            <br />
            <u>Self-Obliteration</u> refers to the feeling of the boundary
            between oneself and the other getting lost in the obsessive
            repetition of a single pattern.
          </p>
        </div>

        <div className="leftAligned">
          <h1>New York and the Avant-Garde</h1>
          <p>
            In 1958, seeking creative freedom and encouraged by a correspondence
            with American painter Georgia O&#39;Keeffe, Kusama moved to New York
            City. She quickly became a central figure in the avant-garde scene.
            <ul>
              <li>
                <strong>Infinity Nets:</strong> Her early fame came from
                massive, monochromatic canvases covered in tiny, interlocking
                loops of paint. Accumulation
              </li>
              <li>
                <strong>Sculptures:</strong> She began covering everyday objects
                in thousands of soft, phallic fabric protrusions, reflecting her
                psychological obsessions.
              </li>
              <li>
                <strong>Happenings:</strong> During the late 1960s, she staged
                provocative performance art "happenings" in public spaces like
                Central Park and the Brooklyn Bridge, often involving anti-war
                protests and painting polka dots on naked participants.
              </li>
            </ul>
          </p>
        </div>

        <div className="rightAligned">
          <h1>The Return to Japan and Resurgence</h1>
          <p>
            Kusama returned to Japan in 1973. In 1977, she voluntarily admitted
            herself to a psychiatric hospital in Tokyo, where she continues to
            live and work today. While her work was momentarily overlooked in
            the 1970s, a major retrospective at the Center for International
            Contemporary Arts in New York (1989) sparked a massive global
            resurgence.
            <br />
            <br />
            In 1993, she became the first woman to represent Japan with a solo
            presentation at the <strong>Venice Biennale</strong>, cementing her
            status as a national treasure.
          </p>
        </div>

        <div className="leftAligned">
          <h1>Legacy and Modern Iconography</h1>
          <p>
            Today, Kusama is best known for her{" "}
            <strong>Infinity Mirror Rooms</strong>, immersive installations that
            use mirrors and LED lights to create the illusion of a limitless
            universe. Her iconic, spotted <strong>Pumpkins</strong>, is also
            among her best known works which she describes as "generous" and
            "unpretentious" forms.
            <br />
            <br />
            Her recent collaborations with brands like Louis Vuitton and
            record-breaking exhibitions worldwide have made her a global
            pop-culture icon, proving that her vision of "Love Forever" and
            "Infinity" continues to resonate across generations.
          </p>
        </div>

        <div className="video">
            <h2>Want to know more about Yayoi Kusama?</h2>

          <iframe
            width="1100"
            height="680"
            src="https://www.youtube.com/embed/iT360Glhb9o?si=GmCn0ROO7OFvt3QN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

      </div>
      
    </>
  );
};

export default Bio;
