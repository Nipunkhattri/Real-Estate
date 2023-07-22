import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/config";
import { toast } from "react-toastify";


export const postcomment = createAsyncThunk("Comment/post", async (data) => {
  try {
    const res = await api.commentpost(data);
    console.log(res);
    toast.success("Comment posted Successfully");
    return res;
  } catch (error) {
 
    toast.error("Login Required!");
    console.log(error);
  }
});

export const getcomments = createAsyncThunk("get/comments", async (idd) => {
  console.log(idd);
  try {
    const res = await api.getdata(idd);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const postReply = createAsyncThunk("post/Reply", async (data2) => {
  console.log(data2);
  try {
    const res = await api.postreply(data2);
    console.log(res);
    toast.success("reply posted Successfully");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const persistedState = localStorage.getItem("comment")
  ? JSON.parse(localStorage.getItem("comment"))
  : null;

const CommentSlice = createSlice({
  name: "Comment",
  initialState: {
    comments: persistedState,
    loading: false,
  },
  reducers: {
    setdata: (state, action) => {
      state.comments = action.payload;
    },
  },
  extraReducers: {
    [getcomments.pending]: (state, action) => {
      state.loading = true;
    },
    [getcomments.fulfilled]: (state, action) => {
      state.loading = true;
      localStorage.setItem("comment", JSON.stringify([...action.payload]));
      state.comments = action.payload;
    },
    [getcomments.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setdata } = CommentSlice.actions;

export default CommentSlice.reducer;
