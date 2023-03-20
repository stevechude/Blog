import data from "../../../public/data.json";

// api/trending
export default function handler(req, res) {
  const { Trending } = data;
  if (Trending) {
    return res.status(200).json(Trending);
  }
  return res.status(404).json({ error: "Data Not Found" });
}
