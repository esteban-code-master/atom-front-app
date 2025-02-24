import { Injectable } from "@angular/core"
import { Auth } from "@module/auth/domain/model/auth"
import { AuthRepository } from "@module/auth/domain/repository/auth.repository"
import { SessionRepository } from "@module/auth/domain/repository/session.repository"

@Injectable()
export class AuthUserUserCase {
	constructor(
		private authRepository: AuthRepository,
		private sessionRepository: SessionRepository,
	) {}

	async execute(email: string): Promise<Auth> {
		const user = await this.authRepository.auth(email)

		if (user) {
			await this.sessionRepository.signInWithCustomToken(user.token)
			return user
		}

		throw new Error("Error en la respuesta")
	}
}
