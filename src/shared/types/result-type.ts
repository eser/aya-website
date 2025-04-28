export interface ResultType<T> {
  payload: T;
  error?: {
    message: string;
  };
}
