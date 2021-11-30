import { app, emmiter } from './app'

emmiter.on("already", () => {
  app.listen("3333", () => {
    console.log("📦 Database connected!")
    console.log("🚀 Server is Running at http://localhost:3333");
  });
});

emmiter.on("err", () => {
  throw new Error("❎ Problema interno de Conexão!")  
});
