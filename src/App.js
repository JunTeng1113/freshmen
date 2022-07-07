import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Box from '@mui/material/Box';
import { Map } from "./Map";
import { Club } from "./Club";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/club":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (<>
    <Header />
    
    <Box sx={{
      backgroundColor: "#f1eee9",
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box sx={{
        maxWidth: "60rem",
        width: '95%',
      }}>
        123
        <Routes>
          <Route path="/" element={<Map />} />

          <Route path="/club" element={<Club />} />
        </Routes>
      </Box>
    </Box>
    <Footer />
  </>);
}
export default App;
