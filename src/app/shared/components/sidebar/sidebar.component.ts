import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { SessionRepository } from "@module/auth/domain/repository/session.repository"

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	standalone: false,
})
export class SidebarComponent {
	constructor(
		private readonly sessionRepository: SessionRepository,
		private readonly router: Router,
	) {}

	async signOut() {
		await this.sessionRepository.signOut()

		this.router.navigate(["/login"])
	}
}
