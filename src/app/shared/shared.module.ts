import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

import { ModalComponent } from "./components/modal/modal.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LayoutComponent } from "./layout/layout.component";
import { TransformDatePipe } from "./pipes/transform";

@NgModule({
	declarations: [
		ModalComponent,
		TransformDatePipe,
		LayoutComponent,
		NavbarComponent,
		SidebarComponent
	],
	imports: [
		RouterModule,
		CommonModule,
		MatDialogModule,
		MatIconModule,
		DatePipe
	],
	exports: [
		ModalComponent,
		TransformDatePipe,
		LayoutComponent,
		NavbarComponent,
		SidebarComponent,
		MatIconModule
	]
})
export class SharedModule {}
