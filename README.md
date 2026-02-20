# Fitness App Mobile

Fitness App Mobile is a cross-platform application for tracking workouts and nutrition, developed with React Native and Expo. The project emphasizes modularity, maintainability, and a consistent user experience across iOS, Android, and web platforms.

## Features

- Calorie and macronutrient tracking with visual progress indicators
- Custom and pre-built workout logging, including sets, reps, and weights
- Meal and food log with historical data and calorie counter
- Workout history and performance analytics
- Light and dark theme support
- Responsive UI with custom themed components
- Haptic feedback and smooth animations

## Technology Stack

- **React Native** 0.81.5
- **Expo** ~54.0
- **TypeScript** 5.9.2
- **React** 19.1.0
- **Expo Router** ~6.0
- **React Navigation** 7.x
- **React Native Reanimated** 4.1
- **React Native Gesture Handler**
- **React Native Chart Kit**

## Project Structure

```
fitness-app-mobile/
├── app/            # Expo Router screens and navigation
├── components/     # Reusable UI and feature components
├── constants/      # Theme and constant values
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── assets/         # Static assets
```

Refer to the codebase for detailed substructure and component organization.

## Theming

The application supports both light and dark themes. Primary color palette:

- Primary: #2EC4B6
- Accent: #FF9F1C
- Secondary: #A855F7

Dark theme:

- Background: #1A1A1A
- Surface: #222222
- Input: #2A2A2A

Light theme:

- Background: #FFFFFF
- Surface: #FAFAFA
- Input: #F5F5F5

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (macOS) or Android Emulator

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fitness-app-mobile
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```
4. Run on your preferred platform:
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan the QR code with Expo Go

### Scripts

```bash
npm start            # Start Expo development server
npm run android      # Run on Android
npm run ios          # Run on iOS
npm run web          # Run in web browser
npm run lint         # Run ESLint
npm run update       # Update with EAS
npm run reset-project # Reset project state
```

### Build & Deployment

Development build:

```bash
npx eas build --platform ios --profile development
npx eas build --platform android --profile development
```

Production build:

```bash
npx eas build --platform all --profile production
```

## Platform Support

- iOS
- Android
- Web (limited)

## Contribution

This project is private and not open for external contributions at this time.

## License

This project is proprietary and not licensed for public use or distribution.

## Author

Maks Żyliński
