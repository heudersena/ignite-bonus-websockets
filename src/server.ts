import { serverHttp } from './http';
import './websocket';

serverHttp.listen(3333, () => console.log('http://localhost:3333'));
