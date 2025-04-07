import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Handles normalized RGB values (0-1) and converts them to standardized RGB colors (0-255).
 *
 * The input color should be a string in the format of "0 0 0" where r, g, and b are the
 * red, green, and blue values respectively. Each value should be a number between 0 and 1.
 *
 * @param {string} color The RGB color to be converted.
 * @returns {string} A string that can be used in css rgb() functions.
 * @example handleRgb("0.14 0.16 0.22")
 */
export function handleRgb(color: string): string {
	return color
		.split(" ")
		.map((color: string) => {
			// Multiply the value by 255 to convert it
			// from a 0-1 value (RGB) to a 0-255 value (sRGB).
			return Math.ceil(Number(color) * 255)
		})
		.join(" ")
}
