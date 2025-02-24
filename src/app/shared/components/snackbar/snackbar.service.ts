import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

import { SnackBarSuccessComponent } from "./snackbar.component";

@Injectable({
	providedIn: "root"
})
export class SnackBar {
	constructor(private snackBar: MatSnackBar) {}
	
	showSuccess(message: string) {
    this.snackBar.openFromComponent(SnackBarSuccessComponent, {
      data: { message, type: 'success' },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-container']
    });
  }

  showError(message: string) {
    this.snackBar.openFromComponent(SnackBarSuccessComponent, {
      data: { message, type: 'error' },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-container']
    });
  }

}
