import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(method, url, data) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios({ method, url, data });
        setResponse(res);
        setError(null);
      } catch (error) {
        setError(error);
        setResponse(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [method, url, data]);

  return { response, error, loading };
}