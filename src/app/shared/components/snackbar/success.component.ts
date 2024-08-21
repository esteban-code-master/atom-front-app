import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
	MAT_SNACK_BAR_DATA,
	MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel
} from "@angular/material/snack-bar";

@Component({
	selector: "app-snack-bar-success",
	templateUrl: "./success.component.html",
	styleUrl: "./success.component.scss",
	standalone: true,
	imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class SnackBarSuccessComponent {
	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string }) {}
}
