const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const runWhenIdle = (callback) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: 1200 });
    return;
  }
  window.setTimeout(callback, 120);
};

runWhenIdle(() => {
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const roleRotator = document.querySelector(".role-rotator");
  if (!roleRotator) {
    return;
  }

  const reducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const roles = (roleRotator.dataset.roles || "")
    .split("|")
    .map((role) => role.trim())
    .filter(Boolean);

  if (roles.length <= 1) {
    return;
  }

  let currentIndex = 0;
  const showRole = (nextIndex) => {
    roleRotator.textContent = roles[nextIndex];
  };

  const rotateRole = () => {
    currentIndex = (currentIndex + 1) % roles.length;

    if (!reducedMotion) {
      roleRotator.classList.add("is-fading");
      window.setTimeout(() => {
        showRole(currentIndex);
        roleRotator.classList.remove("is-fading");
      }, 220);
      return;
    }

    showRole(currentIndex);
  };

  window.setInterval(rotateRole, 1800);
});
