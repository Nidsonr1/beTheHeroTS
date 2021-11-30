import { createConnection, getConnectionOptions } from 'typeorm';
import { EventEmitter } from 'events'

const emmiter = new EventEmitter();

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_bethehero_1'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  }).then(() => { 
    emmiter.emit("already");
   }).catch(() => {
     emmiter.emit("err");
   });
});

export { emmiter }