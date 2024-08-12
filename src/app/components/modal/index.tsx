import { PropsWithChildren } from "react";

import cn from "@/lib/clsx";

type Props = {
  show: boolean;
};

export default function Modal({ show, children }: PropsWithChildren<Props>) {
  if (!show) {
    return null;
  }
  return (
    <div
      className={cn(
        "absolute inset-0 bg-red-500",
        "flex items-center justify-center",
      )}
    >
      {children}
    </div>
  );
}
