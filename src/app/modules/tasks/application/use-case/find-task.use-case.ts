import { Injectable } from "@angular/core";
import { Task } from "@module/tasks/domain/model/task";
import { Pagination } from "@module/tasks/infrastructure/response/pagination";
import { Observable } from "rxjs";
import { FilterTaskDto } from "../dto/filter-task.dto";
import { TaskRepository } from "@module/tasks/domain/repository/task.repository";

@Injectable()
export class FindTaskUseCase {
	constructor(private taskRepository: TaskRepository) {}

	execute(filter: FilterTaskDto): Observable<Pagination<Task>> {
		return this.taskRepository.find(filter);
	}
}
