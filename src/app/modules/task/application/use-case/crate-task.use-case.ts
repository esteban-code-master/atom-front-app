import { Inject, Injectable } from "@angular/core";
import { Task } from "@module/task/domain/model/task";
import { TaskRepository } from "@module/task/domain/repository/task.repository";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class CreateTaskUseCase {
	constructor(@Inject(TaskRepository) private taskRepository: TaskRepository) {}

	execute(task: Partial<Task>): Observable<Task> {
		return this.taskRepository.create(task);
	}
}
