import React from "react";
import menu from "../../assets/Menu.jpg"

const MenuCard = () => {
  return (
    <div className="h-full flex items-center sm:items-start justify-center mt-6 sm:mt-16 sm:mr-8">
    {/* importing menu image */}
      <img src={menu} className="" />
    </div>
  );
};

export default MenuCard;
