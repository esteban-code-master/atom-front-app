import { Observable } from "rxjs"
import firebase from "firebase/compat/app"

export interface SessionRepository {
	signInWithCustomToken(token: string): Promise<firebase.auth.UserCredential>
	getUserId(): Observable<firebase.User | null>
	getIdToken(): Observable<string | null>
	getAuthState(): Observable<firebase.User | null>
	signOut(): Promise<void>
}

export const SessionRepository = Symbol("SessionRepository")
