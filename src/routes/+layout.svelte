<script>
  import "../app.postcss";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import { darkMode } from "./stores";

  let darkValue = false;

  darkMode.subscribe(value => {
      darkValue = value;
  });

</script>

<!-- 
This wraps everything with dark class
cant put this one along with the div with tailwind classes
could be a bug idk 
-->

<div class:dark="{darkValue}">
  <div class="flex flex-col justify-between items-center w-screen h-screen transition duration-200 bg-neutral-300 dark:bg-neutral-600">
    <Header/>
  
    <main class="p-2">
      <slot />
    </main>
  
    <Footer/>
  </div>
</div>