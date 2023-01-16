import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Message } from '../../types/Messages';

interface MessagesState {
  value: Array<Message>;
}

const initialState: MessagesState = {
  value: [],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.value.push(action.payload);
      console.log('updated state', state.value);
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export const selectMessages = (state: RootState) => state.messages.value;

export default messagesSlice.reducer;
