import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { getAxiosErrMessage } from '../utils/utils';

type NotifyPromiseOptions = {
  promise: Promise<any>;
  loadingMsg?: string;
  successMsg?: string;
  errorMsg?: string;
};

export const useNotify = () => {
  const notify = (msg: string) => toast(msg);

  const handleError = (error: AxiosError, errorMsg?: string) => {
    return errorMsg || getAxiosErrMessage(error);
  };

  const handlePromise = ({ promise, errorMsg }: Omit<NotifyPromiseOptions, 'loadingMsg'>) =>
    promise.then((result) => result).catch((error) => Promise.reject(handleError(error as AxiosError, errorMsg)));

  const notifyPromise = ({ promise, successMsg = 'OK!', errorMsg = '' }: NotifyPromiseOptions) => {
    return toast.promise(handlePromise({ promise, errorMsg }), {
      loading: 'Загрузка',
      success: successMsg,
      error: (e) => errorMsg || e,
    });
  };

  const notifyFetch = async (promise: Promise<any>) => {
    return promise.catch((error: AxiosError) => {
      const errorMessage = handleError(error);
      toast.error(errorMessage);
    });
  };

  return { notifyPromise, notifyFetch, notify };
};
