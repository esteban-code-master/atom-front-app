import { Component } from "@angular/core"
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { MatDialog } from "@angular/material/dialog"
import { Router } from "@angular/router"
import { AuthUserUserCase } from "@module/auth/application/use-case/auth-user.user-case"
import { AuthenticateUserUseCase } from "@module/auth/application/use-case/authenticate-user.use-case"
import { CreateUserUseCase } from "@module/auth/application/use-case/create-user.use-case"
import { UserConfirmationAdapter } from "@module/auth/presentation/adapters/user-confirmation.adapter"
import { ModalComponent } from "@shared/components/modal/modal.component"
import { SnackBar } from "@shared/components/snackbar/snackbar.service"
import { CreateUserComponent } from "../../components/create-user/create-user.component"
import { Auth } from "@module/auth/domain/model/auth"

@Component({
	selector: "app-login-form",
	templateUrl: "./auth-page.component.html",
	styleUrls: ["./auth-page.component.scss"],
	standalone: false,
})
export class AuthPageComponent {
	loginForm!: FormGroup<{ email: FormControl<string> }>

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authUserUseCase: AuthUserUserCase,
		private snackBar: SnackBar,
		private dialog: MatDialog,
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

			try {
				const user = await this.authUserUseCase.execute(email)

				localStorage.setItem("USER_ID", user.uid.toString())
				this.router.navigate(["/tasks"])
			} catch (error: unknown) {
				this.snackBar.showError("correo no encontrado favor de registrarse")
				this.dialog.open(ModalComponent, {
					data: {
						title: "Confirmar Creación de Usuario",
						content: CreateUserComponent,
						email: email,
					},
				})
			}
		}
	}
}
