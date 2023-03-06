<script>
    import logo from '../lib/images/svelte-logo.svg'
    import night from '../lib/images/night.svg'
    import day from '../lib/images/day.svg'
    import { darkMode } from './stores';

    let darkValue = false;

    darkMode.subscribe(value => {
        darkValue = value;
    })

</script>

<div class="flex justify-between items-center bg-orange-500 dark:bg-orange-700 w-full h-16 p-2 px-5">
    <!-- rel no referrer is used to avoid performance and security issues -->
    <!-- see: https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/ -->
    <a href="https://svelte.dev/" target="_blank" rel="noreferrer" class="">
        <img src={logo} alt="" class="hover:h-16 h-14 w-14 cursor-pointer ease-out duration-300">
    </a>
    <div class="flex justify-between gap-14 text-lg text-white">
        <a href="/" class="transition duration-300 hover:text-blue-500">Home</a>
        <a href="/coffee" class="transition duration-300 hover:text-blue-500">Coffee</a>
        <a href="/cute" class="transition duration-300 hover:text-blue-500">Cute photos</a>
        <a href="/about" class="transition duration-300 hover:text-blue-500">About</a>
    </div>
    <!-- default is false, so day.svg should show. opposites. -->
    <button on:click={() => darkMode.set(!$darkMode)}><img src={darkValue ? night : day} alt="" class="h-7 w-7 ease-in-out duration-1000 invert dark:invert-0"></button>
</div>