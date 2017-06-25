import React, { Component } from 'react'
import { connect } from 'react-redux';

import './GameDisplay.css';


class GameDisplay extends Component {

    render() {
        const { dungeon } = this.props.game;
        if ( !dungeon ) {
            return <div>Loading...</div>
        }
        const renderedDungeon = (
            <div className="dungeon-container">
                { dungeon.map( (r, ri) => {
                return (
                    <div className="row-container" key={`row-${ri}`}>
                    { r.map( (t, ti) => <div className="tile-container" key={`tile-${ri}-${ti}`}>{t}</div>) }
                    </div>
                )
                }) }
            </div>
        );
        return (
            <div>
                {renderedDungeon}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        game: state.game,
    };
};

export default connect(mapStateToProps)(GameDisplay);
