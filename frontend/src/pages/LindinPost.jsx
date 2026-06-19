// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProfile, fetchPosts } from '../linkdinSlice/lindinSlice';

// export default function LinkedInData() {
//   const dispatch = useDispatch();
//   const { profile, posts, status, error } = useSelector((state) => state.linkedin);

//   const handleFetchProfile = () => {
//     dispatch(fetchProfile());
//   };

//   const handleFetchPosts = () => {
//     dispatch(fetchPosts());
//   };

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">LinkedIn Data</h1>

//       <div className="flex space-x-4">
//         <button onClick={handleFetchProfile} className="bg-blue-600 text-white px-4 py-2 rounded">
//           Fetch Profile
//         </button>
//         <button onClick={handleFetchPosts} className="bg-green-600 text-white px-4 py-2 rounded">
//           Fetch Posts
//         </button>
//       </div>

//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p className="text-red-500">Error: {error}</p>}

//       {profile && (
//         <div className="mt-4">
//           <h2 className="text-xl font-semibold">Profile</h2>
//           <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(profile, null, 2)}</pre>
//         </div>
//       )}

//       {posts && posts.elements && (
//         <div className="mt-4">
//           <h2 className="text-xl font-semibold">Posts</h2>
//           <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(posts, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }




import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, fetchPosts } from '../linkdinSlice/lindinSlice';

export default function LinkedInData() {
  const dispatch = useDispatch();
  const { profile, posts, status, error } = useSelector((state) => state.linkedin);

  const handleFetchProfile = () => {
    dispatch(fetchProfile());
  };

  const handleFetchPosts = () => {
    dispatch(fetchPosts());
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">LinkedIn Data</h1>

      <div className="flex space-x-4">
        <button onClick={handleFetchProfile} className="bg-blue-600 text-white px-4 py-2 rounded">
          Fetch Profile
        </button>
        <button onClick={handleFetchPosts} className="bg-green-600 text-white px-4 py-2 rounded">
          Fetch Posts
        </button>
      </div>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-red-500">Error: {error}</p>}

      {profile && (
        <div className="mt-6 p-4 border rounded shadow-sm bg-white max-w-md">
          <div className="flex items-center space-x-4">
            <img
              src={profile.picture}
              alt="Profile"
              className="w-20 h-20 rounded-full border"
            />
            <div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-sm text-gray-500">
                Language: {profile.locale?.language?.toUpperCase()} | Country: {profile.locale?.country}
              </p>
            </div>
          </div>
        </div>
      )}

      {posts && posts.elements && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Posts</h2>
          <pre className="bg-gray-100 p-2 rounded max-w-2xl overflow-auto">{JSON.stringify(posts, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
