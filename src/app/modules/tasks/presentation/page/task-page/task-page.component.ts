import { Component, OnInit } from "@angular/core"
import { FindTaskUseCase } from "@module/tasks/application/use-case/find-task.use-case"
import { Task } from "@module/tasks/domain/model/task"
import { MatDialog } from "@angular/material/dialog"
import { ModalComponent } from "@shared/components/modal/modal.component"
import { FormTaskComponent } from "@module/tasks/presentation/components/form-task/form-task.component"
import { DeleteTaskComponent } from "@module/tasks/presentation/components/delete-task/delete-task.component"
import { ConfirmAction } from "@shared/enum/confirm-action"
import { UpdateTaskUseCase } from "@module/tasks/application/use-case/update-task.use-case"
import { TaskStatus } from "@shared/enum/task-status"
import { SnackBar } from "@shared/components/snackbar/snackbar.service"

@Component({
	selector: "app-task-page",
	templateUrl: "./task-page.component.html",
	styleUrl: "./task-page.component.scss",
	standalone: false,
})
export class TaskPageComponent implements OnInit {
	tasks: Task[] = []
	pageSize: number = 10
	totalPage: number = 1
	lastVisibleId: string | null = ""
	isLoading: boolean = false

	constructor(
		private findTaskUseCase: FindTaskUseCase,
		private updateTaskUseCase: UpdateTaskUseCase,
		private dialog: MatDialog,
		private snackBar: SnackBar,
	) {}

	ngOnInit(): void {
		this.isLoading = true
		this.findTask()
	}

	private findTask(lastVisibleId?: string | null) {
		this.findTaskUseCase.execute({ pageSize: this.pageSize, lastVisibleId }).subscribe((tasks) => {
			this.tasks = tasks.data
			this.totalPage = tasks.totalPage
			this.lastVisibleId = tasks.lastVisibleId
			this.isLoading = false
		})
	}

	onPageChange() {
		this.findTask(this.lastVisibleId)
	}

	public openFormTask() {
		const dialog = this.dialog.open(ModalComponent, {
			data: {
				title: "Escribe tus notas y no lo olvides",
				content: FormTaskComponent,
			},
			disableClose: true,
		})

		dialog.afterClosed().subscribe((result) => {
			if (result === ConfirmAction.ok) {
				this.findTask()
			}
		})
	}

	public deleteTask(taskId: string) {
		const dialog = this.dialog.open(ModalComponent, {
			data: {
				content: DeleteTaskComponent,
				taskId: taskId,
			},
		})

		dialog.afterClosed().subscribe((result) => {
			if (result === ConfirmAction.ok) {
				this.findTask()
			}
		})
	}

	public editTask(task: Task) {
		const dialog = this.dialog.open(ModalComponent, {
			data: {
				title: "Escribe tus notas y no lo olvides",
				content: FormTaskComponent,
				task,
			},
		})

		dialog.afterClosed().subscribe((result) => {
			if (result === ConfirmAction.ok) {
				this.findTask()
			}
		})
	}

	public changeStatus(taskId: string, status: TaskStatus) {
		const switchChanges = status ? TaskStatus.completed : TaskStatus.pending

		this.updateTaskUseCase.execute(taskId, { status: switchChanges }).subscribe({
			next: () => this.snackBar.showSuccess("ha cambiado su estatus de esta tarea"),
			error: () => this.snackBar.showSuccess("error al cambiar el estatus de esta tarea"),
		})
	}
}
