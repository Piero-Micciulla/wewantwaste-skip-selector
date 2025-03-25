import { useState, useEffect } from "react";
import { fetchSkipsByLocation, Skip } from "../services/api";

export const useSkips = (postcode: string, area: string) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkipsByLocation(postcode, area);
        setSkips(data);
      } catch (err) {
        setError("Failed to load skips");
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};
