import { Injectable } from "@angular/core"
import { Task } from "@module/tasks/domain/model/task"
import { TaskRepository } from "@module/tasks/domain/repository/task.repository"
import { Observable } from "rxjs"

@Injectable()
export class UpdateTaskUseCase {
	constructor(private taskRepository: TaskRepository) {}

	execute(taskId: string, task: Partial<Task>): Observable<Task> {
		return this.taskRepository.update(taskId, task)
	}
}
