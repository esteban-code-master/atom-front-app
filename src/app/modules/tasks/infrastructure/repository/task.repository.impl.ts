import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments"
import { Task } from "@module/tasks/domain/model/task"
import { TaskRepository } from "@module/tasks/domain/repository/task.repository"
import { Pagination } from "../response/pagination"
import { FilterTaskDto } from "@module/tasks/application/dto/filter-task.dto"

@Injectable()
export class TaskRepositoryImpl implements TaskRepository {
	private apiUrl = `${environment.apiUrl}/tasks`

	constructor(private http: HttpClient) {}

	find(filter: FilterTaskDto): Observable<Pagination<Task>> {
		const params = new URLSearchParams()

		for (const [key, value] of Object.entries(filter)) {
			if (value !== null && value !== undefined && value !== "") {
				params.append(key, value.toString())
			}
		}

		console.log(params)

		return this.http.get<Pagination<Task>>(`${this.apiUrl}?${params}`)
	}

	findById(taskId: string): Observable<Task> {
		return this.http.get<Task>(`${this.apiUrl}/${taskId}`)
	}

	create(task: Task): Observable<Task> {
		return this.http.post<Task>(this.apiUrl, task)
	}

	update(taskId: string, task: Task): Observable<Task> {
		return this.http.put<Task>(`${this.apiUrl}/${taskId}`, task)
	}

	delete(id: string): Observable<Task> {
		return this.http.delete<Task>(`${this.apiUrl}/${id}`)
	}
}
