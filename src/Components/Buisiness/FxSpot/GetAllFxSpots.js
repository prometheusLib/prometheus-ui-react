import React, {useEffect} from "react";
import ModalFxSpot from "../../../Modals/ModalFxSpot";

export default function GetAllFxSpots() {
const [items, setItems] = React.useState([])

useEffect(() => {
    fetch("http://localhost:8080/prometheus/fxspot/getAll")
        .then(response => response.json())
        .then(data => setItems(data));
}, []);

    const listItems = items.map((d) =>
            <ul className="list-group listItems">
                <li className="list-group-item" key={d.id}>
                    {d.id} {d.name} {d.spotRate}</li>
            </ul>);

return(<ModalFxSpot items = {listItems}/>)
}