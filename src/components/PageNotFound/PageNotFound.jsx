import { Link, useLocation } from "react-router-dom"

export default function PageNotFound() {
  const { state } = useLocation();

  return (
    <div>
      <h1 style={{ marginLeft: 520 }}>{"No encontramos lo que buscaba..."}</h1>
      {state && state.message && (<span>{state.message}</span>)}
      <p>Pero puedes seguir navegando por nuestra pagína</p>
      <Link to="/">
        <p>Volver a la pagina principal</p>
      </Link>
    </div>
  )
}