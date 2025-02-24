import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";

@Component({
	selector: "app-snack-bar-success",
	templateUrl: "./snackbar.component.html",
	styleUrl: "./snackbar.component.scss",
	standalone: true,
	imports: [MatButtonModule, CommonModule],
})
export class SnackBarSuccessComponent {
	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string, type: 'success' | 'error' }) {}
}
