import styles from './ReservationRow.module.css';

export default function ReservationRow({ r, onConfirm, onCancel }) {
  return (
    <div className={styles.reservation}>
      <div className={styles.left}>{r.time} • {r.guests}os</div>
      <div className={styles.mid}>{r.name} • {r.phone}</div>
      <div className={styles.right}>
        <button className={styles.confirm} onClick={()=>onConfirm(r.id)}>Potwierdź</button>
        <button className={styles.cancel} onClick={()=>onCancel(r.id)}>Anuluj</button>
      </div>
    </div>
  );
}
