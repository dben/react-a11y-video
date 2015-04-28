import React from 'react';

import Button from './button';

let SpeedControls = React.createClass({
    getDefaultProps() {
        return {
            api: undefined,
            steps: [.5, 1, 1.5, 2]
        };
    },
    getInitialState() {
        return {
            speed: 1
        };
    },

    _changeSpeed(){
        var currentSpeed = this.props.api.playbackRate;
        var nextSpeedIdx = (this.props.steps.indexOf(currentSpeed) + 1) % this.props.steps.length;

        this.props.api.playbackRate = this.props.steps[nextSpeedIdx];

        this.setState({speed: this.props.api.playbackRate});
    },

    _handleSpeedChange(){
        this.setState({speed: this.props.api.playbackRate});
    },

    componentWillReceiveProps(nextProps){
        if (this.props.api && this.props.api !== nextProps) {
            this.props.api.removeEventListener('ratechange', this._handleSpeedChange);
        }
        if (nextProps.api && this.props.api !== nextProps) {
            nextProps.api.addEventListener('ratechange', this._handleSpeedChange);
        }
    },

    componentDidMount() {
        if (this.props.api) {
            this.props.api.addEventListener('ratechange', this._handleSpeedChange);
        }
    },

    componentWillUnmount() {
        if (this.props.api) {
            this.props.api.removeEventListener('ratechange', this._handleSpeedChange);
        }
    },


    render() {

        return (

            <div className='play-pause'>

                <Button onInteract={this._changeSpeed}>

                    {this.state.speed}x
                </Button>

            </div>
        );
    }
});

export default SpeedControls;
