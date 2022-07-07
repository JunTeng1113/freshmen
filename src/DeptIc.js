import "./css/DeptIc.css";

import IconButton from '@mui/material/IconButton';
import WebIcon from '@mui/icons-material/Web';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const DeptIc = props => {
  const { title, content, image, links } = props;
  return (
    <div className="dept-ic-div">
      <img className="icon6" alt="" src={image} />
      <div className="div416">{title}</div>
      <div className="div417">
        {content}  
      </div>
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
    </div>
  );
};
