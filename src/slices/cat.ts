import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RecommendAction: any = createAsyncThunk(
  "catRecommend",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post("cat/recommend", payload);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const catSlice = createSlice({
  name: "cat",
  initialState: {
    catLoading: false,
    recommend: {},
    catData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RecommendAction.pending, (state, action) => {
        state.catLoading = true;
      })
      .addCase(RecommendAction.fulfilled, (state, action) => {
        state.catLoading = false;
        state.recommend = action.payload;
      })
      .addCase(RecommendAction.rejected, (state, action) => {
        state.catLoading = false;
      });
  },
});

export const { reducer } = catSlice;
export default catSlice;
