import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css';

function BookDetailsPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams(); // Récupère l'ID du livre depuis l'URL

  useEffect(() => {
    // Faites une requête API pour récupérer les détails du livre
    // setBook(response.data);
  }, [id]);

  if (!book) return <div>Chargement...</div>;

  return (
    <div className="BookDetailsPage">
      <h2>{book.title}</h2>
      {/* Affichez plus de détails ici */}
    </div>
  );
}

export default BookDetailsPage;
