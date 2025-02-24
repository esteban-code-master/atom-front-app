import { Injectable } from "@angular/core"
import { User } from "@module/auth/domain/model/user.model"
import { SessionRepository } from "@module/auth/domain/repository/session.repository"
import { UserRepository } from "@module/auth/domain/repository/user.repository"
import { from, Observable, throwError } from "rxjs"
import { catchError, switchMap } from "rxjs/operators"

@Injectable({
	providedIn: "root",
})
export class CreateUserUseCase {
	constructor(
		private userRepository: UserRepository,
		private sessionRepository: SessionRepository,
	) {}

	async execute(email: string): Promise<User> {
		const user = await this.userRepository.createUser(email)

		if (user) {
			await this.sessionRepository.signInWithCustomToken(user.token)
			return user
		}

		throw new Error("User not create")
	}
}
