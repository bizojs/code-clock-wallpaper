import Root from "./toggle-button.svelte"

const buttonPositions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-16 right-4",
    "bottom-left": "bottom-16 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-16 left-1/2 -translate-x-1/2",
    "left-center": "top-1/2 left-4 -translate-y-1/2",
    "right-center": "top-1/2 right-4 -translate-y-1/2"
}

export {
    Root as ToggleButton,
    buttonPositions
}