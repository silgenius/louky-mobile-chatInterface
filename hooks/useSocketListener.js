import { useEffect } from 'react';

const useSocketListeners = (events) => {
  useEffect(() => {
    events.forEach(event => {
      socket.on(event.signal, event.action);
    });

    return () => {
      events.forEach(event => {
        socket.off(event.signal, event.action);
      });
    };
  }, [events]); // for when a new connection is created or replaced
};

export default useSocketListeners;
