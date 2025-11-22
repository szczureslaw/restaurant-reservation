import { useState } from 'react';
import styles from './OnboardingModal.module.css';

export default function OnboardingModal({ open=true, onSave }) {
  const [tables, setTables] = useState(5);
  const [timeSlots, setTimeSlots] = useState('17:00,17:30,18:00,18:30,19:00,19:30,20:00');

  if (!open) return null;

  function save() {
    const cfg = { tables: Number(tables), timeSlots: timeSlots.split(',').map(s => s.trim()).filter(Boolean) };
    onSave(cfg);
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Konfiguracja restauracji</h3>

        <label className={styles.label}>Liczba stolików</label>
        <input className={styles.input} type="number" value={tables} min="1" onChange={e => setTables(e.target.value)} />

        <label className={styles.label}>Time slots (oddziel przecinkiem)</label>
        <input className={styles.input} type="text" value={timeSlots} onChange={e => setTimeSlots(e.target.value)} />

        <div className={styles.actions}>
          <button className={styles.save} onClick={save}>Zapisz i kontynuuj</button>
        </div>
      </div>
    </div>
  );
}
