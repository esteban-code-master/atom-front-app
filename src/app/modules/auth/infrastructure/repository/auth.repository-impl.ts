import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Auth } from "@module/auth/domain/model/auth"
import { User } from "@module/auth/domain/model/user.model"
import { AuthRepository } from "@module/auth/domain/repository/auth.repository"
import { catchError, firstValueFrom, Observable, of } from "rxjs"
import { environment } from "src/environments"

@Injectable({ providedIn: "root" })
export class AuthRepositoryImpl implements AuthRepository {
	private apiUrl = `${environment.apiUrl}/auth/login`

	constructor(private http: HttpClient) {}

	auth(email: string): Promise<Auth | null> {
		return firstValueFrom(this.http.post<Auth>(this.apiUrl, { email }))
	}

	findByEmail(email: string): Observable<User | null> {
		return this.http.get<User>(`${this.apiUrl}?email=${email}`).pipe(catchError(() => of(null)))
	}

	createUser(user: User): Observable<User> {
		return this.http.post<User>(this.apiUrl, user)
	}
}
