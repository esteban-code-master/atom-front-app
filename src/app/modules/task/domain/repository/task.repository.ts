import { Observable } from "rxjs";

import { Task } from "../model/task";

export interface TaskRepository {
	find(): Observable<Task[]>;
	findById(id: string): Observable<Task>;
	create(task: Partial<Task>): Observable<Task>;
	update(taskId: string, task: Partial<Task>): Observable<Task>;
	delete(id: string): Observable<Task>;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TaskRepository = Symbol("TaskRepository");
