
import { User } from '../Types/user';
import img0 from '../resources/p1.jpg'
import img1 from '../resources/p2.jpg'
import img2 from '../resources/p3.jpg'
import img3 from '../resources/p4.jpg'

export const Card= (props:any) =>{

    const list:User=props.listItem;
    const imageList= [img0,img1,img2,img3]
    
    const randomnumber= Math.floor(Math.random() * 4);
   
   
    return(
        <div className='card'>

            <img src={imageList[randomnumber]} height='200px' width='200px' alt="img"/>
            <h1>{list.name}</h1>
            <h1>{list.email}</h1>
            <h1>{list.location}</h1>
            <h1>{list.role}</h1>
            <button className='fullScreen'>Click for Fullscreen</button>
  
        </div>
    )
}