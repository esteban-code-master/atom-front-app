import { Observable } from "rxjs";
import { Task } from "../model/task";
import { Pagination } from "@module/tasks/infrastructure/response/pagination";
import { FilterTaskDto } from "@module/tasks/application/dto/filter-task.dto";

export interface TaskRepository {
	find(filter: FilterTaskDto): Observable<Pagination<Task>>;
	findById(id: string): Observable<Task>;
	create(task: Partial<Task>): Observable<Task>;
	update(taskId: string, task: Partial<Task>): Observable<Task>;
	delete(id: string): Observable<Task>;
}

export const TaskRepository = Symbol("TaskRepository");
