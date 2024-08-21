import { Injectable } from "@angular/core";
import { User } from "@module/auth/domain/model/user.model";
import { UserRepository } from "@module/auth/domain/repository/user.repository";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class CreateUserUseCase {
	constructor(private userRepository: UserRepository) {}

	execute(user: User): Observable<User> {
		return this.userRepository.createUser(user).pipe(
			catchError(() => throwError(() => new Error("User not create")))
		);
	}
}
