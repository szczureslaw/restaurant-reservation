import { useState, useEffect } from 'react';
import BookingForm from './components/Booking/BookingForm';
import ManagerPanel from './components/Manager/ManagerPanel';
import Toast from './components/Common/Toast';
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

  const [toast, setToast] = useState({ show:false, text:'' });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations)); } catch {}
  }, [reservations]);

  function showToast(text, timeout = 3000){
    setToast({ show:true, text });
    setTimeout(()=> setToast({ show:false, text:'' }), timeout);
  }

  function addReservation(r){
    setReservations(prev => [r, ...prev]);
    showToast('Rezerwacja zapisana');
  }
  function confirmReservation(id){
    setReservations(prev => prev.map(p => p.id===id? {...p, status:'confirmed'}:p));
    showToast('Rezerwacja potwierdzona');
  }
  function cancelReservation(id){
    setReservations(prev => prev.filter(p => p.id!==id));
    showToast('Rezerwacja anulowana');
  }

  return (
    <>
      <div className="app-grid">
        <BookingForm onNewReservation={addReservation} showToast={showToast} />
        <ManagerPanel reservations={reservations} onConfirm={confirmReservation} onCancel={cancelReservation} />
      </div>

      <Toast show={toast.show} text={toast.text} />
    </>
  );
}
