export const Navbar = ({ nombre = "Anonimo" }) => {
  return (
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Sobre mi</li>
        <li>Contacto</li>
        <li>Bienvenido {nombre}</li>
      </ul>
    </nav>
  );
};