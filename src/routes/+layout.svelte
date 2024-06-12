<script>
  import { page } from "$app/stores";
  import "../app.css";
  import icon from "$lib/assets/icon.svg";
  import en from "$lib/assets/en.svg";
  import cn from "$lib/assets/cn.svg";
  import vn from "$lib/assets/vn.svg";
  import menu from "$lib/assets/menu.svg";
  import DropdownCard from "$lib/components/DropdownCard.svelte";

  export let data;

  let language = undefined;
  let flag = undefined;
  let dropDownList = [];

  $: switchLang(data.lang);

  function switchLang(lang) {
    switch (lang) {
      case "en":
        flag = en;
        language = "English";
        dropDownList = [
          {
            flag: cn,
            text: "简体中文",
            url: "/cn",
          },
          {
            flag: vn,
            text: "Tiếng Việt",
            url: "/vn",
          },
        ];
        break;
      case "cn":
        flag = cn;
        language = "Chinese";
        dropDownList = [
          {
            flag: en,
            text: "English",
            url: "/en",
          },
          {
            flag: vn,
            text: "Tiếng Việt",
            url: "/vn",
          },
        ];
        break;
      case "vn":
        flag = vn;
        language = "Vietnamese";
        dropDownList = [
          {
            flag: en,
            text: "English",
            url: "/en",
          },
          {
            flag: cn,
            text: "简体中文",
            url: "/cn",
          },
        ];
        break;
    }
  }

  function closeMenu(menuId) {
    return () => {
      document.getElementById(menuId).open = false;
    };
  }
</script>

<div class=" h-14 bg-white flex items-center px-3">
  <a href={`/${data.lang}/`} title="SpeakingPass home page">
    <img src={icon} alt="speakingpass homepage" class=" h-5 md:h-6" />
  </a>
  <span class=" hidden md:block md:ml-8">
    <div class=" text-secondary text-lg font-medium flex gap-5">
      <a
        href={`/${data.lang}/part1`}
        title="IELTS speaking Part1 topics"
        class="hover:text-main {$page.route.id == '/[[lang]]/part1'
          ? ' text-main'
          : ''} {$page.route.id == '/[[lang]]/part1/[category]'
          ? ' text-main'
          : ''}"
      >
        Part 1
      </a>
      <a
        href={`/${data.lang}/part2&3/Person/1`}
        title="IELTS speaking Part2&3 topics"
        class="hover:text-main {$page.route.id ==
        '/[[lang]]/part2&3/[category]/[page]'
          ? ' text-main'
          : ''} {$page.route.id == '/[[lang]]/part2&3/[id]'
          ? ' text-main'
          : ''}"
      >
        Part 2&3
      </a>
    </div>
  </span>

  <div class=" grow flex justify-end items-center gap-4">
    {#if $page.route.id == "/[[lang]]"}
      <details id="flagmenu" class="dropdown dropdown-end">
        <summary class=" block">
          <img src={flag} alt={`language:${language}`} class=" h-7" />
        </summary>
        <DropdownCard>
          {#each dropDownList as item}
            <a
              href={item.url}
              title="switch language"
              class=" flex gap-2 items-center py-3 pl-3"
              on:click={closeMenu("flagmenu")}
            >
              <img src={item.flag} alt={`language:${language}`} class=" h-7" />
              <div>{item.text}</div>
            </a>
          {/each}</DropdownCard
        >
      </details>
    {/if}
    <details id="navmenu" class="dropdown dropdown-end md:hidden">
      <summary class=" block">
        <img src={menu} alt="menu" class=" h-9" />
      </summary>
      <DropdownCard>
        <a
          href={`/${data.lang}/part1`}
          title="IELTS speaking Part1 topics"
          class=" flex gap-2 items-center py-3 pl-3 {$page.route.id ==
          '/[[lang]]/part1'
            ? ' text-main'
            : ''} {$page.route.id == '/[[lang]]/part1/[category]'
            ? ' text-main'
            : ''}"
          on:click={closeMenu("navmenu")}
        >
          <div>Part 1</div>
        </a>
        <a
          href={`/${data.lang}/part2&3/Person/1`}
          title="IELTS speaking Part2&3 topics"
          class=" flex gap-2 items-center py-3 pl-3 {$page.route.id ==
          '/[[lang]]/part2&3/[category]/[page]'
            ? ' text-main'
            : ''} {$page.route.id == '/[[lang]]/part2&3/[id]'
            ? ' text-main'
            : ''}"
          on:click={closeMenu("navmenu")}
        >
          <div>Part 2&3</div>
        </a>
      </DropdownCard>
    </details>
  </div>
</div>
<slot />
