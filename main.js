$(document).ready(function () {
  var filterButtons = $(".filter-buttons");
  var imgs = $("img");

  filterButtons.on("click", function (e) {
    e.preventDefault();

    // removing active from existing button
    $(".active").removeClass("active");

    // adding active class to clicked button
    $(e.target).addClass("active");

    // hiding all imgs
    imgs.removeClass("show").addClass("hide");

    // displaying img based on conditond
    imgs.each(function () {
      if (
        $(this).attr("data-name") === $(e.target).attr("data-name") ||
        $(e.target).attr("data-name") === "all"
      ) {
        $(this).removeClass("hide").addClass("show");
      }
    });
  });
});
