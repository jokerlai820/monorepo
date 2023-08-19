import useSocket from "@/hooks/useSocket";
import { PropsWithChildren, createContext, useState } from "react";
import { ButtonEnum } from "type";

export const Context = createContext<{
  count: Record<ButtonEnum, number>,
  setCount: (state: Record<ButtonEnum, number>) => void
}>({
  count: {
    [ButtonEnum.blue]: 0,
    [ButtonEnum.orange]: 0
  },
  setCount: (_) => {}
});

const Provider: React.FunctionComponent = ({ children } ) => {
  const [state, setState] = useState({
    [ButtonEnum.blue]: 0,
    [ButtonEnum.orange]: 0
  });

  return <Context.Provider value={{ count:state, setCount:setState }}>{children}</Context.Provider>
}

export default Provider