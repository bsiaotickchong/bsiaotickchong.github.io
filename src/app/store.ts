import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './state/messagesSlice';

const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
});

export default store;

/**
 * See https://react-redux.js.org/tutorials/typescript-quick-start for explanation.
 */
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
