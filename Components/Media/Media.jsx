import img15 from '../../dist/img/img-15.png';
import img16 from '../../dist/img/img-16.png';
import img17 from '../../dist/img/img-17.png';
import img18 from '../../dist/img/img-18.png';
import img19 from '../../dist/img/img-19.png';
import img20 from '../../dist/img/img-20.png';




const Media = () => {
    return ( 
        <div className="  flex justify-center">
            <div className="w-[1600px] pt-5 pb-5 h-[95px] bg-[#eeefef] flex justify-center">
                <div className='flex'>
                    <a href="#"><img className='' src={img20} alt="" /></a>
                    <a href="#"><img src={img19} alt="" /></a>
                    <a href="#"><img src={img18} alt="" /></a>
                    <a href="#"><img src={img17} alt="" /></a>
                    <a href="#"><img src={img16} alt="" /></a>
                    <a href="#"><img src={img15} alt="" /></a>
                </div>

            </div>

        </div>
     );
}
 
export default Media;