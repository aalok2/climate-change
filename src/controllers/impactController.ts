import { Request, Response } from "express";
import ImpactService from "../service/impactService";
const { fetchVerdnImpact } = new ImpactService();

export const getImpactData = async (req: Request, res: Response) => {
  try {
    const impactData = await fetchVerdnImpact();
    res.status(200).json({ success: true, data: impactData });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching impact data" });
  }
};
