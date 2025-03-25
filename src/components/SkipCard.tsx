import React from "react";
import { Skip } from "../services/api";
import skipImage from "../assets/images/skip-image.jpg";
import {
  ClockIcon,
  GarbageIcon,
  PoundIcon,
  WarningIcon,
} from "../assets/icons";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);

  return (
    <div
      className={`group rounded-lg shadow-lg p-6 bg-clean-white w-full max-w-md mx-auto 
                outline-none border cursor-pointer transition-all duration-300 ease-in-out 
                ${
                  isSelected
                    ? "border-2 border-lime-green shadow-xl -translate-y-1"
                    : "border-2 border-transparent"
                } 
                hover:-translate-y-1 hover:shadow-xl`}
      tabIndex={0}
      role="article"
      aria-label={`Skip ${skip.size} Yards, Hire for ${skip.hire_period_days} days`}
    >
      <div className="relative">
        <img
          src={skipImage}
          alt="Skip for hire"
          className="w-full sm:h-40 md:h-60 lg:h-40 object-cover rounded-md"
        />

        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {!skip.allowed_on_road && (
            <span
              className={`flex items-center text-warning-yellow-deep text-sm pr-3 py-1 rounded-full h-6
                            ${
                              isSelected
                                ? "bg-warning-yellow-soft"
                                : "bg-transparent"
                            } 
                            group-hover:bg-warning-yellow-soft group-hover:text-warning-yellow-deep
                            transition-all duration-300 ease-in-out`}
            >
              <span className="p-1 bg-warning-yellow-soft rounded-full">
                <WarningIcon className="w-4 h-4 text-warning-yellow-deep" />
              </span>

              <span
                className={`whitespace-nowrap opacity-0 duration-300 ease-in-out ml-2 group-hover:opacity-100 transition-opacity 
                            ${isSelected ? "opacity-100" : ""}`}
              >
                Private Property Only
              </span>
            </span>
          )}

          {skip.allows_heavy_waste && (
            <span
              className={`flex items-center text-deep-green text-sm pr-3 py-1 rounded-full h-6
                            ${
                              isSelected
                                ? "bg-soft-yellow-green"
                                : "bg-transparent"
                            } 
                            group-hover:bg-soft-yellow-green group-hover:text-deep-green
                            transition-all duration-300 ease-in-out`}
            >
              <span className="p-1 bg-soft-yellow-green rounded-full">
                <GarbageIcon className="w-4 h-4 text-deep-green" />
              </span>

              <span
                className={`whitespace-nowrap opacity-0 duration-300 ease-in-out ml-2 group-hover:opacity-100 transition-opacity
                            ${isSelected ? "opacity-100" : ""}`}
              >
                Heavy Waste Allowed
              </span>
            </span>
          )}
        </div>
      </div>

      <h2 className="flex items-center gap-2 text-xl font-bold text-deep-green mt-3">
        {skip.size} Yard Skip
      </h2>

      <p className="flex items-center gap-2 text-deep-green mt-3">
        <ClockIcon className="w-6 h-6 text-deep-green" /> Hire Period:{" "}
        {skip.hire_period_days} Days
      </p>

      <p className="flex items-center gap-2 font-semibold text-deep-green mt-2">
        <PoundIcon className="w-6 h-6 text-deep-green" /> Total Price: £
        {totalPrice}
      </p>
    </div>
  );
};

export default SkipCard;
