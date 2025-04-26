interface ResultType<T> {
  payload: T;
  error?: {
    message: string;
  };
}

export { type ResultType };
