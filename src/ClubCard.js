import { useState, useCallback } from "react";
import { PortalPopup } from "./PortalPopup";
import { DeptIc } from "./DeptIc";
function ClubCard(props) {
    const { name="智慧商務系學會" } = props;
    const { campus="燕巢" } = props;
    const { content="　　大家好大家好，我們是智慧商務系學會！！內容內容內容內容內容內容內容內容內容，內容內容內容內容內容內容，內容內容內容內容內容內容，內容內容內容內容內容，內容內容內容內容內容，內容內容內容內容內容內容。" } = props;
    const { image } = props;
    
    const [isDeptIcOpen, setDeptIcOpen] = useState(false);
    
    const openDeptIc = useCallback(() => {
        setDeptIcOpen(true);
    }, []);
    
    const closeDeptIc = useCallback(() => {
        setDeptIcOpen(false);
    }, []);

    return (
        <div className="div84">
            <div className="div85">
                <div className="div86" />
                <div className="div87">{name}</div>
                <div className="div88" onClick={openDeptIc}>
                <div className="div89">瞭解更多</div>
                </div>
                <div className="div90" />
            </div>
            <div className="campus-div2">
                <div className="text-div">{campus}</div>
            </div>
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
                />
            </PortalPopup>
            )}
        </div>

    )
}
export default ClubCard;