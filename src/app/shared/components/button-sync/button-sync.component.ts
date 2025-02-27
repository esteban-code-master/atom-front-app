import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"

@Component({
	selector: "app-button-sync",
	templateUrl: "./button-sync.component.html",
	styleUrls: ["./button-sync.component.scss"],
	imports: [MatButtonModule, MatProgressSpinnerModule, CommonModule],
	standalone: true,
})
export class ButtonSyncComponent {
	@Input() isLoading = false
	@Input() disabled = false
	@Input() color: "primary" | "accent" | "warn" = "primary"
	@Input() classes = ""
}
