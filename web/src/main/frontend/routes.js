"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var $ = require('jquery');

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="search" handler={require('./components/search/SearchPanel')} />
        <Route name="todo" handler={require('./components/todo/ListContainer')} />
    </Route>
);

module.exports = routes;