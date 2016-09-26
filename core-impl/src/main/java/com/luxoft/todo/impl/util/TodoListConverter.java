package com.luxoft.todo.impl.util;

import java.util.ArrayList;
import java.util.List;

import com.luxoft.todo.api.converters.TodoConverter;
import com.luxoft.todo.api.model.TodoDto;
import com.luxoft.todo.api.model.TodoTransmittedDto;

public class TodoListConverter {

	public static List<TodoDto> convertToTodoDtoList(List<TodoTransmittedDto> list) {
		List<TodoDto> result = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			result.add(TodoConverter.convertToLocalDateTimeDate(list.get(i)));
		}
		return result;
	}
}
