import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@module/auth/presentation/guard/auth.guard";

export const routes: Routes = [
	{
		path: 'tasks',
		loadChildren: () => import('@module/tasks/tasks.module').then(m => m.TasksModule),
		canActivate: [AuthGuard]
	},
	{
		path: "login",
		loadChildren:  () => import('@module/auth/auth.module').then(m => m.AuthModule)
	},
	{
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
