import { io } from "socket.io-client";

const socket = io("https://pfe2025-api.vercel.app");

export default socket;
