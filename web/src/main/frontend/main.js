
var React = require('react');
var todoActions = require('./actions/todoActions');
var Router = require('react-router');
var routes = require('./routes');

todoActions.initApp();

Router.run(routes, function(Handler) {
   React.render(<Handler />, document.getElementById('app'));
});
