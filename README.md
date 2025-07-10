# 📊 Clipboard Health – Most Active Workplaces API

This is a clean and optimized solution for Clipboard Health’s coding challenge:
> Fetch and return the most active workplaces based on shift count.

Built using **NestJS**, **Prisma**, and **SQLite**.

---

## 🧠 Challenge Description

Given workplaces and their associated shifts, build an API that:

- Counts shifts per workplace ✅
- Returns only workplaces with at least one shift ✅
- Sorts by most active (most shifts) ✅
- Limits results (default: top 5) ✅

---

## 🚀 How to Run Locally

### 1. Clone the project

```bash
git clone https://github.com/your-username/clipboard-most-active.git
cd clipboard-most-active
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Prisma and DB

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 4. (Optional) Seed test data

```bash
npm run seed
```

### 5. Run the app

```bash
npm run start
```

### 6. Test the API

Visit:
```
http://localhost:3000/workplaces/most-active
```

---

## 🛠 Tech Stack

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- TypeScript

---

## 🙋🏽‍♀️ Author

**Mercy Chepngeno**  
[LinkedIn](https://linkedin.com/in/mercy-chepngeno-48b72920a) • [GitHub](https://github.com/chep-collab)

---

## 📌 Notes

This version implements all missing business logic and filtering mentioned in the original challenge feedback. It’s fast, maintainable, and production-ready.