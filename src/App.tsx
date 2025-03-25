import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSkips } from "./hooks/useSkips";
import SkipList from "./components/SkipList";
import SelectedSkipBar from "./components/SelectedSkipBar";
import { Skip } from "./services/api";
import Loader from "./components/Loader";
import { TruckIcon, WarningIcon } from "./assets/icons";

const App: React.FC = () => {
  const [searchParams] = useSearchParams();
  const postcode = searchParams.get("postcode") || "NR32";
  const area = searchParams.get("area") || "Lowestoft";

  const { skips, loading, error } = useSkips(postcode, area);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-clean-white">
      <header className="w-full bg-deep-green text-clean-white py-5 shadow-lg text-center">
        <h1 id="page-title" className="text-4xl font-extrabold">
          ♻️ Choose your skip size
        </h1>
      </header>

      <main className="w-full max-w-5xl p-6" aria-labelledby="page-title">
        <p className="text-center text-industrial-gray text-lg">
          Searching for skips in{" "}
          <strong>
            {postcode}, {area}
          </strong>
        </p>

        {error && (
          <p
            className="flex items-center justify-center gap-2 text-center text-red-600 mt-4"
            aria-live="polite"
          >
            <WarningIcon className="w-8 h-8 text-red-600 font-semibold" />{" "}
            {error}
          </p>
        )}

        {!loading && skips.length === 0 && (
          <p
            className="flex items-center justify-center gap-2 text-center text-industrial-grey mt-4"
            aria-live="polite"
          >
            <TruckIcon className="w-8 h-8 text-industrial-grey" /> No skips
            found for{" "}
            <strong>
              {postcode}, {area}
            </strong>
            .
          </p>
        )}

        {loading ? (
          <div className="flex items-center justify-center text-center mt-8">
            <Loader />
          </div>
        ) : (
          <SkipList
            skips={skips}
            selectedSkip={selectedSkip}
            onSelectSkip={setSelectedSkip}
          />
        )}
      </main>

      <SelectedSkipBar selectedSkip={selectedSkip} />
    </div>
  );
};

export default App;
