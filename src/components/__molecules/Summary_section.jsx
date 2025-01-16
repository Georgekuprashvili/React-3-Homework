import '../__molecules/Summary.css';
import Red_box from "./red_box";
import Yellow_box from './Yellow_box';
import Green_box from './Green_box';
import Blue_cont from './Blue_cont';
function Summary_section() {

    return(
        <>
        <div className="color_box">
<Red_box/>
<Yellow_box/>
<Green_box/>
<Blue_cont/>
        </div>
        
        
        </>
    )
    
}

export default Summary_section;