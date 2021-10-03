import { useCallback } from "react";
import axios from 'axios';
import { SERVER_URL } from "./Constants";

type ReturnProps = [(url: string) => Promise<{  count: number | null, next: string | null, previous: string | null, results: Array<unknown>}>];

export default (): ReturnProps => {
  const useGet = useCallback(function(url: string): Promise<{  count: number | null, next: string | null, previous: string | null, results: Array<unknown>}> {
    return (axios.get(`${SERVER_URL}/${url}`, { method: 'GET' }));
  }, []);

  return [useGet];
};
