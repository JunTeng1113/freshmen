import "./css/DeptIc.css";

export const DeptIc = props => {
  const { title, content, image } = props;
  return (
    <div className="dept-ic-div">
      <img className="icon6" alt="" src={image} />
      <div className="div416">{title}</div>
      <div className="div417">
        {content}  
      </div>
      <img className="icon7" alt="" src="7.svg" />
    </div>
  );
};
