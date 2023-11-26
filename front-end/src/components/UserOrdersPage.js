import React, { useState, useEffect } from 'react';
import './UserOrdersPage.css';

function UserOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Récupérez les commandes de l'utilisateur depuis le back-end ici
  }, []);

  return (
    <div className="UserOrdersPage">
      <h2>Mes Commandes</h2>
      {orders.map(order => (
        <div key={order.id}>
          {/* Affichez les détails de la commande ici */}
        </div>
      ))}
    </div>
  );
}

export default UserOrdersPage;
