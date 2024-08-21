export interface Task {
	id: string;
	title: string;
	createAt: Date;
	description: string;
	status: "pending" | "completed";
}
