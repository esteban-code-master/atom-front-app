import { Inject, Injectable } from "@angular/core";
import { Task } from "@module/task/domain/model/task";
import { TaskRepository } from "@module/task/domain/repository/task.repository";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class FindTaskUseCase {
	constructor(@Inject(TaskRepository) private taskRepository: TaskRepository) {}

	execute(): Observable<Task[]> {
		return this.taskRepository.find();
	}
}
