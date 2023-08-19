import { useContext, useEffect, useMemo, useState } from "react";
import { ButtonEnum, EventEnum } from "type";
import { io } from "socket.io-client";
import { Context } from "@/components/Provider";

const SOCKET_HOST = process.env.NEXT_PUBLIC_SOCKET_HOST || "localhost:3001";

export let socket = io(`${SOCKET_HOST}`);

type SocketHookProps = {
  onDisconnected?: () => void;
};

const useSocket = (props:  Partial<SocketHookProps> = {}) => {
  const { count, setCount } = useContext(Context);
  useEffect(() => {
    socket.connect();
    
    socket.on('connect', () => {
      console.log('WebSocket connected');
    });

    socket.on(EventEnum.CLICK_COUNT, (data) => {
      setCount(data)
    })

    return () => {
      props?.onDisconnected ? props?.onDisconnected() : socket.disconnect();
    };
  }, []);


  return useMemo(() => ({
    count, setCount
  }), [count, setCount])
}

export default useSocket;