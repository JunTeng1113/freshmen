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
import Button from '@mui/material/Button';
import CLUB_DATAS from "./datas/club.json";
import PARTY_DATAS from "./datas/party.json";
import IconButton from '@mui/material/IconButton';
import WebIcon from '@mui/icons-material/Web';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';

export const Club = () => {
  return (
    <>
    <Stack 
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {/* 學生自治組織與自治性社團 */}
      <Title text="學生會" />
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
        {/* 學生會圖片 */}
        <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={1} sm={1} md={1}>
            <img className="sa-image" src={`./club_images/000_共同_學生會_學生會2.png`} title={'學生會'} alt="找不到圖片" loading="lazy" />
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
            <img className="sa-image" src={`./club_images/000_共同_學生會_學生會1.png`} title={'學生會'} alt="找不到圖片" loading="lazy" />
          </Grid>
          <Grid item xs={1} sm={1} md={1}>
            <img className="sa-image" src={`./club_images/000_共同_學生會_學生會.png`} title={'學生會'} alt="找不到圖片" loading="lazy" />
          </Grid>
          {/* <NewClub data={club} /> */}
          {/* <NewClub name={name} image={club['image']} links={club['links']} content={club['content']}  campus={club['campus']} /> */}
        </Grid>

        {/* 學生會連結 */}
        <Grid container spacing={2} align="center" justify="center" alignItems="center" sx={{ my: 3 }} columns={{ xs: 1, sm: 3, md: 3 }}>
              <Grid item xs={1} sm={1} md={1}>
                <form action='https://www.instagram.com/nkust_sa_111/' target='_blank'>
                  <button type='submit' className='sa-button'>
                    <InstagramIcon /><Typography sx={{ p: 1, fontSize: '14px' }}>學生會 IG</Typography> 
                  </button>
                </form>
              </Grid>
              <Grid item xs={1} sm={1} md={1}>
                <form action='https://www.facebook.com/%E5%9C%8B%E7%AB%8B%E9%AB%98%E9%9B%84%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8-%E5%AD%B8%E7%94%9F%E6%9C%83-105100258936155' target='_blank'>
                  <button type='submit' className='sa-button'>
                    <FacebookIcon /><Typography sx={{ p: 1, fontSize: '14px' }}>學生會 FB</Typography> 
                  </button>
                </form>
              </Grid>
              <Grid item xs={1} sm={1} md={1}>
                <form action='https://nkustsa.webnode.tw/' target='_blank'>
                  <button type='submit' className='sa-button'>
                    <WebIcon /><Typography sx={{ p: 1, fontSize: '14px' }}>學生會 官方網站</Typography> 
                  </button>
                </form>
              </Grid>
            </Grid>
      </Grid>
      <Title text="社團資訊" />

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
      <SubTitle text="其他性質社團" />
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
        PARTY_DATAS.filter(({classes}) => classes === '其他').map((club) => {
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
