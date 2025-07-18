
  // Get the button
  const backToTopBtn = document.getElementById("backToTopBtn");

  // When the user scrolls down 200px from the top, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  // When the user clicks the button, scroll to the top smoothly
  backToTopBtn.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

