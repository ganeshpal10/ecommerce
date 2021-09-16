import './../../style/components/best-seller/best-seller.css';
import macAir from './../../image/macbookPro.jpeg';
import macPro from './../../image/macbookAir.jpeg';
import iphone11 from './../../image/iphone-11.jpeg';
import iphoneSE from './../../image/iphone-se.jpg';
import ipad from './../../image/ipad.jpg';
import watch from './../../image/watch.jpg';
import Price from '../price/price';

const BestSeller = ()=>{
    return(
        <>
            <div className="bs-container">
                <header>BEST SELLER</header>
                <nav>
                    <ul className="item-list">
                        <li className="item active">All</li>
                        <li className="item">Mac</li>
                        <li className="item">Iphone</li>
                        <li className="item">Ipad</li>
                        <li className="item">Ipod</li>
                        <li className="item">Accessories</li>
                    </ul>
                </nav>
                <div className="card-container">
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={macPro} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Apple Macbook Pro</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={macPro} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Apple Macbook Pro</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={macAir} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Apple Macbook Air</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={iphone11} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Iphone 11</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={iphoneSE} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Apple Mini</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={ipad} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Apple Ipad</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={watch} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Apple Watch</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                    <div className="card">
                        <div className="blur-container">
                            <span className="badge badge-danger">Hot</span>
                            <div className="image-container">
                                <img src={iphoneSE} alt="Product Name"></img>
                            </div>
                            <div className="icon-container">
                                <span className="clicks favourite">
                                    <i className="far fa-heart"></i>
                                </span>
                                <span className="clicks cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </span>
                            </div>
                        </div>
                        <p className="product-name">Apple SE</p>
                        <Price check="4" discountedPrice="$499" actualPrice="$599" />
                    </div>
                </div>
                <div className="loadmore-container">
                    <span className="loadmore">LOADMORE</span>
                </div>
            </div>
        </>
    )
}

export default BestSeller;