var React = require('react');

var SearchList = React.createClass({
    render: function(){
        var styles = {
            uList: {
                paddingLeft: 0,
                listStyleType: "none"
            },
            listGroup: {
                margin: '5px 0',
                borderRadius: 5
            },
            todoItem: {
                paddingLeft: 20,
                fontSize: 17
            }
        };
        var listItems = this.props.items.map(function(item, index){
            return (
                <li id={item.id} className="list-group-item" style={styles.listGroup}>
                    <div style={styles.todoItem}>
                        {item.todo} ({item.dateTime[0]}-{item.dateTime[1]}-{item.dateTime[2]}  {item.dateTime[3]}:{item.dateTime[4]})
                    </div>
                </li>
            )
        }.bind(this));
        return (
            <ul style={styles.uList}>
                {listItems}
            </ul>
        )
    }
});

module.exports = SearchList;