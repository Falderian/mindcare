import { message } from "antd";
import { AxiosError } from "axios";
import { useCallback } from "react";

const useNotify = () => {
  const notifyFetch = useCallback(async <T,>(promise: Promise<T>) => {
    try {
      const result = await promise;
      return result;
    } catch (error) {
      message.error(`Error: ${(error as Error).message}`, 2);
    }
  }, []);

  const notifyPromise = useCallback(async <T,>(promise: Promise<T>) => {
    const hideLoading = message.loading("Загрузка...", 0);
    try {
      const result = await promise;
      hideLoading();
      message.success("ОК!", 2);
      return result;
    } catch (error) {
      hideLoading();
      message.error(`Ошибка: ${(error as AxiosError).response?.data}`, 2);
    }
  }, []);

  return { notifyFetch, notifyPromise };
};

export default useNotify;
