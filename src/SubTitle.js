import "./css/Map.css";
import Box from "@mui/material/Box";
function SubTitle(props) {
    const { text } = props;
    return (
        <Box sx={{
            width: "350px",
            display: "flex",
            justifyContent: "center",
        }}>
            <div className="sub-title">
                <div className="sub-title-text">{text}</div>
            </div>
        </Box>
        // <div className="sub-title-outer">
        //     <div className="sub-title">
        //         <div className="sub-title-text">{text}</div>
        //     </div>
        // </div>
    )
};
export default SubTitle;