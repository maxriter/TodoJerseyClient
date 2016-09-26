package com.luxoft.todo.impl;

import java.util.List;

import com.luxoft.todo.api.FilterDto;
import com.luxoft.todo.api.model.TodoDto;

public interface TodoService {

    List<TodoDto> getAll();

    TodoDto save(TodoDto todoDto);

    void remove(Long id);

    void update(TodoDto todoDto);

    List<TodoDto> searchByFilter(FilterDto filter);
}
