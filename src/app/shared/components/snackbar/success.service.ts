import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { SnackBarSuccessComponent } from "./success.component";

@Injectable({
	providedIn: "root"
})
export class SnackBarSuccess {
	constructor(private snackBar: MatSnackBar) {}

	showSnackbar(message: string): void {
		this.snackBar.openFromComponent(SnackBarSuccessComponent, {
			data: { message },
			duration: 3000
		});
	}
}
