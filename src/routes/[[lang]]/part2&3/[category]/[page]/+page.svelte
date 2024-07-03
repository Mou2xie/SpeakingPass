<script>
    import { switchLang } from "$lib/switchLang.js";
    import { afterNavigate } from "$app/navigation";
    export let data;
    let { lang, category, topicList, page } = data;
    const categoryList = ["Person", "Object", "Activity", "Place"];
    let language = "en";

    $: language = switchLang(data.lang);

    afterNavigate(() => {
        lang = data.lang;
        category = data.category;
        topicList = data.topicList;
        page = data.page;
    });

    const SEO = {
        en: {
            title: `IELTS speaking Part2&3 Topics: ${category} - SpeakingPass`,
            description: `${topicList.length} real IELTS speaking topics about ${category} for Part2&3. Person, Object, Activity, Place......`,
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

<div class="flex flex-col px-4 md:px-10">
    <h1 class=" py-6 text-xl text-center text-secondary font-medium">
        IELTS speaking Part 2&3 topics
    </h1>
    <div
        class=" grid grid-cols-4 gap-3 text-sm md:text-base md:w-1/3 md:self-center"
    >
        {#each categoryList as item}
            <a
                href={`/${lang}/part2&3/${item}/1`}
                title={`IELTS speaking topics about ${item}`}
            >
                <div
                    class=" py-2 md:py-1 border border-main text-main rounded-full text-center {category ==
                    item
                        ? ' bg-main text-white'
                        : ''}"
                >
                    {item}
                </div>
            </a>
        {/each}
    </div>
    <div class="flex flex-col gap-3 mt-4 mb-6 md:grid md:grid-cols-2">
        {#each topicList as { id, topic }}
            <a
                href={`/${lang}/part2&3/${id}`}
                target="_blank"
                title={`IELTS speaking Part2&3 topic: ${topic}`}
            >
                <div
                    class=" h-20 bg-white shadow-sm rounded-lg text-pramary hover:shadow p-3 line-clamp-2 text-lg hover:text-main"
                >
                    {topic}
                </div>
            </a>
        {/each}
    </div>
</div>
