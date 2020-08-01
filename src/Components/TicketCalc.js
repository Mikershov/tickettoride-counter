import React from "react";
import ColorSelection from "./ColorSelection";

class TicketCalc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: [
                {
                    id: 1,
                    color: '#333333',
                    active: false,
                    points: 0
                },

                {
                    id: 2,
                    color: '#d81d1d',
                    active: false,
                    points: 0
                },

                {
                    id: 3,
                    color: '#e0e028',
                    active: false,
                    points: 0
                },

                {
                    id: 4,
                    color: '#2da92d',
                    active: false,
                    points: 0
                },

                {
                    id: 5,
                    color: '#4179d6',
                    active: false,
                    points: 0
                }
            ],

            trains: [
                {
                    id: 1,
                    cars: 1,
                    points: 1
                },

                {
                    id: 2,
                    cars: 2,
                    points: 2
                },

                {
                    id: 3,
                    cars: 3,
                    points: 4
                },

                {
                    id: 4,
                    cars: 4,
                    points: 7
                },

                {
                    id: 5,
                    cars: 6,
                    points: 15
                },

                {
                    id: 6,
                    cars: 8,
                    points: 21
                }
            ],

            activeColor: 1,
        }

        this.colorChooser = this.colorChooser.bind(this);
    }

    colorChooser(colorId, e) {
        //console.log("ok2 --- ", this.state.colors[colorId-1]);

        //todo понять почему вызывается два раза
        /*this.setState((state) => {
            const newState =  state.colors.map((color) => {
                if(color.id === colorId) {
                    console.log(color.active)
                    color.active = !color.active;
                    console.log(color.active)
                }
                return color;
            });

            return newState;
        });*/

        const newColors = this.state.colors.map((color) => {
            if(color.id === colorId) {
                color.active = !color.active;
            }
            return color;
        });

        this.setState({
                colors: newColors
            }
        )
    }

    render() {
        return (
            <div className="wrapper">
                <ColorSelection colors={this.state.colors} colorHandler={this.colorChooser} />
            </div>
        )
    }
}

export default TicketCalc;