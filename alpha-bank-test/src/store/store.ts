import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./CardsReducer/CardsReducer";


export const store = configureStore({
    reducer: {
      cards: CardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch