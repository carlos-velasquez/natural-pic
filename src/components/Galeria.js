import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import Context from "../Context";


export default function Home() {
  const { result, setResults } = useContext(Context);

  const clickImg = (fotoId) =>{
    const fotoTemporal = [...result]
    const fotosIndex = fotoTemporal.findIndex(ele => ele.id === fotoId)
    fotoTemporal[fotosIndex].liked = ! fotoTemporal[fotosIndex].liked
    setResults(fotoTemporal)
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        result.map((foto) => {
          return <div className="foto" style={{backgroundImage: `url(${foto.src.tiny})`}} onClick={() => clickImg(foto.id) }>
           
            <Heart filled={(foto.liked)} />
          </div>

        })

      }


    </div>

  );
}
