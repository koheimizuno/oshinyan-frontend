import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RecommendAction: any = createAsyncThunk(
  "recommend",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post("recommend", payload);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    recommendLoading: false,
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RecommendAction.pending, (state, action) => {
        state.recommendLoading = true;
      })
      .addCase(RecommendAction.fulfilled, (state, action) => {
        state.recommendLoading = false;
        console.log();

        state.data = action.payload;
      })
      .addCase(RecommendAction.rejected, (state, action) => {
        state.recommendLoading = false;
      });
  },
});

export const { reducer } = recommendSlice;
export default recommendSlice;
