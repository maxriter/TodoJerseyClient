package resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.luxoft.todo.api.FilterDto;
import com.luxoft.todo.api.model.TodoTransmittedDto;

@Path("/todo")
@Component
public interface TodoResource {

	@GET
	@Path("/item")
	@Produces(MediaType.APPLICATION_JSON)
	List<TodoTransmittedDto> getAllTodo();
	@PUT
	@Path("/item")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	List<TodoTransmittedDto> updateTodo(@RequestBody TodoTransmittedDto todoTransmittedDto) ;

	@POST
	@Path("/filter")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	List<TodoTransmittedDto> searchTodo(@RequestBody FilterDto filter);

	@POST
	@Path("/item")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	TodoTransmittedDto addTodo(@RequestBody TodoTransmittedDto todoTransmittedDto);

	@DELETE
	@Path("/item/{todoId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	List<TodoTransmittedDto> removeTodo(@PathParam("todoId") Long todoId);
}