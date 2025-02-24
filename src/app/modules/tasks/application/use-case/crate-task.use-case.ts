import { Injectable } from "@angular/core";
import { Task } from "@module/tasks/domain/model/task";
import { TaskRepository } from "@module/tasks/domain/repository/task.repository";
import { Observable } from "rxjs";

@Injectable()
export class CreateTaskUseCase {
	constructor(private taskRepository: TaskRepository) {}

	execute(task: Partial<Task>): Observable<Task> {
		return this.taskRepository.create(task);
	}
}
