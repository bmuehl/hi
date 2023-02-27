<script lang="ts">
	export let icon = false
</script>

<kbd
	class="flex items-center justify-center rounded-lg border border-nord2 bg-nord1 px-2 py-1.5 text-xs font-semibold text-nord6 shadow-sm"
	class:px-1={icon}
	class:py-1={icon}
>
	<slot />
</kbd>
