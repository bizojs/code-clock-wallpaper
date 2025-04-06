import type { ApplyUserProperties } from "$types"

export {}

declare global {
    interface Window {
        wallpaperPropertyListener?: {
            applyUserProperties: (
                properties: {
                    [K in keyof ApplyUserProperties]?: {
                        value: NonNullable<ApplyUserProperties[K]>
                    }
                }
            ) => void
        }
    }
}