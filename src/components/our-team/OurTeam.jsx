// eslint-disable-next-line no-unused-vars
import React from "react";
import "./our_team.css";
import OurTeamImg from "../../assets/img/our_team_1.jpg";

const OurTeam = () => {
  return (
    <>
      <div className="our-team-main-container">
        <div className="our-team-wrapper">
          <h1>
            Our <span>Team</span>
          </h1>

          <div className="our-team">
            <div className="our-team-member">
              <div className="team_img">
                <img src={OurTeamImg} alt="OurTeamImg" />
              </div>
              <h3>John Sigh</h3>
              <p className="role">UI developer</p>
              <p className="ourteam">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                rem veniam molestias tenetur sunt.
              </p>
            </div>
            <div className="our-team-member">
              <div className="team_img">
                <img src={OurTeamImg} alt="OurTeamImg" />
              </div>
              <h3>John Sigh</h3>
              <p className="role">UI developer</p>
              <p className="ourteam">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                rem veniam molestias tenetur sunt.
              </p>
            </div>
            <div className="our-team-member">
              <div className="team_img">
                <img src={OurTeamImg} alt="OurTeamImg" />
              </div>
              <h3>John Sigh</h3>
              <p className="role">UI developer</p>
              <p className="ourteam">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                rem veniam molestias tenetur sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;