import React, { useEffect, useState } from "react";

const UsersList = () => {
  // État pour stocker les utilisateurs
  const [users, setUsers] = useState([]);

  // Utilisation de useEffect pour effectuer une requête à l'API au chargement du composant
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // Conversion des données en JSON
      .then((data) => setUsers(data)) // Mise à jour de l'état avec les données reçues
      .catch((error) => console.error("Erreur lors de la récupération des utilisateurs:", error)); // Gestion des erreurs
  }, []); // Tableau de dépendances vide pour exécuter l'effet une seule fois

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Création d'un <li> pour chaque utilisateur
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
