import './../../style/components/banner/banner.css'

const Banner = (props)=>{
    return (
        <div className="banner-container">
            <img src={props.banner} alt="Banner 1"></img>
        </div>
    )
}


export default Banner;