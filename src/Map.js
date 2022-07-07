import { useState, useCallback } from "react";
import { CampusYc } from "./CampusYc";
import { PortalPopup } from "./PortalPopup";
import { CampusCj } from "./CampusCj";
import { CampusNj } from "./CampusNj";
import { CampusFs } from "./CampusFs";
import CampusDetail from "./CampusDetail";
import "./css/Map.css";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";


export const Map = () => {
  const campusData = {
    "建工校區": {
      colleges: {"工學院": ["化學工程與材料工程系", "土木工程系", "工業工程與管理系"], "智慧機電學院": ["機械工程系", "模具工程系"], "電機與資訊學院": ["電機工程系", "電子工程系", "資訊工程系"]},
      image: "https://i.imgur.com/nz6v8fH.png"
    }, 
    "燕巢校區": {
      colleges: {"工學院": ["化學工程與材料工程系", "土木工程系", "工業工程與管理系"], "智慧機電學院": ["機械工程系", "模具工程系"], "電機與資訊學院": ["電機工程系", "電子工程系", "資訊工程系"]},
      image: "https://i.imgur.com/eVQtCtL.png"
    }, 
    "第一校區": {
      colleges: {"工學院": ["化學工程與材料工程系", "土木工程系", "工業工程與管理系"], "智慧機電學院": ["機械工程系", "模具工程系"], "電機與資訊學院": ["電機工程系", "電子工程系", "資訊工程系"]},
      image: "https://i.imgur.com/ATlcBxA.png"
    }, 
    "楠梓校區": {
      colleges: {"工學院": ["化學工程與材料工程系", "土木工程系", "工業工程與管理系"], "智慧機電學院": ["機械工程系", "模具工程系"], "電機與資訊學院": ["電機工程系", "電子工程系", "資訊工程系"]},
      image: "https://i.imgur.com/2Xv3CsO.png"
    }, 
    "旗津校區": {
      colleges: {"工學院": ["化學工程與材料工程系", "土木工程系", "工業工程與管理系"], "智慧機電學院": ["機械工程系", "模具工程系"], "電機與資訊學院": ["電機工程系", "電子工程系", "資訊工程系"]},
      image: "https://i.imgur.com/gGtRb3b.png"
    }, 
  
  }
  const [isCampusYcOpen, setCampusYcOpen] = useState(false);
  const [isCampusCjOpen, setCampusCjOpen] = useState(false);
  const [isCampusNjOpen, setCampusNjOpen] = useState(false);
  const [isCampusFsOpen, setCampusFsOpen] = useState(false);

  const openCampusYc = useCallback(() => {
    setCampusYcOpen(true);
  }, []);

  const closeCampusYc = useCallback(() => {
    setCampusYcOpen(false);
  }, []);

  const onImage1Click = useCallback(() => {
    // Please sync "campus-jk" to the project
  }, []);

  const openCampusCj = useCallback(() => {
    setCampusCjOpen(true);
  }, []);

  const closeCampusCj = useCallback(() => {
    setCampusCjOpen(false);
  }, []);

  const openCampusNj = useCallback(() => {
    setCampusNjOpen(true);
  }, []);

  const closeCampusNj = useCallback(() => {
    setCampusNjOpen(false);
  }, []);

  const openCampusFs = useCallback(() => {
    setCampusFsOpen(true);
  }, []);

  const closeCampusFs = useCallback(() => {
    setCampusFsOpen(false);
  }, []);

  return (
    <>
    123
    <Stack spacing={1}>
      <Title text="校園指引" />
      <Box sx={{
        width: "100%",
        fontSize: "24px",
        color: "#000",
        fontFamily: "Inter",
      }}>
        {Object.keys(campusData).map(campus => {
          return (
            <CampusDetail
            campus={campus}
            colleges={campusData[campus].colleges}
            image={campusData[campus].image}
            />
          )
        })}
      </Box>
    </Stack>
    </>
  );
};
