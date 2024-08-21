import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserRepository } from "@module/auth/domain/repository/user.repository";
import { UserRepositoryImpl } from "@module/auth/infrastructure/repository/user.repository-impl";
import { AuthPageComponent } from "@module/auth/presentation/page/auth-page/auth-page.component";
import { AuthRoutingModule } from "@module/auth/presentation/router/auth-routing.module";

import { AuthenticateUserUseCase } from "./application/use-case/authenticate-user.use-case";
import { CreateUserUseCase } from "./application/use-case/create-user.use-case";

@NgModule({
	declarations: [AuthPageComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AuthRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatLabel,
		MatDialogModule,
	],
	providers: [
		{
			provide: UserRepository, useClass: UserRepositoryImpl
		},
		AuthenticateUserUseCase,
		CreateUserUseCase
	],
	exports: []
})
export class AuthModule { }
