import "./css/UnitClub.css";
import "./css/Club.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';


import WebIcon from '@mui/icons-material/Web';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Club(props) {
    const { data } = props;
    const { ord } = data;
    const { classes } = data;
    const { name } = data;
    const { content="" } = data;
    const { image="https://i.imgur.com/nz6v8fH.png" } = data;
    const { web } = data;
    const { facebook } = data;
    const { instagram } = data;
    const links = {web, facebook, instagram};
    const { campus } = data;
    return (
        <Box sx={{
            width: "350px",
        }}>
            <div className="unit-club">
                <div>
                    <div className="info-div">
                        <Stack>
                            <div className="club-name-div">
                                <Box sx={{
                                    position: 'absolute', 
                                    top: '15px',
                                    left: '60px',
                                    backgroundColor: '#d9d9d9', 
                                    width: '75px',
                                    height: '10px',
                                }} />
                                {/* <div className="div86" /> */}
                                <Typography sx={{
                                    position: 'absolute', 
                                    width: '100%',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>{name}</Typography>
                            </div>
                            <Box sx={{
                                backgroundColor: '#d9d9d9',
                                width: '135px',
                                height: '87px',
                            }}>
                                <img width="100%" src={image} title={name} alt="" />
                            </Box>
                            {/* <div className="div90">
                                <img width="100%" src={image} title={name} alt="" />
                            </div> */}
                            <div className="links-div">
                                { links['web'] && 
                                <IconButton target="_blank" href={links['web']}>
                                    <WebIcon />
                                </IconButton> }
                                { links['facebook'] && 
                                <IconButton target="_blank" href={links['facebook']}>
                                    <FacebookIcon />
                                </IconButton> }
                                { links['instagram'] && 
                                <IconButton target="_blank" href={links['instagram']}>
                                    <InstagramIcon />
                                </IconButton> }
                            </div>
                        </Stack>
                    </div>
                </div>
                <Box sx={{
                    position: 'absolute',
                    left: '0.4rem',
                    top: '-0.2rem',
                    width: '4rem',
                    height: '0.4rem',
                    backgroundColor: '#e0c5af',
                    borderBottom: '1px solid #000',
                    borderRight: '1px solid #000',
                    borderLeft: '1px solid #000',
                }}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: '12px',
                        lineHeight: '0'
                    }}>{campus}</Typography>
                </Box>
            </div>
        </Box>
    )
}
export default Club;