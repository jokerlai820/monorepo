import { createServer } from "./server";
import { log } from "logger";
import http from 'http';
import io from "socket.io";
import { Request, Response } from "express";
import { ButtonCount, ButtonEnum, EventEnum } from "type";

const port = process.env.PORT || 3001;
const app = createServer();
const server = http.createServer(app);
const ioo = new io.Server(server, {cors: {origin: "*"}});

let count: ButtonCount = {
  [ButtonEnum.blue]: 0,
  [ButtonEnum.orange]: 0
}

ioo.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);
  socket.emit(EventEnum.CLICK_COUNT, count);

  socket.on(EventEnum.CLICK_INCREMENT, (color: ButtonEnum, cb) => {
      console.log(EventEnum.CLICK_INCREMENT, color);
      count[color]++;
      cb(count);
      socket.broadcast.emit(EventEnum.CLICK_COUNT, count);
  });

  socket.on(EventEnum.CLICK_RESET, (cb) => {
    count[ButtonEnum.blue] = 0;
    count[ButtonEnum.orange] = 0;
    cb && cb(count);
    console.log(EventEnum.CLICK_RESET, count);
    socket.broadcast.emit(EventEnum.CLICK_COUNT, count);
});

  socket.on("disconnect", () => {
      console.log(`disconnect ${socket.id}`);
  });
});

app.get('/', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  return res.send('Server is running!')
})

app.get("/api/healthz", (_req: Request, res: Response) => {
  return res.json({ ok: true });
});

server.listen(port, () => {
  log(`api running on ${port}`);
});
