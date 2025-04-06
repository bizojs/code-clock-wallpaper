type DateData = {
    hour: number
    minute: number
    second: number
    day: {
        number: number
        text: string
    }
    month: {
        number: number
        text: string
    }
    year: number
    timezone: string
}

export class DateHandler {

    private static days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	static #getCurrentDay(day: number): string {
		return this.days[day]
	}

    static #getTimezone(date: Date): string  {
        let matchedOffset = date.toString().match(/([A-Z]+[\+-][0-9]+)/)
        return matchedOffset ? matchedOffset[0] : "Unknown"
    }

	static generate(): DateData {
        const date = new Date()

        const timezone = this.#getTimezone(date)

        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
            day: {
                number: date.getDate(),
                text: this.#getCurrentDay(date.getDay())
            },
            month: {
                number: date.getMonth() + 1,
                text: date.toLocaleString("default", { month: "long" })
            },
            year: date.getFullYear(),
            // timezone: date.toString().match(/([A-Z]+[\+-][0-9]+)/)[1]
            timezone: this.#getTimezone(date)
        }
    }
}
