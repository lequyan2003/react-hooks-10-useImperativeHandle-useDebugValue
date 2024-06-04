import { useDebugValue, useEffect } from "react";
import { useReducer } from "./useReducer";

function fetchReducer(state, action) {
    switch(action.type) {
      case 'fetchAPI/request':
        return { ...state, isLoading: action.isLoading };
      case 'fetchAPI/success':
        return {
          ...state, 
          isLoading: action.isLoading, 
          error: action.error, 
          data: action.data 
        };
      case 'fetchAPI/error':
        return {
          ...state, 
          isLoading: action.isLoading, 
          error: action.error, 
          data: action.data 
        };
      default:
        return state;
    }
  }

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(fetchReducer, {
        data: [],
        isLoading: false,
        error: null
      });

    // use with React Dev Tool for debugging
    useDebugValue(state.isLoading ? 'Loading' : 'Loaded');

    useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetchAPI/request',
                isLoading: true
            });
            try {
                const res = await fetch(url);
                const { data } = await res.json();
          
                dispatch({
                  type: 'fetchAPI/success',
                  isLoading: false,
                  error: null,
                  data
                });
            } catch (err) {
                dispatch({
                    type: 'fetchAPI/error',
                    isLoading: false,
                    error: null,
                    data: []
                });
            }
        })();
    }, [url])

    return { ...state };
}