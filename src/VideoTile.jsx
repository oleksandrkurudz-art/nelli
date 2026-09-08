import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function VideoTile({ src, poster, label }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // Одне п друг г
      document.querySelectorAll("video").forEach((other) => {
        if (other !== video) other.pause();
      });
      video.play();
    } else {
      video.pause();
    }
  };

  // КОби не вантажило
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) video.pause();
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={styles.videoTile}
      role="button"
      tabIndex={0}
      aria-label={playing ? `Пауза: ${label}` : `Відтворити відео: ${label}`}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      }}
    >
      <video
        ref={videoRef}
        className={styles.videoEl}
        poster={poster}
        preload="none"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={(event) => {
          setPlaying(false);
          // плей назад
          event.currentTarget.load();
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <span className={styles.videoPlay} data-playing={playing} aria-hidden="true" />
    </div>
  );
}
