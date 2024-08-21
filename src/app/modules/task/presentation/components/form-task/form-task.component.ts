import {
	Component, Inject, Injector,
	OnInit
} from "@angular/core";
import {
	FormBuilder, FormControl, FormGroup, Validators
} from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
	selector: "app-form-task",
	templateUrl: "./form-task.component.html",
	styleUrl: "./form-task.component.scss"
})
export class FormTaskComponent implements OnInit {
	taskForm: FormGroup<{ title: FormControl<string>, description: FormControl<string> }>;
	action!: (param: any) => void;

	constructor(
		private fb: FormBuilder,
		private injector: Injector,
		@Inject(MAT_DIALOG_DATA) public data: { task: any }
	) {
		this.taskForm = this.fb.group({
			title: new FormControl("", { validators: [Validators.required], nonNullable: true }),
			description: new FormControl("", { validators: [Validators.required], nonNullable: true })
		});

		this.action = this.injector.get("action");
	}

	ngOnInit() {
		if (this.data.task) {
			this.taskForm.patchValue(this.data.task);
		}
	}
	public save() {
		if (this.taskForm.valid) {
			const { title = "", description = "" } = this.taskForm.value;

			if (this.action) {
				this.action({ title, description });
			}
		}
	}
}
