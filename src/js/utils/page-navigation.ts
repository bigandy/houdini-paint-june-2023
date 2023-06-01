// when DOM is ready...
window.addEventListener("DOMContentLoaded", () => {
  const days = document.querySelector(".days");
  const btnNextPageClass = "btn-next";
  const btnPrevPageClass = "btn-prev";

  const handleButtonClick = function (event: Event) {
    const target = event.target;

    if (target instanceof HTMLElement) {
      // if the target is not a .next-page or a .prev-page, ignore
      if (
        !(
          target.classList.contains(btnNextPageClass) ||
          target.classList.contains(btnPrevPageClass)
        )
      ) {
        return;
      }

      if (
        target.parentElement &&
        target.parentElement.previousElementSibling instanceof HTMLElement
      ) {
        // so we are now only down to prev and next cases.
        const currentDay =
          target.parentElement?.previousElementSibling?.dataset.day;

        if (currentDay) {
          const nextPage = String(Number(currentDay) + 1);
          const prevPage = String(Number(currentDay) - 1);

          if (target.classList.contains(btnNextPageClass)) {
            updateUrlAndScroll(nextPage);
          } else {
            updateUrlAndScroll(prevPage);
          }
        }
      }
    }
  };

  if (days) {
    days.addEventListener("click", handleButtonClick);
  }
});

const updateUrlAndScroll = (page: string) => {
  // update the url with the hash of the updated list item
  history.pushState({}, "", `#${page}`);

  const updatedPageDiv = document.getElementById(`${page}`);

  // scroll to updatePageDiv
  if (updatedPageDiv) {
    const top = updatedPageDiv.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
