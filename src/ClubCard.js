import { useState, useCallback } from "react";
import { PortalPopup } from "./PortalPopup";
import { DeptIc } from "./DeptIc";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ClubCard(props) {
    const { name="ＯＯＯ社" } = props;
    const { campus="校區" } = props;
    const { content="　　大家好大家好，我們是ＯＯＯ社！！內容內容內容內容內容內容內容內容內容，內容內容內容內容內容內容，內容內容內容內容內容內容，內容內容內容內容內容，內容內容內容內容內容，內容內容內容內容內容內容。" } = props;
    const { image="https://i.imgur.com/nz6v8fH.png" } = props;
    const { links={'web': 'https://ic.nkust.edu.tw/p/412-1075-5717.php?Lang=zh-tw'} } = props;
    
    const [isDeptIcOpen, setDeptIcOpen] = useState(false);
    
    const openDeptIc = useCallback(() => {
        setDeptIcOpen(true);
    }, []);
    
    const closeDeptIc = useCallback(() => {
        setDeptIcOpen(false);
    }, []);

    return (
        <Box sx={{
            mx: "6px"
        }}>
            <div className="div84">
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
                                zIndex: 0,
                            }} />
                            {/* <div className="div86" /> */}
                            <Typography sx={{...{
                                position: 'relative', 
                                width: '100%',
                                height: '100%',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1,
                            },
                            ...{fontSize: name.length > 8 && '12px'}, 
                            ...{letterSpacing: name.length > 10 && '-1px'}
                            }}>{name}</Typography>
                        </div>
                        <Box sx={{
                            backgroundColor: '#d9d9d9',
                            width: '135px',
                            height: '87px',
                        }}>
                            <img width="100%" src={image} title={name} alt="" />
                        </Box>
                        <div className="div88" onClick={openDeptIc}>
                            <Typography sx={{
                                textAlign: 'center',
                                fontSize: '14px',
                            }}>瞭解更多</Typography>
                            {/* <div className="div89">瞭解更多</div> */}
                        </div>
                    </Stack>

                </div>
                <Box sx={{
                    position: 'absolute',
                    left: '-0.4rem',
                    top: '0.2rem',
                    width: '0.8rem',
                    height: '2.5rem',
                    backgroundColor: '#e0c5af',
                    border: '1px solid #000',
                }}>
                    <Typography sx={{
                        fontSize: '14px',
                    }}>{campus}</Typography>
                </Box>
                {isDeptIcOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeDeptIc}
                >
                    <DeptIc 
                        onClose={closeDeptIc} 
                        title={name} 
                        content={content}
                        image={image}
                        links={links}
                    />
                </PortalPopup>
                )}
            </div>
        </Box>
    )
}
export default ClubCard;