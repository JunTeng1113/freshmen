import { useState, useCallback, useEffect } from "react";
import { PortalPopup } from "./PortalPopup";
import PopoverPopupState from "./PopoverPopupState";
import { DeptIc } from "./DeptIc";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ClubCard(props) {
    const { data } = props;
    const { ord="" } = data;
    const { classes="" } = data;
    const { name="" } = data;
    const { campus="" } = data;
    const { content="" } = data;
    const { facebook="" } = data;
    const { instagram="" } = data;
    const { other="" } = data;
    const [image, setImage] = useState(`./club_images/${"0".repeat(3 - ord.length)}${ord}_${campus}_${classes}_${name}.png`);
    const links = {
        facebook: facebook,
        instagram: instagram,
        other: other
    }
    
    const [isDeptIcOpen, setDeptIcOpen] = useState(false);
    
    const openDeptIc = useCallback(() => {
        setDeptIcOpen(true);
    }, []);
    
    const closeDeptIc = useCallback(() => {
        setDeptIcOpen(false);
    }, []);

    const checkImagePromise = new Promise( (resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({path: image, status: 'ok'});
        img.onerror = () => {
            switch (campus) {
                case '建工':
                    return reject({path: './club_images/建工燕巢校區.png', status: 'error'})
            
                case '燕巢':
                    return reject({path: './club_images/燕巢校區.png', status: 'error'})

                case '建工燕巢':
                    return reject({path: './club_images/建工燕巢校區.png', status: 'error'})

                case '第一':
                    return reject({path: './club_images/第一校區.png', status: 'error'})

                case '楠梓':
                    return reject({path: './club_images/楠梓校區.png', status: 'error'})

                case '旗津':
                    return reject({path: './club_images/旗津校區.png', status: 'error'})

                default:
                    break;
            }
            return reject({path: 'https://community.librenms.org/uploads/default/original/2X/7/759793552edd033b80526884b06a706fdd1a06ba.png', status: 'error'})
        };
        
        img.src = image;
    });
    
    useEffect(() => {
        console.log(123)
        checkImagePromise.then( result => {
            //
        }, function (error) {
            setImage(error.path);
        })
    }, [image])
    

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
                            // backgroundColor: '#d9d9d9',
                            width: '135px',
                            height: '87px',
                        }}>
                            {image &&
                                <img className="club-image" src={image} title={name} alt="找不到圖片" loading="lazy" />
                            }
                        </Box>
                        <Box sx={{
                            my: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <PopoverPopupState 
                                title={name} 
                                content={content === '' ? `歡迎加入${name}！`  : content}
                                image={image}
                                links={links}
                            />
                        </Box>
                    </Stack>

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
                {/* {isDeptIcOpen && (
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
                )} */}
            </div>
        </Box>
    )
}

export default ClubCard;