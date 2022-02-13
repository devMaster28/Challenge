import { useEffect, useState, useRef } from "react";

export const BASE_URL = 'https://localhost:8080';

const useDocuments = () => {
  const firstUpdate = useRef(true);
  const [error, setError] = useState(false);
  const [page, setpPage] = useState("");
  const [documents, setDocuments] = useState(null);;

  useEffect(() => {
    console.log(firstUpdate)
    if (!firstUpdate.current) {
      fetch('http://localhost:8080/' + page, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(async response => {
        console.log("entra")
        if (response.ok) {
          setDocuments(await response.json());
        } else {
          console.log("error response")

          setError(await response.text());
        }
      })
        .catch(err => {
          console.log(err.message)
          setError(err.message);
        });
    }
    firstUpdate.current = false;
  },
    [page]);

  return { documents, error, callApi: setpPage };
};

export default useDocuments;

