const IPFS = require("ipfs-mini");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
var hash = [];
function extract(result) {
  hash = result;
  console.log("Extracting ");
  console.log(hash);
  return hash;
}
function addjson(err, result) {
  console.log("INside");
  console.log(err, result);
  extract(result);
  return result;
}
export function addData(data) {
  ipfs.addJSON(data).then((result) => {
    extract(result);
  addjson("abc", result)});
}

export default addData;
