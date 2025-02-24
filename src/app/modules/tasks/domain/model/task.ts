import { TaskStatus } from "@shared/enum/task-status"

export interface Task {
	id: string
	userId: string
	title: string
	description: string
	createAt: Date
	status: TaskStatus
}
