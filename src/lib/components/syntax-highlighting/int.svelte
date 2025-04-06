<script lang="ts">
    import { default as NumberFlow } from "@number-flow/svelte"

    let { value = $bindable(), useAnimation = true } = $props()
</script>

<span class="text-int transition-colors duration-700">
    {#if useAnimation}
        <NumberFlow
            respectMotionPreference={false}
            format={{ useGrouping: false, minimumIntegerDigits: 2 }}
            {value}
        />
    {:else}
        {value}
    {/if}
</span>