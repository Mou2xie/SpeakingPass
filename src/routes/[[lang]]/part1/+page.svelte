<script>
    import { switchLang } from "$lib/switchLang.js";

    export let data;
    const { categoryList } = data;
    let language = "en";

    $: language = switchLang(data.lang);

    const SEO = {
        en: {
            title: `Part1 Topics for IELTS speaking test - SpeakingPass`,
            description: `${categoryList.length} real IELTS speaking part1 topics and reference answers. ${categoryList[0].category}, ${categoryList[1].category}, ${categoryList[2].category}, ${categoryList[3].category}, ${categoryList[4].category}, ${categoryList[5].category}......`,
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
        IELTS speaking Part 1 topics
    </h1>
    <div class=" grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {#each categoryList as { category, isNew }}
            <a
                href={`/${data.lang}/part1/${category}`}
                title={`IELTS speaking part1 topic: ${category} `}
            >
                <div
                    class=" flex justify-center items-center h-12 md:h-14 bg-white shadow-sm rounded-lg text-pramary relative hover:shadow-md hover:text-main"
                >
                    <div class=" w-5/6 line-clamp-1">
                        {category}
                    </div>
                    {#if isNew == true}
                        <div
                            class=" text-white px-1 bg-red-500 text-[10px] italic rounded-tr-lg rounded-bl-lg absolute right-0 top-0"
                        >
                            New
                        </div>
                    {/if}
                </div>
            </a>
        {/each}
    </div>
</div>
