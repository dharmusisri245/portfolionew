// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


// //fetch profile data FROM LINKDIN API
// export const fetchProfile = createAsyncThunk(
//   'profile/fetchProfile',
//   async () => {
//     const response = await axios.get('/api/linkedin-me'); // Pointing to your backend
//     return response.data;
//   }
// );

// // Async thunk to fetch posts
// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     const response = await axios.get('/api/linkedin-posts'); // Pointing to your backend
//     return response.data;
//   }
// );

// const postsSlice = createSlice({
//   name: 'linkedin',
//   initialState: {
//     profile: null,
//     posts: [],
//     status: 'idle',
//     error: null
//   },
//   reducers: {},
//   extraReducers: builder => {
//     //for profile data from linkdin api
//     builder
//      .addCase(fetchProfile.pending,state=>{
//         state.status='loading';
//      })
//      .addCase(fetchProfile.fulfilled,(state,action)=>{
//         state.status='succeeded';
//         state.profile=action.payload;
//      })
//      .addCase(fetchProfile.rejected,(state,action)=>{
//         state.status='failed';
//         state.error=action.error.message;
//      });

//     //for posts data from linkdin api
//     builder
//       .addCase(fetchPosts.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.posts = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });

// export default postsSlice.reducer;



// redux/linkedinSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProfile = createAsyncThunk('linkedin/fetchProfile', async () => {
//   const response = await axios.get('/api/linkedin-me');
//   return response.data;
// });

// export const fetchPosts = createAsyncThunk('linkedin/fetchPosts', async () => {
//   const response = await axios.get('/api/linkedin-posts');
//   return response.data;
// });


// redux/linkedinSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Use FULL URL instead of proxy
export const fetchProfile = createAsyncThunk('linkedin/fetchProfile', async () => {
  const response = await axios.get('http://localhost:9901/api/linkedin-me');
  return response.data;
});

export const fetchPosts = createAsyncThunk('linkedin/fetchPosts', async () => {
  const response = await axios.get('/api/linkedin-posts');
  return response.data;
});

// rest of your slice unchanged...




const linkedinSlice = createSlice({
  name: 'linkedin',
  initialState: {
    profile: null,
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Profile
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Posts
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default linkedinSlice.reducer;
