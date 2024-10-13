interface PropsState<T> {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  error: Errors | null;
}

interface Errors {
  errorMessage: string | null;
  errorStatus: number | null;
}

interface AnimeImage {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

interface TrailerImages {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
}

interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: TrailerImages;
}

interface AnimeData {
    mal_id: number;
    url: string;
    images: {
        jpg: AnimeImage;
        webp: AnimeImage;
    };
    trailer: Trailer;
    title: string;
    title_english: string;
    synopsis: string;
    episodes: number;
    score: number;
    rank: number;
    popularity: number;
    aired: {
        from: string;
        to: string;
        string: string;
    };
    duration: string;
    rating: string;
    genres: Array<{
        mal_id: number;
        type: string;
        name: string;
        url: string;
    }>;
}

interface JikanApiResponse {
    data: AnimeData;
}

