const febHolidays = [
    "Dear ummul,",
    "me tu jo noorulamin❤️",
    "first of all, i love you♥️",
    "yaar ummul ",
    "me tu ka blli love kr ta yaaar💖",
    "sagu sake nai yaar me 🥹",
    "ho noorulamin tu je pttr pisawlo watey yar",
    "tu ha bln me ...🥰",
    "tu ka moji future partner kr ta yaar,",
    "Ek de ha bl yaar tu 🥹🥹.",
    "moji dhakli dhakli chadwa chi mama za tu",
    "me zahir karu sake nai yaar🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "You are the most special person in my life🥰",
    "I don't want to lose you",
    "And trust me I dont want anyone else",
    "There's no one better than you❤️",
    "You're the best baby!!",
    "Or should I say, mo gro coco d'amour que j'adore a la folie XD",
    "Wow!! Time flies, we've already been together for a month",
    "There's some hardships,",
    "but we overcame most of them",
    "and it made me realised how important you are in my life❤️",
    "This for you,ummul ",
    "tu moji jaan ",
    "me tu jo jaan",
    "ami milun kr yaw moji mama ek natuu",
    "ani diyaw smma 2 rupi che laddu ",
    "🥹🥹🥹🥹🥹🥲",
    "i love you ummul",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  