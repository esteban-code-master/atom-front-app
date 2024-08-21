import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "@shared/layout/layout.component";

import { TaskPageComponent } from "../page/task-page/task-page.component";

const routes: Routes = [
	{
		path: "tasks",
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
