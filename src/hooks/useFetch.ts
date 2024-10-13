import React, { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [State, setState] = useState<PropsState<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const getApi = async () => {

    normalize();

    const res = await fetch(url);
    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          errorMessage: res.statusText,
          errorStatus: res.status,
        },
      });
    }

    const data = await res.json();

    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  const normalize = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };


  useEffect(()=> {
    getApi()
  }, [url])

  return{
    data: State.data,
    isLoading: State.isLoading,
    errorMessage: State.error?.errorMessage,
    hasError: State.hasError
  };
};

export default useFetch;
