import React from 'react';

import Button from './button';

let PlayPause = React.createClass({

    getDefaultProps() {
        return {
            api: undefined,
            navStep: 10
        };
    },

    getInitialState() {
        return {
            playing: false
        };
    },

    _onPlayPause(){
        this.setState({ playing: !this.state.playing }, () => {
            if (this.state.playing) {
                this.props.api.play();
            }else{
                this.props.api.pause();
            }
        });
    },

    _handlePlaying(){
        this.setState({ playing: true });
    },

    _handlePause(){
        this.setState({ playing: false });
    },

    componentWillReceiveProps(nextProps){
        if (this.props.api && this.props.api !== nextProps) {
            this.props.api.removeEventListener('playing', this._handlePlaying);
            this.props.api.removeEventListener('ended', this._handlePause);
            this.props.api.removeEventListener('pause', this._handlePause);
        }
        if (nextProps.api && this.props.api !== nextProps) {
            nextProps.api.addEventListener('playing', this._handlePlaying);
            nextProps.api.addEventListener('ended', this._handlePause);
            nextProps.api.addEventListener('pause', this._handlePause);
        }
    },

    componentDidMount() {
        if (this.props.api) {
            this.props.api.addEventListener('playing', this._handlePlaying);
            this.props.api.addEventListener('ended', this._handlePause);
            this.props.api.addEventListener('pause', this._handlePause);
        }
    },

    componentWillUnmount() {
        if (this.props.api) {
            this.props.api.removeEventListener('playing', this._handlePlaying);
            this.props.api.removeEventListener('ended', this._handlePause);
            this.props.api.removeEventListener('pause', this._handlePause);
        }
    },


    render() {

        return (

            <div className='play-pause'>

                <Button onInteract={this._onPlayPause}>

                    {this.state.playing ? 'Pause' : 'Play'}
                </Button>

            </div>
        );
    }
});

export default PlayPause;
