const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$(".featured-image-1").forEach((image_1) => {
  image_1.addEventListener("click", () => {
    var src = image_1.getAttribute("src");
    $(".big-image-1").src = src;
  });
});

$$(".products-similar-item").forEach((item) => {
  item.addEventListener("click", () => {
    $(".big-image-1").src = item.children[0].src;
    $(".product-detail-name-title").textContent =
      item.children[2].children[0].textContent;
    $(".product-detail-price").textContent =
      item.children[2].children[1].textContent;
    $(".product-detail-size-All").focus();
    $(".small-image").children[0].src = item.children[1].children[0].src;
    $(".small-image").children[1].src = item.children[1].children[1].src;
    $(".small-image").children[2].src = item.children[1].children[2].src;
    $(".small-image").children[3].src = item.children[1].children[3].src;
  });
});

$("#next").addEventListener("click", function () {
  let lists = $$(".products-similar-item");
  $("#item-last").appendChild(lists[0]);
});
$("#prev").addEventListener("click", function () {
  let lists = $$(".products-similar-item");
  $("#item-last").prepend(lists[lists.length - 1]);
});
