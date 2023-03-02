<script>
    import { darkMode } from "./stores";

    let darkValue = false;
    let text = ""

    darkMode.subscribe(value => {
        darkValue = value;
    });
</script>

<div class="flex flex-col justify-center items-center gap-2 border border-black p-2 rounded-lg text-black dark:text-neutral-300">
    <h1 class="">This text: {text}</h1>
    <p>is bound to the input below!</p>
    <input type="text" bind:value={text} class="dark:text-black">
    <button class="bg-slate-800 text-neutral-300 p-2 rounded-lg transition duration-200 dark:bg-blue-500 dark:text-white" on:click={() => darkMode.set(!$darkMode)}>Dark mode</button>
    <p>The darkmode button is here to use the subscription method.</p>
</div>
