<script>
    import TopicCard from "$lib/components/TopicCard.svelte";
    import { switchLang } from "$lib/switchLang.js";
    export let data;
    const { category, topicList } = data;
    let language = "en";

    $: language = switchLang(data.lang);

    const SEO = {
        en: {
            title: `Sample Answers about "${category}" of IELTS Speaking Part 1 - SpeakingPass`,
            description: `${topicList.length} IELTS Speaking Part 1 questions and answers about ${category}.`,
            keywords:
                "IELTS, IELTS speaking, part1, topics, questions, answers",
        },
    };
</script>

<svelte:head>
    <title>{SEO[language].title}</title>
    <meta name="description" content={SEO[language].description} />
    <meta name="keywords" content={SEO[language].keywords} />
</svelte:head>

<div class=" flex flex-col px-4 md:px-10">
    <h1 class=" py-6 text-xl text-center text-secondary font-medium">
        <a
            href="/en/part1"
            class=" underline underline-offset-4 decoration-main"
            title={`IELTS speaking topics about ${category}`}>Part 1 topics</a
        >
        <span>{`> ${category}`}</span>
    </h1>
    <div class=" flex flex-col gap-3 mb-6 md:grid md:grid-cols-2">
        {#each topicList as item}
            <TopicCard {...item}></TopicCard>
        {/each}
    </div>
    <div class="mb-6 text-main text-xl underline">
        <a
            href="/"
            target="_blank"
            title="SpeakingPass home page"
            class=" flex justify-center text-center"
        >
            👋 Come and get more topics and sample answers of IELTS speaking
            test - SpeakingPass
        </a>
    </div>
</div>
