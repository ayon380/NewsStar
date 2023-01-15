import React, { Component } from 'react'
import gif from './yy3.gif'
export class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                {/* <h2>fdhfdgdh</h2> */}
                <img src={gif} alt="Loading..." style={{width:"200px",height:"200px",margin:"100px"}}/>
            </div>
        )
    }
}

export default Loading