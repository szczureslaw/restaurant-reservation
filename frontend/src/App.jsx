import { useState } from 'react';
import BookingForm from './components/Booking/BookingForm';
import ManagerPanel from './components/Manager/ManagerPanel';
import initialReservations from './mock/reservations.json';
import './index.css';

export default function App() {
  const [reservations, setReservations] = useState(initialReservations);

  function addReservation(r) {
    setReservations(prev => [r, ...prev]);
  }
  function confirmReservation(id) {
    setReservations(prev => prev.map(p => p.id===id? {...p,status:'confirmed'}:p));
  }
  function cancelReservation(id) {
    setReservations(prev => prev.filter(p => p.id!==id));
  }

  return (
    <div style={{maxWidth:1200,margin:'32px auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
      <BookingForm onNewReservation={addReservation} />
      <ManagerPanel reservations={reservations} onConfirm={confirmReservation} onCancel={cancelReservation} />
    </div>
  );
}
