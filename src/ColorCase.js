import React, { Component } from 'react';


class ColorCase extends React.Component {

    constructor(props) {
        super(props);

        this.changeColor = this.changeColor.bind(this);
        this.state = {
            style : {
                width: this.props.size,
                height: this.props.size,
                backgroundColor: this.props.color
            }
        }
    }

    

    changeColor() {
        let currentColor = this.props.color;
        do {
            currentColor = this.getRandomColor();
        } while (currentColor === this.props.color)

        this.setState({
            style: {
            ...this.state.style,
            backgroundColor: currentColor
            }
        })
        console.log(currentColor);
    }

    getRandomColor(){
        let color = undefined;
        do
        {
            let rdn = Math.floor(Math.random() * this.props.colorList.length);
            color = this.props.colorList[rdn];
        } while(color === undefined);
        return "#" + color;
    }

    render() {
        return (
            <div onClick={this.changeColor} className="ColorCase" style={this.state.style}></div>
        )
    }
}

export default ColorCase;