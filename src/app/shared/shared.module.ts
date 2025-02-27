import { NgModule } from "@angular/core"
import { ButtonSyncComponent } from "./components/button-sync/button-sync.component"
import { MatButtonModule } from "@angular/material/button"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { CommonModule } from "@angular/common"

@NgModule({
	declarations: [ButtonSyncComponent],
	imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
	exports: [ButtonSyncComponent],
})
export class SharedModule {}
