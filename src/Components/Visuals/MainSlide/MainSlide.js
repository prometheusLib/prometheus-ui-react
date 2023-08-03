import React from "react";
import "./MainSlide.css"
import Loader from "../Loader/Loader";

const MainSlide = () => {
    return(
        <div className="mainSlide">
            <div className="headerMainSlide"> <Loader/>
            </div>
            <div className="description">
                <span className="descriptionText"> Здесь должно находиться описание проекта...</span>
            </div>
        </div>
    )
}

export default MainSlide