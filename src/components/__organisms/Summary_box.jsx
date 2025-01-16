import Summary_heading from '../__atoms/Summary_heading';
import '../__organisms/Summary_box.css'
import Summary_section from '../__molecules/Summary_section';
import Button from '../__molecules/button';


function Summary_box() {


return(

    <>
    <div className="summary_cont">
<Summary_heading/>
<Summary_section/>
<Button/>


    </div>
    
    </>
)

    
}
export default Summary_box;