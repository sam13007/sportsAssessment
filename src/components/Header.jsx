import React from "react";
import { InputBase, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Header({ search, setSearch, searchClick }) {
  return (
    <div className="header">
      <h1 id="title">Sports Interactive</h1>
      <Box
        backgroundColor="#d9d9d9"
        padding="2px"
        paddingLeft="10px"
        borderRadius="30px"
      >
        <InputBase
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton onClick={() => searchClick(search)}>
          <SearchIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default Header;
