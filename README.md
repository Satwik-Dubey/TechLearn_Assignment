
# TechLearn - Interactive Coding Platform

A modern, interactive coding platform designed to help students practice Data Structures and Algorithms through daily challenges. Built with React, TypeScript, and Vite.

![TechLearn Platform](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-purple)

## 🚀 Live Demo

[View Live Demo](https://tech-learn-assignment.vercel.app)

## Screenshot

<img width="1702" height="956" alt="image" src="https://github.com/user-attachments/assets/6e1d8db0-cd4a-4922-99d2-1fd08034f880" />

## Tech Stack

### Frontend Framework & Build Tools
- **React 18.3** - Modern UI library with hooks
- **TypeScript 5.6** - Type-safe development
- **Vite 6.0** - Lightning-fast build tool and dev server

### Styling & UI Components
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Lucide React** - Beautiful, consistent icons
- **Geist Font** - Modern, clean typography

### Code Editor
- **Monaco Editor** - VS Code's powerful code editor
- **@monaco-editor/react** - React wrapper for Monaco

### State Management & Utilities
- **React Hooks** - Built-in state management (useState)
- **clsx & tailwind-merge** - Dynamic class name handling

## Layout and Design Decisions

### 1. **Three-Panel Resizable Layout**
The interface uses a custom-built resizable grid system with three main panels:

- **Left Panel**: Problem description, test cases, hints, and leaderboard tabs
- **Top Right Panel**: Monaco code editor with syntax highlighting
- **Bottom Right Panel**: Test case execution and results

**Why?** This layout maximizes screen real estate while keeping all essential information visible. Users can resize panels based on their preference, similar to professional IDEs like LeetCode and VS Code.

### 2. **Dark Theme with Blue Monotone Palette**
```
Primary Background: #1C2541 (Deep Navy)
Secondary Background: #243A5E (Slate Blue)
Accent Colors: #3A86FF, #4895EF, #4CC9F0 (Blue Gradient)
Text Colors: #EAF2FF (Light), #A9C1E8 (Medium), #6C85B5 (Muted)
```

**Why?** Dark themes reduce eye strain during extended coding sessions. The blue monotone creates a professional, cohesive look that's easier on the eyes than multi-color schemes.

### 3. **Tabbed Interface for Problem Content**
Four tabs organize problem information:
- **Description**: Problem statement and examples
- **Test Cases**: Sample inputs and outputs
- **Hints**: Progressive hint system
- **Leaderboard**: Social comparison and motivation

**Why?** Reduces information overload by showing only relevant content at a time, while keeping everything one click away.

### 4. **Statistics Dashboard**
Displays four key metrics:
- Total Attempts
- Success Rate
- Current Streak
- Problems Solved

**Why?** Visual progress tracking increases motivation and provides immediate feedback on performance.

### 5. **Responsive Components**
- Custom resizable handles with visual feedback
- Hover states and smooth transitions
- Consistent spacing and typography
- Mobile-friendly (future enhancement)

## How the Platform Encourages Daily Student Engagement

### 1. **Question of the Day (QOTD)**
- Fresh problem every 24 hours
- Creates a routine and habit formation
- FOMO (Fear of Missing Out) if students skip a day

### 2. **Streak System**
- Visible streak counter in statistics
- Badge rewards for 30+ day streaks
- Gamification element that motivates consistency
- Loss aversion psychology - students don't want to break their streak

### 3. **Real-Time Leaderboard**
- **Social Comparison**: Students see their rank among peers
- **Healthy Competition**: Motivates improvement
- **Recognition**: Top 3 performers get visual badges
- **Daily Reset**: Everyone gets a fresh start each day

### 4. **Progressive Hint System**
- Students can reveal hints one at a time
- Prevents immediate frustration
- Encourages problem-solving before seeking help
- "Reveal All" option for when students are stuck

### 5. **Visual Feedback & Rewards**
- Checkmarks for passing test cases
- Progress bars and color-coded status indicators

### 6. **Notification System**
- Email subscription for daily reminders
- Push notifications for new problems (future feature)
- Reminder before streak expires (future feature)

### 7. **Low Barrier to Entry**
- Single problem per day (not overwhelming)
- Clear difficulty indicator (Easy/Medium/Hard)
- Multiple test cases with explanations
- Familiar UI similar to LeetCode/CodeChef

### 8. **Instant Gratification**
- Real-time code execution
- Immediate test results
- Live syntax highlighting
- Auto-save functionality (future feature)

## 🚀 Features

- **Interactive Code Editor** - Monaco editor with JavaScript/TypeScript support
- **Resizable Panels** - Custom-built drag-to-resize functionality
- **Test Case Execution** - Run code against multiple test cases
- **Problem Descriptions** - Formatted with examples and constraints
- **Progressive Hints** - Reveal hints one at a time
- **Leaderboard** - Daily rankings with scores and streaks
- **Statistics Dashboard** - Track attempts, success rate, and streaks
- **Dark Theme** - Eye-friendly interface for long coding sessions
- **Notification Subscribe** - Email notifications for daily problems

## Installation

```bash
# Clone the repository
git clone https://github.com/Satwik-Dubey/TechLearn_Assignment.git

# Navigate to project directory
cd TechLearn_Assignment

# Install dependencies
npm install

# Start development server
npm run dev

```
## Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── scroll-area.tsx
│   │   └── alert-dialog.tsx
│   ├── CodeEditor.tsx         # Monaco code editor
│   ├── CustomResizable.tsx    # Resizable layout system
│   ├── Leaderboard.tsx        # Rankings display
│   ├── NotificationSubscribe.tsx
│   ├── ProblemDescription.tsx # Problem tabs
│   ├── Statistics.tsx         # Metrics dashboard
│   ├── TestCases.tsx          # Test execution panel
│   └── TopNavigation.tsx      # Navigation bar
├── page/
│   └── Qotd.tsx              # Main QOTD page
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## What I Would Improve With More Time

### 1. **Backend Integration**
- **Problem Database**: PostgreSQL/MongoDB for storing problems
- **User Authentication**: JWT-based auth with social login (Google/GitHub)
- **Code Execution**: Sandboxed environment with Docker for running code
- **API Integration**: RESTful API or GraphQL for data fetching
- **Real-time Updates**: WebSocket for live leaderboard updates

### 2. **Enhanced Features**
- **Multi-language Support**: Python, Java, C++, Go
- **Code Submission History**: Track all previous attempts
- **Discussion Forum**: Let students discuss solutions
- **Video Explanations**: Embedded solution walkthroughs
- **AI Hints**: ChatGPT-powered personalized hints
- **Code Review**: Automated code quality feedback
- **Time & Space Complexity Analysis**: Display runtime metrics

### 3. **User Experience Improvements**
- **Mobile Responsive Design**: Optimized for tablets and phones
- **Dark/Light Theme Toggle**: User preference
- **Keyboard Shortcuts**: Vim/Emacs mode in editor
- **Auto-save**: Save code in local storage
- **Code Templates**: Starter code for each language
- **Split Editor**: Side-by-side code comparison
- **Custom Test Cases**: Add and run custom inputs

### 4. **Gamification Enhancements**
- **Achievement System**: Badges for milestones (10 days, 50 problems, etc.)
- **XP Points**: Earn points for solving problems
- **Level System**: Progress from Beginner → Advanced
- **Weekly Challenges**: Special themed weeks
- **Friend System**: Follow and compete with friends
- **Global Leaderboard**: All-time rankings
- **Streak Recovery**: One "freeze" per month

### 5. **Analytics & Insights**
- **Performance Graphs**: Visualize progress over time
- **Topic-wise Analysis**: Identify weak areas
- **Time Tracking**: See how long you spend coding
- **Difficulty Distribution**: Track easy/medium/hard ratio
- **Heatmap Calendar**: GitHub-style contribution graph

### 6. **Accessibility**
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast Mode**: For visually impaired users
- **Font Size Controls**: Adjustable text size
- **Reduced Motion**: Respect prefers-reduced-motion

### 7. **Performance Optimizations**
- **Code Splitting**: Lazy load components
- **Memoization**: React.memo for expensive components
- **Virtual Scrolling**: For large test case lists
- **Service Worker**: Offline support
- **CDN**: Serve static assets faster
- **Image Optimization**: WebP format, lazy loading

### 8. **Testing & Quality**
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright/Cypress
- **Component Storybook**: Isolated component development
- **TypeScript Strict Mode**: Enforce stricter typing
- **ESLint Rules**: Consistent code quality
- **Husky Pre-commit Hooks**: Automated quality checks

### 9. **Additional Content**
- **Problem Tags**: Search by tags (Array, DP, Graph, etc.)
- **Difficulty Filters**: Filter by easy/medium/hard
- **Company Tags**: Problems asked by FAANG companies
- **Similar Problems**: Related problem suggestions
- **Editorial Solutions**: Official solutions with explanations
- **User Solutions**: Community-contributed solutions

### 10. **DevOps & Infrastructure**
- **CI/CD Pipeline**: Automated testing and deployment
- **Error Tracking**: Sentry for error monitoring
- **Analytics**: Google Analytics or Mixpanel
- **A/B Testing**: Experiment with features
- **Rate Limiting**: Prevent API abuse
- **Database Backup**: Automated backups
- **Load Balancing**: Handle high traffic

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**Satwik Dubey**
- GitHub: [@Satwik-Dubey](https://github.com/Satwik-Dubey)
- Email: [dubeysatwik0@gmail.com]

