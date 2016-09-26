var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var $ = require('jquery');

var todoActions = {

    addItem: function (item) {
        var json = '{"todo": "' + item + '"}';
        $.ajax({
                type: "POST",
                url: '/item',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: json,
                success: function (data) {
                    AppDispatcher.handleAction({
                        actionType: appConstants.ADD_ITEM,
                        data: data
                    });
                }
            }
        );
    },
    removeItem: function (id) {
        var json = '{"id": "' + id + '"}';
        var url = '/item/'.concat(id);
        $.ajax({
                type: "DELETE",
                url: url,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: json,
                success: function (data) {
                    AppDispatcher.handleAction({
                        actionType: appConstants.REMOVE_ITEM,
                        data: data
                    })
                }
            }
        );
    },
    updateItem: function (id,newTodo) {
        var json = '{"todo": "' + newTodo + '", "id": "' + id + '"}';
        $.ajax({
                type: "PUT",
                url: '/item',
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                data: json,
                success: function (data) {
                    AppDispatcher.handleAction({
                        actionType: appConstants.UPDATE_ITEM,
                        data: data
                    })
                }
            }
        );
    },
    initApp: function () {
        $.get("/item", function (data) {
            AppDispatcher.handleAction({
                actionType: appConstants.INITIALIZE,
                initialData: data
            });
        });
    },
    searchByFilter: function(data) {
        $.ajax({
            type: "POST",
            url: '/filter',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: data,
            success: function (data) {
                AppDispatcher.handleAction({
                    actionType: appConstants.SEARCH,
                    data: data
                });
            }
        });
    }
};

module.exports = todoActions;
