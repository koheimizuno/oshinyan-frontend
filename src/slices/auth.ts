import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notification } from "../constant/notification";

export const RegistrationAction: any = createAsyncThunk(
  "auth/registration/",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post("register", payload);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue("アカウント作成に失敗しました。");
    }
  }
);

export const LoginAction: any = createAsyncThunk(
  "auth/login",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post("login", payload);
      return data;
    } catch (error: any) {
      // return thunkApi.rejectWithValue("無効なユーザー名またはパスワード。");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const TokenLoginAction: any = createAsyncThunk(
  "auth/tokenlogin",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("tokenlogin");
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const LogOutAction: any = createAsyncThunk(
  "auth/logout",
  async (payload, thunkApi) => {
    try {
      const { data } = await axios.post("logout", payload);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    authLoading: false,
    user: {},
    error: null,
    isAuthenticated: false,
    loginError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegistrationAction.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(RegistrationAction.fulfilled, (state, action) => {
        state.authLoading = false;
        // const now = new Date();
        // Notification("success", "アカウントが正常に作成されました。");
        // const item = {
        //   value: action.payload.token,
        //   expiry: now.getTime() + 3600000,
        // };
        // localStorage.setItem("token", JSON.stringify(item));
        // state.isAuthenticated = true;
        // state.user = action.payload;
        // setTimeout(() => {
        //   window.location.href = "/login";
        // }, 2000);
      })
      .addCase(RegistrationAction.rejected, (state, action) => {
        state.authLoading = false;
        Notification("error", action.payload);
      });
    builder
      .addCase(LoginAction.pending, (state, action) => {
        state.authLoading = true;
        state.error = null;
      })
      .addCase(LoginAction.fulfilled, (state, action) => {
        const now = new Date();
        const item = {
          value: action.payload.token,
          expiry: now.getTime() + 3600000,
        };
        localStorage.setItem("token", JSON.stringify(item));
        state.isAuthenticated = true;
        state.authLoading = false;
        state.user = action.payload;
        Notification("success", "ログインに成功しました。");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .addCase(LoginAction.rejected, (state, action) => {
        state.authLoading = false;
        state.error = action.payload;
        // Notification("error", action.payload);
        // state.loginError = action.payload;
      });
    builder
      .addCase(TokenLoginAction.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(TokenLoginAction.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(TokenLoginAction.rejected, (state, action) => {
        state.authLoading = false;
      });
    builder
      .addCase(LogOutAction.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(LogOutAction.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.authLoading = false;
        window.location.href = "/";
      })
      .addCase(LogOutAction.rejected, (state, action) => {
        state.authLoading = false;
      });
  },
});

export const { reducer } = userSlice;
export default userSlice;
