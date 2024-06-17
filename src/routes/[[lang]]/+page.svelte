<script>
    import icon from "$lib/assets/icon.svg";
    import { switchLang } from "$lib/switchLang.js";

    export let data;
    let textIndex = 0;

    $: textIndex = switchLang(data.lang);

    const text = [
        {
            1: "IELTS Speaking Part 1 / Part 2 / Part 3 real topics bank and reference answers",
            2: "Total collected",
            3: "Part1 topics",
            4: "Part2&3 topics",
            5: "Check",
            6: "If you have taken the IELTS speaking test, I believe you will agree that the most difficult part of the IELTS speaking test is not how to speak, but what to say. In the examination room, you need to fight your nervousness while answering questions you have never thought about in a limited time. It can be said that not knowing what to say is the biggest opponent of every IELTS speaking candidate.",
            7: "Fortunately, the topics of IELTS speaking exams are recycled, which gives us the opportunity to understand the questions and think about the answers in advance. At speakingpass, we continue to collect and publish all the real IELTS speaking exam questions. Every topic may appear again in the next exam. I hope that by then, you can confidently and calmly give your own perfect answer.",
        },
        {
            1: "雅思口语Part1 / Part2 / Part3真题题库及参考答案",
            2: "目前已收集",
            3: "Part 1 话题",
            4: "Part 2&3 话题",
            5: "查看",
            6: "如果你参加过雅思口语考试，相信你会认同，雅思口语考试最难的不是怎么说，而是说什么。在考场上，你需要一边对抗自己的紧张情绪，一边在有限的时间里回答自己从来没有思考过的问题，可以说，不知道说什么是每个雅思口语考生最大的对手。",
            7: "好在雅思口语考试的话题是会循环使用的，这给了我们提前了解问题，思考答案的机会。在speakingpass，我们持续收集并发布所有的雅思口语考试真题，每一个话题都有可能在下次考试中再次出现，希望到那时，你能够自信而从容地给出你自己的完美答案。",
        },
        {
            1: "IELTS Nói Phần 1 / Phần 2 / Phần 3 ngân hàng chủ đề thực tế và đáp án tham khảo",
            2: "Tổng số tiền thu được",
            3: "Chủ đề phần 1",
            4: "Chủ đề phần 2&3",
            5: "Kiểm tra",
            6: "Nếu bạn đã tham gia kỳ thi nói IELTS, tôi tin bạn sẽ đồng ý rằng phần khó nhất của kỳ thi nói IELTS không phải là nói như thế nào mà là nói gì. Trong phòng thi, bạn cần phải chiến đấu với sự lo lắng của mình khi trả lời những câu hỏi mà bạn chưa từng nghĩ tới trong thời gian có hạn. Có thể nói, việc không biết phải nói gì chính là đối thủ lớn nhất của mọi thí sinh thi IELTS Nói.",
            7: "May mắn thay, các chủ đề của bài thi Nói IELTS được tái sử dụng, giúp chúng ta có cơ hội hiểu câu hỏi và suy nghĩ trước về câu trả lời. Tại speakpass, chúng tôi tiếp tục sưu tầm và đăng tải tất cả các đề thi IELTS thực tế. Mỗi chủ đề có thể xuất hiện lại trong kỳ thi tiếp theo. Tôi mong rằng đến lúc đó, bạn có thể tự tin và bình tĩnh đưa ra câu trả lời hoàn hảo cho riêng mình.",
        },
    ];

    const SEO = [
        {
            title: "SpeakingPass - Topics and reference answers for IELTS Speaking Test",
            description:
                "Collect and publish all real part1 / part2&3 topics and reference answers of IELTS speaking test.",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers",
        },
        {
            title: "SpeakingPass - 雅思口语测试的题目和参考答案",
            description:
                "收集并公布雅思口语考试Part1 / Part2&3的所有真题和参考答案。",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers, 雅思, 雅思口语, 雅思口语话题, 雅思口语答案",
        },
        {
            title: "SpeakingPass - Câu hỏi và câu trả lời tham khảo cho IELTS Speaking Test",
            description:
                "Thu thập và công bố tất cả các chủ đề thực tế và câu trả lời tham khảo cho phần I/II và III của bài kiểm tra nói IELTS.",
            keywords:
                "IELTS, IELTS speaking, part1, part2, part3, topics, answers",
        },
    ];
</script>

<svelte:head>
    <title>{SEO[textIndex].title}</title>
    <meta name="description" content={SEO[textIndex].description} />
    <meta name="keywords" content={SEO[textIndex].keywords} />
</svelte:head>

{#key data.lang}
    <div class=" flex flex-col bg-white">
        <img
            src={icon}
            class=" w-2/3 md:w-2/5 self-center mt-14 md:mt-20"
            alt="icon"
        />
        <h1
            class=" text-pramary text-center mt-2 px-4 text-[14px] md:text-[20px]"
        >
            {text[textIndex][1]}
        </h1>
        <div
            class=" text-center mt-8 mb-4 text-[14px] md:text-base text-pramary"
        >
            {text[textIndex][2]}
        </div>
        <div
            class=" px-10 md:px-48 flex flex-col gap-3 md:gap-5 md:grid md:grid-cols-2"
        >
            <div
                class=" flex border border-main rounded-lg px-3 md:px-4 py-2 md:py-4"
            >
                <div class=" flex flex-col text-main">
                    <div class=" text-[12px] md:text-[14px]">
                        {text[textIndex][3]}
                    </div>
                    <div class=" text-3xl font-medium">340 +</div>
                </div>
                <div class="flex justify-end items-center grow">
                    <a href={`/${data.lang}/part1`} title="Part1 topics">
                        <div
                            class=" px-4 md:px-6 py-1 text-[14px] bg-main text-white rounded-full"
                        >
                            {text[textIndex][5]}
                        </div>
                    </a>
                </div>
            </div>
            <div
                class=" flex border border-main rounded-lg px-3 md:px-4 py-2 md:py-4"
            >
                <div class=" flex flex-col text-main">
                    <div class=" text-[12px] md:text-[14px]">
                        {text[textIndex][4]}
                    </div>
                    <div class=" text-3xl font-medium">50 +</div>
                </div>
                <div class="flex justify-end items-center grow">
                    <a
                        href={`/${data.lang}/part2&3/Person/1`}
                        title="Part2&3 topics"
                    >
                        <div
                            class=" px-4 md:px-6 py-1 text-[14px] bg-main text-white rounded-full"
                        >
                            {text[textIndex][5]}
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div
            class=" flex flex-col px-10 md:px-48 mt-8 md:mt-12 text-secondary font-light text-sm md:text-base gap-2"
        >
            <p>
                {text[textIndex][6]}
            </p>
            <p>
                {text[textIndex][7]}
            </p>
        </div>

        <div
            class="bg-[#E5EBED] h-10 md:h-16 mt-12 flex justify-center items-center text-secondary text-[12px]"
        >
            © 2024 Jed Xie. All rights reserved.
        </div>
    </div>
{/key}
