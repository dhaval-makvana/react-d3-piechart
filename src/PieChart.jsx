import React, { Component } from 'react'
import * as d3 from 'd3'
import LabeledArc from './LabeledArc'

class PieChart extends Component {

    constructor() {
        super();

        this.pie = d3.pie()
            .sort(null)
            .value(d => d.value);

        this.colors = d3.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    }

    arcGenerator(d, i) {

        console.log("Arc generator", d)

        return (
            <LabeledArc
                key={`arc-$(i)`}
                data={d}
                innerRadius={this.props.innerRadius}
                outerRadius={this.props.outerRadius}
                color={this.colors(i)}
            />
        )
    }

    render() {

        // console.log("pie chart", this.props.data);

        let pie = this.pie(this.props.data)

        let translate = `translate(${this.props.x}, ${this.props.y})`;

        return (
            <svg height={400} width={400}>
                <g transform={translate}>
                    {pie.map((d, i) => {
                        this.arcGenerator(d, i)
                    })}
                </g>
            </svg>
        )
    }

}

export default PieChart;