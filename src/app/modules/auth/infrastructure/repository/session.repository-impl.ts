import { Injectable } from "@angular/core"
import { AngularFireAuth } from "@angular/fire/compat/auth"
import { Observable } from "rxjs"
import firebase from "firebase/compat/app"
import { SessionRepository } from "@module/auth/domain/repository/session.repository"

@Injectable()
export class SessionRepositoryImpl implements SessionRepository {
	constructor(private readonly fireAuth: AngularFireAuth) {}

	getUserId(): Observable<firebase.User | null> {
		return this.fireAuth.user
	}

	getIdToken(): Observable<string | null> {
		return this.fireAuth.idToken
	}

	getAuthState(): Observable<firebase.User | null> {
		return this.fireAuth.authState
	}

	signInWithCustomToken(token: string): Promise<firebase.auth.UserCredential> {
		return this.fireAuth.signInWithCustomToken(token)
	}

	signOut(): Promise<void> {
		return this.fireAuth.signOut()
	}
}
