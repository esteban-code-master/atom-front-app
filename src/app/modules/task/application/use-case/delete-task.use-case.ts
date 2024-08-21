import { Inject, Injectable } from "@angular/core";
import { Task } from "@module/task/domain/model/task";
import { TaskRepository } from "@module/task/domain/repository/task.repository";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class DeleteTaskUseCase {
	constructor(@Inject(TaskRepository) private taskRepository: TaskRepository) {}

	execute(taskId: string): Observable<Task> {
		return this.taskRepository.delete(taskId);
	}
}
