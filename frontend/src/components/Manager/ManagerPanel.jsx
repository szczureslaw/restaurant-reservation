import Card from '../Common/Card';
import ReservationRow from './ReservationRow';
import styles from './ManagerPanel.module.css';

export default function ManagerPanel({ reservations, onConfirm, onCancel }) {
  return (
    <Card className={styles.panel}>
      <h3 className={styles.title}>Panel rezerwacji</h3>
      <div className={styles.summary}>
        <div>Dzisiaj: <strong>{reservations.length}</strong></div>
        <div>No-shows: <strong>{reservations.filter(r=>r.status==='no-show').length}</strong></div>
      </div>

      <div className={styles.list}>
        {reservations.map(r => (
          <ReservationRow key={r.id} r={r} onConfirm={onConfirm} onCancel={onCancel} />
        ))}
      </div>

      <div className={styles.footer}>
        <a href="/assets/reference-ui.png" target="_blank" rel="noreferrer">Podgląd UI (referencja)</a>
        <button className={styles.export}>Export CSV</button>
      </div>
    </Card>
  );
}
