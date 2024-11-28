import React from "react";

// interface PropsInterface {
//   //   title?: string;
//   className?: string;
// }

const Card = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={
        "card flex flex-col items-center justify-between hover:-translate-y-1 hover:cursor-pointer duration-150 " +
        className
      }
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
