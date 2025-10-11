class Navigation {
  constructor() {
    const burger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    burger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      burger.classList.toggle("active");
    });
    sidebar.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        sidebar.classList.remove("active");
        burger.classList.remove("active");
      })
    );
  }
}

class ProjectGallery {
  constructor() {
    document.querySelectorAll(".project-item").forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
        item.querySelector(".project-details").classList.toggle("show");
      });
    });
  }
}

class ScrollProgress {
  constructor() {
    const bar = document.createElement("div");
    bar.style.cssText =
      "position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#6366f1,#10b981);width:0;z-index:9999;";
    document.body.appendChild(bar);
    window.addEventListener("scroll", () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (scrollY / max) * 100 + "%";
    });
  }
}

new Navigation();
new ProjectGallery();
new ScrollProgress();
