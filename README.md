<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=170&section=header&text=EVENTORA&fontSize=52&fontColor=E6F7FF&fontAlignY=38&desc=EVENT%20MANAGEMENT%20PLATFORM%20FOUNDATION&descAlignY=62&descSize=13&color=0:0B1220,55:102A43,100:0891B2" width="100%" alt="EVENTORA event management platform" />

**Plan. Connect. Experience.**

![React](https://img.shields.io/badge/React-0B1220?style=flat-square&logo=react&logoColor=67E8F9)
![TypeScript](https://img.shields.io/badge/TypeScript-0B1220?style=flat-square&logo=typescript&logoColor=67E8F9)
![Vite](https://img.shields.io/badge/Vite-0B1220?style=flat-square&logo=vite&logoColor=67E8F9)
![Node.js](https://img.shields.io/badge/Node.js-0B1220?style=flat-square&logo=nodedotjs&logoColor=67E8F9)
![Express](https://img.shields.io/badge/Express-0B1220?style=flat-square&logo=express&logoColor=67E8F9)

</div>

---

## Overview

**EVENTORA** is an event-management project focused on a polished, responsive event-discovery experience and a foundation for attendee and organizer workflows.

The current repository emphasizes the frontend experience and a Node.js/Express backend starting point. Features such as authentication, database persistence, ticketing, payments, and advanced analytics are documented as future work—not as completed functionality.

## Current experience

- Event discovery interface and event cards
- Search and category-filter UI
- Responsive navigation and layout
- Organizer-focused product sections
- React and TypeScript frontend
- Express backend foundation

## Architecture

```text
EVENTORA-Event-Management/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── styles.css
│   └── package.json
└── backend/                  # Node.js + Express foundation
    ├── src/
    │   └── server.js
    ├── .env.example
    └── package.json
```

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling and UI | CSS, Lucide icons |
| Backend foundation | Node.js, Express |
| Configuration | dotenv |
| Cross-origin requests | CORS |

MongoDB persistence, JWT authentication, role-based access, payment integration, notifications, and cloud media storage remain planned integrations unless implemented in a later commit.

## Run locally

**Prerequisites:** Node.js and npm.

### Frontend

```bash
git clone https://github.com/yashwaje712/EVENTORA-Event-Management.git
cd EVENTORA-Event-Management/frontend
npm install
npm run dev
```

### Backend

Open another terminal:

```bash
cd EVENTORA-Event-Management/backend
npm install
npm run dev
```

Use the environment variable names in `backend/.env.example` for local configuration. Do not commit real credentials or local `.env` files.

## Roadmap

- [ ] Implement and test authentication
- [ ] Add role-based authorization for attendee, organizer, and admin
- [ ] Connect persistent storage
- [ ] Implement event CRUD APIs
- [ ] Add registrations and ticketing
- [ ] Integrate payments and email notifications
- [ ] Add QR-code tickets and analytics
- [ ] Add tests and deployment automation

## Project status

**In development.** The current focus is the user-facing product experience and application foundation. Review the source and roadmap before treating planned modules as production-ready.

## Author

**Yash Waje** · [GitHub profile](https://github.com/yashwaje712)

---

<div align="center">

**Events, simplified.**

</div>
