import { useState, useEffect } from 'react';
import BookingForm from './components/Booking/BookingForm';
import ManagerPanel from './components/Manager/ManagerPanel';
import defaultReservations from './mock/reservations.json';
import './index.css';

const STORAGE_KEY = 'reservations_v1';

export default function App(){
  const [reservations, setReservations] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultReservations;
    } catch (e) {
      return defaultReservations;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    } catch (e) {
      // ignore
    }
  }, [reservations]);

  function addReservation(r){
    setReservations(prev => [r, ...prev]);
  }
  function confirmReservation(id){
    setReservations(prev => prev.map(p => p.id===id? {...p, status:'confirmed'}:p));
  }
  function cancelReservation(id){
    setReservations(prev => prev.filter(p => p.id!==id));
  }

  return (
    <div className="app-grid">
      <BookingForm onNewReservation={addReservation} />
      <ManagerPanel reservations={reservations} onConfirm={confirmReservation} onCancel={cancelReservation} />
    </div>
  );
}
