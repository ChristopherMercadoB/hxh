import useFetch from "../hooks/useFetch";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import './Character.css'

const apiUrl = "https://api.jikan.moe/v4/anime/11061/characters";

const Characters = () => {
  const { data, isLoading, hasError } = useFetch<AllCharactersData>(apiUrl);
  const arr = data?.data.slice(0, 6) || [];

  return (
    <>
      {
      isLoading ? 
      <div>
        Cargando...
      </div>
      : hasError ? 
      <div>
        Hubo un error al cargar los datos
      </div>
      :arr.map((element, key) => {
        const imageUrl = element.character.images.jpg.image_url
        return(
        <IonCard key={key}>
          <img alt="Silhouette of mountains" src={imageUrl} />
          <IonCardHeader>
            <IonCardTitle>{element?.character.name}</IonCardTitle>
            <IonCardSubtitle>{element?.character.url}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
        )
      })}
    </>
  );
};

export default Characters;
