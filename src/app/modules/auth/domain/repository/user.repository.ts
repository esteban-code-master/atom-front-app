import { User } from "@module/auth/domain/model/user.model"
import { Observable } from "rxjs"

export interface UserRepository {
	findByEmail(email: string): Observable<User | null>
	createUser(email: string): Promise<User>
}

export const UserRepository = Symbol("UserRepository")
