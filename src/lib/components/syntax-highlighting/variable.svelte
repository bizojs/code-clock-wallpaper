<script lang="ts">
    let { value = $bindable() } = $props()
</script>

<span class="text-variable transition-colors duration-700">{value}</span>