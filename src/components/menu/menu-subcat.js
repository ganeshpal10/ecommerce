import './../../style/components/menu/menu-subcat.css';
import { Link } from 'react-router-dom';

const MenuSubcat = (props)=>{
    
    return(
        <div className="mega-box">
            <div className="content">
                {props.subArray.map((item,index)=>{
                    return(
                        <div className="row" key={item.id}>
                            <header>{item.subMenuHeader}</header>
                            <ul className="mega-links">
                                {item.liList.map((listItem,listIndex)=>{
                                    return(
                                    <li className="sub-item" key={listIndex}><Link to="#">{listItem}</Link></li>
                                    )
                                })}
                            </ul> 
                        </div>        
                    )
                })}
                
            </div>
        </div>
    )
}

export default MenuSubcat;