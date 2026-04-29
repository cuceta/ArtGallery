import "../styles/copyrightPage.css";
import { useState } from "react";

const sections = [
  {
    label: "Images",
    citations: [
      {
        text: "Art Gallery of Ontario. (2013). Yayoi Kusama: Infinity Mirrors | Art Gallery of Ontario.",
        url: "https://ago.ca/exhibitions/kusama",
      },
      {
        text: "McDonald, J. (2025b, January 14). Yayoi Kusama - 999 Artworks, Bio & Shows on Artsy.",
        url: "https://www.artsy.net/artist/yayoi-kusama",
      },
      {
        text: "McDonald, J. (2025a, January 14). Yayoi Kusama. Everything the artworld doesn't want you to know.",
        url: "https://www.everythingthe.com/p/yayoi-kusama",
      },
      {
        text: "Yayoi Kusama // The Configuration of Desire, 1954. (2024). Geist.",
        url: "https://geistmc.com/our-artists/yayoi-kusama/original-works/",
      },
    ],
  },
  {
    label: "Timeline",
    citations: [
      {
        text: "M+. (n.d.). The Life and Career of Yayoi Kusama: A Timeline | M+.",
        url: "https://www.mplus.org.hk/en/magazine/yayoi-kusama-biography-timeline/",
      },
      {
        text: "SOTHEBY'S. (2020, May 15). Hypnotic and Alluring: Yayoi Kusama's Infinity Nets.",
        url: "https://www.sothebys.com/en/articles/hypnotic-and-alluring-yayoi-kusamas-infinity-nets",
      },
    ],
  },
  {
    label: "General Info",
    citations: [
      {
        text: "Tate. (2022). An Introduction to Yayoi Kusama. Tate.",
        url: "https://www.tate.org.uk/art/artists/yayoi-kusama-8094/introduction-yayoi-kusama",
      },
      {
        text: "Wikipedia Contributors. (2019, April 11). Yayoi Kusama. Wikipedia; Wikimedia Foundation.",
        url: "https://en.wikipedia.org/wiki/Yayoi_Kusama",
      },
      {
        text: "Kusama, Y. (2024). Biography | Yayoi Kusama.",
        url: "https://yayoi-kusama.jp/e/biography/index.html",
      },
      {
        text: "Guggenheim. (2019). Yayoi Kusama. Guggenheim.org.",
        url: "https://www.guggenheim.org/artwork/artist/yayoi-kusama",
      },
      {
        text: "Miro, V. (2012). Yayoi Kusama. Victoria Miro.",
        url: "https://www.victoria-miro.com/artists/31-yayoi-kusama/",
      },
    ],
  },
];

const Copyright = () => {
  const [open, setOpen] = useState({});

  const toggle = (i) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <>
      <div className="copyrightPage">
        <h1>Copyright</h1>

        <p>
          This virtual gallery is a non-commercial educational project created
          as part of coursework at the State University of New York at Oswego.
          The exhibition is intended only for educational purposes and academic
          evaluation. No commercial use or profit is derived from this project.
          <br />
          <br />
          This virtual gallery was created for educational purposes as part of
          an academic project at SUNY Oswego. All materials used in this
          exhibition are attributed on the virtual gallery, and every effort has
          been made to respect copyright and intellectual property rights. The
          artworks featured in this gallery remain the property of their
          respective copyright holders. All images of Fernando Botero's
          paintings and sculptures are used under fair use for educational
          purposes.
        </p>
        <p>
          All sources used in this project are listed below, organized by the
          type of information they provided. Click each category to expand its
          citations.
        </p>

        <div className="cr-sections">
          {sections.map((section, i) => (
            <div
              key={i}
              className={`cr-section ${open[i] ? "cr-section--open" : ""}`}
            >
              <button className="cr-header" onClick={() => toggle(i)}>
                <span className="cr-label">{section.label}</span>
                <span className="cr-count">
                  {section.citations.length} source
                  {section.citations.length !== 1 ? "s" : ""}
                </span>
                <span className="cr-chevron">{open[i] ? "▲" : "▼"}</span>
              </button>

              <div className="cr-body">
                <ol className="cr-list">
                  {section.citations.map((c, j) => (
                    <li key={j} className="cr-item">
                      <span className="cr-cite-text">{c.text}</span>{" "}
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="cr-link"
                      >
                        {c.url}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Copyright;
