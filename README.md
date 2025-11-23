# City-Pulse
Local Events Explorer
## Tech Stack

- React Native (Expo)
- React Navigation (native stack)
- AsyncStorage for local persistence
- Ticketmaster Discovery API (or similar)
- Expo Local Authentication (biometric login)
- react-native-maps (event map preview)

---

## Features

- **Splash → Login/SignUp → Home → Event Details → Profile** navigation flow
- **Home Screen**
  - Search events by **keyword + city** using Ticketmaster API
  - List view of events
- **Event Details Screen**
  - Event information
  - Mark / unmark **favourite**
  - **Map preview** of event venue (if lat/lng available)
- **Profile Screen**
  - Show basic user profile (name, email)
  - List all favourite events
  - Logout
- **Favourites**
  - Stored in **AsyncStorage**, available after app restart
- **Language Toggle**
  - Toggle **English / Arabic**
  - RTL-aware layout (row vs row-reverse, textAlign etc.)
  - Selected language persisted in AsyncStorage
- **Authentication**
  - Simple **Login & Sign Up** (mock auth)
  - User data stored in AsyncStorage
  - **Biometric login** 
