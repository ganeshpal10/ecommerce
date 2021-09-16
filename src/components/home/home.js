import Profile from "./../fixed-container/profile";
import Icon from "./../icon-shop/icon-shop";
import MenuItem from "./../menu/menu-item";
import Banner from "./../banner/banner";
import BestSeller from "./../best-seller/best-seller";
import banner1 from './../../image/banner1.png'
import banner2 from './../../image/banner2.jpg'
import Policy from "./../policy/policy";
import FeaturedProduct from "./../fp/fp-carousel";
import Footer from "./../footer/footer";
import { Link } from "react-router-dom";

const Home =()=>{
    return(
        <>
            <Profile />
            <Icon />
            <MenuItem />
            <Link to="/accesories">Hello</Link>
            <Banner banner={banner1}/>
            <BestSeller />
            <Banner banner={banner2}/>
            <Policy />
            <FeaturedProduct />
            <Footer />
             
        </>
    )
}

export default Home;