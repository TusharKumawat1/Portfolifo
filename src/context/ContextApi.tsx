import { useRef, useState } from "react";
import { Mycontext } from "./Mycontext";
export default function ContextApi({ children }: any) {
  const CursorRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <Mycontext.Provider value={{ CursorRef ,position,setPosition}}>{children}</Mycontext.Provider>
  );
}
