import React from 'react';

import PlayPause from './play-pause';
import Navigate from './navigate';

import SpeedControls from './speed-controls';

let PlaybackControls = React.createClass({
    getDefaultProps() {
        return {
            api: undefined,
            navStep: 10
        };
    },

    _onRewind() {

        let currTime = this.props.api.currentTime,
            navStep = this.props.navStep;

        this.props.api.currentTime = currTime - navStep;
    },

    _onFastForward() {

        let currTime = this.props.api.currentTime,
            navStep = this.props.navStep;

        this.props.api.currentTime = currTime + navStep;
    },

    _onRepeat() {

        this.props.api.currentTime = 0;
    },

    render() {

        return (

            <div className='playback-controls'>

                <Navigate onNavigate={this._onRepeat}>

                    Repeat
                </Navigate>

                <Navigate onNavigate={this._onRewind}>

                    Back
                </Navigate>

                <PlayPause api={this.props.api} />

                <Navigate onNavigate={this._onFastForward}>

                    Forward
                </Navigate>

                <SpeedControls api={this.props.api} />

            </div>
        );
    }
});

export default PlaybackControls;
