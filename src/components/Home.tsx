import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const api = "https://api.jikan.moe/v4/anime/11061";

const Home: React.FC = () => {
  const { data, isLoading, errorMessage } = useFetch<JikanApiResponse>(api);

  const video = data?.data.trailer.embed_url;

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default Home;
