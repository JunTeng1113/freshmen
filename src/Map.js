import { useState, useCallback } from "react";
import { PortalPopup } from "./PortalPopup";
import CampusDetail from "./CampusDetail";
import "./css/Map.css";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import CAMPUS_DATAS from "./datas/campus.json";
export const Map = () => {

  return (
    <>
    <Stack spacing={1}>
      <Title text="校園指引" />
      <Box sx={{
        width: "100%",
        fontSize: "24px",
        color: "#000",
        fontFamily: "Inter",
      }}>
        {Object.keys(CAMPUS_DATAS).map(campus => {
          return (
            <Box sx={{
              mt: "1rem"
            }}>
              <CampusDetail
              campus={campus}
              colleges={CAMPUS_DATAS[campus].colleges}
              image={CAMPUS_DATAS[campus].image}
              />
            </Box>
          )
        })}
      </Box>
    </Stack>
    </>
  );
};
