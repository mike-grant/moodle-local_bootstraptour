var tour = new Tour({
  steps: [
  {
    element: "#search-1",
    title: "Title of my step",
    content: "Content of my step",
    animation: false
  },
  {
      element: "#frontpage-category-combo",
      title: "Frontpage course",
      content: "List of frontpage courses",
      animation: false
  }
]});

jQuery(document).ready(function() {
    tour.init();
    tour.start();
});
