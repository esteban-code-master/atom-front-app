import { Component, Input } from "@angular/core"

@Component({
	selector: "app-button-sync",
	templateUrl: "./button-sync.component.html",
	styleUrls: ["./button-sync.component.scss"],
})
export class ButtonSyncComponent {
	@Input() isLoading = false
	@Input() disabled = false
	@Input() color: "primary" | "accent" | "warn" = "primary"
	@Input() classes = ""
}
