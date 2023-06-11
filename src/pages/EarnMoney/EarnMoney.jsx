import React from "react";
import earnImage from "../../../src/assets/rightLargeImg.webp";
import { Link } from "react-router-dom";

const EarnMoney = () => {
  return (
    <div className="grid md:grid-cols-2 mt-28 mx-4 md:mx-8 justify-center items-center">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold md:w-2/3 leading-tight">
          Earn money as a Tutor with Lingua Learn
        </h2>
        <p className="text-gray-500">
          Flexible Schedule. Fulfilling Rewards. Join Lingua Learn as a Tutor
          Today!
        </p>
        <div className="flex gap-8">
          <Link to="/login"><button className="btn btn-neutral rounded-full">Be a Tutor</button></Link>
          <button className="btn rounded-full">Discover more</button>
        </div>
      </div>
      <div>
        <img className="w-full" src={earnImage} alt="" />
      </div>
    </div>
  );
};

export default EarnMoney;
