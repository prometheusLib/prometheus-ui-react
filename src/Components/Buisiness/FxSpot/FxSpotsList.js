import React from 'react'
import PropTypes from "prop-types";
import FxSpotItem from "./FxSpotItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function FxSpotsList(props) {
    return (
        // <ul style={styles.ul}>
        <li>
            { props.items.map(
                (item) => {
                    return <FxSpotItem item = {item}/>
                }
            )}
        </li>
        // </ul>
    )
}

FxSpotsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FxSpotsList