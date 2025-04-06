import { writable, type Writable } from "svelte/store"
import type { ApplyUserProperties } from "$types"

type PropertyKey = keyof ApplyUserProperties
type ValueOf<K extends PropertyKey> = NonNullable<ApplyUserProperties[K]>
type WallpaperEngineProperty<T> = {
    value: T
}
type Stores = Partial<{
    [K in PropertyKey]: Writable<WallpaperEngineProperty<ValueOf<K>> | null>
}>

const stores: Stores = {}

export function usePropertyStore<K extends PropertyKey>(key: K): Writable<WallpaperEngineProperty<ValueOf<K>> | null> {
    if (!stores[key]) {
        stores[key] = writable(null)
    }
    return stores[key] as Writable<WallpaperEngineProperty<ValueOf<K>> | null>
}

function applyUserProperties(properties: Record<string, any>) {
    for (const [key, value] of Object.entries(properties)) {
        const typedKey = key as keyof ApplyUserProperties

        const store = stores[typedKey]
        if (store) {
            store.set(value)
        }
    }
}

window.wallpaperPropertyListener = { applyUserProperties }
