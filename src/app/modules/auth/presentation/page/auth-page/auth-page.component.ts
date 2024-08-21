import { Component } from "@angular/core";
import {
	FormBuilder, FormControl, FormGroup, Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticateUserUseCase } from "@module/auth/application/use-case/authenticate-user.use-case";
import { CreateUserUseCase } from "@module/auth/application/use-case/create-user.use-case";
import { UserConfirmationAdapter } from "@module/auth/presentation/adapters/user-confirmation.adapter";
import { SnackBarSuccess } from "@shared/components/snackbar/success.service";

@Component({
	selector: "app-login-form",
	templateUrl: "./auth-page.component.html",
	styleUrls: ["./auth-page.component.scss"]
})
export class AuthPageComponent {
	loginForm: FormGroup<{ email: FormControl<string> }>;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private userConfirmationAdapter: UserConfirmationAdapter,
		private authenticateUserCase: AuthenticateUserUseCase,
		private createUserCase: CreateUserUseCase,
		private snackBarSuccess: SnackBarSuccess
	) {
		this.loginForm = this.fb.group({
			email: new FormControl("", { validators: [Validators.required, Validators.email], nonNullable: true })
		});
	}

	onSubmit() {
		if (this.loginForm.valid) {
			const { email } = this.loginForm.value;
			this.authenticateUserCase.execute(email as string).subscribe((user) => {
				if (!user && email) {
					this.userConfirmationAdapter.confirmUserCreation({ email }).subscribe((isConfirmUser) => {
						if (isConfirmUser) {
							this.createUserCase.execute({ email }).subscribe((newUser) => {
								if (newUser) {
									this.snackBarSuccess.showSnackbar("usuario creado correctamente");
									this.router.navigate(["/tasks"]);
								}
							});
						}

						this.router.navigate(["/auth"]);
					});

					return;
				}

				this.router.navigate(["/tasks"]);
			});
		}
	}
}
