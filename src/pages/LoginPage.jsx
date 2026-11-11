import { useState } from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, password } = form;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const peticion = await fetch('http://localhost:3000/api/login', {
      method: "POST",
      body:JSON.stringify(form),
      headers: {
        "Content-Type":"application/json",
      }
    })
    const respuesta = await peticion.json() 
    if(peticion.ok){
      alert("El usuario ha sido Logeado")
    navigate("/home");

    }else{
      alert("El usuario no ha podido ser Logeado")
    }

  }

    

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <h1 className="">Login</h1>
      <form className="flex flex-col gap-1.5 mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        {error && (
          <p className="text-red-700 font-bold">Credenciales invalidas</p>
        )}

        <button className="bg-blue-400 rounded-2xl p-1" type="submit">
          {loading ? "cargando..." : "Login"}
        </button>
      </form>
    </>
  );
};