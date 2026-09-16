import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { animations } from "@/lib/lottieAnimations";

interface LottieVisualProps {
  type: string;
}

const WindowChrome = () => (
  <div className="ds-window-chrome">
    <div className="ds-window-dot" />
    <div className="ds-window-dot" />
    <div className="ds-window-dot" />
  </div>
);

export const LottieVisual = ({ type }: LottieVisualProps) => {
  const anim = animations[type] || animations.dashboard;

  return (
    <div className="ds-window">
      <WindowChrome />
      <div className="ds-window-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          <Lottie
            animationData={anim}
            loop
            autoplay
            style={{ width: "100%", height: "auto", minHeight: "200px" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
