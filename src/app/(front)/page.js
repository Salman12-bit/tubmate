"use client";

import "./home.css";
import Link from "next/link";



export default function Home() {
  return (
    <div className="home">
      <section className="hero" id="home">
        <div className="bg-shape bg-shape-right-top"></div>
        <div className="bg-shape bg-shape-right-mid"></div>

        <div className="hero-content">
          <h1>Vedu App</h1>
          <p className="sub-text">Unlimited TV Shows & Movies</p>


          <div className="features-row">
            <div className="feature-item">
              <img
                src="https://veduapp.cc/uploads/live-tv.webp"
                alt="Live TV"
              />
              <span>Live TV</span>
            </div>
            <div className="feature-item">
              <img
                src="https://veduapp.cc/uploads/movies.webp"
                alt="Movies"
              />
              <span>Movies</span>
            </div>
            <div className="feature-item">
              <img
                src="https://veduapp.cc/uploads/tv-shows.webp"
                alt="TV Shows"
              />
              <span>TV Shows</span>
            </div>
          </div>

          <Link href="#" className="btn">
            FREE DOWNLOAD NOW
          </Link>


          <div className="security-section">
            <p className="verified">
              <img
                src="https://veduapp.cc/uploads/security-verified.webp"
                alt="verified"
              />
              Security Verified
            </p>

            <div className="security-brands">
              <div className="brand">
                <img
                  src="https://img.icons8.com/color/48/000000/security-checked.png"
                  alt="CM Security"
                />
                <span>CM Security</span>
              </div>
              <div className="brand">
                <img
                  src="https://veduapp.cc/uploads/lookout.webp"
                  alt="Lookout"
                />
                <span>Lookout</span>
              </div>
              <div className="brand">
                <img
                  src="https://veduapp.cc/uploads/mcafee.webp"
                  alt="McAfee"
                />
                <span>McAfee</span>
              </div>
            </div>
            {/* <p className="super-fast">Vedu APK 100% free Download. Get super-fast video downloads convert videos to MP3 enjoy HD player offline streaming and ad-free experience.</p> */}
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://veduapp.cc/uploads/vedu-app.webp"
            alt="App Preview"
          />
        </div>
      </section>
      <section className="about" id="aboutveduapp">
        <h2>About Vedu App</h2>
        <p>
          In the modern age, getting high-quality content conveniently and without spending too much
          money is difficult. Many applications are launched in the market to solve viewers’ problems.
          But no one has been so successful in it as Vedu APK. This application provides users with
          various features to make their video-watching experience unforgettable. The Vedu app has
          changed the way users look at the content present on different social media platforms.
        </p>
      </section>
      <section id="features" className="key-features">
        <h2>Key Features of Vedu App</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://veduapp.cc/uploads/hd-quality.webp" alt="HD Quality" />
            </div>
            <div className="feature-text">
              <h3>HD Quality</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://veduapp.cc/uploads/ad-free.webp" alt="Ad Free" />
            </div>
            <div className="feature-text">
              <h3>Ad Free</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://veduapp.cc/uploads/background-playback.webp" alt="Background Playback" />
            </div>
            <div className="feature-text">
              <h3>Background Playback</h3>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://veduapp.cc/uploads/offline-viewing.webp" alt="Offline Viewing" />
            </div>
            <div className="feature-text">
              <h3>Offline Viewing</h3>
            </div>
          </div>
        </div>
      </section>
      <p className="upper-download">Features of Vedu App</p>

      <section className="download-section" id="download">
        <h2>HD and 4K Playback</h2>
        <p>
          One of the high demanding features in any video player is higher resolution.
          Vedu is best for this as it allows you to play video in HD, 4K, or even in
          ultra HD resolution. This makes colors contrast perfectly and enhanced visuals
          ideal for all movie or video lovers. HDR10 and Dolby Vision are other advanced
          features that Vedu APK supports for better color and perfect brightness.
        </p>

        <div className="download-image">
          <img src="https://veduapp.cc/uploads/hd-and-4k-playback.webp" alt="Vedu App Screenshot" />
        </div>
      </section>
      <section className="download-section" id="download">
        <h2>Customizable Library</h2>
        <p>
          In the built file manager in Vedu can make a playlist automatically based on the name,
          date, or size of the video, you can also make your custom playlist by adding your
          favorite videos. AI search suggestion allows you to search videos quickly.
        </p>

        <div className="download-image">
          <img src="https://veduapp.cc/uploads/customizable-library.webp" alt="Vedu App Screenshot" />
        </div>
      </section>
      <section className="download-section" id="download">
        <h2>Support Many Languages</h2>
        <p>
          Vedu APK is designed to help users present worldwide. That’s why it supports
          multiple languages. You can choose the language of the application according
          to your needs. This makes users’ experience better and more convenient.
        </p>

        <div className="download-image">
          <img src="https://veduapp.cc/uploads/support-many-languages.webp" alt="Vedu App Screenshot" />
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2>FAQs</h2>

        <div className="faq-box">
          <span className="faq-icon">+</span>
          <p>Is the Vedu app completely free?</p>
        </div>

        <div className="faq-box">
          <span className="faq-icon">+</span>
          <p>Can parents control their children’s Vedu app?</p>
        </div>

        <div className="faq-box">
          <span className="faq-icon">+</span>
          <p>Is Vedu available on iOS?</p>
        </div>
      </section>


    </div>
  );
}

