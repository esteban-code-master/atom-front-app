import { CommonModule } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { UserRepository } from "@module/auth/domain/repository/user.repository"
import { UserRepositoryImpl } from "@module/auth/infrastructure/repository/user.repository-impl"
import { AuthPageComponent } from "@module/auth/presentation/page/auth-page/auth-page.component"
import { AuthRoutingModule } from "@module/auth/presentation/router/auth-routing.module"
import { CreateUserUseCase } from "./application/use-case/create-user.use-case"
import { AuthRepository } from "./domain/repository/auth.repository"
import { AuthRepositoryImpl } from "./infrastructure/repository/auth.repository-impl"
import { AuthUserUserCase } from "./application/use-case/auth-user.user-case"
import { SessionRepository } from "./domain/repository/session.repository"
import { SessionRepositoryImpl } from "./infrastructure/repository/session.repository-impl"
import { SharedModule } from "@shared/shared.module"
import { MatProgressBarModule } from "@angular/material/progress-bar"
import { MatIconModule } from "@angular/material/icon"
import { CreateUserComponent } from "./presentation/components/create-user/create-user.component"

@NgModule({
	declarations: [AuthPageComponent, CreateUserComponent],
	imports: [
		CommonModule,
		MatCardModule,
		ReactiveFormsModule,
		HttpClientModule,
		AuthRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatLabel,
		MatDialogModule,
		MatProgressBarModule,
		MatButtonModule,
		SharedModule,
	],
	providers: [
		AuthUserUserCase,
		CreateUserUseCase,
		{
			provide: UserRepository,
			useClass: UserRepositoryImpl,
		},
		{
			provide: AuthRepository,
			useClass: AuthRepositoryImpl,
		},
		{
			provide: SessionRepository,
			useClass: SessionRepositoryImpl,
		},
	],
	exports: [],
})
export class AuthModule {}
