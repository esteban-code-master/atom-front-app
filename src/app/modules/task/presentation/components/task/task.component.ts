import {
	Component, EventEmitter, Input, Output
} from "@angular/core";

@Component({
	selector: "app-task-item",
	templateUrl: "./task.component.html"
})
export class TaskComponent {
	@Input() id: string = "";
	@Input() title: string = "";
	@Input() description: string = "";
	@Input() createAt: string = "";
	@Input() status: string = "";

	@Output() deleteRequest = new EventEmitter<string>();
	@Output() editRequest = new EventEmitter<string>();
	@Output() toggleStatusRequest = new EventEmitter<{ id: string, status: boolean }>();

	public delete() {
		this.deleteRequest.emit(this.id);
	}

	public edit() {
		this.editRequest.emit(this.id);
	}

	public toggleTaskStatus(status: boolean) {
		this.status = status ? "completed" : "pending";
		this.toggleStatusRequest.emit({ id: this.id, status });
	}
}
