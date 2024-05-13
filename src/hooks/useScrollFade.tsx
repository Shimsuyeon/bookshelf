import { useCallback, useEffect, useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "leftUp";
type ZoomDirection = "in" | "out";

const useScrollFadeIn = (
  direction: Direction = "up",
  duration: number = 1,
  delay: number = 0,
) => {
  const dom = useRef<HTMLElement>(null);

  const handleDirection = (name: Direction): string => {
    switch (name) {
      case "up":
        return "translate3d(0, 30%, 0)";
      case "down":
        return "translate3d(0, -30%, 0)";
      case "left":
        return "translate3d(15%, 0, 0)";
      case "right":
        return "translate3d(-10%, 0, 0)";
      case "leftUp":
        return "translate3d(3%, 10%, 0)";
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const handleScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = dom;
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = "opacity, transform";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.5,
      });
      observer.observe(current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

const useScrollZoom = (
  direction: ZoomDirection = "in",
  duration: number = 1,
  delay: number = 0,
) => {
  const dom = useRef<HTMLElement>(null);

  const handleDirection = (name: ZoomDirection): string => {
    switch (name) {
      case "in":
        return "90%";
      case "out":
        return "110%";
      default:
        return "100%";
    }
  };

  const handleScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = dom;
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = "opacity, width, height";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.width = "100%";
        current.style.height = "100%";
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.5,
      });
      observer.observe(current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      width: handleDirection(direction),
      height: handleDirection(direction),
    },
  };
};

export { useScrollFadeIn, useScrollZoom };
