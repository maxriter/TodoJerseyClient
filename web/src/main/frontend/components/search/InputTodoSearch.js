var React = require('react');

var InputTodoSearch = React.createClass({
        render:function(){
            return (
                <div>
                    <label htmlFor="searchInput">Todo :</label>
                <input type="text" id="searchInput" placeholder="search for..."/>
                </div>)
        }
});

module.exports = InputTodoSearch;