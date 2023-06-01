import "./css/global.scss";

import "./js/utils/page-navigation.ts";

// Worklet Code
import day1 from "./js/day-1.js?worker&url";
import day2 from "./js/day-2.js?worker&url";

if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule(day1);
  CSS.paintWorklet.addModule(day2);
}

const pages = [
  {
    title: "Day One - Simple Squares",
  },
  {
    title: "Day Two - Simple Shapes",
  },
];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div class="days">
      ${pages
        .map((page, index) => {
          const isLastPage = index === pages.length - 1;
          return `
  <div class="day" id="${index + 1}">
    <h2>${page.title}</h2>
    <div class="day-${index + 1}" data-day="${index + 1}">
          <div class="border"><h3>${page.title}</h3></div>
          <div class="background"><h3>${page.title}</h3></div>
    </div>
    <nav>
          ${index !== 0 ? `<button class="btn-prev">Prev</button>` : ""}
          ${!isLastPage ? `<button class="btn-next">Next</button>` : ""}
    </nav>
    
  </div>
        `;
        })
        .join("")}
    </div>
  </div>
`;
