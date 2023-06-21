import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface IMouseHoverState {
  isHover: boolean
}

const initialState: IMouseHoverState = {
  isHover: false,
}

const mouseHoverSlice = createSlice({
  name: "mouseHover",
  initialState,
  reducers: {
    setMouseHover: (state, action: PayloadAction<boolean>) => {
      state.isHover = action.payload
    },
  },
})

export const { setMouseHover } = mouseHoverSlice.actions
export default mouseHoverSlice.reducer
