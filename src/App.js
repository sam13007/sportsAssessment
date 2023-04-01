import "./App.css";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

function App() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const data = await axios.get("https://api.npoint.io/20c1afef1661881ddc9c");
    setPlayers(data.data.playerList);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filterData = (search) => {
    search
      ? fetchData()
      : setPlayers(players.filter((player) => player.PFName.includes(search)));
  };

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} searchClick={filterData} />

      <Grid
        sx={{ padding: "2%", backgroundColor: "#e5e5e5" }}
        container
        spacing={6}
      >
        {players
          ? players
              .sort((a, b) =>
                a.PFName > b.PFName ? 1 : b.PFName > a.PFName ? -1 : 0
              )
              .map((player) => (
                <Grid item xs={6} sm={4} md={3} key={player.Id}>
                  <PlayerCard player={player} />
                </Grid>
              ))
          : null}
      </Grid>
    </div>
  );
}

export default App;
