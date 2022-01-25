import { ICardType } from '../../models/Types';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const  fetchCards = createAsyncThunk(
    "cards/fetchCards",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICardType[]>('https://zoo-animal-api.herokuapp.com/animals/rand/10')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Ошибка")
        }
    }
)