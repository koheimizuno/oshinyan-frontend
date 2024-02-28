import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notification } from "../constant/notification";

export const RecommendAction: any = createAsyncThunk(
  "catRecommend",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post("api/recommend", payload);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const RecommendOutAction: any = createAsyncThunk(
  "catRecommendOut",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.delete(`api/recommend/${payload}/`);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const CommentImageDeleteAction: any = createAsyncThunk(
  "commentimagedelete",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.delete(`api/commentimage/${payload}/`);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const CommentImageRecommentAction: any = createAsyncThunk(
  "commentimagerecommend",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post(`api/commentimagerecommend/`, payload);
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
    commentImageRecommend: {},
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
        Notification("success", "推しました。");
      })
      .addCase(RecommendAction.rejected, (state, action) => {
        state.catLoading = false;
      })
      .addCase(RecommendOutAction.pending, (state, action) => {
        state.catLoading = true;
      })
      .addCase(RecommendOutAction.fulfilled, (state, action) => {
        state.catLoading = false;
        state.recommend = action.payload;
      })
      .addCase(RecommendOutAction.rejected, (state, action) => {
        state.catLoading = false;
      })
      .addCase(CommentImageDeleteAction.pending, (state, action) => {
        state.catLoading = true;
      })
      .addCase(CommentImageDeleteAction.fulfilled, (state, action) => {
        state.catLoading = false;
        state.recommend = action.payload;
      })
      .addCase(CommentImageDeleteAction.rejected, (state, action) => {
        state.catLoading = false;
      })
      .addCase(CommentImageRecommentAction.pending, (state, action) => {
        state.catLoading = true;
      })
      .addCase(CommentImageRecommentAction.fulfilled, (state, action) => {
        state.catLoading = false;
      })
      .addCase(CommentImageRecommentAction.rejected, (state, action) => {
        state.catLoading = false;
      });
  },
});

export const { reducer } = catSlice;
export default catSlice;
