package com.luxoft.todo.impl;

import java.util.List;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

import org.glassfish.jersey.client.proxy.WebResourceFactory;
import org.springframework.stereotype.Service;

import com.luxoft.todo.api.FilterDto;
import com.luxoft.todo.api.converters.TodoConverter;
import com.luxoft.todo.api.model.TodoDto;
import com.luxoft.todo.impl.util.TodoListConverter;

import resource.TodoResource;

@Service
public class TodoServiceImpl implements TodoService {

	private Client client = ClientBuilder.newClient();
	private WebTarget webTarget = client.target("http://localhost:8081/");
	private TodoResource resource = WebResourceFactory.newResource(TodoResource.class, webTarget);

	@Override
	public List<TodoDto> getAll() {
		return TodoListConverter.convertToTodoDtoList(resource.getAllTodo());
	}

	@Override
	public TodoDto save(TodoDto todoDto) {
		return TodoConverter.convertToLocalDateTimeDate(resource.addTodo(TodoConverter.convertToLongDate(todoDto)));
	}

	@Override
	public void remove(Long id) {
		resource.removeTodo(id);
	}

	@Override
	public void update(TodoDto todoDto) {
		resource.updateTodo(TodoConverter.convertToLongDate(todoDto));
	}

	@Override
	public List<TodoDto> searchByFilter(FilterDto filter) {
		return TodoListConverter.convertToTodoDtoList(resource.searchTodo(filter));
	}

}
