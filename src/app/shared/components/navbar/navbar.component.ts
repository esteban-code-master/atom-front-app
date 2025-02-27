import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { SessionRepository } from "@module/auth/domain/repository/session.repository"

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	standalone: false,
})
export class NavbarComponent {
	constructor(
		private readonly sessionRepository: SessionRepository,
		private readonly router: Router,
	) {}

	async signOut() {
		await this.sessionRepository.signOut()

		this.router.navigate(["/login"])
	}
}
