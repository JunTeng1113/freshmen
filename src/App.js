import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Box from '@mui/material/Box';
import { Campus } from "./Campus";
import { Club } from "./Club";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const navigate = useNavigate();
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "111新生資料袋－國立高雄科技大學學生會";;
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    // switch (pathname) {
    //   case "/":
    //     title = "";
    //     metaDescription = "";
    //     break;
    //   case "/club":
    //     title = "";
    //     metaDescription = "";
    //     break;
    // }

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
        <Routes>
          <Route index path="/" element={<Campus />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/club" element={<Club />} />
          <Route path="*" element={<h2>Not Found 404.</h2>} />
        </Routes>
      </Box>
    </Box>
    <Footer />
  </>);
}
export default App;
