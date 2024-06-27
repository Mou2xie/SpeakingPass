<script>
    import TopicCard from "$lib/components/TopicCard.svelte";
    import { switchLang } from "$lib/switchLang.js";
    export let data;
    const { category, topicList } = data;
    let language = "en";

    $: language = switchLang(data.lang);

    const SEO = {
        en: {
            title: `IELTS speaking Part1 topics about ${category} - SpeakingPass`,
            description: `${topicList.length} IELTS speaking part1 questions about ${category}.`,
            keywords:
                "IELTS, IELTS speaking, part1, topics, questions, answers",
        },
        cn: {
            title: `雅思口语Part1关于${category}的话题 - SpeakingPass`,
            description: `${topicList.length}道关于${category}的雅思口语Part1题目。`,
            keywords:
                "IELTS, IELTS speaking, part1, topics, questions, answers, 雅思, 雅思口语, 雅思口语话题, 雅思口语答案",
        },
        vn: {
            title: `Các chủ đề Nói IELTS Phần 1 về ${category} - Speech Pass`,
            description: `${topicList.length} Câu hỏi IELTS phần 1 về ${category}.`,
            keywords:
                "IELTS, IELTS speaking, part1, topics, questions, answers",
        },
        uz: {
            title: `IELTS speaking ${category} haqida 1-qism mavzulari - Speaking Pass`,
            description: `${topicList.length} ${category} haqida IELTS 1-qism savollari.`,
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
</div>
