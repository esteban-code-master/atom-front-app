import { Injectable } from "@angular/core"
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http"
import { Observable, switchMap } from "rxjs"
import { SessionRepository } from "@module/auth/domain/repository/session.repository"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private sessionRepository: SessionRepository) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return this.sessionRepository.getIdToken().pipe(
			switchMap((token) => {
				if (token) {
					const clonedRequest = req.clone({
						setHeaders: {
							Authorization: `Bearer ${token}`,
						},
					})

					return next.handle(clonedRequest)
				}

				return next.handle(req)
			}),
		)
	}
}
