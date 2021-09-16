import './../../style/components/fp/fp-carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Price from '../price/price';
import watch from './../../image/watch.jpg';
const FeaturedProduct = ()=>{
    return(
        <>
            <div className="featured-products">
                <header>FEATURED PRODUCTS</header>
                <div className="item-container">
                <Carousel>
                  <Carousel.Item interval={"false"}>
                    <div className="active-container">
                        <div className="item">
                            <img
                              className="d-inline"
                              src={watch}
                              alt="First slide"
                            />
                            <div className="item-details">
                                <h5>Beats Solo 2 on Ear Headphones - Black</h5>
                                <Price check="4" discountedPrice="$499" actualPrice="$599" /> 
                            </div>
                        </div>
                        <div className="item">
                            <img
                              className="d-inline"
                              src={watch}
                              alt="First slide"
                            />
                            <div className="item-details">
                                <h5>Beats Solo 2 on Ear Headphones - Black</h5>
                                <Price check="4" discountedPrice="$499" actualPrice="$599" /> 
                            </div>
                        </div>
                        <div className="item">
                            <img
                              className="d-inline"
                              src={watch}
                              alt="First slide"
                            />
                            <div className="item-details">
                                <h5>Beats Solo 2 on Ear Headphones - Black</h5>
                                <Price check="4" discountedPrice="$499" actualPrice="$599" /> 
                            </div>
                        </div>
                    </div>
                  </Carousel.Item>                  
                </Carousel>
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct;



































/* <Carousel interval={null}>
    <Carousel.Item>
        <img className='d-block w-100' src={} alt='First slide' />
    </Carousel.Item>
    <Carousel.Item>
        <img className='d-block w-100' src={} alt='Third slide' />
    </Carousel.Item>
    <Carousel.Item>
        <img className='d-block w-100' src={} alt='Third slide' />
    </Carousel.Item>
</Carousel> */


























/* <Carousel.Item interval={"false"}>
      <img
        className="d-inline"
        src={watch}
        alt="Second slide"
      />
      <div className="item-details">
          <h5>Beats Solo 2 on Ear Headphones - Black</h5>
          <Price check="4" discountedPrice="$499" actualPrice="$599" /> 
      </div>
    </Carousel.Item>
    <Carousel.Item interval={"false"}>
      <img
        className="d-inline"
        src={watch}
        alt="Third slide"
      />
      <div className="item-details">
          <h5>Beats Solo 2 on Ear Headphones - Black</h5>
          <Price check="4" discountedPrice="$499" actualPrice="$599" /> 
      </div>
    </Carousel.Item> */