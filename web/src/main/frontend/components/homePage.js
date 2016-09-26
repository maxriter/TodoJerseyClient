"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h3>Simple Todo list</h3>
                <Link to="todo" className="btn btn-primary btn-lg">Let's try it!</Link>
            </div>
        );
    }
});

module.exports = Home;