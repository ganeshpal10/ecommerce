import './../../style/components/menu/menu-item.css';
import MenuSubcat from './menu-subcat';
const MenuItem = ()=>{
    let navItems = [
        {
            id:1,
            navItemName:"HOME"
        },
        {
            id:2,
            navItemName:"STORE",
            subContent:[
                {
                id:1,
                subMenuHeader:"Accesories",
                liList:[
                "Airport & Wireless",
                "AppleCare",
                "Bags, Shells & Sleeves",
                "Business & Security",
                "Cables & Docks",
                "Cameras & Video ",
                "Car & Travel",
                "Cases & Films"
            ]
            },
            {
                id:2,
                subMenuHeader:"Category",
                liList:[
                "Charging Devices",
                "Connected Home ",
                "Device Care",
                "Display &; Graphic",
                "Fitness &; Sport",
                "Headphone",
                "HealthKit"
            ]
            },
            {
                id:3,
                subMenuHeader:"Category",
                liList:[
                "Mice & Keyboards",
                "Music Creation",
                "Networking & Server"
            ]
            }
        ]
        },
        {
            id:3,
            navItemName:"IPHONE"
        },
        {
            id:4,
            navItemName:"IPAD"
        },
        {
            id:5,
            navItemName:"MACBOOK"
        },
        {
            id:6,
            navItemName:"ACCESSORIES"
        }
    ]
    return(
        <nav>
            <div className="menu-container-1"> {/*wrapper */}
                <ul className="menu-container"> {/*nav-links */}

                    {navItems.map((item,index)=>{
                            return(
                                <li className="menu-item" key={item.id}>
                                    <span>{item.navItemName}</span>
                                    {index === 1 ? <MenuSubcat subArray={item.subContent}/>:""}
                                </li>            
                            )
                    })}
                </ul>
            </div>
        </nav>
    )
}


export default MenuItem;