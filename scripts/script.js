gsap.from("nav", {
  duration: 1,
  y: -100,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from(".hero-section", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".hero-section p", {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".hero-ctas", {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".hero-asset-i", {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 1.5,
  ease: "power2.out",
});

const arrowBtn = document.querySelectorAll(".arrow-btn");

arrowBtn.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    gsap.to(btn, {
      duration: 0.5,
      //expand width from initial position
      width: 95,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseout", () => {
    gsap.to(btn, {
      duration: 0.5,
      width: 80,
      ease: "power2.out",
    });
  });
});

gsap.utils.toArray(".service-item").forEach((item) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top +=1000",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });

  tl.from(item, {
    duration: 1,
    x: -100,
    y: 100,
    opacity: 0,
    ease: "power2.out",
  });

  let asset = item.querySelector(".service-asset");

  if (asset) {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    tl2.from(asset, {
      duration: 8,
      x: 400,
      opacity: 0,
      // amazing ease effect
      ease: "power4.out",
      stagger: 0.5,
    });
  }
});

gsap.utils.toArray(".blog-item").forEach((item) => {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top right",
      end: "bottom bottom -=1200",
      scrub: true,
      // markers: true,
    },
  });

  tl3.from(item, {
    duration: 4,
    opacity: 0,
    scale: 0.5,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".card").forEach((card) => {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      // start form 400px below top center
      start: "top +=1500",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });

  tl4.from(card, {
    duration: 4,
    x: -400,
    y: 200,
    scale: 0.2,
    skewX: 10,
    opacity: 0,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".contact-info").forEach((content) => {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: content,
      // start form 400px below top center
      start: "top +=1500",
      end: "bottom +=400",
      scrub: true,
      // markers: true,
    },
  });

  t.from(content, {
    duration: 4,
    // x: -400,
    scale: 0.1,
    // rotate: 25,
    opacity: 0,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".accordion").forEach((acc) => {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: acc,
      // start form 400px below top center
      start: "top +=1200",
      end: "bottom +=400",
      scrub: true,
      // markers: true,
    },
  });

  t.from(acc, {
    duration: 4,
    x: -400,
    scale: 0.1,
    rotate: 25,
    opacity: 0,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".about-content").forEach((content) => {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: content,
      // start form 400px below top center
      start: "top +=1200",
      end: "bottom +=400",
      scrub: true,
      // markers: true,
    },
  });

  t.from(content, {
    duration: 4,
    // x: -400,
    scale: 0.1,
    // skewX: 30,
    // rotate: 25,
    opacity: 0,
    ease: "power2.out",
  });
});

let t10 = gsap.timeline({
  // start form 400px below top center
  start: "top center",
  end: "bottom center",
});

t10
  .from(
    //select child of .about-header
    ".about-header > *",
    {
      //split down animation
      duration: 1,
      y: -100,
      opacity: 0,
      stagger: 0.2,

      ease: "power2.out",
    }
  )
  .from(".about-asset", {
    duration: 1.5,
    scale: 0.1,
    y: -300,
    // rotate: 25,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

gsap.utils.toArray(".fact-item").forEach((fact) => {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: fact,
      start: "top +=800",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });

  t.from(fact, {
    duration: 1,
    scale: 0.1,
    opacity: 0,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".target-card").forEach((target) => {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: "top +=800",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });

  tl4.from(target, {
    duration: 4,
    // x: -400,
    scale: 0,
    opacity: 0,
    ease: "power2.out",
  });
});

// Select all the accordion elements
const accordions = document.querySelectorAll(".accordion");
const icons = document.querySelectorAll(".accordion-icon");

// Function to toggle the accordion content and rotate the icon
function toggleAccordion(index) {
  const accordion = accordions[index];
  const content = accordion.querySelector(".accordion-content");
  const icon = icons[index];

  if (content.classList.contains("hidden")) {
    gsap.from(content, {
      duration: 1,
      x: -100,
      skewX: 30,
      maxHeight: "0",
      opacity: 0,
      ease: "power2.out",
    });
    gsap.to(content, { maxHeight: "1000px", duration: 1, ease: "power2.out" });
    gsap.to(icon, { rotate: "180deg", duration: 1 });
    content.classList.remove("hidden");
  } else {
    gsap.to(content, {
      maxHeight: "0",
      duration: 0.5,
      ease: "power2.out",
      onComplete: hideContent,
    });
    gsap.to(icon, { rotate: "0deg", duration: 0.5 });
  }

  function hideContent() {
    content.style.maxHeight = "0";
    content.classList.add("hidden");
  }
}

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".toggle-accordion");
  header.addEventListener("click", () => {
    toggleAccordion(index);
  });
});

const hamMenu = document.querySelector(".ham");

let tx = gsap.fromTo(
  ".ham-menu",
  {
    clipPath: "circle(0% at 100% -100)",
    display: "none",
    duration: 0.8,
  },
  {
    display: "flex",
    clipPath: "circle(100% at 100% 30%)",
    duration: 1,
    ease: "power2.out",
    paused: true, // add this line to pause the animation on initial load
  }
);

hamMenu.addEventListener("click", () => {
  const isHidden = tx.progress() === 0;
  isHidden ? tx.play() : tx.reverse();
});

// In your script.js file, or include it within a script tag at the end of your HTML file

// In your script.js file, or include it within a script tag at the end of your HTML file

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const pillCheckboxes = document.querySelectorAll(".pill-checkbox");

checkboxes.forEach((checkbox, index) => {
  let isChecked = checkbox.checked;

  checkbox.addEventListener("change", () => {
    isChecked = !isChecked;

    if (isChecked) {
      gsap.to(pillCheckboxes[index], {
        clipPath: "circle(100% at 50% 50%)",
        backgroundColor: "#000",
      });
      gsap.to(pillCheckboxes[index].querySelector(".label"), {
        color: "white !important",
      });
    } else {
      gsap.to(pillCheckboxes[index], {
        backgroundColor: "#f5f5f4d9",
      });
      gsap.to(pillCheckboxes[index].querySelector(".label"), {
        color: "black",
      });
    }
  });
});

// checkbox.addEventListener("change", () => {
//   if (checkbox.checked) {
//     gsap.to(pillCheckbox, { backgroundColor: "#000" });
//     gsap.to(".label", { color: "white" });
//   } else {
//     gsap.to(pillCheckbox, { backgroundColor: "#f5f5f4d9" });
//     gsap.to(".label", { color: "black" });
//   }
// });

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
