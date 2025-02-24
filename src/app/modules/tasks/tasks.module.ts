import { NgModule } from "@angular/core"
import { TasksRoutingModule } from "@module/tasks/presentation/router/tasks-routing.module"
import { LayoutComponent } from "@shared/layout/layout.component"
import { RouterModule } from "@angular/router"
import { NavbarComponent } from "@shared/components/navbar/navbar.component"
import { SidebarComponent } from "@shared/components/sidebar/sidebar.component"
import { FindTaskUseCase } from "@module/tasks/application/use-case/find-task.use-case"
import { TaskRepositoryImpl } from "@module/tasks/infrastructure/repository/task.repository.impl"
import { HttpClientModule } from "@angular/common/http"
import { CommonModule, DatePipe } from "@angular/common"
import { TaskItemComponent } from "@module/tasks/presentation/components/task-item/task-item.component"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule } from "@angular/material/divider"
import { MatPaginatorModule } from "@angular/material/paginator"
import { TaskPageComponent } from "@module/tasks/presentation/page/task-page/task-page.component"
import { FormTaskComponent } from "@module/tasks/presentation/components/form-task/form-task.component"
import { MatFormFieldModule } from "@angular/material/form-field"
import { ReactiveFormsModule } from "@angular/forms"
import { MatDialogModule } from "@angular/material/dialog"
import { CreateTaskUseCase } from "@module/tasks/application/use-case/crate-task.use-case"
import { TaskRepository } from "@module/tasks/domain/repository/task.repository"
import { DeleteTaskComponent } from "./presentation/components/delete-task/delete-task.component"
import { DeleteTaskUseCase } from "./application/use-case/delete-task.use-case"
import { UpdateTaskUseCase } from "./application/use-case/update-task.use-case"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { TransformDatePipe } from "@shared/pipes/transform"

@NgModule({
	imports: [
		CommonModule,
		TasksRoutingModule,
		RouterModule,
		HttpClientModule,
		MatCheckboxModule,
		MatIconModule,
		MatDividerModule,
		MatPaginatorModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatDialogModule,
		MatInputModule,
		MatButtonModule,
		DatePipe,
	],
	declarations: [
		TaskPageComponent,
		LayoutComponent,
		NavbarComponent,
		SidebarComponent,
		TaskItemComponent,
		FormTaskComponent,
		DeleteTaskComponent,
		TransformDatePipe,
	],
	providers: [
		FindTaskUseCase,
		CreateTaskUseCase,
		DeleteTaskUseCase,
		UpdateTaskUseCase,
		{
			provide: TaskRepository,
			useClass: TaskRepositoryImpl,
		},
	],
})
export class TasksModule {}
