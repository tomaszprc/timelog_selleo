import { ProjectPageElementTypeProps } from "../../types";

const ProjectPageElement = ({ title, hours }: ProjectPageElementTypeProps) => {
  return (
    <div className="p-page-element">
      <div>{title}</div>
      <div>{hours}</div>
    </div>
  );
};

export default ProjectPageElement;
