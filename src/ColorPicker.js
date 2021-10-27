import React, { Component } from 'react';
import "./ColorPicker.css";

import ColorCase from "./ColorCase";

class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cases : {
                col: [],
                rows: []
            }
        }
        this.isInit = false;
    }

    static defaultProps = {
        colorCaseSize : 50,
        colors: [
            "f0f8ff",
            "faebd7",
            "00ffff",
            "7fffd4",
            "f0ffff",
            "f5f5dc",
            "ffe4c4",
            "0000ff",
            "8a2be2",
            "a52a2a",
            "deb887",
            "5f9ea0",
            "7fff00",
            "6495ed",
            "00008b",
            "9932cc",
            "8b0000"
        ]
    }

    init() {
        if(!this.isInit){
            //create nb of color case from screen size
            let screenWidth = document.documentElement.clientWidth;
            let screenHeight = document.documentElement.clientHeight;
            let nbCol = Math.floor(screenWidth / this.props.colorCaseSize);
            let nbRows = Math.floor(screenHeight / this.props.colorCaseSize);

            let col = Array(nbCol);
            let rows = Array(nbRows);

            this.setState({cases: {
                col: col,
                rows: rows
            }});            

            this.isInit = true;        
        }
    }

    createComponents() {
        let components = [];

        for (let i = 0; i < this.state.cases.col.length; i++) {
            for (let j = 0; j < this.state.cases.rows.length; j++) {
                let color = this.getRandomColor();
                components.push(<ColorCase size={this.props.colorCaseSize} color={color} colorList={this.props.colors} />);
            }
        }

        return components;
    }

    getRandomColor(){
        let color = undefined;
        do
        {
            let rdn = Math.floor(Math.random() * this.props.colors.length);
            color = this.props.colors[rdn];
        } while(color === undefined);
        return "#" + color;
    }

    render () {

        this.init();

        return (
            <div className="colorPicker">
                <h1 className="colorPicker-title">My Color Picker</h1>
                <div className="colorPicker-container">
                    { 
                        this.createComponents()
                    }
                </div>
            </div>
        )
    }
}

export default ColorPicker;