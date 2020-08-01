import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.
        //this.handleClick = this.handleClick.bind(this);
    }

    /*handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));

        console.log(this)
    }*/


    handleClick = () => {
        /*this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));*/

        const tf = () => console.log(this);

        tf();

        setTimeout(() => console.log(this), 3000);

    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Включено1' : 'Выключено'}
            </button>
        );
    }
}

export default Toggle