import { NextApiRequest, NextApiResponse } from "next";
import { text } from "stream/consumers";

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: "Welcome to tutorials point"})
}