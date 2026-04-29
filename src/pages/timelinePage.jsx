import { useEffect, useRef } from "react";
import "../styles/timelinePage.css";
// import phallisField from "/phallisField.jpg"

const events = [
  {
    year: "1929",
    type: "personal",
    title: "Born in Matsumoto, Nagano Prefecture, Japan",
    description:
      "Born March 22 into a wealthy family who ran a plant nursery and seed business, an environment that would profoundly shape her obsession with natural forms.",
  },
  {
    year: "~1935",
    type: "personal",
    title: "First hallucinations begin",
    description:
      "From early childhood she experienced visual and auditory hallucinations, like flowers speaking, patterns consuming the world. Art became her way of exorcising these visions.",
  },
  {
    year: "~1937",
    type: "personal",
    title: "Difficult childhood home life",
    description:
      "Her mother was cold and controlling; her father had repeated affairs. She has described her mother sending her to spy on him. This emotional trauma deeply influenced her psychological art.",
  },
  {
    year: "1944",
    type: "personal",
    title: "Studies at Kyoto Municipal School of Arts & Crafts",
    description:
      "Receives formal training in Japanese Nihonga painting — a traditional technique she would soon rebel against in favor of avant-garde expression.",
  },
  {
    year: "1952",
    type: "artistic",
    badge: "exhibition",
    title: "First solo exhibition in Matsumoto",
    image: "/timelineArt/1952.jpg",
    caption: "Kusama in front of Lingering Dream (1949)",
    description:
      "Exhibits watercolors and oil paintings inspired by her hallucinations at Matsumoto City Museum. Critics note an unusual, obsessive sensibility unlike anything in Japanese contemporary art at the time.",
  },
  {
    year: "1957",
    type: "personal",
    title: "Emigrates to the United States",
    description:
      "Armed with Georgia O'Keeffe's encouraging letters and $2,000 sewn into her kimono, she moves to Seattle then New York City, determined to make it as an artist on the world stage. Before leaving Japan, Kumasa destroys almost all her existing works.",
  },
  {
    year: "1958",
    type: "artistic",
    badge: "painting",
    title: "Infinity Net paintings begin",
    image: "/timelineArt/1958.jpg",
    caption: "Kusama at her New York studio in 1961 with Infinity Nets works",
    description:
      "She begins the monumental series of large-scale canvases covered in repetitive, looping net-like patterns — sometimes over ten feet wide. They predate and arguably anticipate Minimalism, yet born entirely from obsessive psychological compulsion rather than theory.",
  },
  {
    year: "1958",
    type: "personal",
    title: "Settles in New York City",
    description:
      "Moves into a studio at 59th Street, living in near-poverty while working obsessively. She would live in New York for nearly two decades, becoming a central — if often overlooked — figure in the avant-garde scene.",
  },
  {
    year: "1959",
    type: "artistic",
    badge: "exhibition",
    image: "/timelineArt/1959.jpg",
    caption: "Yayoi Kusama, No. F (1959)",
    title: "Critical acclaim for Infinity Nets in New York",
    description:
      "Donald Judd reviews her show favorably, comparing the nets to the scale and ambition of Abstract Expressionism. Her reputation in the New York art world begins to build.",
  },
  {
    year: "1962",
    type: "artistic",
    badge: "installation",
    image: "/timelineArt/1962.jpg",
    caption: "Yayoi Kusama, Accumulation No. 1 (1962)",
    title: "Soft sculpture and Aggregation works",
    description:
      "She begins covering furniture, shoes, ladders, and everyday objects in hundreds of hand-sewn fabric protrusions — predating Arte Povera and Post-Minimalism, confronting her own sexual anxieties through form.",
  },
  {
    year: "1965",
    type: "artistic",
    badge: "installation",
    image: "/timelineArt/phallisField.jpg",
    caption: "Yayoi Kusama, Phalli's Field (1965)",
    title: "Infinity Mirror Room — Phalli's Field",
    description:
      "Her first mirrored infinity room, soft fabric forms reflected endlessly in mirrored walls. One of the most influential installations of the 20th century and the origin of a format she would refine for decades.",
  },
  {
    year: "1966",
    type: "personal",
    title: "Close relationship with Joseph Cornell",
    description:
      "Develops an intense, decades-long platonic bond with the reclusive Cornell. She has described it as a profound emotional connection which was deeply felt on both sides, though never physically consummated per her accounts.",
  },
  {
    year: "1966",
    type: "artistic",
    badge: "performance",
    image: "/timelineArt/1966.jpg",
    caption: "Yayoi Kusama, Narcissus Garden, 1966, installed in Venice Biennale, Italy, 1966",
    title: "Narcissus Garden at the Venice Biennale",
    description:
      "Without an official invitation, she places 1,500 mirrored spheres on the lawn of the Italian Pavilion and attempts to sell them for $2 each. The Biennale organisers expel her. The work is now considered one of the most iconic conceptual art gestures of the era.",
  },
  {
    year: "1967",
    type: "artistic",
    badge: "performance",
    image: "/timelineArt/1967.jpg",
    caption: "Yayoi Kusama Hapennings",
    title: "Body-painting happenings in New York",
    description:
      "She organizes naked body-painting events at the Brooklyn Bridge and Central Park, painting polka dots directly onto participants. The happenings draw massive press attention and cement her position at the center of the counterculture.",
  },
  {
    year: "1968",
    type: "personal",
    title: "FBI surveillance during anti-war activism",
    description:
      "Her naked happenings and anti-Vietnam protests attract FBI attention. She becomes one of the most visible counterculture provocateurs in New York, staging events at Wall Street and outside the White House.",
  },
  {
    year: "1972",
    type: "personal",
    title: "Joseph Cornell dies",
    description:
      "Cornell's death in December leaves Kusama bereft. She has described it as one of the most devastating losses of her life.",
  },
  {
    year: "1973",
    type: "personal",
    title: "Returns to Japan, hospitalized for mental health",
    description:
      "After years of severe psychological distress, she returns to Tokyo and begins psychiatric treatment. She voluntarily checks into a neuropsychiatric institution, a decision that would prove permanent.",
  },
  {
    year: "1977",
    type: "personal",
    title: "Moves permanently into psychiatric hospital",
    description:
      "She voluntarily takes up permanent residence at the Seiwa Hospital for the Mentally Ill in Shinjuku, Tokyo, where she maintains to this day. Her studio is a short walk away. She describes this as a lifesaving choice.",
  },
  {
    year: "1978",
    type: "artistic",
    image: "/timelineArt/1978.jpg",
    caption: "Yayoi Kusama, Violet Obsession (Poems), 1998",
    title: "Begins publishing novels and poetry in Japan",
    description:
      "During her relative withdrawal from the international art world, she turns to writing — publishing surrealist, semi-autobiographical novels and poetry collections. She would eventually publish over 20 books.",
  },
  {
    year: "1980s",
    type: "artistic",
    badge: "installation",
    image: "/timelineArt/1980s.jpg",
    caption: "Yayoi Kusama, Yellow Pumpkin (1994)",
    title: "Large-scale pumpkin sculptures emerge",
    description:
      "She develops her enduring obsession with pumpkins — she has said their 'generous' and 'bumpy' form comforts her. The polka-dotted pumpkin sculptures become among the most recognizable symbols of her entire practice.",
  },
  {
    year: "1993",
    type: "artistic",
    badge: "exhibition",
    image: "/timelineArt/1993.jpg",
    caption: "Yayoi Kusama, Mirror Room (Pumpkin)",
    title: "Represents Japan at the Venice Biennale (officially)",
    description:
      "Invited to the Japanese Pavilion, she installs the Mirror Room (Pumpkins). The exhibition marks her formal re-entry into the global art world after two decades of relative obscurity.",
  },
  {
    year: "1998",
    type: "artistic",
    badge: "exhibition",
    title: "Major retrospective tours U.S. and Europe",
    description:
      "A landmark retrospective travels to LACMA, MoMA PS1, Walker Art Center, and European venues — introducing her full body of work to a generation of new viewers and sparking a reevaluation of her pioneering role.",
  },
  {
    year: "2002",
    type: "personal",
    title: "Autobiography Infinity Net published in Japan",
    description:
      "Her memoir (published in English in 2011) provides the most personal account of her hallucinations, childhood trauma, New York years, and her ongoing relationship with art as self-therapy.",
  },
  {
    year: "2006",
    type: "artistic",
    badge: "award",
    title: "Praemium Imperiale Prize — Japan Art Association",
    description:
      "One of the most prestigious art prizes in the world, equivalent to a Nobel in the arts. Her win signals full institutional recognition at the highest levels of the international art world.",
  },
  {
    year: "2009",
    type: "personal",
    title: "Awarded the Order of Culture by Japan",
    description:
      "One of Japan's highest honours, presented by Emperor Akihito. A remarkable reversal for an artist once considered a scandalous exile from her own country.",
  },
  {
    year: "2012",
    type: "artistic",
    badge: "exhibition",
    image: "/timelineArt/2012.jpg",
    caption: "Yayoi Kusama collaboration with Louis Vuitton in 2012",
    title: "Collaboration with Louis Vuitton",
    description:
      "Her polka-dot patterns take over the Louis Vuitton global collection and flagship stores worldwide. Reportedly one of LV's most profitable partnerships ever, bringing her aesthetic to an entirely new global audience.",
  },
  {
    year: "2012",
    type: "artistic",
    badge: "exhibition",
    image: "/timelineArt/2012-2.jpg",
    caption: "Yayoi Kusama, The Passing Winter (2005)",
    title: "Tate Modern retrospective — most-visited show of the year",
    description:
      "Her retrospective at Tate Modern becomes the most-attended exhibition the museum had hosted to that point. The show then travels to the Whitney Museum of American Art. Queues stretch around the block.",
  },
  {
    year: "2016",
    type: "personal",
    title: "Yayoi Kusama Museum opens in Tokyo",
    description:
      "A five-storey museum dedicated solely to her work opens in Shinjuku — a block from where she lives. At 87, she is one of very few living artists to have their own dedicated museum in their hometown.",
  },
  {
    year: "2017",
    type: "artistic",
    badge: "installation",
    image: "/timelineArt/2017.jpg",
    caption: "Yayoi Kusama, Mirrored Room—The Souls of Millions of Light Years Away (2013)",
    title: "Infinity Mirrors exhibition at Hirshhorn Museum",
    description:
      "Six infinity mirror rooms displayed together for the first time. Timed tickets sell out instantly nationwide. It becomes one of the defining cultural events of the decade and a social media phenomenon.",
  },
  {
    year: "2019",
    type: "artistic",
    badge: "award",
    image: "/timelineArt/2019.jpg",
    caption: "Yayoi Kusama, Interminable Net #4 (1959)",
    title: "Named world's most popular artist",
    description:
      "Ranked the most visited and searched living artist in the world by Art Basel / UBS survey. A painting from the Infinity Nets series sells for over $7.1 million, a record for a living female artist at the time.",
  },
  {
    year: "2022",
    type: "artistic",
    badge: "exhibition",
    image: "/timelineArt/2022.jpg",
    caption: "Yayoi Kusama and Louis Vuitton Second collaboration, Infinity Dot bags for infinite possibilities.",
    title: "Second Louis Vuitton collaboration, age 93",
    description:
      "Louis Vuitton launches another global Kusama takeover featuring robotic 'Kusama' figures painting in store windows worldwide. It dominates global fashion coverage and demonstrates her sustained cultural vitality.",
  },
  {
    year: "Today",
    type: "artistic",
    badge: "painting",
    image: "/timelineArt/today.jpg",
    caption: "Yayoi Kusama TO MICHELLE OBAMA (2019)",
    title: "Still painting daily, age 95",
    description:
      "She works every day in her Shinjuku studio, continuing her My Eternal Soul series — large canvases of vivid, face-like forms begun in 2009. With over 500 works in the series, it represents one of the most sustained late-career bodies of work in art history.",
  },
];

