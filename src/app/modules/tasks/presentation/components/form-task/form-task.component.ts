import { Component, Inject, OnInit } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"
import { CreateTaskUseCase } from "@module/tasks/application/use-case/crate-task.use-case"
import { UpdateTaskUseCase } from "@module/tasks/application/use-case/update-task.use-case"
import { Task } from "@module/tasks/domain/model/task"
import { SnackBar } from "@shared/components/snackbar/snackbar.service"
import { ConfirmAction } from "@shared/enum/confirm-action"

@Component({
	selector: "app-form-task",
	templateUrl: "./form-task.component.html",
	styleUrl: "./form-task.component.scss",
	standalone: false,
})
export class FormTaskComponent implements OnInit {
	taskForm: FormGroup<{ title: FormControl<string>; description: FormControl<string>; id: FormControl<string | null> }>
	isLoading = false

	constructor(
		private fb: FormBuilder,
		private createTaskUseCase: CreateTaskUseCase,
		private updateTaskUserCase: UpdateTaskUseCase,
		private snackBar: SnackBar,
		public dialogRef: MatDialogRef<FormTaskComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { task: Task },
	) {
		this.taskForm = this.fb.group({
			id: new FormControl("", { validators: [], nonNullable: false }),
			title: new FormControl("", { validators: [Validators.required], nonNullable: true }),
			description: new FormControl("", { validators: [Validators.required], nonNullable: true }),
		})
	}

	ngOnInit() {
		if (this.data.task) {
			this.taskForm.patchValue(this.data.task)
		}
	}

	public save() {
		const { id, ...task } = this.taskForm.value
		const userId = localStorage.getItem("USER_ID") ?? ""
		const isTaskNew = id === ""
		this.isLoading = true

		if (!this.taskForm.valid) {
			this.snackBar.showError("Todos los campos son requeridos")
			this.isLoading = false
			return
		}

		if (this.taskForm.valid && isTaskNew) {
			this.onCreateTask({
				description: task.description ?? "",
				title: task.title ?? "",
				userId: userId,
			})

			return
		}

		if (this.taskForm.valid && id) {
			this.onUpdateTask(id, task)
		}
	}

	public onCreateTask(task: Pick<Task, "description" | "title" | "userId">) {
		this.createTaskUseCase.execute({ ...task }).subscribe({
			next: () => {
				this.snackBar.showSuccess("tarea creada correctamente")
				this.dialogRef.close(ConfirmAction.ok)
				this.isLoading = true
			},
			error: () => {
				this.snackBar.showError("ha ocurrido un error al crear una tarea")
			},
		})
	}

	public onUpdateTask(taskId: string, task: Partial<Task>) {
		this.updateTaskUserCase.execute(taskId, { ...task }).subscribe({
			next: () => {
				this.snackBar.showSuccess("tarea actualizada correctamente")
				this.dialogRef.close(ConfirmAction.ok)
				this.isLoading = true
			},
			error: () => {
				this.snackBar.showError("ha ocurrido un error al actualizar tu  tarea")
			},
		})
	}

	public close() {
		this.dialogRef.close()
	}
}
