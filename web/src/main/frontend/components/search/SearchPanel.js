var React = require('react');
var InputTodoSearch = require('./InputTodoSearch');
var SearchButton = require('./SearchButton');
var DateTimeField = require('./DateTimeField');
var SearchList = require('./SearchList');
var searchStore = require('../../stores/searchStore');

var SearchPanel = React.createClass({

    getInitialState: function () {
        return {
            list: searchStore.getList()
        }
    },

    componentDidMount: function () {
        searchStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        searchStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            list: searchStore.getList()
        })
    },

    render: function () {
        return (
            <div className="col-sm-6 col-md-offset-3">
                <div className="col-sm-12">
                    <ul className="list-group">
                        <h3 className="text-center">Search Panel</h3>
                        <li className="list-group-item">
                            <InputTodoSearch />
                        </li>
                        <li className="list-group-item">
                            <DateTimeField />
                        </li>
                        <li className="list-group-item">
                            <SearchButton />
                        </li>
                    </ul>
                    <div>
                        <SearchList items={this.state.list}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = SearchPanel;