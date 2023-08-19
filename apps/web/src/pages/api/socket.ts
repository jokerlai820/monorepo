// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Server } from 'Socket.IO'
// import { ButtonCount, ButtonEnum, EventEnum } from "type";

// const SocketHandler = (req: NextApiRequest, res: NextApiResponse) => {
//   if (res.socket && res.socket.server && res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     // const io = new Server(res.socket.server)
//     let ioo;
//     if (res.socket && res.socket.server) {
//       res.socket.server.io = ioo;
//       ioo = new Server(res.socket.server, {cors: {origin: "*"}});
//     }

// let count: ButtonCount = {
//   [ButtonEnum.blue]: 0,
//   [ButtonEnum.orange]: 0
// }

// ioo.on("connection", (socket) => {
//   console.log(`connect ${socket.id}`);

//   socket.on(EventEnum.CLICK_INCREMENT, (color: ButtonEnum) => {
//       console.log(EventEnum.CLICK_INCREMENT);
//       count[color]++;
//       socket.emit(EventEnum.CLICK_COUNT, count);
//   });

//   socket.on(EventEnum.CLICK_COUNT, (_) => {
//       console.log(EventEnum.CLICK_COUNT, count);
//   });
  
//   socket.on(EventEnum.CLICK_RESET, (_) => {
//     console.log(EventEnum.CLICK_RESET);
//     count[ButtonEnum.blue] = 0;
//     count[ButtonEnum.orange] = 0;
//     socket.emit(EventEnum.CLICK_COUNT, count);
// });

//   socket.on("disconnect", () => {
//       console.log(`disconnect ${socket.id}`);
//   });
// });

//   }
//   res.end()
// }

function SocketHandler () {

}
export default SocketHandler