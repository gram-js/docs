const getFontSize = (rem = 1) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

const sidebar = document.querySelector(".sidebar");
const tabSections = document.querySelectorAll(".tabs");

sidebar.querySelectorAll("ul ul").forEach((ul) => {
  ul.dataset.height = ul.getBoundingClientRect().height + getFontSize(0.25);
  ul.dataset.collapse = true;
});

const activeListItem = sidebar.querySelector(
  `li a[href="${location.pathname}"]`
);

const openSubList = (ul) => {
  const ulToggle = ul.previousElementSibling;

  if (ul.dataset.collapse) {
    ulToggle.classList.add("open");
    ul.classList.add("open");
    ul.style.maxHeight = `${ul.dataset.height}px`;

    if (ul.parentElement.dataset.collapse) {
      openSubList(ul.parentElement);
    }
  }
};

if (activeListItem) {
  const li = activeListItem.parentElement;
  const ul = li.parentElement;

  li.classList.add("active");
  openSubList(ul);

  const rect = li.getBoundingClientRect();
  if (rect.y + 50 > window.innerHeight) {
    li.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
}

sidebar.addEventListener("click", (event) => {
  const subListName = event.target.dataset.li;

  if (subListName) {
    const subList = document.querySelector(`[data-sublist="${subListName}"]`);

    event.target.classList.toggle("open");
    subList.classList.toggle("open");
    subList.style.maxHeight = subList.classList.contains("open")
      ? `${subList.dataset.height}px`
      : 0;
  }
});

tabSections.forEach((section) => {
  const tabs = Array.from(section.querySelectorAll(".tab"));
  const selectedTab = tabs[0].dataset.title;
  const titleSection = document.createElement("div");

  tabs.forEach((tab) => {
    if (tab.dataset.title !== selectedTab) {
      tab.classList.add("hidden");
    }
  });

  titleSection.classList.add("tabs-title");
  titleSection.append(
    ...tabs.map((tab) => {
      const button = document.createElement("button");
      button.classList.add("tab-title-button");
      button.textContent = tab.dataset.title;
      button.dataset.title = tab.dataset.title;
      return button;
    })
  );

  section.insertBefore(titleSection, tabs[0]);
});

document.body.addEventListener("click", (event) => {
  const { target } = event;

  if (target.closest(".tab-title-button")) {
    const { title } = target.dataset;
    if (!title) {
      return;
    }

    const tabs = Array.from(document.querySelectorAll(".tab"));

    tabs.forEach((tab) => {
      tab.classList.toggle("hidden", tab.dataset.title !== title);
    });
  } else if (target.closest(".menu-icon")) {
    sidebar.classList.toggle("visible");
  }
});

document.body.classList.add("js-enabled");
