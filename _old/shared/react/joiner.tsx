import { FunctionComponent } from "react";

interface JoinerProps<T> {
  arr: T[];
  renderer: (value: T) => React.ReactNode;
  separator: React.ReactNode;
}

const Joiner = function Joiner<T>(props: JoinerProps<T>) {
  return (
    <>
      {props.arr.flatMap((value, idx) => {
        const nodes = [];

        if (idx !== 0) {
          nodes.push(props.separator);
        }

        nodes.push(props.renderer(value));

        return nodes;
      })}
    </>
  );
};

export { Joiner, Joiner as default };
