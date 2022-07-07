import { useState, useCallback } from "react";
import { DeptIc } from "./DeptIc";
import { PortalPopup } from "./PortalPopup";
import "./css/Club.css";
import Title from "./Title";
import ClubCard from "./ClubCard";
import SubTitle from "./SubTitle";
import TestBox from "./TestBox";
import NewClub from "./NewClub";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export const Club = () => {

  return (
    <>
    <Title text="社團資訊" />
    <Stack 
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {/* 學生自治組織與自治性社團 */}
      <SubTitle text="學生自治組織與自治性社團" />
      <Grid 
        sx={{ 
          justifyContent: "space-evenly",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
        <Grid item >
          <NewClub name="學生會" />
        </Grid>
        <Grid item >
          <NewClub name="學生議會" />
        </Grid>
        <Grid item >
          <NewClub name="學生議會" />
        </Grid>
      </Grid>

      {/* 系學會 */}
      <SubTitle text="系學會" />
      <Grid
        sx={{ 
          justifyContent: "space-evenly",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
      </Grid>
      {/* 體能性社團 */}
      <SubTitle text="體能性社團" />
      <Grid
        sx={{ 
          justifyContent: "space-evenly",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
      </Grid>
      {/* 康樂性社團 */}
      <SubTitle text="康樂性社團" />
      <Grid
        sx={{ 
          justifyContent: "space-evenly",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
      </Grid>
      {/* 學藝性社團 */}
      <SubTitle text="學藝性社團" />
      <Grid
        sx={{ 
          justifyContent: "space-evenly",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
      </Grid>
      {/* 服務性社團 */}
      <SubTitle text="服務性社團" />
      <Grid
        sx={{ 
          justifyContent: "space-evenly",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
        <Grid item><ClubCard /></Grid>
      </Grid>
    </Stack>
    </>
  );
};
