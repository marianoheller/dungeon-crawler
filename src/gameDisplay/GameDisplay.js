import React, { Component } from 'react'
import { connect } from 'react-redux';

import { elementsConfig } from '../App.config';
import './GameDisplay.css';


class GameDisplay extends Component {

    getTileClass( t, x, y) {
        let ret = " tile-container ";

        const element = elementsConfig.find( (e) => e.symbol===t )
        if ( element ) {
            ret += element.class;
        }
        else {
            ret += " tile-floor "
        } 
        // else {
        //     throw new Error(`Error de tipo de tile. Tile: ${t}`);
        // }
        return  ret;
    }

    render() {
        const { dungeon, position } = this.props.game;
        const { x, y } = position; 
        if ( !dungeon ) {   return <div>Loading...</div>    }
        

    
        const renderedDungeon = (
            <div className="dungeon-container">
                { dungeon.map( (r, ri) => {
                return (
                    <div className="row-container" key={`row-${ri}`}>
                    { 
                        r.map( (t, ti) => (
                            <div 
                            className={this.getTileClass(t)} 
                            key={`tile-${ri}-${ti}`}
                            >{ ri===y && ti===x ? "O" : ""}</div>
                        ) ) 
                    }
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
