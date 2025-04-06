<script lang="ts">
    let { value = $bindable() } = $props()
</script>

<span class="text-const transition-colors duration-700">{value}</span>