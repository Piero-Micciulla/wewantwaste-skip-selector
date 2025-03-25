const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export const fetchSkipsByLocation = async (
  postcode: string,
  area: string
): Promise<Skip[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}?postcode=${postcode}&area=${area}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch skips: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching skips:", error);
    return [];
  }
};
