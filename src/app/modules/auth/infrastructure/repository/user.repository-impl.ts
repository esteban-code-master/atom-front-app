import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "@module/auth/domain/model/user.model";
import { UserRepository } from "@module/auth/domain/repository/user.repository";
import { catchError, Observable, of } from "rxjs";
import { environment } from "src/environments";

@Injectable({
	providedIn: "root"
})
export class UserRepositoryImpl implements UserRepository {
	private apiUrl = `${environment.apiUrl}/users`;

	constructor(private http: HttpClient) {}

	findByEmail(email: string): Observable<User | null> {
		return this.http.get<User>(`${this.apiUrl}?email=${email}`).pipe(
			catchError(() => of(null))
		);
	}

	createUser(user: User): Observable<User> {
		return this.http.post<User>(this.apiUrl, user);
	}
}
