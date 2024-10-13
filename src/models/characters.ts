interface ImageJPG{
    image_url: string;
}


interface ImageWEBP{
    image_url: string;
    small_image_url: string;
}



interface Character {
    mail_id: number;
    url: string;
    images: [
       jpg: ImageJPG,
       webp: ImageWEBP
    ];
    name: string;
}

interface Person {
    mal_id: number;
    url: string;
    images: [
        jpg: ImageJPG,
     ];
     name: string;
}


interface CharacterData{
    character: Character;
    role: string;
    favorites: number;
    voice_actors: Person[]
}


interface AllCharactersData {
    data: CharacterData[]
}