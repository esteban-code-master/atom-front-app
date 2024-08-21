import { User } from "@module/auth/domain/model/user.model";
import { Observable } from "rxjs";

export interface UserRepository {
	findByEmail(email: string): Observable<User | null>
	createUser(user: User): Observable<User>
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserRepository = Symbol("UserRepository");
