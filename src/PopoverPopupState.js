import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import "./css/DeptIc.css";

import IconButton from '@mui/material/IconButton';
import WebIcon from '@mui/icons-material/Web';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function PopoverPopupState(props) {
    const { title, content, image, name, links } = props;
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
            <div>
                <button className='club-button'
                {...bindTrigger(popupState)}>
                    瞭解更多
                </button>
                <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    sx={{
                        p: '10px',
                        background: 'unset'
                    }}
                >
                    <div className="dept-ic-div">
                        <div className="row align-right">
                            <div className="close-button" onClick={popupState.close}>x</div>
                        </div>
                        <div className="image-container">
                            <img className="club-pop-image" src={image} title={name} alt="" loading="lazy"/>
                        </div>
                        <div className="div416">{title}</div>
                        <div className="div417">
                        {content}  
                        </div>
                        <div className="links-div">
                            { links['other'] && 
                            <IconButton target="_blank" href={links['other']}>
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
                    </div>
                </Popover>
            </div>
            )}
        </PopupState>
    );
}
