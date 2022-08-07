export async function fetchData(hash){
    let obj=hash;
    const url = 'https://ipfs.io/ipfs/${obj}'
    await fetch(
        url
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          obj = data;
    });
    return obj;
}

export default fetchData