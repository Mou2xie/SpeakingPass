<script>
    export let part = 1;
    export let topic;
    export let subTopics;
    export let sample_answer;
    export let part3;
</script>

<div class="flex flex-col bg-white rounded-md shadow-sm p-3">
    {#if part == 2}
        <h1 class=" font-semibold text-pramary text-lg">{topic}</h1>
    {:else}
        <h2 class=" font-semibold text-pramary text-lg">{topic}</h2>
    {/if}
    {#if part == 2}
        <div class=" flex flex-col text-secondary">
            <div>you shold say:</div>
            {#each subTopics as item}
                <div>{item}</div>
            {/each}
        </div>
    {/if}
    <hr class=" border-dashed my-3" />
    <div class=" text-main mb-1">Sample answer</div>
    <div class=" text-secondary whitespace-pre-line">{sample_answer}</div>
    {#if part == 2 && part3}
        <hr class=" border-dashed my-3" />
        <div class=" text-main mb-1">Part 3</div>
        {#each part3 as { topic, answer }}
            <div class=" text-pramary">{topic}</div>
            <div class=" text-secondary mt-1 mb-4">{answer}</div>
        {/each}
    {/if}
</div>
