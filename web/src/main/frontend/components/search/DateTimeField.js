var React = require('react');

var DateTimeField = React.createClass({

    render: function () {
        return (
            <div>
            <div>
                <label htmlFor="dateFrom">Date from :</label>
                <input type="text" value="" id="dateFrom" className="datetimepicker"/>
            </div>
            <div>
                <label htmlFor="dateTo">Date to :</label>
            <input type="text" value="" id="dateTo" className="datetimepicker"/>
            </div>
            </div>
        )
    }
});

module.exports = DateTimeField;