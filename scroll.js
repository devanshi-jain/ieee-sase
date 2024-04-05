function clearSelect() {
    let DOMmarks = document.getElementById("sidebar");
    if (DOMmarks !== null) {
      let marks = DOMmarks.childNodes;
  
      for (let mark of marks) {
        mark.classList.remove("select");
      }
    }
  }
  
  function toggleMenu() {
    let menu = document.getElementById("mainmenu");
  
    menu.classList.toggle("open");
  }
  
  // inspired by codyhouse.co
  function updateProgress() {
    let articles = document.getElementsByTagName("articlemark");
    let progress = false;
  
    for (let article of articles) {
      let articleTop = article.getBoundingClientRect().top;
      // console.log(article.id, articleTop);
      if (articleTop < 66) {
        // Update as current article
        clearSelect();
        document.getElementById(`${article.id}_mark`).classList.add("select");
        progress = true;
      }
    }
  
    if (!progress) {
      // At the top of the page
      clearSelect();
      document.getElementById(`head_mark`).classList.add("select");
    }
  }
  
  function updateNavSolid() {
    var scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body)
            .scrollTop;
    var navbar = document.getElementById("navbar");
  
    if (scrollTop > 10) {
      navbar.classList.add("solid");
    } else {
      navbar.classList.remove("solid");
    }
  }
  
  window.onload = function() {
    updateNavSolid();
    updateProgress();
  };
  
  window.onscroll = function() {
    updateProgress();
    updateNavSolid();
  };
  