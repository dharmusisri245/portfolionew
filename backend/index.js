import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import morgan from "morgan";

import path from "path";
import { fileURLToPath } from "url";


const app=express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(morgan('dev'));
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const PERSON_URN = process.env.PERSON_URN;

app.get("/api/linkedin-me",async(req,res)=>{
  try {
   const response = await axios.get("https://api.linkedin.com/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    console.log("Fetched profile data:", response.data); // ADD THIS
    res.json(response.data);
  } catch (error) {

    console.error("Error fetching posts:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
  }
});

// app.get("/api/linkedin-posts", async (req, res) => {
//   try {
//     const response = await axios.get(
//      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn:li:person:rrHBkAE1FT)`,
//       {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "X-Restli-Protocol-Version": "2.0.0",
//         },
//       }
//     );
//     console.log("Fetched posts data:", response.data); // ADD THIS
//     res.json(response.data);
//     // console.log("Fetched posts data:"); // ADD THIS
//     // res.send("Hello");
//   } 


// app.get("/api/linkedin-posts", async (req, res) => {
//   try {
//     const response = await axios.get('https://api.linkedin.com/v2/ugcPosts', {
//       headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//         "X-Restli-Protocol-Version": "2.0.0",
//       },
//       params: {
//         q: 'authors',
//         authors: `List(${PERSON_URN})`,
//         sortBy: 'LAST_MODIFIED',
//       },
//     });

//     console.log("Fetched posts data:", response.data);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching posts:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
//   }
// })
// catch (error) {
//     console.error("Error fetching posts:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
//   }
// });



app.get("/api/linkedin-posts", async (req, res) => {
  try {
    const encodedAuthor = encodeURIComponent(`List(${PERSON_URN})`);
    const url = `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=${encodedAuthor}&sortBy=LAST_MODIFIED`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'X-Restli-Protocol-Version': '2.0.0',
      },
    });

    console.log("Fetched posts data:", response.data);
    res.json(response.data);
  }catch (error) {
  if (error.response) {
    console.error("LinkedIn API error:", {
      status: error.response.status,
      headers: error.response.headers,
      data: error.response.data,
    });
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Error in request setup:", error.message);
  }

  res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
}

});

app.listen(9901,()=>{
    console.log("Server is running on port 9901");
});