import { FunctionComponent } from "react";

interface MapperProps {
  map: { [key: string]: FunctionComponent };
  value: string;
  props: { [key: string]: any } | null;
}

const Mapper = function Mapper(props: MapperProps) {
  const Component = props.map[props.value];

  return <Component {...(props.props ?? {})} />;
}

export { Mapper, Mapper as default };
