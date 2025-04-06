<script lang="ts">
    import { Const, Int, Quote, String, Type, Variable } from "$lib/components/syntax-highlighting"
    import { ToggleButton } from "$lib/components/toggle-button"
    import { usePropertyStore } from "$lib/UserPropertyHandler"
    import { DateHandler } from "$lib/DateHandler"
	import { fade, fly } from "svelte/transition"
	import { cubicInOut } from "svelte/easing"
	import { onMount } from "svelte"
	import { cn } from "$lib/utils"

    let data = $state(DateHandler.generate())
    let hidden: boolean = $state(false)
    let interval: ReturnType<typeof setInterval> | undefined = $state(undefined)
    const backgroundImage = usePropertyStore("backgroundimage")
    const theme = usePropertyStore("theme")

    onMount(() => {
        interval = setInterval(() => {
            data = DateHandler.generate()
        }, 1000)

        return () => clearInterval(interval)
    })
</script>

<div class="flex w-screen h-screen relative">
    <ToggleButton bind:hidden />
    {#if $backgroundImage?.value ?? true}
        <img transition:fade src="wallpaper.jpg" alt="" class="z-[-2] fixed top-0 left-0 w-full h-full select-none pointer-events-none">
        <div class={cn(
            "z-[-1] fixed top-0 left-0 w-full h-full shadow-lg select-none pointer-events-none transition-all duration-1000",
            hidden ? "bg-background/0 backdrop-blur-none" : "bg-background/60 backdrop-blur-2xl"
        )}></div>
    {/if}
    {#if !hidden}
        <div transition:fly={{ y: -60, duration: 800, easing: cubicInOut }} class="flex flex-col w-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]">
<pre class="{$theme?.value ?? "theme-blueberry"} transition-colors duration-700 drop-shadow-xl select-none text-2xl text-misc"><Const value="const" /> <Variable value="time" />: <Type value="Time" /> = {"{"}
    <Quote /><String value="hour" /><Quote />    : <Int bind:value={data.hour} />,
    <Quote /><String value="minute" /><Quote />  : <Int bind:value={data.minute} />,
    <Quote /><String value="second" /><Quote />  : <Int bind:value={data.second} />,
    <Quote /><String value="day" /><Quote />     : {"["}<Int bind:value={data.day.number} />, <Quote /><String bind:value={data.day.text} /><Quote />{"]"},
    <Quote /><String value="month" /><Quote />   : {"["}<Int bind:value={data.month.number} />, <Quote /><String bind:value={data.month.text} /><Quote />{"]"},
    <Quote /><String value="year" /><Quote />    : <Int bind:value={data.year} />,
    <Quote /><String value="timezone" /><Quote />: <Quote /><String bind:value={data.timezone} /><Quote />
{"}"}</pre>
        </div>
    {/if}
</div>
