import { Component } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { MatDialog } from "@angular/material/dialog"
import { Router } from "@angular/router"
import { AuthUserUserCase } from "@module/auth/application/use-case/auth-user.user-case"
import { ModalComponent } from "@shared/components/modal/modal.component"
import { CreateUserComponent } from "@module/auth/presentation/components/create-user/create-user.component"
import { SnackBar } from "@shared/components/snackbar/snackbar.service"

@Component({
	selector: "app-login-form",
	templateUrl: "./auth-page.component.html",
	styleUrls: ["./auth-page.component.scss"],
	standalone: false,
})
export class AuthPageComponent {
	loginForm!: FormGroup<{ email: FormControl<string> }>
	isLoading = false

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authUserUseCase: AuthUserUserCase,
		private dialog: MatDialog,
		private snackBar: SnackBar,
	) {
		this.loginForm = this.fb.group({
			email: new FormControl("", {
				validators: [Validators.required, Validators.email],
				nonNullable: true,
			}),
		})
	}

	async onSubmit() {
		if (this.loginForm.valid) {
			const { email = "" } = this.loginForm.value
			this.isLoading = true

			try {
				const user = await this.authUserUseCase.execute(email)
				this.isLoading = false
				localStorage.setItem("USER_ID", user.uid.toString())
				this.router.navigate(["/tasks"])
			} catch (error: unknown) {
				this.dialog.open(ModalComponent, {
					data: {
						title: "Confirmar Creación de Usuario",
						content: CreateUserComponent,
						email: email,
					},
					disableClose: true,
				})
			}

			return
		}

		this.snackBar.showError("Por favor, ingrese un correo válido")
	}
}
