import "./css/UnitClub.css";
import "./css/Club.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
function Club(props) {
    const { content } = props;
    const { name } = props;
    const { link } = props;
    const { campus } = props;
    return (
        <Box sx={{
            width: "350px",
        }}>
            <div className="unit-club">
                <div>
                    <div className="info-div">
                        <div className="club-name-div">
                            <div className="color-block-div" />
                            <div className="club-name-div1">{name}</div>
                        </div>
                        <div className="image-div" />
                        <div className="links-div">
                        <img
                            className="icon-home-icon"
                            alt=""
                            src="-icon-home-icon.svg"
                        />
                        <img
                            className="icon-facebook-rect-icon"
                            alt=""
                            src="-icon-facebook-rect-icon.svg"
                        />
                        <img
                            className="icon-instagram-alt-icon"
                            alt=""
                            src="-icon-instagram-alt-icon.svg"
                        />
                        </div>
                    </div>
                    <div className="campus-div">
                        <div className="text-div">{campus}</div>
                    </div>
                </div>
                <div className="content">
                    內容內容內容內容內容內容內容 內容內容內容內容內容內容內容 內容內容內容內容內容內容內容 內容內容內容內容內容內容內容 內容內容內容內容內容內容內容 內容內容內容內容內容內容內容 內容內容內容內容內容內容內容 內容內容內容內容內容內容內容 內容內容內容內容內容內容內容
                </div>
            </div>
        </Box>
    )
}
export default Club;