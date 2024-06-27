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
        cn: {
            title: `雅思口语Part2&3话题：${topic[0].topic} - SpeakingPass`,
            description: `雅思口语Part2&3话题：${topic[0].topic} 的参考答案。`,
            keywords:
                "IELTS, IELTS speaking, part2, part3, topics, questions, answers, 雅思, 雅思口语, 雅思口语话题, 雅思口语答案",
        },
        vn: {
            title: `Nói IELTS Phần 2&3 Chủ đề: ${topic[0].topic} - SpeakingPass`,
            description: `Câu trả lời tham khảo cho câu hỏi Nói IELTS Phần 2&3: ${topic[0].topic}.`,
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, questions, answers",
        },
        uz: {
            title: `IELTS speaking Part 2 & 3 Mavzu: ${topic[0].topic} - Speaking Pass`,
            description: `IELTS 2-qism va 3-qism savollariga havola javobi: ${topic[0].topic}`,
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
</div>
