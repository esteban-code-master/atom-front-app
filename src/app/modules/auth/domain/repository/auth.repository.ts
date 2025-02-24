import { User } from "@module/auth/domain/model/user.model"
import { Observable } from "rxjs"
import { Auth } from "../model/auth"

export interface AuthRepository {
	auth(email: string): Promise<Auth | null>
	findByEmail(email: string): Observable<User | null>
	createUser(user: User): Observable<User>
}

export const AuthRepository = Symbol("AuthRepository")
