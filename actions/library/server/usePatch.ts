import { useCallback } from "react";
import axios from 'axios';
import { SERVER_URL } from "./Constants";

type ReturnProps = [<T>(url: string, body: Partial<T>) => Promise<T[]>];

export default (): ReturnProps => {
  const usePatch = useCallback(function<T>(url: string, body: Partial<T>): Promise<T[]> {
    return (axios.patch(`${SERVER_URL}/${url}`, body, { method: 'PATCH' }));
  }, []);

  return [usePatch];
};
