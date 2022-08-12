const IPFS = require("ipfs-mini");
const ipfs = new IPFS({
  host: "gateway.pinata.cloud",
  port: 5001,
  protocol: "https",
});

export async function addData1(data) {
  const result = await ipfs.addJSON(data);
  return result;
}

export default addData1;
