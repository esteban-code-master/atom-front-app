import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "@shared/shared.module";

import { CreateTaskUseCase } from "./application/use-case/crate-task.use-case";
import { DeleteTaskUseCase } from "./application/use-case/delete-task.use-case";
import { FindTaskUseCase } from "./application/use-case/find-task.use-case";
import { TaskRepository } from "./domain/repository/task.repository";
import { TaskRepositoryImpl } from "./infrastructure/repository/task.repository.impl";
import { FormTaskComponent } from "./presentation/components/form-task/form-task.component";
import { TaskComponent } from "./presentation/components/task/task.component";
import { TaskPageComponent } from "./presentation/page/task-page/task-page.component";
import { TasksRoutingModule } from "./presentation/router/tasks-routing.module";

@NgModule({
	declarations: [TaskPageComponent, TaskComponent, FormTaskComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		HttpClientModule,
		TasksRoutingModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		SharedModule
	],
	providers: [
		DatePipe,
		FindTaskUseCase,
		DeleteTaskUseCase,
		CreateTaskUseCase,
		{
			provide: TaskRepository, useClass: TaskRepositoryImpl
		}
	],
	exports: [TasksRoutingModule],
})
export class TasksModule {}
