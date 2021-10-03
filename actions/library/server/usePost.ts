import { useCallback } from "react";
import axios from 'axios';
import { SERVER_URL } from "./Constants";

type ReturnProps = [<T>(url: string, body: Partial<T>) => Promise<T[]>];

export default (): ReturnProps => {
  const usePost = useCallback(function<T>(url: string, body: Partial<T>): Promise<T[]> {
    return axios.post(`${SERVER_URL}/${url}`, body, { method: 'POST' });
  }, []);

  return [usePost];
};
