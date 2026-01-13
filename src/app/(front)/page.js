"use client";

import "./home.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const sports = [
    { name: "FOOTBALL", slug: "football", image: "/images/Football.webp" },
    { name: "BASKETBALL", slug: "basketball", image: "/images/Basketball.webp" },
    { name: "AMERICAN FOOTBALL", slug: "americanfootball", image: "/images/AmericanFootball.webp" },
    { name: "CRICKET", slug: "cricket", image: "/images/Cricket.webp" },
    { name: "HOCKEY", slug: "hockey", image: "/images/Hockey.webp" },
    { name: "BASEBALL", slug: "baseball", image: "/images/Baseball.webp" },
    { name: "MOTOR-SPORTS", slug: "motorsports", image: "/images/Motorsports.webp" },
    { name: "FIGHT", slug: "fight", image: "/images/Fight.webp" },
    { name: "TENNIS", slug: "tennis", image: "/images/Tennis.webp" },
    { name: "RUGBY", slug: "rugby", image: "/images/Rugby.webp" },
    { name: "GOLF", slug: "golfs", image: "/images/Golf.webp" },
    { name: "BILLIARDS", slug: "billiars", image: "/images/Billiards.webp" },
    { name: "AFL", slug: "afl", image: "/images/AFL.webp" },
    { name: "DARTS", slug: "dart", image: "/images/Darts.webp" },
    { name: "OTHERS", slug: "others", image: "/images/Others.webp" },
  ];


  const [viewCounts, setViewCounts] = useState({});

  useEffect(() => {
    const stored = sessionStorage.getItem("view_counts");
    if (stored) {
      setViewCounts(JSON.parse(stored));
    } else {
      const init = {};
      sports.forEach(s => (init[s.slug] = 0));
      setViewCounts(init);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(viewCounts).length > 0) {
      sessionStorage.setItem("view_counts", JSON.stringify(viewCounts));
    }
  }, [viewCounts]);

  const handleCardClick = (slug) => {
    const key = `watching_${slug}`;

    if (!sessionStorage.getItem(key)) {
      setViewCounts(prev => ({
        ...prev,
        [slug]: prev[slug] + 1,
      }));

      sessionStorage.setItem(key, "true");
    }

    router.push("/" + slug);
  };

  useEffect(() => {
    const handleUnload = () => {
      const stored = sessionStorage.getItem("view_counts");
      if (!stored) return;

      let counts = JSON.parse(stored);

      sports.forEach(sport => {
        const key = `watching_${sport.slug}`;
        if (sessionStorage.getItem(key)) {
          counts[sport.slug] = Math.max(counts[sport.slug] - 1, 0);
          sessionStorage.removeItem(key);
        }
      });

      sessionStorage.setItem("view_counts", JSON.stringify(counts));
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <div className="home">
      <section className="categories">
        <div className="category-grid">

          {sports.map(sport => (
            <div
              key={sport.slug}
              className="category-card"
              onClick={() => handleCardClick(sport.slug)}
              style={{ cursor: "pointer" }}
            >
              <span className="badge hover-badge">
                {viewCounts[sport.slug] ?? 0} 👁️
              </span>

              <img src={sport.image} alt={sport.name} />
              <p>{sport.name}</p>
            </div>
          ))}

        </div>
      </section>

      <section className="passionate">
        <p>
          Looking for a dependable platform to enjoy live sports online without hassle?
          <strong> Buffstreamz</strong> is designed for true sports fans who never want
          to miss live action. Our smooth layout and fast-loading streams make watching
          sports online simple and enjoyable.

          From global cricket tournaments and top football leagues to NFL, NBA,
          MMA, and more — Buffstreamz connects you to live sports from around the world.
          Watch matches in high quality and stay in the game wherever you are.

          Choose Buffstreamz today and elevate the way you experience live sports streaming.
        </p>
      </section>

      <section className="why-section">

        <h2 className="why-title">
          <span></span>
          WHY BUFFSTREAMZ STANDS OUT
          <span></span>
        </h2>

        <div className="why-wrapper">

          <div className="why-item">
            <div className="why-number">1</div>
            <div className="why-box">
              <h3>Complete Sports Streaming Hub</h3>
              <p>
                No matter which sport you follow — <strong>cricket</strong>,
                <strong> football</strong>, <strong>basketball</strong>, or <strong>MMA</strong> —
                Buffstreamz delivers live coverage across major leagues and events.
                From international tournaments to professional championships,
                everything is available in one place.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-number">2</div>
            <div className="why-box">
              <h3>High-Definition Streaming Experience</h3>
              <p>
                Enjoy live sports in clear <strong>HD quality</strong> with smooth playback.
                Buffstreamz intelligently adjusts stream quality to match your connection,
                ensuring minimal buffering and uninterrupted viewing.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-number">3</div>
            <div className="why-box">
              <h3>Real-Time Sports Information</h3>
              <p>
                Stay informed with up-to-date match schedules, live scores,
                and key highlights. Buffstreamz keeps you connected to
                every important sports moment as it happens.
              </p>
            </div>
          </div>

        </div>

      </section>

      <section className="offer-section">

        <h2 className="offer-title">
          <span></span>
          SPORTS YOU CAN WATCH
          <span></span>
        </h2>

        <div className="offer-grid">

          <div className="offer-card">
            <strong>Cricket:</strong> Follow major leagues and tournaments including
            <em> IPL</em>, <em>PSL</em>, <em>BPL</em>, and international series.
          </div>

          <div className="offer-card">
            <strong>Football:</strong> Watch live action from top leagues such as
            <em> Premier League</em>, <em>La Liga</em>, and other global competitions.
          </div>

          <div className="offer-card">
            <strong>NFL & Basketball:</strong> Stream live
            <em> NFL</em> games and exciting <em>NBA</em> fixtures in one place.
          </div>

          <div className="offer-card">
            <strong>MMA & Boxing:</strong> Experience every round and knockout from
            <em> UFC</em> fights and major boxing events worldwide.
          </div>

          <div className="offer-card">
            <strong>Tennis & Ice Hockey:</strong> Enjoy live coverage from
            <em> Grand Slam</em> tournaments and professional <em>NHL</em> games.
          </div>

          <div className="offer-card">
            <strong>Motorsports:</strong> Watch high-speed races from
            <em> Formula 1</em>, <em>NASCAR</em>, and <em>MotoGP</em>.
          </div>

          <div className="offer-card">
            <strong>eSports:</strong> Stream competitive matches from popular titles
            like <em>CS:GO</em>, <em>Valorant</em>, and <em>League of Legends</em>.
          </div>

          <div className="offer-card">
            <strong>Golf:</strong> Follow live events from the
            <em> PGA Tour</em> and international championships.
          </div>

        </div>

      </section>

      <section className="commit-section">
        <div className="commit-box">
          <h2>Our Promise to Sports Fans</h2>
          <p>
            <strong>Buffstreamz</strong> exists for fans who live and breathe sports.
            Whether it’s a tense football showdown, an explosive UFC fight,
            or a high-stakes basketball game, we bring the excitement directly to you.
          </p>
          <p>
            We focus on performance, reliability, and viewer satisfaction.
            With fast access to live games and stable streams, Buffstreamz
            ensures you stay focused on the action — not the loading screen.
          </p>
          <p className="commit-highlight">
            🚀 Sports never stop — and neither do we. Stream live with Buffstreamz.
          </p>
          <Link href="football" className="commit-btn">Watch Live Sports Now</Link>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-box">
          <h2>Start Streaming with Buffstreamz</h2>
          <p>
            Thousands of sports enthusiasts rely on Buffstreamz for live streaming
            every day. Whether you’re deeply invested in one sport or enjoy watching
            them all, Buffstreamz gives you easy access to live sports anytime.
          </p>
        </div>
      </section>

    </div>
  );
}


