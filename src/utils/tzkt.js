// TODO 8 - Fetch lottery contract storage

import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakartanet.tzkt.io/v1/contracts/KT1M6vgyV6Li1T26snHcfjUp5oJKSvbZpLhc/storage"
  );
  console.log(res.data);
  return res.data;
};
