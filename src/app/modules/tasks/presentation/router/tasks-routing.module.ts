import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "@shared/layout/layout.component";

import { TaskPageComponent } from "@module/tasks/presentation/page/task-page/task-page.component";

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "",
				component: TaskPageComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TasksRoutingModule { }
