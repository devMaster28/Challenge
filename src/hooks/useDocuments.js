import React, { useState, useEffect } from 'react';

export const BASE_URL = 'https://localhost:8080';

const useDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/documents', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(async response => {
      if (response.ok) {
        setDocuments(await response.json());
      } else {
        setError(await response.text());
      }
    })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return documents;
};

export default useDocuments;
