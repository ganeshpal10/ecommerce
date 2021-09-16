import './../../style/components/footer/footer.css';
import westernUnion from './../../image/westernunion.png';
import masterCard from './../../image/mastercard.png';
import payPal from './../../image/paypal.png';
import visa from './../../image/visa.png';

const Footer =()=>{
    let crDetails =[
        {
            id:1,
            header:"Information",
            list:["About Us","Informatiom","Privacy Policy","Terms & Conditions"]
        },
        {
            id:2,
            header:"Service",
            list:["About Us","Informatiom","Privacy Policy","Terms & Conditions"]
        },
        {
            id:3,
            header:"Extra",
            list:["About Us","Informatiom","Privacy Policy","Terms & Conditions"]
        },
        {
            id:4,
            header:"My Account",
            list:["About Us","Informatiom","Privacy Policy","Terms & Conditions"]
        },
        {
            id:5,
            header:"Userful Links",
            list:["About Us","Informatiom","Privacy Policy","Terms & Conditions"]
        },
        {
            id:6,
            header:"Our Offers",
            list:["About Us","Informatiom","Privacy Policy","Terms & Conditions"]
        },
    ]
    let cards=[
        {
            image:westernUnion
        },
        {
            image:masterCard
        },
        {
            image:payPal
        },
        {
            image:visa
        },
    ]
    return(
        <div className="footer-container">
            <footer>
                <div className="information-container">
                    <div className="information">
                        <header className="ishop">iSHOP</header>
                        <p className="text-justify">Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s,when an unknown printer</p>
                    </div>
                    <div className="information">
                        <header>Follow Us</header>
                        <p className="text-justify">Lorem ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been</p>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="information">
                        <header>Contact Us</header>
                        <p className="text-justify">iShop:address@building124<br></br>Call us now:0123-456-789<br></br>Email:support@whatever.com</p>
                    </div>
                </div>
                <div className="crd-container"> 
                    {crDetails.map((item)=>{
                        return(
                            <div className="crd-item" key={item.id}>
                                <header>{item.header}</header>
                                {item.list.map((listItem,index)=>{
                                    return(
                                        <p className="list-item" key={index}>{listItem}</p>
                                    )
                                })}
                            </div>
                        )
                    })

                    }
                </div>
        </footer>
            <div className="pi-container">
                <div className="pi-mainContainer">

                    {cards.map((item,index)=>{
                        return(
                            <div className="payment-icon" style={{backgroundImage:`url(${item.image})`}} key={index}></div>
                            )
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Footer;




//crd - Customer Related Data

//pi=payment-icon