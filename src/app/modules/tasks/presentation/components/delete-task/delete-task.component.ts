import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"
import { DeleteTaskUseCase } from "@module/tasks/application/use-case/delete-task.use-case"
import { SnackBar } from "@shared/components/snackbar/snackbar.service"
import { ConfirmAction } from "@shared/enum/confirm-action"

@Component({
	selector: "app-delete-task",
	templateUrl: "./delete-task.component.html",
	styleUrl: "./delete-task.component.scss",
	standalone: false,
})
export class DeleteTaskComponent {
	constructor(
		private deleteTaskUseCase: DeleteTaskUseCase,
		private snackBar: SnackBar,
		private dialogRef: MatDialogRef<DeleteTaskComponent>,
		@Inject(MAT_DIALOG_DATA) private data: { taskId: string },
	) {}

	onCanceled() {
		this.dialogRef.close(ConfirmAction.canceled)
	}

	onConfirm() {
		this.deleteTaskUseCase.execute(this.data.taskId).subscribe({
			next: () => {
				this.snackBar.showSuccess("tarea eliminada correctamente")
				this.dialogRef.close(ConfirmAction.ok)
			},
			error: () => {
				this.snackBar.showSuccess("ha ocurrido un error")
				this.dialogRef.close(ConfirmAction.canceled)
			},
		})
	}
}
