<script>
    import icon from "$lib/assets/icon.svg";
    import { switchLang } from "$lib/switchLang.js";
    import { homePageText } from "$lib/homePageText.js";

    export let data;
    let language = "en";
    const part1Num = "351";
    const part2Num = "54";
    const lastUpdateTime = "2024.6.26";

    $: language = switchLang(data.lang);

    const SEO = {
        en: {
            title: "SpeakingPass - Topics and reference answers for IELTS Speaking Test",
            description:
                "Collect and publish all real part1 / part2&3 topics and reference answers of IELTS speaking test.",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers",
        },
        cn: {
            title: "SpeakingPass - 雅思口语测试的题目和参考答案",
            description:
                "收集并公布雅思口语考试Part1 / Part2&3的所有真题和参考答案。",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers, 雅思, 雅思口语, 雅思口语话题, 雅思口语答案",
        },
        vn: {
            title: "SpeakingPass - Câu hỏi và câu trả lời tham khảo cho IELTS Speaking Test",
            description:
                "Thu thập và công bố tất cả các chủ đề thực tế và câu trả lời tham khảo cho phần I/II và III của bài kiểm tra nói IELTS.",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers",
        },
        uz: {
            title: "SpeakingPass - IELTS Speaking Testi uchun mavzular va mos yozuvlar javoblari",
            description:
                "IELTS so‘zlashuv imtihonining barcha haqiqiy qismi 1/qism2 va 3 mavzulari va ma’lumotnoma javoblarini to‘plang va nashr eting.",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers",
        },
        ru: {
            title: "SpeakingPass — темы и справочные ответы для устного теста IELTS",
            description:
                "Соберите и опубликуйте все реальные темы частей 1, частей 2 и 3, а также справочные ответы разговорного теста IELTS.",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers",
        },
        in: {
            title: "SpeakingPass - आईईएलटीएस स्पीकिंग टेस्ट के लिए विषय और संदर्भ उत्तर",
            description:
                "आईईएलटीएस स्पीकिंग टेस्ट के सभी वास्तविक भाग 1 / भाग 2 और 3 विषयों और संदर्भ उत्तरों को एकत्रित करें और प्रकाशित करें।",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers",
        },
    };
</script>

<svelte:head>
    <title>{SEO[language].title}</title>
    <meta name="description" content={SEO[language].description} />
    <meta name="keywords" content={SEO[language].keywords} />
</svelte:head>

{#key data.lang}
    <div class=" flex flex-col bg-white">
        <img
            src={icon}
            class=" w-2/3 md:w-2/5 self-center mt-14 md:mt-20"
            alt="icon"
        />
        <h1
            class=" text-pramary text-center mt-2 px-4 text-[16px] md:text-[20px]"
        >
            {homePageText[language][1]}
        </h1>
        <div class=" text-center mt-5 mb-5 md:text-base text-pramary">
            {homePageText[language][2]}
        </div>
        <div
            class=" px-10 md:px-48 flex flex-col gap-3 md:gap-5 md:grid md:grid-cols-2"
        >
            <div
                class=" flex border border-main rounded-lg px-3 md:px-4 py-2 md:py-4"
            >
                <div class=" flex flex-col text-main">
                    <div class=" text-[14px]">
                        {homePageText[language][3]}
                    </div>
                    <div class=" text-3xl font-medium">{part1Num}</div>
                </div>
                <div class="flex justify-end items-center grow">
                    <a href={`/part1`} title="Part1 topics">
                        <div
                            class=" px-4 md:px-6 py-1 text-[14px] bg-main text-white rounded-full"
                        >
                            {homePageText[language][5]}
                        </div>
                    </a>
                </div>
            </div>
            <div
                class=" flex border border-main rounded-lg px-3 md:px-4 py-2 md:py-4"
            >
                <div class=" flex flex-col text-main">
                    <div class=" text-[14px]">
                        {homePageText[language][4]}
                    </div>
                    <div class=" text-3xl font-medium">{part2Num}</div>
                </div>
                <div class="flex justify-end items-center grow">
                    <a href={`/part2&3/Person/1`} title="Part2&3 topics">
                        <div
                            class=" px-4 md:px-6 py-1 text-[14px] bg-main text-white rounded-full"
                        >
                            {homePageText[language][5]}
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class=" flex justify-center text-secondary mt-5">
            {homePageText[language][8]}
            {lastUpdateTime}
        </div>
        <div
            class=" flex flex-col px-10 md:px-48 mt-5 text-secondary md:text-base gap-2"
        >
            <p>
                {homePageText[language][6]}
            </p>
            <p>
                {homePageText[language][7]}
            </p>
        </div>

        <div
            class="bg-[#E5EBED] h-10 md:h-16 mt-12 flex justify-center items-center text-secondary text-[12px]"
        >
            © 2024 Jed Xie. All rights reserved.
        </div>
    </div>
{/key}
