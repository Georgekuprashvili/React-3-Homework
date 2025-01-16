
import '../__organisms/Blue_box.css';
import Blue_box_heading from '../__atoms/Blue_box_heading';
import Blue_box_circle from '../__molecules/Numbers_circle';
import Blue_box_footer from '../__molecules/Blue_box_footer';


function Blue_box() {
    return(
 <>
         <div className='blue_box'>
<Blue_box_heading/>
<Blue_box_circle/>
<Blue_box_footer/>
</div>
        
        </>
    )
    
}


export default Blue_box;