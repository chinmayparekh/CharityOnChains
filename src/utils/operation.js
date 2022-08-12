// TODO 6 - Call buy_ticket entrypoint in the Lottery contract
import { tezos } from "./tezos";

export const registerDonor = async (obj) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1UEJZZ1Dc3YmBcRW3XvmPJeUS3RBEgjPKs"
    );
    const op = await contractInstance.methods
      .register_donor(
        obj.field1,
        obj.field2,
        obj.field3,
        obj.field4,
        obj.field5
      )
      .send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract
export const registerNGO = async (obj) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1UEJZZ1Dc3YmBcRW3XvmPJeUS3RBEgjPKs"
    );
    const op = await contractInstance.methods
      .register_ngo(obj.field1, obj.field2, obj.field3, obj.field4, obj.field5)
      .send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const registerStore = async (obj) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1UEJZZ1Dc3YmBcRW3XvmPJeUS3RBEgjPKs"
    );
    const op = await contractInstance.methods
      .register_store(
        obj.field1,
        obj.field2,
        obj.field3,
        obj.field4,
        obj.field5
      )
      .send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const addItems = async (item_obj) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1UEJZZ1Dc3YmBcRW3XvmPJeUS3RBEgjPKs"
    );
    const op = await contractInstance.methods
      .add_items(item_obj.name, item_obj.price, item_obj.valid)
      .send();
    await op.confirmation(1);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteItem = async (name, address) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1UEJZZ1Dc3YmBcRW3XvmPJeUS3RBEgjPKs"
    );

    console.log("middle delete funds address", address);
    console.log("middle delete funds name", name);

    const op = await contractInstance.methods
      .delete_items(name, address)
      .send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const sendFunds = async (address, cost) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1UEJZZ1Dc3YmBcRW3XvmPJeUS3RBEgjPKs"
    );
    console.log("middle send funds");
    const op = await contractInstance.methods
      .send_funds(address)
      .send({ amount: cost, mutez: true });
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const getAmt = function Amt(hash) {
  const bal = tezos.rpc
    .getBalance(hash)
    .then((balance) => {
      return balance.toNumber() / 1e6;
    })
    .catch((e) => console.log("Address not found"));
  return bal;
};
