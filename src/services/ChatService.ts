import * as tmi from 'tmi.js';
import type { AppDispatch } from '../app/store';
import { addMessage } from '../app/state/messagesSlice';

/**
 * Gets messages with anonymous connection to Twitch and dispatches to state.
 */
export class ChatService {
  constructor(dispatch: AppDispatch) {
    const client = new tmi.Client({
      channels: [ 'EtherSquall' ]
    });

    client.connect();

    client.on('message', (channel, tags, message, self) => {
      console.log(`${tags['display-name']}: ${message}`);
      dispatch(addMessage({ name: tags['display-name'], message }));
    });
  }
}
