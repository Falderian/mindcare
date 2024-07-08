// src/pages/api/register.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Controller } from "../../../../db/controllers/Controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const result = await Controller.Users.register(req.body);
    res.status(result.status || 200).json(result);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
