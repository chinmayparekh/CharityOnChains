const IPFS = require("ipfs-mini");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
let a = 1;
let obj;
export async function addData() {
  ipfs.addJSON({ somevalue: 2, name: "Nick" }, (err, result) => {
    console.log(err, result);
  });
  await fetch(
    "https://ipfs.io/ipfs/QmYzWWCvYhqU6d5VvRvVwgbpqM9J3HH8TMbns9UvFSSvBf"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      obj = data;
    });
  console.log(obj);
}

export default addData;
