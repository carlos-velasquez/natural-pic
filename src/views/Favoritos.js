import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {

  const {result} = useContext(Context)
  const favoritos = result.filter((foto) => foto.liked ===true)
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {
        favoritos.map((foto) =>{
          return <div className="foto" key={foto.id} style={{backgroundImage: `url(${foto.src.tiny})`}}>
            </div>
        })
       }
      </div>
    </div>
  );
}
