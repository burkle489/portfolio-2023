import { useRef, useEffect, useState, FC } from "react";
import { createPortal } from "react-dom";

interface IClientOnlyPortalProps {
  children: React.ReactNode;
  selector: string;
}

const ClientOnlyPortal: FC<IClientOnlyPortalProps> = ({
  children,
  selector,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);
  // todo types
  return mounted ? createPortal(children, ref.current as any) : null;
};

export default ClientOnlyPortal;
