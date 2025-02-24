import { DatePipe } from "@angular/common"
import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
	name: "transformDate",
	standalone: false,
})
export class TransformDatePipe implements PipeTransform {
	constructor(private datePipe: DatePipe) {}

	transform(value: Date | string, format: string = "MMMM d, y, h:mm a"): string {
		if (!value) {
			return ""
		}
		const formattedDate = this.datePipe.transform(value, format)
		return formattedDate || ""
	}
}
