# Aarohi Home Page

## Overview
The Home page has been created to match the exact design from the provided image with the following features:

### Features Implemented:
1. **Navigation Bar**
   - Logo with flower icon
   - Navigation links: Home, Learn, Ask Sakhi, Resources, Community, About Us
   - Login button
   - All links redirect to the Not Found page

2. **Hero Section**
   - Left side content:
     - "EDUCATE • EMPOWER • ELEVATE" tagline
     - Large "Aarohi" title with decorative flower
     - "Empowering Every Cycle Through Education" subtitle
     - Descriptive text about menstrual health education
     - Two action buttons: "Get Started" and "Explore Lessons"
     - Four feature cards: Trusted Content, AI Powered Guidance, Safe & Inclusive, For Everyone Always

   - Right side illustration:
     - Decorative background shape with gradient
     - Person illustration
     - Decorative leaf elements
     - Sparkle decorations
     - AI chatbox with "Hi! I'm Sakhi" greeting
     - "Ask me anything" input box

3. **Scroll Indicator**
   - Animated down arrow at bottom of page

4. **All Links Functional**
   - Every navigation link and button routes to `/not-found`
   - NotFound page displays a friendly 404 error

## Color Scheme
- Primary Pink: #c084a1, #a65e7c, #e5a4c4
- Text Colors: #2d3748 (dark), #4a5568 (medium), #718096 (light)
- Background: Gradient from #f5f0f3 to #e8dfe5

## To Test:
1. Run the development server:
   ```
   cd client
   npm run dev
   ```

2. Open the browser and navigate to the local development URL

3. Test all navigation links - they should all redirect to the Not Found page

4. Check responsive design on different screen sizes

## Files Created/Modified:
- `client/src/pages/Home.jsx` - Main home page component
- `client/src/styles/Home.css` - Home page styling
- `client/src/App.jsx` - Updated with routing
- `client/src/index.css` - Updated with global styles and NotFound styles
