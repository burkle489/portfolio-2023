import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface IMouseHoverState {
  hoverState: "standard" | "active" | "hide"
}

const initialState: IMouseHoverState = {
  hoverState: "standard",
}

const mouseHoverSlice = createSlice({
  name: "mouseHover",
  initialState,
  reducers: {
    setMouseHover: (
      state,
      action: PayloadAction<"standard" | "active" | "hide">
    ) => {
      state.hoverState = action.payload
    },
  },
})

export const { setMouseHover } = mouseHoverSlice.actions
export default mouseHoverSlice.reducer
