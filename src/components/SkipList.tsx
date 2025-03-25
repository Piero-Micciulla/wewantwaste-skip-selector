import React from "react";
import SkipCard from "./SkipCard";
import { Skip } from "../services/api";

interface SkipListProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}

const SkipList: React.FC<SkipListProps> = ({
  skips,
  selectedSkip,
  onSelectSkip,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-70 md:pb-20">
      {skips.map((skip) => (
        <button
          key={skip.id}
          onClick={() => onSelectSkip(skip)}
          className="focus:outline-none"
          aria-label={`Select ${skip.size} Yard Skip`}
        >
          <SkipCard skip={skip} isSelected={selectedSkip?.id === skip.id} />
        </button>
      ))}
    </div>
  );
};

export default SkipList;
