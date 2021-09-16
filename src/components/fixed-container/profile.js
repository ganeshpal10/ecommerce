import './../../style/components/fixed-container/profile.css';


const Profile = ()=>{

    return(
        <>
            <div className="main-container flex  pb-3 pt-3">
                
                <div className="drop-down flex ">
                    
                    <div className="language mr-4">
                        <span className="language-item mr-1">EN</span>
                        <i className="fa fas fa-caret-down"></i>
                    </div>

                    <div className="language">
                        <span className="language-item mr-1">$</span>
                        <i className="fa fas fa-caret-down"></i>
                    </div>

                </div>
                <div className="side-container flex">
                    <div className="profile-container flex mr-2">
                        <div className="profile flex mr-4">
                            <i className="fa far fa-user mr-2 my-auto"></i>
                            <div className="user mr-2">My profile</div>
                        </div>
                        <div className="profile cart flex mr-5">
                            <i className="fa far fa-shopping-cart mr-2 my-auto"></i>
                            <div className="user mr-2">2 Items</div>
                            <div className="money mr-2">$998</div>
                        </div>
                        <div className="search">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;