import { useEffect } from "react";

const sectionSelector = [
  'section[id="about"]',
  'section[id="services"]',
  'section[id="portfolio"]',
  'section[class*="lifestyleSection"]',
  'section[class*="travelSection"]',
  'section[class*="fashionSection"]',
  'section[class*="termsSection"]',
  'section[class*="packagesSection"]',
  'section[id="contacts"]',
].join(",");

const mediaSelector = [
  'section img:not([class*="avatar"]):not([class*="serviceThumb"])',
  'section [class*="packageCard"]',
  'section [class*="termRow"]',
  'section [class*="audienceCard"]',
].join(",");

export default function AnimationRuntime() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    if (prefersReducedMotion) {
      return;
    }

    root.classList.add("motion-ready");

    const sections = Array.from(document.querySelectorAll(sectionSelector));
    const media = Array.from(document.querySelectorAll(mediaSelector));

    sections.forEach((element) => element.classList.add("motionTarget"));
    media.forEach((element, index) => {
      element.classList.add("mediaMotionTarget");
      element.style.setProperty("--motion-delay", `${Math.min(index % 5, 4) * 55}ms`);
    });

    const isMobile = window.matchMedia("(max-width: 820px)").matches;
    const thumbs = isMobile
      ? Array.from(document.querySelectorAll('section [class*="serviceThumb"]'))
      : [];
    thumbs.forEach((element, index) => {
      element.classList.add("thumbReveal");
      element.style.setProperty("--thumb-delay", `${Math.min(index, 4) * 80}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target;
          target.classList.add("isInView");
          observer.unobserve(target);

          const release = () => {
            target.style.willChange = "auto";
          };
          target.addEventListener("transitionend", release, { once: true });
    
          window.setTimeout(release, 1600);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    [...sections, ...media, ...thumbs].forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
