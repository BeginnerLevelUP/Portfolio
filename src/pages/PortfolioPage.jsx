import React from 'react';

function PortfolioPage() {
  return (
    <section className="work" id="work">
      <aside>
        <h2>Work</h2>
      </aside>

      <div id="container-grid">
        {/* Catalog */}
        <div className="FULLSTACK">
          <a href="https://github.com/chigreene/Seasonal-Sales-Catalog" target="_blank">
            <div className="title">
              <p>Season Sales Catalog</p>
            </div>
            <img src="/catalog.png"  />
          </a>
        </div>

        {/* Password Generator */}
        <div className="projects">
          <a href="https://beginnerlevelup.github.io/03-Challenge-UCONN/" target="_blank">
            <div className="title">
              <p>Password<br />Generator</p>
            </div>
            <img src="/passwordGen.png" alt="Password Generator" />
          </a>
        </div>

        {/* Other projects */}
        <div className="projects">
          {/* Project 3 */}
          <a href="https://github.com/chigreene/MERN-Trading-Card-App" target="_blank">
            <div className="title">
              <p>Trading Card Game</p>
            </div>
            <img src="/tradingCard.png" alt="Project 3 Image" />
          </a>
        </div>

        <div className="projects">
          {/* Project 4 */}
          <a href="link_to_project_4" target="_blank">
            <div className="title">
              <p>Project 4 Name</p>
            </div>
            <img src="/notYet.png" alt="Project 4 Image" />
          </a>
        </div>

        <div className="projects">
          {/* Project 5 */}
          <a href="link_to_project_5" target="_blank">
            <div className="title">
              <p>Project 5 Name</p>
            </div>
            <img src="/notYet.png" alt="Project 5 Image" />
          </a>
        </div>

        {/* Carousel */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            {/* Carousel items */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <button className="escape">ESC</button>
    </section>
  );
}

export default PortfolioPage;
