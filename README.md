# Sports-Buddy

# Sports Buddy

A sports matching platform that lets users find local sports events, connect with players, and organize activities.

## 🔧 Technologies
- HTML, CSS, JavaScript
- Firebase (Auth, Firestore, Hosting)

## 🚀 Features
- User registration/login
- Add/view nearby events
- Admin panel for managing sports categories
- Real-time event updates
- Logging for actions

## 📦 Installation
1. Clone the repo
2. Add your Firebase config in `firebase.js`
3. Deploy with Firebase Hosting:  
   `firebase init` -> `firebase deploy`

## ✅ Test Cases
| Action | Input | Expected Output |
|--------|-------|-----------------|
| Login | Valid email/pass | Redirect/login success |
| Add Event | Valid fields | Event added to Firestore |
