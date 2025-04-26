import React from "react";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import "./TeamContainer.css";

const teamMembers = [
  {
    id: 1,
    name: "Chef Luca",
    role: "Head Chef",
    img: "https://images.unsplash.com/photo-1730635250911-b787fbc7e90f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Expert in Italian fine dining with a love for truffle oil.",
    experience: "15 years in Michelin-starred kitchens.",
    favoriteDish: "White Truffle Risotto",
    awards: "Best Chef of the Year 2022",
    instagram: "https://instagram.com/chefluca",
  },
  {
    id: 2,
    name: "Chef Mei",
    role: "Sous Chef",
    img: "https://images.unsplash.com/photo-1625489539789-39bb40ed9a8a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Creates Asian-inspired fusion dishes that delight the senses.",
    experience: "8 years specializing in Asian fusion.",
    favoriteDish: "Szechuan Pepper Lobster",
    awards: "Fusion Innovator Award 2021",
    instagram: "https://instagram.com/chefmei",
  },
  {
    id: 3,
    name: "Chef Rosa",
    role: "Pastry Chef",
    img: "https://images.unsplash.com/photo-1641536618422-2cf0bbd10014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
    bio: "Bakes with love and a touch of cinnamon magic.",
    experience: "10 years in world-famous bakeries.",
    favoriteDish: "Vanilla Bean Mille-Feuille",
    awards: "Pastry Master Gold Medal 2020",
    instagram: "https://instagram.com/chefrosa",
  },
];

const TeamContainer = () => {
  return (
    <div className="team-container">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamContainer;
