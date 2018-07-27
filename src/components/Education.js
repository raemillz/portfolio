import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Flatiron School</h3>
          <p className="info">
            Full Stack Web Development
            <span>&bull;</span>
            <em className="date">July 2018</em>
          </p>

          <p>

            I got into programming (Ruby, SQL, JS) during my previous position at WeWork. I was curious about learning a new hard-skill
            that could prove useful regardless of the path in which I decided to take my career. This curiosity led me to the Flatiron
            School's online pre-work. As time passed, I found myself wanting to focus on sales less, and code more. I loved better
            understanding the underlying framework of our tech-centric world and the idea of being part of an industry that is at the corner
            of logic and creativity, so a career switch to web development quickly became an all too tempting choice. After being granted a
            Kode with Klossy scholarship, I decided to dedicate the next several months to learning code full-time.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>San Diego State University</h3>
          <p className="info">
            B.A. Degree in Internatioinal Business
            <span>&bull;</span>
            <em className="date">2014</em>
          </p>

          <p>
            I attended SDSU where I was granted a scholarship to play on their division 1 women’s water polo team and majored in
            International Business with an emphasis in Spanish and Latin America. While balancing sports and my studies, I also began
            and lead the SDSU chapter of the Waves for Development non-profit organization as president and participated in the Student
            Athlete Advisory Committee as the Officer of External Affairs. During these defining years, I truly learned time-management
            and teamwork.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
