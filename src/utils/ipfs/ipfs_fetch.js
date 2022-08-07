export function fetchData(hash,func) {
  const url = "https://ipfs.io/ipfs/" + hash;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      func(data);
    });
}

export default fetchData;
