import { LinearProgress, Typography, Box } from "@mui/material"; // Import Box for layout
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser"; // Use html-react-parser
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from "../CryptoContext";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} sx={{ p: 2 }}>
      <Box
        width={{ xs: "100%", md: "30%" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={2}
        sx={{ borderRight: { md: "2px solid grey" } }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, fontFamily: "Montserrat" }}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ width: "100%", fontFamily: "Montserrat", p: 2, textAlign: "justify" }}>
          {parse(coin?.description.en.split(". ")[0])}.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-around"
          sx={{ width: "100%", p: 2, pt: 0 }}
        >
          <span style={{ display: "flex" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </Box>
      </Box>
      <CoinInfo coin={coin} />
    </Box>
  );
};

export default CoinPage;
