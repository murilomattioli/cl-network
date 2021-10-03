import { useCallback } from "react";
import axios from 'axios';
import { SERVER_URL } from "./Constants";

type ReturnProps = [(url: string, id: number) => Promise<void>];

export default (): ReturnProps => {
  const useDelete = useCallback(function(url: string, id: number): Promise<void> {
    return (axios.delete(`${SERVER_URL}/${url}${id}/`, { method: 'DELETE' }));
  }, []);

  return [useDelete];
};
