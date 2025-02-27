import { Component, EventEmitter, Input, Output } from "@angular/core"
import { TaskStatus } from "@shared/enum/task-status"

@Component({
	selector: "app-task-item",
	templateUrl: "./task-item.component.html",
	standalone: false,
})
export class TaskItemComponent {
	@Input() id: string = ""
	@Input() title: string = ""
	@Input() description: string = ""
	@Input() createAt: any = ""
	@Input() status: TaskStatus = TaskStatus.pending

	@Output() deleteRequest = new EventEmitter<string>()
	@Output() editRequest = new EventEmitter<string>()
	@Output() toggleStatusRequest = new EventEmitter<{ id: string; status: TaskStatus }>()

	public deleteTask() {
		this.deleteRequest.emit(this.id)
	}

	public editTask() {
		this.editRequest.emit(this.id)
	}

	public toggleTaskStatus(status: boolean) {
		this.status = status ? TaskStatus.completed : TaskStatus.pending

		this.toggleStatusRequest.emit({ id: this.id, status: this.status })
	}
}
