import React from "react";
import PropTypes from "prop-types";

function FxSpotItem(props){

    return (
       <span >
           {props.id}  &nbsp; {props.name}  &nbsp; {props.spotRate}
           {console.log(props)}
       </span>
    )
}

FxSpotItem.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FxSpotItem