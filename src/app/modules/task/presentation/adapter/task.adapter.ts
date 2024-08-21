import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Task } from "@module/task/domain/model/task";
import { ModalComponent } from "@shared/components/modal/modal.component";
import { Observable } from "rxjs";

import { FormTaskComponent } from "../components/form-task/form-task.component";

@Injectable({
	providedIn: "root",
})
export class TaskAdapter {
	private dialogRef!: MatDialogRef<ModalComponent>;
	constructor(private dialog: MatDialog) {}

	openModal(saveTask: (task: Task)=> void, task?: Task): Observable<boolean> {
		const dialogRef = this.dialog.open(ModalComponent, {
			data: {
				title: "Escribe tus notas y no lo olvides",
				content: FormTaskComponent,
				action: saveTask,
				task
			}
		});

		this.dialogRef = dialogRef;

		return dialogRef.afterClosed();
	}

	closeModal() {
		return this.dialogRef.close(true);
	}
}
