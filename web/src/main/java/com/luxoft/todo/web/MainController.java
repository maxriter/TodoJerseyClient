package com.luxoft.todo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.luxoft.todo.api.FilterDto;
import com.luxoft.todo.api.model.TodoDto;
import com.luxoft.todo.impl.TodoService;

@RestController
public class MainController {

	@Autowired
	TodoService todoService;

	@RequestMapping(value = "/item", method = RequestMethod.GET)
	public List<TodoDto> getAllTodo() {
		List<TodoDto> res = todoService.getAll();
		return res;
	}

	@RequestMapping(value = "/item", method = RequestMethod.PUT)
	public List<TodoDto> updateTodo(@RequestBody TodoDto todoDto ) {
		todoService.update(todoDto);
		return todoService.getAll();
	}

	@RequestMapping(value = "/filter", method = RequestMethod.POST)
	public List<TodoDto> searchTodo(@RequestBody FilterDto filter ) {
		return todoService.searchByFilter(filter);
	}

	@RequestMapping(value = "/item", method = RequestMethod.POST)
	public TodoDto addTodo(@RequestBody TodoDto todoDto) {
		return todoService.save(todoDto);
	}

	@RequestMapping(value = "/item/{todoId}", method = RequestMethod.DELETE)
	public List<TodoDto> removeTodo(@PathVariable Long todoId) {
		todoService.remove(todoId);
		return todoService.getAll();
	}

}
