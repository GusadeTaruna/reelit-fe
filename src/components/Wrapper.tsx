import React, { ReactNode } from "react";

interface WrapperProps {
  additionalClass?: string;
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ additionalClass, children }) => {
  return (
    <div className="page-wrapper">
      <div className={`section wf-section ${additionalClass}`}>{children}</div>
    </div>
  );
};

export default Wrapper;
