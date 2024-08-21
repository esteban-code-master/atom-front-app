import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuthModule } from "@module/auth/auth.module";
import { TasksModule } from "@module/task/task.module";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	declarations: [AppComponent],
	imports: [CommonModule, BrowserModule, AppRoutingModule, AuthModule, TasksModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
