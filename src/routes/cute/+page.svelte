<script>
// @ts-nocheck
    import Skeleton from 'svelte-skeleton/Skeleton.svelte'
    import { onMount } from 'svelte';
    import axios from 'axios'

    let photos = [] 
    onMount(async () => {
        // This is fetch
		// const res = await fetch('https://jsonplaceholder.typicode.com/photos');
		// photos = await res.json();

        // Artiticial timeout
        setTimeout(() => {
            // This is axios. fetch = headers. axios = data.
            axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                //Do what you want with the response here
                photos = res.data
            })
            .catch(err => {
                console.log(err)
            })
        }, 3000);

        // setTimeout(() => {
        //     console.log(photos)
        // }, 4000);
	});
</script>

<div class="dark:bg-blue-500 p-2 rounded-md">
    <p>Fetched from <a href="https://jsonplaceholder.typicode.com/photos" target="_black" rel=noreferrer class="text-green-500">https://jsonplaceholder.typicode.com/photos</a></p>
    <p>Using AXIOS</p>
    <p>https://www.npmjs.com/package/axios</p>
    <br>
    <h1>Cute photos!</h1>
    <div class="overflow-auto h-96 w-full">
        {#each photos as photo}
            <div class="p-1 bg-blue-300 rounded-lg mb-1">
                <p>{photo.title}</p>
                <img src={photo.thumbnailUrl} alt={photo.title}>
            </div>
            {:else}
                <!-- this block renders when photos.length === 0 -->
                <!-- Skeleton -->
                <div class="p-2 bg-blue-300 rounded-lg mb-1">
                    <Skeleton primaryColor="#C0C2C9" secondaryColor="#f5f5f7" height="100">
                        <rect width="150" height="10" x="0" y="0" rx="5" ry="5" />
                        <rect width="400" height="10" x="0" y="20" rx="5" ry="5" />
                        <rect width="250" height="10" x="0" y="40" rx="5" ry="5" />
                    </Skeleton>
                </div>
                <div class="p-2 bg-blue-300 rounded-lg mb-1">
                    <Skeleton primaryColor="#C0C2C9" secondaryColor="#f5f5f7" height="100">
                        <rect width="150" height="10" x="0" y="0" rx="5" ry="5" />
                        <rect width="400" height="10" x="0" y="20" rx="5" ry="5" />
                        <rect width="250" height="10" x="0" y="40" rx="5" ry="5" />
                    </Skeleton>
                </div>
                <div class="p-2 bg-blue-300 rounded-lg mb-1">
                    <Skeleton primaryColor="#C0C2C9" secondaryColor="#f5f5f7" height="100">
                        <rect width="150" height="10" x="0" y="0" rx="5" ry="5" />
                        <rect width="400" height="10" x="0" y="20" rx="5" ry="5" />
                        <rect width="250" height="10" x="0" y="40" rx="5" ry="5" />
                    </Skeleton>
                </div>
        {/each}
    </div>
</div>