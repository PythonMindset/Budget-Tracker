# 📊 Budget Tracker

A simple, beginner-friendly **Budget Tracker** built with **React** (frontend) and **Express** (backend).  
This project stores transactions in the browser's **Local Storage** — so no database required. The Express server is used to serve the production build of the React app.

---

## 🚀 Features

- Add income and expense transactions  
- Delete transactions  
- Real-time balance calculation (Income − Expense)  
- Data persisted in Local Storage  
- Express server serves the React build for easy deployment

---

## 🧩 Tech Stack

- Frontend: React (hooks: `useState`, `useEffect`)  
- Backend: Node.js + Express  
- Storage: `localStorage` (browser)  
- Other: CORS, static serving via Express

---
## 🧠 How It Works

- Transactions are stored in Local Storage under the key "transactions".
- On app load, the frontend reads localStorage and populates the UI.
- When transactions change (add/delete), the app updates Local Storage automatically.
- Each transaction has an id generated via Date.now().

---

🖼 Screenshots
<img width="739" height="876" alt="image" src="https://github.com/user-attachments/assets/1f54c156-9bf0-4215-b127-ca52e78a0922" />
