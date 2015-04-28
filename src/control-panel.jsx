import React from 'react';

import PlaybackControls from './playback-controls';
import VolumeControls from './volume-controls';
import PlaybackTime from './playback-time';
import FullscreenControls from './fullscreen-controls';
import ProgressControls from './progress-controls';

let ControlPanel = React.createClass({

    getDefaultProps() {

        return {
            api: undefined
        };
    },

    render() {

        return (

            <div className='control-panel'>

                <div className='row top'>
                    <PlaybackControls api={this.props.api} />

                    <VolumeControls api={this.props.api} />
                    <PlaybackTime api={this.props.api} />
                </div>

                <div className='row bottom'>
                    <ProgressControls api={this.props.api} />
                    <FullscreenControls api={this.props.api} />
                </div>

            </div>
        );
    }
});

export default ControlPanel;
