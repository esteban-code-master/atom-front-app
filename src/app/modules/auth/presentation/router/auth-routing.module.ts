import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthPageComponent } from "@module/auth/presentation/page/auth-page/auth-page.component";

const routes: Routes = [
	{
		path: "auth",
		component: AuthPageComponent
	}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule { }
