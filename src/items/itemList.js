import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsDeleteById, itemsDeleteAll } from './itemsActions';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items.</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <button onClick={ () => this.props.itemsDeleteAll() } disabled={this.props.items.length === 0}>Delete ALL</button>
                <ul>
                    {this.props.items.map((item, index) => (
                        <li key={index}>
                            {item.label}
                            <button onClick={ () => this.props.deleteItemById(index) }>Del</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        deleteItemById: (id) => dispatch(itemsDeleteById(id)),
        itemsDeleteAll: () => dispatch(itemsDeleteAll())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);