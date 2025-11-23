
import { searchEvents } from '@/services/tickMasterAPI';
import { useState } from 'react';

export function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = async ({ keyword, city }) => {
    try {
      setLoading(true);
      setError(null);
      const result = await searchEvents({ keyword, city });
      setEvents(result);
    } catch (e) {
      setError(e.message || 'Failed to load events');
    } finally {
      setLoading(false);
    }
  };

  return { events, loading, error, fetchEvents };
}