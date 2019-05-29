import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props){
        super(props);
            this.state= {
             time :new Date().toLocaleString()
            }
        }
        componentDidMount() {
            this.timerID = setInterval(
                    () => this.tick(),
                    1000
            )
        }

        componentWillUnmount() {
            clearInterval(this.intervalID);
        }
        tick() {
            //console.log(this);
                this.setState({
                    time: new Date().toLocaleString()
                });

            }

    render(){
        return(
            <div>
             
                <p className="p-main">

                    WHAT IS THE TIME NOW
                </p>
                <div
                    className = "div-main" > {this.state.time}
                </div>
            </div>
        )
    }

 }