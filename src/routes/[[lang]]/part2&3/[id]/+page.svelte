<script>
    import TopicCard from "$lib/components/TopicCard.svelte";
    import { switchLang } from "$lib/switchLang.js";

    export let data;
    const { topic } = data;
    let language = "en";

    $: language = switchLang(data.lang);

    const SEO = {
        en: {
            title: `IELTS speaking Part2&3 Topic: ${topic[0].topic} - SpeakingPass`,
            description: `The reference answer to the IELTS speaking Part2&3 question: ${topic[0].topic}`,
            keywords:
                "IELTS, IELTS speaking, part2, part3, topics, questions, answers",
        },
    };
</script>

<svelte:head>
    <title>{SEO[language].title}</title>
    <meta name="description" content={SEO[language].description} />
    <meta name="keywords" content={SEO[language].keywords} />
</svelte:head>

<div class="flex flex-col px-4 mt-4 mb-6 md:mt-8 md:px-40 md:mb-12">
    <TopicCard {...topic[0]} part={2}></TopicCard>

    <div class="mt-6 text-main text-xl underline">
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
