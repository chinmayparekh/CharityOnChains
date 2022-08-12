const IPFS = require("ipfs-mini");
const ipfs = new IPFS({
  host: "gateway.pinata.cloud",
  port: 5001,
  protocol: "https",
});

export function addData(data, register) {
  ipfs.addJSON(data).then((result) => {
    register(result);
  });
}

export default addData;
