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

import CLUB_DATAS from "./datas/club.json";
import PARTY_DATAS from "./datas/party.json";
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
      <SubTitle text="學生會" />
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
        {
        PARTY_DATAS.filter(({classes}) => classes === '學生會').map((club) => {
          return (
            <Grid item >
              <NewClub data={club} />
              {/* <NewClub name={name} image={club['image']} links={club['links']} content={club['content']}  campus={club['campus']} /> */}
            </Grid>
          )
        })
        }
      </Grid>

      {/* 系學會 */}
      <SubTitle text="系學會" />
      <Grid
        sx={{ 
          justifyContent: "center",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
      {
        PARTY_DATAS.filter(({classes}) => classes === '系科').map((club) => {
          return (
            <Grid item >
              <ClubCard data={club} />
            </Grid>
          )
        })
      }
      </Grid>
      {/* 體能性社團 */}
      <SubTitle text="體能性社團" />
      <Grid
        sx={{ 
          justifyContent: "center",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
      {
        PARTY_DATAS.filter(({classes}) => classes === '體能').map((club) => {
          return (
            <Grid item >
              <ClubCard data={club} />
            </Grid>
          )
        })
      }
      </Grid>
      {/* 康樂性社團 */}
      <SubTitle text="康樂性社團" />
      <Grid
        sx={{ 
          justifyContent: "center",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
      {
        PARTY_DATAS.filter(({classes}) => classes === '康樂').map((club) => {
          return (
            <Grid item >
              <ClubCard data={club} />
            </Grid>
          )
        })
      }
      </Grid>
      {/* 學藝性社團 */}
      <SubTitle text="學藝性社團" />
      <Grid
        sx={{ 
          justifyContent: "center",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
      {
        PARTY_DATAS.filter(({classes}) => classes === '學藝').map((club) => {
          return (
            <Grid item >
              <ClubCard data={club} />
            </Grid>
          )
        })
      }
      </Grid>
      {/* 服務性社團 */}
      <SubTitle text="服務性社團" />
      <Grid
        sx={{ 
          justifyContent: "center",
          alignItems: "center", 
          pb: "1rem",
        }}
        container 
        rowSpacing={2}
        direction="row"
      >
      {
        PARTY_DATAS.filter(({classes}) => classes === '服務').map((club) => {
          return (
            <Grid item >
              <ClubCard data={club} />
            </Grid>
          )
        })
      }
      </Grid>
    </Stack>
    </>
  );
};
