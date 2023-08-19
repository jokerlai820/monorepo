"use client";

import { Button } from "ui";
import { EventEnum } from "type";
import "ui/styles.css";
import React, { useEffect, useState } from "react";
import useSocket, { socket } from "@/hooks/useSocket";

export default function Page() {
  const { setCount } = useSocket();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    socket.emit(EventEnum.CLICK_INCREMENT, (e.target as HTMLInputElement).value, setCount);

  return (
    <>
      <Button className=" bg-orange-500" onClick={onClick} value='orange'>orange</Button>
      <Button className=" bg-blue-500" onClick={onClick} value='blue'>blue</Button>
    </>
  )
}