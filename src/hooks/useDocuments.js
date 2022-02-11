import React, {useState, useEffect} from 'react';

const useDocuments = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/documents').then(async response => {
      if (response.ok) {
        setDocuments(await response.json());
      }
    });
  }, []);

  return documents;
};

export default useDocuments;
