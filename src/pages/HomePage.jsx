import { useEffect, useState } from "react";

export const Fetching = () => {
  const [personaje, setPersonaje] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://thesimpsonsapi.com/api/characters/2`;

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setPersonaje(data.name);
    } catch (error) {
      console.log("Error al consultar la api", error);
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <h1>Fetching de personaje</h1>

      {loading ? <h1>Cargando...</h1> : <p>{personaje}</p>}

      <button>Anterior</button>
      <button>Siguiente</button>
    </>
  );
};