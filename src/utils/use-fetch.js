//è un CUSTOM HOOK che ci andiamo a richiamare ogni volta
//che abbiamo bisogno della fetch

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false); // true|false - caricamento
  const [data, setData] = useState(null); // null|Response - i dati che mi
  //arrivano dall'API
  const [error, setError] = useState(null); // null|Error|false -che mi serve
  //in caso di errore

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(false);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
};
