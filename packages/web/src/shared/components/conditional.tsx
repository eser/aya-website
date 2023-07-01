interface ConditionalProps {
  test: boolean;
  children: React.ReactNode;
}

const Conditional = (props: ConditionalProps) => {
  return <>{props.test ? props.children : null}</>;
};

export { Conditional };
