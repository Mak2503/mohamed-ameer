import { useState, useEffect, useRef, useCallback } from "react";

export const defaultStyles = {
  on: "scroll-in-view",
  off: "scroll-out-view",
};

export function throttle(callback, delay) {
  let timeoutHandler = null;
  return function () {
    if (timeoutHandler == null) {
      timeoutHandler = setTimeout(function () {
        callback();
        clearInterval(timeoutHandler);
        timeoutHandler = null;
      }, delay);
    }
  };
}

export function isElementInViewport(element, offset) {
  const rect = element.getBoundingClientRect();
  const container = document.querySelector(".container");
  const height = container.clientHeight || window.innerHeight;
  console.log("height", container.clientHeight, window.innerHeight);
  return (
    (rect.top <= offset && rect.bottom >= offset) ||
    (rect.bottom - offset >= height && rect.top + offset <= height) ||
    (rect.top >= offset && rect.bottom - offset <= height)
  );
}

export const animateScroll = (element, offset, { on, off } = defaultStyles) => {
  const active = isElementInViewport(element, offset);
  if (active) {
    element.classList.add(on);
    element.classList.remove(off);
  } else {
    element.classList.add(off);
    element.classList.remove(on);
  }
};

export const useAnimationScroll = ({
  selector = ".animated-scroll",
  offset = 300,
  styles = defaultStyles,
}) => {
  const [scroll, setScroll] = useState(false);

  const checkPosition = useCallback(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => animateScroll(element, offset, styles));
  }, [selector, styles, offset]);

  useEffect(() => {
    const throttled = throttle(checkPosition, 200);
    const container = document.querySelector(".container");
    if (!scroll) {
      container.addEventListener("scroll", throttled);
      setScroll(true);
    }
    return () => {
      if (scroll) container.removeEventListener("scroll", throttled);
    };
  }, [checkPosition, scroll]);
};

export const animate = (element, active, { on, off }) => {
  if (!element) return;

  const { classList } = element;
  const open = classList?.contains(on);

  if (active) {
    classList.add(on);
    classList.remove(off);
  } else if (open) {
    classList.add(off);
    classList.remove(on);
  }
};

export const useAnimationLoop = ({
  selector,
  active,
  delay = 200,
  styles = {},
}) => {
  const intervalId = useRef(null);
  const count = useRef(0);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    intervalId.current = setInterval(() => {
      if (elements.length) {
        animate(elements[count.current], active, styles);
        count.current += 1;
        if (count.current === elements.length) {
          clearInterval(intervalId.current);
          count.current = 0;
        }
      }
    }, delay);

    return () => clearInterval(intervalId.current);
  }, [active, delay, selector, styles]);
};
