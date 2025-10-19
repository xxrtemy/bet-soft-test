import { useEffect, useRef } from 'react';

/**
 * Хук для бесконечной (ленивой) подгрузки данных при скролле.
 * Срабатывает, когда наблюдаемый элемент появляется в зоне видимости.
 *
 * @param onIntersect — функция, вызываемая при попадании элемента в зону видимости
 * @param margin — отступ, при котором срабатывает наблюдение
 */
export function useInfiniteScroll(onIntersect: () => void, margin: string) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onIntersect();
        });
      },
      { root: null, rootMargin: margin, threshold: 0 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [onIntersect, margin]);

  return targetRef;
}
