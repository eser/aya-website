"use client";

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = (props: ContentLayoutProps) => {
  return (
    <>
      {props.children}
    </>
  );
};

export { ContentLayout as default };
