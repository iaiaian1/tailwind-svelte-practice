<script>
    /**
     * @type {{ fetchedData: any; }}
     */
     export let data;
</script>

<div class=" dark:text-white">
    <p>Data fetched from https://api.sampleapis.com/coffee/hot</p>
    <p>This time, we fetch a data from a sample API and load it using svelte +page.js</p>
    <br>
    <div class="border border-black rounded-lg p-2 max-w-lg max-h-96 overflow-auto">
        <p>COFFEES!</p>
        <br>
        {#each data.fetchedData as {title, description}, i}
            <p>{i+1}. {title}</p>
            <p>-{description}</p>
            <br>
        {/each}
    </div>
</div>
