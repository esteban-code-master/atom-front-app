import { Component, OnInit } from "@angular/core";
import { CreateTaskUseCase } from "@module/task/application/use-case/crate-task.use-case";
import { DeleteTaskUseCase } from "@module/task/application/use-case/delete-task.use-case";
import { FindByIdTaskUseCase } from "@module/task/application/use-case/find-by-id.use-case";
import { FindTaskUseCase } from "@module/task/application/use-case/find-task.use-case";
import { UpdateTaskUseCase } from "@module/task/application/use-case/update-task.use-case";
import { Task } from "@module/task/domain/model/task";
import { SnackBarSuccess } from "@shared/components/snackbar/success.service";

import { TaskAdapter } from "../../adapter/task.adapter";

@Component({
	selector: "app-task-page",
	templateUrl: "./task-page.component.html",
	styleUrl: "./task-page.component.scss"
})
export class TaskPageComponent implements OnInit {
	tasks: Task[] = [];

	constructor(
		private findTaskUseCase: FindTaskUseCase,
		private createTaskUseCase: CreateTaskUseCase,
		private deleteTaskUseCase: DeleteTaskUseCase,
		private updateTaskUseCase: UpdateTaskUseCase,
		private findByIdTaskUseCase: FindByIdTaskUseCase,
		private taskAdapter: TaskAdapter,
		private snackBarSuccess: SnackBarSuccess
	) {}

	ngOnInit(): void {
		this.findTaskApi();
	}

	public openFormTask() {
		this.taskAdapter.openModal((task) => {
			this.createTaskUseCase.execute(task).subscribe(() => {
				this.findTaskApi();
				this.taskAdapter.closeModal();
				this.snackBarSuccess.showSnackbar("tarea creada correctamente");
			});
		});
	}

	public deleteTask(taskId: string) {
		this.deleteTaskUseCase.execute(taskId).subscribe(() => {
			this.findTaskApi();
			this.snackBarSuccess.showSnackbar("tarea eliminada correctamente");
		});
	}

	public editTask(taskId: string) {
		this.findByIdTaskUseCase.execute(taskId).subscribe((taskOld) => {
			this.taskAdapter.openModal((task) => {
				this.updateTaskUseCase.execute(taskId, task).subscribe(() => {
					this.findTaskApi();
					this.taskAdapter.closeModal();
					this.snackBarSuccess.showSnackbar("tarea editada correctamente");
				});
			}, taskOld);
		});
	}

	public toggleStatusTask(task: { id: string, status: boolean }) {
		this.updateTaskUseCase.execute(
			task.id,
			{ status: task.status ? "completed" : "pending" }
		).subscribe(() => {
			this.snackBarSuccess.showSnackbar("ha cambiado el status de tu tarea");
		});
	}

	private findTaskApi() {
		this.findTaskUseCase.execute().subscribe((tasks) => {
			this.tasks = tasks;
		});
	}
}
