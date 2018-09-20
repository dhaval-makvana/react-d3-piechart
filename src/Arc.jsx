import React, { Component } from 'react'
import * as d3 from 'd3'

class Arc extends Component {

    constructor() {
        super();

        this.arc = d3.arc();
    }

    componentWillMount() {
        this.updateD3(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updateD3(nextProps);
    }

    updateD3(newProps) {
        this.arc.innerRadius(newProps.innerRadius);
        this.arc.outerRadius(newProps.outerRadius);
    }

    render() {

        console.log("arc component", this.props);

        return (
            <path 
                d={this.arc(this.props.data.data.value)}
                style={{fill: this.props.color}}
            />
        )
    }

}

export default Arc;
