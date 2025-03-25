import React, { useState, useEffect } from "react";
import { Skip } from "../services/api";
import { ClockIcon, PoundIcon, TruckIcon } from "../assets/icons";

interface SelectedSkipBarProps {
  selectedSkip: Skip | null;
}

const SelectedSkipBar: React.FC<SelectedSkipBarProps> = ({ selectedSkip }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedSkip) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedSkip]);

  if (!selectedSkip) return null;

  const totalPrice = (
    selectedSkip.price_before_vat *
    (1 + selectedSkip.vat / 100)
  ).toFixed(2);

  const handleContinue = () => {
    console.log(selectedSkip);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-deep-green text-clean-white py-4  
            shadow-lg text-lg transition-transform duration-300 ease-in-out 
            ${
              isVisible
                ? "transform translate-y-0"
                : "transform translate-y-full"
            }`}
      aria-live="polite"
      role="status"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 w-full max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-start md:items-center w-full">
          <p className="flex items-center gap-2 font-semibold">
            <TruckIcon className="w-8 h-8 text-clean-white font-semibold" />{" "}
            <span className="sr-only">Size:</span> {selectedSkip.size} Yards
          </p>

          <p className="flex items-center gap-2 font-semibold">
            <PoundIcon className="w-8 h-8 text-clean-white font-semibold" />{" "}
            <span className="sr-only">Total Price:</span> £{totalPrice}
          </p>

          <p className="flex items-center gap-2 font-semibold">
            <ClockIcon className="w-8 h-8 text-clean-white font-semibold" />{" "}
            <span className="sr-only">Hire Period:</span>{" "}
            {selectedSkip.hire_period_days} Days
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:justify-end md:items-center w-full">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => console.log("Back button clicked")}
          >
            Back
          </button>

          <button
            className="bg-lime-green text-white py-2 px-4 rounded-lg hover:bg-leaf-green cursor-pointer transition-all duration-300 ease-in-out"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedSkipBar;
