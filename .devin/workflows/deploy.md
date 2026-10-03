---
description: How to deploy QuizMaster application to Netlify
---
# Deploy QuizMaster Application

This workflow describes how to build and deploy the QuizMaster application to Netlify.

## Prerequisites
- Node.js installed
- Netlify CLI installed (`npm install -g netlify-cli`)
- Access to Netlify site `quizmaster-app-2025`

## Build Steps

1. Install dependencies if needed
   ```
   npm install
   ```

2. Build the application
   // turbo
   ```
   npm run build
   ```

3. Deploy to Netlify production
   // turbo
   ```
   netlify deploy --prod --dir=dist --site=quizmaster-app-2025
   ```

## Notes
- Build output goes to `dist/` directory
- Site ID: `quizmaster-app-2025`
- Deployment requires Netlify authentication
