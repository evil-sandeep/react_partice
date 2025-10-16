import React, { Component } from 'react'

export default class ClassState extends Component {

    state = {
        counter: 0
    }
    increment = (op) => {
        if (op === '+') {
            this.setState({ counter: this.state.counter + 1 })
        } else {
            this.setState({ counter: this.state.counter - 1 })
        }
    }
    render() {

        return (
            <div>


                <h1>Class COmponent</h1>
                <h3>{this.state.counter}</h3>
                <button onClick={()=>this.increment('+')}>Increment</button>
                <button onClick={()=>this.increment('-')}>decrement</button>
            </div>
        )
    }
}