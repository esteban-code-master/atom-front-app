import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { User } from "@module/auth/domain/model/user.model";
import { CreateUserComponent } from "@module/auth/presentation/components/create-user/create-user.component";
import { ModalComponent } from "@shared/components/modal/modal.component";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UserConfirmationAdapter {
	constructor(private dialog: MatDialog) {}

	confirmUserCreation(user: User): Observable<boolean> {
		const dialogRef = this.dialog.open(ModalComponent, {
			data: {
				title: "Confirmar Creación de Usuario",
				content: CreateUserComponent,
				email: user.email
			}
		});

		return dialogRef.afterClosed();
	}
}
