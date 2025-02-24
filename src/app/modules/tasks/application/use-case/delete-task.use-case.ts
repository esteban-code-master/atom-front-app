import { Injectable } from "@angular/core"
import { Task } from "@module/tasks/domain/model/task"
import { TaskRepository } from "@module/tasks/domain/repository/task.repository"
import { Observable } from "rxjs"

@Injectable()
export class DeleteTaskUseCase {
	constructor(private taskRepository: TaskRepository) {}

	execute(taskId: string): Observable<Task> {
		return this.taskRepository.delete(taskId)
	}
}
