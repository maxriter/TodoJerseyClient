var React = require('react');
var todoActions = require('../../actions/todoActions');

var SearchButton = React.createClass({

    handleClick: function () {
        var todo = document.getElementById('searchInput').value.trim();
        var dateFrom = document.getElementById('dateFrom').value;
        var dateTo = document.getElementById('dateTo').value;
        var json = '{"todo": "' + todo + '", "dateFrom": "' + dateFrom + '", "dateTo": "' + dateTo + '"}';
        todoActions.searchByFilter(json);
    },
    render: function () {
        return (
            <div className="btn btn-success " onClick={this.handleClick}>
                Search
            </div>
        );
    }
});

module.exports = SearchButton;
