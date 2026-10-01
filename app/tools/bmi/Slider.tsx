import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import styles from "./bmi.module.css";

// Same Base UI slider and edge-aligned thumb as the original calculator.
export function Slider({ value, "aria-label": label, ...props }: SliderPrimitive.Root.Props) {
  return (
    <SliderPrimitive.Root className={styles["slider-root"]} data-slot="slider" aria-label={label} value={value} thumbAlignment="edge" {...props}>
      <SliderPrimitive.Control className={styles["slider-control"]}>
        <SliderPrimitive.Track data-slot="slider-track" className={styles["slider-track"]}>
          <SliderPrimitive.Indicator data-slot="slider-range" className={styles["slider-range"]} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb aria-label={label} data-slot="slider-thumb" className={styles["slider-thumb"]} />
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}
