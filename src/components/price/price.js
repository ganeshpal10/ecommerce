import './../../style/components/price/price.css';
var array =[1,1,1,1,1];

const Price = (props)=>{
    return(
        <>
            <div className="reviews">
                {array.map((item,index)=>{          
                    if(props.check>index)
                    {
                        return(<span className="fa fa-star checked" key={index}></span>)
                    }
                    else{
                            return(<span className="fa fa-star" key={index}></span>)
                    }
                })}
            </div>
            <div className="price-container">
                <span className="discounted-price">{props.discountedPrice}</span>
                <span className="actual-price">{props.actualPrice}</span>
            </div>
        </>
    )
}

export default Price;