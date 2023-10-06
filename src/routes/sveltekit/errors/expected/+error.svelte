<script lang="ts">
	import { page } from '$app/stores';
	import { emojis } from './../emojis';
</script>

<h1>This error was expected</h1>
<span style="font-size: 10em;">
	{emojis[$page.status] ?? emojis[500]}
</span>
