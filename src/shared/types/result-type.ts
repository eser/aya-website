export type ResultType<T> = {
  payload: T;
  error?: {
    message: string;
  };
};
