// TODO 8 - Fetch lottery contract storage

import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1Q6hCw3q4RTaEoSrteCRf3sNJ8UvwriKQS/storage"
  );
  console.log(res.data);
  return res.data;
};
