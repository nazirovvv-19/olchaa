import React from "react";
import StarIcon from "../assets/starIcon.svg";
import FavouriteIcon from "../imgs/Heartt";
import Analytics03Icon from "../imgs/Analy";
import Share03Icon from "../imgs/share-03-stroke-rounded (1)";
function InsideHeader() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-1">
          <img width={20} src={StarIcon} alt="" />
          <img width={20} src={StarIcon} alt="" />
          <img width={20} src={StarIcon} alt="" />
          <img width={20} src={StarIcon} alt="" />
          <img width={20} src={StarIcon} alt="" />

          <h2 className="pl-5 transition-all duration-150 cursor-pointer hover:text-[#DA002B]">
            0 sharhlar
          </h2>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-1 text-[#DA002B] hover:text-[black]">
            <Analytics03Icon />
            <h2 className="text-[#DA002B] transition-all duration-300 cursor-pointer   ">
              Taqqoslashga qo'shish
            </h2>
          </div>

          <div className="flex items-center gap-1 text-[#DA002B] hover:text-[black]">
            <FavouriteIcon />
            <h2 className="text-[#DA002B] transition-all duration-300 cursor-pointer  ">
              saralanganlarga qoshish qo'shish
            </h2>
          </div>

          <div className="flex items-center gap-1 hover:text-[black]  ">
            <Share03Icon />
            <h2 className="text-[#DA002B] transition-all duration-300 cursor-pointer   ">
              ulashish
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsideHeader;
