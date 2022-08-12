// TODO 8 - Fetch lottery contract storage

import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1Fnv6PCHvYBTVBr78k9sozFMBgoxi6y2dv/storage"
  );

  return res.data;
};
