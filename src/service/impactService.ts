import axios from "axios";

export default class ImpactServie {
  public fetchVerdnImpact = async () => {
    try {
      const api_url = `${process.env.VERON_API_URL}`;
      const response = await axios.get(api_url, {
        headers: { Authorization: `Bearer ${process.env.VERDN_API_KEY}` },
      });
      return response.data;
    } catch (error) {
      throw new Error("Error fetching Verdn impact data");
    }
  };
}
