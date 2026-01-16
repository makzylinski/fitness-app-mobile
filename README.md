# 💪 Fitness App Mobile

A modern, cross-platform fitness tracking application built with React Native and Expo. Track your workouts, monitor your nutrition, and achieve your fitness goals with an intuitive and beautiful interface.

## 🌟 Features

### 📊 Dashboard

- **Daily calorie tracking** with progress visualization
- **Macronutrient breakdown** (Protein, Carbs, Fats)
- **Recent workout history** with quick access
- Smart greeting based on time of day

### 🏋️ Workout Tracking

- Create and log custom workouts
- Pre-built exercise suggestions
- Track sets, reps, and weight
- Session notes for each workout
- Workout history and performance tracking

### 🍽️ Food Logging

- Daily meal tracking (Breakfast, Lunch, Dinner, Snacks)
- Calorie counter with visual feedback
- Food calendar for historical data
- Detailed meal information

### 🎨 UI/UX

- **Dark/Light theme support** with seamless switching
- **Custom themed components** for consistent design
- **Smooth animations** with React Native Reanimated
- **Haptic feedback** for enhanced user experience
- **Tab-based navigation** with custom icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fitness-app-mobile
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on your device

## 📱 Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web (limited support)

## 🛠️ Tech Stack

### Core

- **React Native** `0.81.5` - Mobile framework
- **Expo** `~54.0` - Development platform
- **TypeScript** `5.9.2` - Type safety
- **React** `19.1.0` - UI library

### Navigation

- **Expo Router** `~6.0` - File-based routing
- **React Navigation** `7.x` - Navigation library

### UI & Styling

- **Expo Symbols** - Native SF Symbols support
- **React Native Reanimated** `4.1` - Animations
- **React Native Gesture Handler** - Gesture support
- **Custom themed components** - Consistent design system

### Charts & Visualization

- **React Native Chart Kit** - Data visualization
- **Custom progress bars** - Calorie tracking

### Additional Features

- **Expo Haptics** - Tactile feedback
- **React Native UI DatePicker** - Date selection
- **React Native Tab View** - Tab components

## 📁 Project Structure

```
fitness-app-mobile/
├── app/                          # Expo Router screens
│   ├── (tabs)/                  # Tab navigation
│   │   ├── index.tsx           # Dashboard
│   │   ├── workout.tsx         # Workout screen
│   │   └── food-log.tsx        # Food logging
│   ├── login.tsx               # Authentication
│   └── _layout.tsx             # Root layout
├── components/                  # Reusable components
│   ├── dashboard/              # Dashboard components
│   ├── workout/                # Workout components
│   ├── food-log/               # Food log components
│   ├── ui/                     # UI components (themed)
│   └── shared/                 # Shared components
├── constants/                   # Constants & theme
│   └── theme.ts                # Color scheme & fonts
├── hooks/                       # Custom React hooks
├── utils/                       # Utility functions
└── assets/                      # Static assets

```

## 🎨 Theming

The app supports both light and dark themes with a carefully crafted color palette:

**Primary Colors:**

- Primary: `#2EC4B6` (Turquoise)
- Accent: `#FF9F1C` (Orange)
- Secondary: `#A855F7` (Purple)

**Dark Theme:**

- Background: `#1A1A1A`
- Surface: `#222222`
- Input: `#2A2A2A`

**Light Theme:**

- Background: `#FFFFFF`
- Surface: `#FAFAFA`
- Input: `#F5F5F5`

## 🔧 Available Scripts

```bash
npm start              # Start Expo development server
npm run android       # Run on Android
npm run ios          # Run on iOS
npm run web          # Run on web browser
npm run lint         # Run ESLint
npm run update       # Update with EAS
npm run reset-project # Reset to clean project
```

## 🏗️ Development

### Adding New Components

All UI components should extend the themed components in `components/ui/`:

- `ThemedView` - Themed container
- `ThemedText` - Themed text
- `ThemedCard` - Themed card
- `ThemedInput` - Themed input
- `ThemedButton` - Themed button

### Icon Usage

Use the `IconSymbol` component for cross-platform icon support:

```tsx
<IconSymbol name="dumbbell.fill" size={24} color={primaryColor} />
```

Supported icons are mapped in `components/ui/icon-symbol.tsx`.

## 📦 Build & Deploy

### Development Build

```bash
npx eas build --platform ios --profile development
npx eas build --platform android --profile development
```

### Production Build

```bash
npx eas build --platform all --profile production
```

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Maks Żyliński**

## 🙏 Acknowledgments

- Expo team for the amazing framework
- React Native community
- All contributors and testers

---

**Note:** This app is under active development. Features and documentation may change.
