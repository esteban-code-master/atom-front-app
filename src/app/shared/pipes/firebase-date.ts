import { Pipe, PipeTransform } from "@angular/core"
import { format } from "date-fns"

@Pipe({
	name: "firebaseTimestamp",
})
export class FirebaseTimestampPipe implements PipeTransform {
	transform(value: { _seconds: number; _nanoseconds?: number }, formatString: string = "dd/MM/yyyy HH:mm:ss"): string {
		if (!value || !value._seconds) {
			return "Fecha inválida"
		}

		const date = new Date(value._seconds * 1000)
		return format(date, formatString)
	}
}
