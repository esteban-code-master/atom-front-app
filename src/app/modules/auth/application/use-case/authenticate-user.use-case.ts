import { Injectable } from "@angular/core";
import { User } from "@module/auth/domain/model/user.model";
import { UserRepository } from "@module/auth/domain/repository/user.repository";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class AuthenticateUserUseCase {
	constructor(private userRepository: UserRepository) {}

	execute(email: string): Observable<User | null> {
		return this.userRepository.findByEmail(email).pipe(
			catchError(() => throwError(() => new Error("User not found")))
		);
	}
}
