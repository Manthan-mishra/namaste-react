import React, { useState } from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ member }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [applauseCount, setApplauseCount] = useState(0);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const giveApplause = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    setApplauseCount(applauseCount + 1);
  };

  return (
    <div className="team-card" onClick={toggleDetails}>
      <img src={member.img} alt={member.name} className="team-img" />
      <h2 className="team-name">{member.name}</h2>
      <p className="team-role">{member.role}</p>

      {showDetails && (
        <div className="team-details">
          <p className="team-bio">{member.bio}</p>
          <p>
            <strong>Experience:</strong> {member.experience}
          </p>
          <p>
            <strong>Favorite Dish:</strong> {member.favoriteDish}
          </p>
          <p>
            <strong>Awards:</strong> {member.awards}
          </p>
          <a
            href={member.instagram}
            target="_blank"
            rel="noreferrer"
            className="team-link"
          >
            Visit Instagram
          </a>
        </div>
      )}

      <button className="applause-button" onClick={giveApplause}>
        👏 {applauseCount}
      </button>
    </div>
  );
};

export default TeamMemberCard;
