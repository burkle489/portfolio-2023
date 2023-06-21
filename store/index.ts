import { Store, configureStore } from "@reduxjs/toolkit"
import mouseHoverReducer from "./mouseHoverSlice"

export const store: Store = configureStore({
  reducer: {
    mouseHover: mouseHoverReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
