import {
	Component, Inject, Injector as AngularInjector, Injector, OnInit
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	standalone: false
})
export class ModalComponent implements OnInit {
	injector!: AngularInjector;

	constructor(
		public dialogRef: MatDialogRef<ModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { title: string; content: any; action: (param: any) => void, data: any },
		private parentInjector: AngularInjector
	) {}

	ngOnInit() {
		this.injector = Injector.create({
			providers: [
				{ provide: "action", useValue: this.data.action }
			],
			parent: this.parentInjector
		});
	}
}
