import styles from './TimeSlot.module.css';
export default function TimeSlot({ time, active=false, onClick }) {
  return (
    <button className={active ? `${styles.slot} ${styles.active}` : styles.slot} onClick={()=>onClick(time)} type="button">
      {time}
    </button>
  );
}
