import { ICardType } from '../../models/Types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCards } from './AsyncActions';

interface InitialStateType {
  loading: boolean;
  error?: null | string;
  cards: ICardType[]
}

const initialState:InitialStateType = {
  loading: true,
  error: null,
  cards: []
}



const CardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<number>): InitialStateType => {
      const cardsModify = state.cards.map(card => {
        if (card.id === action.payload) {
          card.like = true
        }
        return card
      })
      state.cards = cardsModify
      return state
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter(card => card.id !== action.payload)
    }
  },
  extraReducers: {
    [fetchCards.pending.type]: (state: InitialStateType) => {
      state.loading = true
      state.error = null
    },
    [fetchCards.fulfilled.type]: (state: InitialStateType, action: PayloadAction<ICardType[]>) => {
      state.loading = false
      state.error = null
      let cardsWithLike = action.payload.map(card => {
        card.like = false
        return card
      })
      state.cards = cardsWithLike
    },
    [fetchCards.pending.type]: (state: InitialStateType, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  }
})

export const {like , remove } = CardsSlice.actions

export default CardsSlice.reducer