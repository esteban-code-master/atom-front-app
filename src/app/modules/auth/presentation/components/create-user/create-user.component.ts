import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog"
import { Router } from "@angular/router"
import { CreateUserUseCase } from "@module/auth/application/use-case/create-user.use-case"
import { SnackBar } from "@shared/components/snackbar/snackbar.service"

@Component({
	selector: "app-confirm-dialog",
	templateUrl: "./create-user.component.html",
	standalone: false,
})
export class CreateUserComponent {
	public isLoading = false

	constructor(
		private createUserCase: CreateUserUseCase,
		public dialogRef: MatDialogRef<CreateUserComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { email: string },
		private router: Router,
		private snackBar: SnackBar,
	) {}

	async onConfirm(): Promise<void> {
		try {
			this.isLoading = true
			const user = await this.createUserCase.execute(this.data.email)

			this.isLoading = false
			localStorage.setItem("USER_ID", user.uid.toString())
			this.dialogRef.close()
			this.router.navigate(["/tasks"])
			this.snackBar.showSuccess("Usuario creado correctamente")
		} catch (error: unknown) {
			this.dialogRef.close()
			this.snackBar.showError("Ha ocurrido un error al crear el usuarios")
		}
	}

	onCancel(): void {
		this.dialogRef.close()
	}
}
