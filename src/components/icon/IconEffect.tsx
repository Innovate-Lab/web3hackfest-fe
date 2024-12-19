import styles from "./icon.module.css";

interface IconEffectProps {
  src: string;
  alt: string;
}

const IconEffect = ({ src, alt }: IconEffectProps) => {
  return (
    <div className={styles.iconWrapper}>
      <img src={src} alt={alt} className={styles.iconImage} />
    </div>
  );
};

export default IconEffect;
