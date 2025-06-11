# fub-gpt-connector
A custom-built TypeScript/Node.js connector that integrates Follow Up Boss (FUB) CRM with OpenAI's ChatGPT.  
This tool enables intelligent querying of lead data—giving agents and team leaders actionable insights into database health, lead context, and agent engagement activity.

## 📦 Setup

1. Install dependencies  
   `npm install`

2. **Create a `.env` file** with your FUB API key:  
   ```
   FUB_API_KEY=your_api_key_here
   ```

3. **Run the project**
   - Development:  
     ```bash
     npm run dev
     ```
   - Production:  
     ```bash
     npm run build && npm start
     ```

## 🧾 License

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)  
This project is licensed under the [MIT License](./LICENSE).
