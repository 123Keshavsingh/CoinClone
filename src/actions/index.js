import axios from "axios";
export const FETCH_COINS = "FETCH_COINS";

export const fetchCoins = () => {
  return (dispatch) => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        // response.data is the users
        console.log(response, "response");
        const coins = response.data.data;
        dispatch(fetchCoinsSuccess(coins));
      })
      .catch((error) => {
        // error.message is the error message
        console.log(error);
      });
  };
};

export const fetchCoinsSuccess = (coins) => {
  return { type: "FETCH_COINS", payload: coins };
};
