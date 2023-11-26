import React, { useState, useEffect } from 'react';
import './BookListPage.css';

function BookListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Ici, vous devez faire une requête API pour récupérer les livres
    // setBooks(response.data);
  }, []);

  return (
    <div className="BookListPage">
      <h2>Liste des Livres</h2>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          {/* Plus de détails sur le livre */}
        </div>
      ))}
    </div>
  );
}

export default BookListPage;
