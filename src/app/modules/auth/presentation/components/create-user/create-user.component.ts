import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-confirm-dialog",
	templateUrl: "./create-user.component.html",
})
export class CreateUserComponent {
	constructor(
		public dialogRef: MatDialogRef<CreateUserComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { email: string }
	) {}

	onConfirm(): void {
		this.dialogRef.close(true);
	}

	onCancel(): void {
		this.dialogRef.close(false);
	}
}
