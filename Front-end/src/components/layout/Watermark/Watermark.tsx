// Watermark.tsx
import styles from "./Watermark.module.css";
import { logo } from "@/assets";

const Watermark = () => {
  return (
    <img src={logo} className={styles.watermark} alt="" aria-hidden="true" />
  );
};

export default Watermark;
