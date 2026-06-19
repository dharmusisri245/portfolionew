
// import express from "express";
// import cors from "cors";
// import axios from "axios";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";
// // app.use(cors()); // allows requests from any frontend

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
// const PERSON_URN = process.env.PERSON_URN;

// console.log(" ACCESS_TOKEN:", ACCESS_TOKEN ? "LOADED" : "MISSING");
// console.log(" ACCESS_TOKEN Value:", ACCESS_TOKEN?.substring(0, 20) + '...'); // just part of it
// console.log(" PERSON_URN:", PERSON_URN);
// app.get("/api/linkedin-me", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.linkedin.com/v2/userinfo", {
//       headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//       },
//     });
//     res.json(response.data);
//     console.log("Fetched LinkedIn profile data:", response.data);
//   } catch (error) {
//     console.error("Error fetching LinkedIn profile:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch LinkedIn profile" });
//   }
// });

// // app.get("/api/linkedin-posts", async (req, res) => {
// //   try {
// //     const response = await axios.get(`https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${PERSON_URN})`, {
// //       headers: {
// //         Authorization: `Bearer ${ACCESS_TOKEN}`,
// //         "X-Restli-Protocol-Version": "2.0.0",
// //       },
// //     });
// //   res.json(response.data);
// //   } catch (error) {
// //   console.error("Error fetching LinkedIn posts:", error.response?.data || error.message);
// //   res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
// // }
// // });

// app.get("/api/linkedin-posts", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${PERSON_URN})`,
//       {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "X-Restli-Protocol-Version": "2.0.0",
//         },
//       }
//     );
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching LinkedIn posts:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
//   }
// });
// // ---------- Serve frontend in production (optional) ----------
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// if (process.env.NODE_ENV === 'production') {
//   const buildPath = path.resolve(__dirname, 'client', 'dist'); // Assuming Vite output is here
//   app.use(express.static(buildPath));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(buildPath, 'index.html'));
//   });
// }

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



// server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev')); // Logging middleware
// app.use(cors());
//  Allow React Vite frontend only
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));


const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const PERSON_URN = process.env.PERSON_URN;

console.log("ACCESS_TOKEN:", ACCESS_TOKEN ? "LOADED" : "MISSING");

app.get("/api/linkedin-me", async (req, res) => {
   console.log("✅/api/linkedin-me route was hit"); // ADD THIS
  try {
    // const response = await axios.get("https://api.linkedin.com/v2/userinfo", {
    //   headers: {
    //     Authorization: `Bearer ${ACCESS_TOKEN}`,
    //   },
    // });
    // console.log("Fetched profile data:", response.data); // ADD THIS
    // res.json(response.data);
    res.send("Hello")
  } catch (error) {
    console.error("Error fetching profile:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch LinkedIn profile" });
  }
});

app.get("/api/linkedin-posts", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${PERSON_URN})`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching posts:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch LinkedIn posts" });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  const buildPath = path.resolve(__dirname, "client", "dist");
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(buildPath, "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



