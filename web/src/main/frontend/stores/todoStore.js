var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');

var CHANGE_EVENT = 'change';
var _store = {
  list: []
};

var addItem = function(item){
  _store.list.push(item);
  todoStore.emit(CHANGE_EVENT);
};

var updateStore = function(data){
  _store.list.length=0;
  $.each(data, function (index, value) {
    _store.list.push(value);
  });
  todoStore.emit(CHANGE_EVENT);
};

var todoStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.ADD_ITEM:
      addItem(action.data);
      break;
    case appConstants.REMOVE_ITEM:
      updateStore(action.data);
      break;
    case appConstants.INITIALIZE:
      updateStore(action.initialData);
      break;
    case appConstants.UPDATE_ITEM:
      updateStore(action.data);
      break;
    default:
      return true;
  }
});

module.exports = todoStore;
