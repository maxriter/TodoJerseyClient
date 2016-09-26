var React = require('react');

var AddItem = React.createClass({
    handleSubmit: function (e) {
        if (e.keyCode === 13) {
            var newTodo = this.refs.newTodo.getDOMNode().value.trim();
            if (!(0 === newTodo.length)) {
                this.refs.newTodo.getDOMNode().value = '';
                this.props.add(newTodo);
            }
        }
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="newTodo" className="form-control" placeholder="New Todo"
                       onKeyDown={this.handleSubmit}/>
            </div>
        )
    }
});

module.exports = AddItem;