import React from "react";

const SimpleProjectsCard = ({ title, src }) => {
  return (
    <div className="bg-bodyColor p-8 rounded-lg shadow-lg text-center">
      
      <img src={src} alt={title} className="max-w-full mx-auto mb-6" style={{ maxHeight: "200px" }} />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
    </div>
  );
};

export default SimpleProjectsCard;
