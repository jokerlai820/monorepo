"use client";

import { useEffect, useState } from "react";
import { Button, Container } from "ui";
import "ui/styles.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'
import Pusher from "pusher-js";
import { ButtonEnum, ChannelEnum, EventEnum } from "type";
import { Socket, io } from "socket.io-client";
import useSocket, { socket } from "@/hooks/useSocket";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Number of Clicks:',
    },
  },
};

const labels = ['Click(s)'];

interface Dataset {
  label: string
  data: number[]
  borderColor: string
  backgroundColor: string
} 
type ChartData = {
  labels: string[]
  datasets: Dataset[]
} 

const data: ChartData = {
  labels,
  datasets: [
    {
      label: labels[0],
      data: [0],
      borderColor: 'rgb(255,165,0)',
      backgroundColor: 'rgb(255,140,0)',
    },
    {
      label: labels[1],
      data: [0],
      borderColor: 'rgb(0,0,255)',
      backgroundColor: 'rgb(0,0,139)',
    },
  ],
};

export default function Page() {
  const { count, setCount } = useSocket({
    onDisconnected: () => socket.emit(EventEnum.CLICK_RESET, setCount).disconnect()
  });
  const [show, setShow] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 5000)

    socket.connect();
    socket.emit(EventEnum.CLICK_RESET, setCount);

    return () => {
      clearTimeout(timer)
    }
  }, []);

  return (
    <Container>
      <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
        number of clicks:
      </span>
      <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"> {'B:' + count[ButtonEnum.blue]}  {'O:' + count[ButtonEnum.orange]}</h2>
      {show && <Bar options={options} data={{
        labels: data.labels,
        datasets: [
          {
            label: labels[0],
            data: [count[ButtonEnum.orange]],
            borderColor: 'rgb(255,165,0)',
            backgroundColor: 'rgb(255,140,0)',
          },
          {
            label: labels[1],
            data: [count[ButtonEnum.blue]],
            borderColor: 'rgb(0,0,255)',
            backgroundColor: 'rgb(0,0,139)',
          },
        ],
      }} />}
    </Container>
  )
}
