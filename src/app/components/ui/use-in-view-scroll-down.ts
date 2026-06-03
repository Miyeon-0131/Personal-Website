import { useInView, type Transition } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";

type Options = {
  margin?: string;
  amount?: number | "some" | "all";
};

export function useInViewOnScrollDown(options: Options = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: options.margin ?? "-100px",
    amount: options.amount,
  });

  const revealedRef = useRef(false);
  const lastScrollY = useRef(0);
  const scrollingDownRef = useRef(true);
  const [isVisible, setIsVisible] = useState(false);
  const [useTransition, setUseTransition] = useState(true);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      scrollingDownRef.current = y >= lastScrollY.current - 1;
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const scrollingDown = scrollingDownRef.current;
    const atPageTop = window.scrollY < 80;

    if (!revealedRef.current) {
      revealedRef.current = true;
      setUseTransition(scrollingDown || atPageTop);
      setIsVisible(true);
      return;
    }

    setIsVisible(true);
    setUseTransition(false);
  }, [isInView]);

  const transition = useCallback(
    (base: Transition): Transition => {
      if (useTransition) return base;
      const { duration: _, delay: __, ...rest } =
        typeof base === "object" && base !== null ? base : {};
      return { ...rest, duration: 0, delay: 0 };
    },
    [useTransition]
  );

  return { ref, isVisible, transition };
}
