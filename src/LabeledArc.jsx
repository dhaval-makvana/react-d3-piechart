import React, { Component } from 'react'
import Arc from './Arc'

class LabeledArc extends Arc {

    render() {
        console.log("arc generator", this.props);
        let [labelX, labelY] = this.arc.centroid(this.props.data);
        let LabelTranslate = `translate(${labelX}, ${labelY})`;

        

        return (
            <g>
                {super.render()}
                <text transform={LabelTranslate} textAnchor="middle" >
                    {this.props.data.data.key}
                </text>
            </g>
        )
    }

}

export default LabeledArc;