const BADGE_LABELS = {
  painting: "Painting",
  installation: "Installation",
  performance: "Performance",
  award: "Award / Honor",
  exhibition: "Exhibition",
};

const Timeline = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timelinePage">
      <h1>Timeline</h1>

      <div className="tl-legend">
        <div className="legend-item">
          <span className="legend-swatch personal-swatch" />
          <span className="legend-label">Personal life</span>
        </div>
        <div className="legend-item">
          <span className="legend-swatch artistic-swatch" />
          <span className="legend-label">Artistic milestone</span>
        </div>
      </div>

      <div className="tl-container">
        <div className="tl-spine" />

        {events.map((event, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div
              key={i}
              className={`tl-item ${side} ${event.type}`}
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <div className="tl-card">
                <div className="tl-card-header">
                  <span className="tl-year">{event.year}</span>
                  {event.badge && (
                    <span className={`tl-badge badge-${event.badge}`}>
                      {BADGE_LABELS[event.badge]}
                    </span>
                  )}
                </div>
                <div className="tl-title">{event.title}</div>
                <div className="tl-desc">{event.description}</div>

                {event.image && (
                  <figure className="tl-figure">
                    <img
                      src={event.image}
                      alt={event.caption || event.title}
                      className="tl-image"
                    />
                    {event.caption && (
                      <figcaption className="tl-caption">
                        {event.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </div>
              <div className="tl-connector">
                <div className="tl-dot" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
