import React, {useEffect} from 'react'
import './styles/App.css';
import MainHeader from "./Components/Visuals/MainHeader/MainHeader";
import MainSlide from "./Components/Visuals/MainSlide/MainSlide";
import GetAllFxSpots from "./Components/Buisiness/FxSpot/GetAllFxSpots";

function App() {

    return (
        <div className="wrapper">
            <div className="sidebar">
                <div className="sideItem">
                    <MainHeader/>
                </div>
                   <div className="sideItem"> <button className="btn btn-primary">
                        Start!
                    </button>
                    &nbsp;
                       <GetAllFxSpots/>
                    &nbsp;
                </div>
            </div>
            <MainSlide/>
        </div>
    );
}

export default App;

