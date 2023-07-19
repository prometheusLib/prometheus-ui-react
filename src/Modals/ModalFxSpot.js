import React, {Component} from "react";
import "./Modal.css"

export default class ModalFxSpot extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={() => this.setState({isOpen: true})}> Модальное окно
                </button>

                {this.state.isOpen && <div className= "modal1">
                    <div className= "modal-body">
                        <h1 >Список FxSpots</h1>
                        <span>{this.props.items}</span>
                        <button className="btn btn-primary" onClick={() => this.setState({isOpen: false})}> Закрыть</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}
