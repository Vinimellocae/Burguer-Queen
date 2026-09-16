import styles from "./Filter.module.css";

interface FilterProps {
  title: string;
  isActive: boolean;
  onAction: () => void;
}

const Filter = ({ isActive, onAction, title }: FilterProps) => {
  return (
    <button
      type="button"
      className={`${styles.filter} ${isActive ? styles.selected : ""}`}
      onClick={onAction}
    >
      {title}
    </button>
  );
};

export default Filter;
