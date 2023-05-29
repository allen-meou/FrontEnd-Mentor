document.querySelectorAll(".accordion__question").forEach((item) => {
  item.addEventListener("click", (event) => {
    let collapse = item.nextElementSibling;

    if (!item.classList.contains("collapsing")) {
    }

    if (!item.classList.contains("open")) {
      console.log("toggle accordion button");

      collapse.style.display = "block";

      let accHeight = collapse.clientHeight;
      console.log(accHeight);

      setTimeout(() => {
        collapse.style.height = accHeight + "px";
        collapse.style.display = "";
      }, 1);

      collapse.classList = "accordion__collapse collapsing";

      setTimeout(() => {
        console.log("open accordion content");
        collapse.classList = "accordion__collapse collapse open";
      }, 0.5);
    } else {
      collapse.classList = "accordion__collapse collapsing";

      setTimeout(() => {
        collapse.style.height = "0px";
      }, 1);

      setTimeout(() => {
        collapse.style.height = "0px";
      }, 1);

      setTimeout(() => {
        console.log("close accordion content");
        collapse.classList = "accordion__collapse collapse";
        collapse.style.height = "";
      }, 300);
    }

    item.classList.toggle("open");
    collapse.classList.toggle("open");
  });
});
