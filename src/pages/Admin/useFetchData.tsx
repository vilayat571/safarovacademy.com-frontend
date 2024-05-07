// export const useFetchData = async (url: string, clg: boolean) => {
//   const data = fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       clg && console.log(data);
//     })
//     .catch((err) => {
//       console.log("Error Reading data " + err);
//     });

// };

export const useFetchData = {
  useFetch: async (url: string, cl: boolean) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        cl && console.log(data);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  },
};
