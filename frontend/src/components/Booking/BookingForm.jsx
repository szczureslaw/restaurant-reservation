import { useState } from 'react';
import Card from '../Common/Card';
import TimeSlot from './TimeSlot';
import Input from '../Common/Input';
import Button from '../Common/Button';
import styles from './BookingForm.module.css';
import './BookingForm.module.css';

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
    const newRes = { id: Date.now(), name, phone, date, time, guests, status: 'pending' };
    onNewReservation(newRes);
    setName(''); setPhone('');
    alert('Rezerwacja zapisana (mock)');
  }

  return (
    <Card>
      <h3 className={styles.title}>Zarezerwuj stolik</h3>
      <form onSubmit={submit} className={styles.form}>
        <label className={styles.label}>Data</label>
        <Input className={styles.input} type="date" value={date} onChange={e=>setDate(e.target.value)} required />

        <label className={styles.label}>Godzina</label>
        <div className={styles.times}>
          {timeSlots.map(t => <TimeSlot key={t} time={t} active={t===time} onClick={setTime} />)}
        </div>

        <label className={styles.label}>Liczba osób</label>
        <Input className={styles.input} type="number" min="1" max="12" value={guests} onChange={e=>setGuests(+e.target.value)} />

        <label className={styles.label}>Imię</label>
        <Input className={styles.input} type="text" value={name} onChange={e=>setName(e.target.value)} required />

        <label className={styles.label}>Telefon</label>
        <Input className={styles.input} type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required />

        <div style={{marginTop:8}}>
          <Button className="primary" type="submit">Zarezerwuj</Button>
        </div>
      </form>
    </Card>
  );
}
