import useFetch from "../hooks/useFetch";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

const apiUrl = "https://api.jikan.moe/v4/anime/11061/characters";

const Characters = () => {
  const { data, isLoading, hasError } = useFetch<AllCharactersData>(apiUrl);

  const arr = [];

  for (let i = 0; i <= 10; i++) {
    arr.push(data?.data[i]);
    console.log(arr[i]);
  }

  return (
    <>
      {data?.data.map((element, key) => (
        <IonCard>
          <img alt="Silhouette of mountains" src={element.character.images[0].image_url} />
          <IonCardHeader>
            <IonCardTitle>{element.character.name}</IonCardTitle>
            <IonCardSubtitle>{element.character.url}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};

export default Characters;
