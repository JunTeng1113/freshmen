import "./css/Map.css";
function Title(props) {
    const { text } = props;
    return (
        <div className="div5">
            <div className="div6">
                <b className="b">{text}</b>
            </div>
        </div>
    )
};
export default Title;