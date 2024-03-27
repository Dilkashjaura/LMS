import SideBar from "../component/SideBar.jsx";
import TopBar from "../component/TopBar.jsx";
import * as React from "react";
import { Stack} from "@mui/material";


const HomePage = () => {
  return (
    <>
      <TopBar />
      <Stack className="addbookMain" flexDirection={"row"}>
        <Stack width={"15%"}>
          <SideBar />
        </Stack>
      </Stack>
    </>
  );
};

export default HomePage;
