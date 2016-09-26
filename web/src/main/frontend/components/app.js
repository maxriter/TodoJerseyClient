var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <Header />
                    <div className="container-fluid">
                        <RouteHandler />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = App;
