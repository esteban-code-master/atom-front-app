import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments";

import { Task } from "../../domain/model/task";
import { TaskRepository } from "../../domain/repository/task.repository";

@Injectable({
	providedIn: "root",
})
export class TaskRepositoryImpl implements TaskRepository {
	private apiUrl = `${environment.apiUrl}/tasks`;

	constructor(private http: HttpClient) {}

	find(): Observable<Task[]> {
		return this.http.get<Task[]>(this.apiUrl);
	}

	findById(taskId: string): Observable<Task> {
		return this.http.get<Task>(`${this.apiUrl}/${taskId}`);
	}

	create(task: Task): Observable<Task> {
		return this.http.post<Task>(this.apiUrl, task);
	}

	update(taskId: string, task: Task): Observable<Task> {
		return this.http.put<Task>(`${this.apiUrl}/${taskId}`, task);
	}

	delete(id: string): Observable<Task> {
		return this.http.delete<Task>(`${this.apiUrl}/${id}`);
	}
}
