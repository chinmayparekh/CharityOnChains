// TODO 6 - Call buy_ticket entrypoint in the Lottery contract
import { tezos } from "./tezos";

export const registerDonor = async () => {
  try {
    const contractInstance = await tezos.wallet.at("KT1M6vgyV6Li1T26snHcfjUp5oJKSvbZpLhc");
    const op = await contractInstance.methods.register_donor().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract
export const registerNGO = async () => {
  try {
    const contractInstance = await tezos.wallet.at("KT1M6vgyV6Li1T26snHcfjUp5oJKSvbZpLhc");
    const op = await contractInstance.methods.register_charity().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const registerStore = async() => {
  try {
    const contractInstance = await tezos.wallet.at("KT1M6vgyV6Li1T26snHcfjUp5oJKSvbZpLhc");
    const op = await contractInstance.methods.register_store().send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};
