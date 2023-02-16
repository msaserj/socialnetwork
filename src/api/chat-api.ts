import { StatusType } from '../redux/chat-reducer';

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void;
type MessagesChangedSubscriberType = (status: StatusType) => void;

let subscribers = {
  'messages-received': [] as MessagesReceivedSubscriberType[],
  'status-changed': [] as MessagesChangedSubscriberType[]
};
let ws: WebSocket;

type EventsType = 'messages-received' | 'status-changed';

const closeHandler = () => {
  console.log('close ws');
  notifyStatus('pending');
  setTimeout(createChanel, 3000);
};

const onMessageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data);
  subscribers['messages-received'].forEach(s => s(newMessages));
};
const openHandler = () => {
  notifyStatus('ready');
};

const errorHandler = () => {
  notifyStatus('error');
  console.error('restart page');
};

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler);
  ws?.removeEventListener('message', onMessageHandler);
  ws?.removeEventListener('open', openHandler);
  ws?.removeEventListener('error', errorHandler);
};

const notifyStatus = (status: StatusType) => {
  subscribers['status-changed'].forEach(s => s(status));
};

function createChanel() {
  cleanUp();
  ws?.close();
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  notifyStatus('pending');
  ws.addEventListener('close', closeHandler);
  ws.addEventListener('message', onMessageHandler);
  ws.addEventListener('open', openHandler);
  ws.addEventListener('error', errorHandler);
}

export const chatApi = {
  start() {
    createChanel();
  },
  stop() {
    subscribers['messages-received'] = [];
    subscribers['status-changed'] = [];
    cleanUp();
    ws?.close();
  },
  subscribe(eventName: EventsType, callback: MessagesReceivedSubscriberType | MessagesChangedSubscriberType) {
    // @ts-ignore
    subscribers[eventName].push(callback);
    return () => {
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
    };
  },
  unsubscribe(eventName: EventsType, callback: MessagesReceivedSubscriberType | MessagesChangedSubscriberType) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter(s => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  }
};

export type ChatMessageAPIType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
