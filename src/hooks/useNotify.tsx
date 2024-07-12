import toast from 'react-hot-toast';
import { getAxiosErrMessage } from '../utils/utils';
import { AxiosError } from 'axios';

type NotifyPromiseOptions = {
  promise: Promise<any>;
  loadingMsg?: string;
  successMsg?: string;
  errorMsg?: string;
};

export const useNotify = () => {
  const notify = (msg: string) => toast(msg);

  const handleError = (error: AxiosError, errorMsg?: string) => {
    if (error.response?.status === 401) {
      return '401';
    } else {
      return errorMsg ? errorMsg : getAxiosErrMessage(error);
    }
  };

  const handlePromise = ({ promise, errorMsg }: Omit<NotifyPromiseOptions, 'loadingMsg'>) =>
    promise.then((result) => result).catch((error) => Promise.reject(handleError(error as AxiosError, errorMsg)));

  const notifyPromise = ({
    promise,
    loadingMsg = 'loading',
    successMsg = 'success',
    errorMsg = '',
  }: NotifyPromiseOptions) => {
    return toast.promise(handlePromise({ promise, errorMsg, successMsg }), {
      loading: 'Загрузка...',
      success: successMsg ?? 'OK',
      error: (e) => getAxiosErrMessage(e),
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
