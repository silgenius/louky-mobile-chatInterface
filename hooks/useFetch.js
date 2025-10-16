import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOkay, setIsOkay] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setIsOkay(true);
      } catch (err) {
        setIsOkay(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { isLoading, isOkay, data };
}
