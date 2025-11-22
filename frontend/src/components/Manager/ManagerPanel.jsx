import styles from './ManagerPanel.module.css';
import Card from '../Common/Card';

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
          <div key={r.id} className={styles.reservation}>
            <div className={styles.left}>{r.time} • {r.guests}os</div>
            <div className={styles.mid}>{r.name} • {r.phone}</div>
            <div className={styles.right}>
              <button className={styles.confirm} onClick={()=>onConfirm(r.id)}>Potwierdź</button>
              <button className={styles.cancel} onClick={()=>onCancel(r.id)}>Anuluj</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <a href="/assets/reference-ui.png" target="_blank" rel="noreferrer">Podgląd UI (referencja)</a>
        <button className={styles.export}>Export CSV</button>
      </div>
    </Card>
  );
}
