import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCoins } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container } from "react-bootstrap";

function App({ state, fetchCoins }) {
  console.log(state, "userData");
  let [loadingLength, setLoadingLength] = useState(50);
  const coinData = state.coins;
  const handleLoadingLength = () => {
    setLoadingLength(loadingLength + 50);
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    <Container style={{ maxWidth: "95%" }}>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>MarketCap</th>
              <th>VWAP(24Hr)</th>
              <th>Supply</th>
              <th>Volume(24Hr)</th>
              <th>Change(24Hr)</th>
            </tr>
          </thead>
          <tbody>
            {coinData &&
              coinData.length > 0 &&
              coinData.slice(0, loadingLength).map((item) => (
                <tr key={item.id}>
                  <td>{item.rank}</td>

                  <td>
                    <img
                      height={40}
                      width={40}
                      src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                    />

                    {item.name}
                    <div style={{ marginLeft: "40px" }}>{item.symbol}</div>
                  </td>
                  <td>{Number(item.priceUsd).toFixed(2).toString() + "$"}</td>
                  <td>
                    {Number(item.marketCapUsd).toFixed(2).toString() + "$"}
                  </td>
                  <td>{Number(item.vwap24Hr).toFixed(2).toString() + "$"}</td>
                  <td>{Number(item.supply).toFixed(2)}</td>
                  <td>
                    {Number(item.volumeUsd24Hr).toFixed(2).toString() + "$"}
                  </td>
                  <td>
                    {Number(item.changePercent24Hr).toFixed(2).toString() + "%"}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <Button
          style={{
            marginLeft: "50%",
            marginRight: "50%",
            marginBottom: "5px",
          }}
          onClick={handleLoadingLength}
        >
          LoadMore
        </Button>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCoins: () => dispatch(fetchCoins()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
