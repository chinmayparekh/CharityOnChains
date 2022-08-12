export async function fetchData(hash) {
  const url = "https://ipfs.io/ipfs/" + hash;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default fetchData;
