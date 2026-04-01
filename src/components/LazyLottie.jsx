/* eslint-disable react/prop-types */
import { lazy, Suspense } from "react";

const Lottie = lazy(() =>
  import("lottie-react").then((m) => ({ default: m.default }))
);

/**
 * Defers Lottie parse/execution until after first paint; keeps main bundle lighter.
 */
export default function LazyLottie({
  className,
  style,
  animationData,
  lottieRef,
  loop,
  ...rest
}) {
  const h = style?.height ?? 200;
  const w = style?.width ?? "100%";

  return (
    <Suspense
      fallback={
        <div
          className={className}
          style={{
            ...style,
            minHeight: typeof h === "number" ? h : undefined,
            minWidth: typeof w === "number" ? w : undefined,
          }}
          aria-hidden
        />
      }
    >
      <Lottie
        className={className}
        style={style}
        animationData={animationData}
        lottieRef={lottieRef}
        loop={loop}
        {...rest}
      />
    </Suspense>
  );
}
