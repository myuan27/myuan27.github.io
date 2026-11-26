(function () {
  "use strict";

  var videos = document.querySelectorAll(".research-projects video[data-preview-autoplay]");
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var visible = new WeakMap();
  var manuallyPaused = new WeakSet();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      var inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      visible.set(video, inView);
      if (inView && !manuallyPaused.has(video)) {
        video.play().catch(function () {});
      } else if (!inView && !video.paused) {
        video.pause();
      }
    });
  }, { threshold: [0, 0.25] });

  videos.forEach(function (video) {
    video.addEventListener("pause", function () {
      if (visible.get(video)) manuallyPaused.add(video);
    });
    video.addEventListener("play", function () {
      manuallyPaused.delete(video);
    });
    observer.observe(video);
  });
}());
