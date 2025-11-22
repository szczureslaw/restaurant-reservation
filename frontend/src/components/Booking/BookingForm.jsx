import { useState } from 'react';
import styles from './BookingForm.module.css';
import Card from '../Common/Card';

export default function BookingForm({ onNewReservation }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const timeSlots = ['17:00','17:30','18:00','18:30','19:00','19:30','20:00'];

  function submit(e) {
    e.preventDefault();
    if (!date || !time || !name || !phone) return alert('Wypełnij wymagane pola');
    const newRes = {
      id: Date.now(),
      name, phone, date, time, guests, status: 'pending'
    };
    onNewReservation(newRes);
    setName(''); setPhone('');
    alert('Rezerwacja zapisana (mock)');
  }

  return (
    <Card>
      <h3 className={styles.title}>Zarezerwuj stolik</h3>
      <form onSubmit={submit} className={styles.form}>
        <label className={styles.label}>Data</label>
        <input className={styles.input} type="date" value={date} onChange={e=>setDate(e.target.value)} required />

        <label className={styles.label}>Godzina</label>
        <div className={styles.times}>
          {timeSlots.map(t => (
            <button type="button" key={t} className={t===time? `${styles.slot} ${styles.active}` : styles.slot} onClick={()=>setTime(t)}>{t}</button>
          ))}
        </div>

        <label className={styles.label}>Liczba osób</label>
        <input className={styles.input} type="number" min="1" max="12" value={guests} onChange={e=>setGuests(+e.target.value)} />

        <label className={styles.label}>Imię</label>
        <input className={styles.input} type="text" value={name} onChange={e=>setName(e.target.value)} required />

        <label className={styles.label}>Telefon</label>
        <input className={styles.input} type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required />

        <button className={styles.cta} type="submit">Zarezerwuj</button>
      </form>
    </Card>
  );
}
