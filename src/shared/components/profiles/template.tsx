// import type { Language } from "@/shared/i18n/languages.ts";

// Component: ProfileTemplate
type ProfileTemplateProps = {
  layout: "default" | "vanilla";
  heading?: React.ReactNode;
  navigation?: React.ReactNode;
  children?: React.ReactNode;
};

const ProfileTemplateVanilla = (props: ProfileTemplateProps) => {
  return (
    <div className="flex flex-col">
      <div>
        {props.heading}
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <article className="flex-1">
          {props.children}
        </article>
      </div>
    </div>
  );
};

const ProfileTemplateDefault = (props: ProfileTemplateProps) => {
  return (
    <div className="flex flex-col">
      <div>
        {props.heading}
      </div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          {props.navigation}
        </aside>
        <article className="flex-1">
          {props.children}
        </article>
      </div>
    </div>
  );
};

export const ProfileTemplate = (props: ProfileTemplateProps) => {
  switch (props.layout) {
    case "vanilla":
      return <ProfileTemplateVanilla {...props} />;
    case "default":
    default:
      return <ProfileTemplateDefault {...props} />;
  }
};
