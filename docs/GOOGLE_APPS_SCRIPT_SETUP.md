# Google Apps Script Setup, Deployment & Verification Guide

This guide details how to deploy, configure, rate-limit, and verify the **Quick Message** contact form backend using Google Apps Script.

---

## 1. Google Apps Script Backend Features & Limits

### Honeypot Bot Protection
The frontend form embeds a visually hidden input (`website`). If a bot fills out this field, the Apps Script backend catches it, logs a silent bot attempt, and returns a dummy success response without dispatching an email to your inbox.

### Input Sanitization & Allowlisting
- **Header Injection Defense**: The `sanitizeHeaderField` function strips carriage returns (`\r`), newlines (`\n`), tabs (`\t`), and ASCII control characters from `Name` and `Subject` to eliminate header injection attacks.
- **Length Boundaries**: Server-side bounds enforce Name (max 100 chars), Email (max 150 chars), and Message (5–3000 chars).
- **Subject Category Allowlist**: Incoming categories are validated against an explicit list (`Just saying hello`, `Project inquiry`, `Collaboration`, `Question`, `Other`).

### Rate Limiting via CacheService & Its Limitations
- **Mechanism**: The backend uses `CacheService.getScriptCache()` to enforce a 60-second cooldown per submission (`COOLDOWN_SECONDS = 60`). The key is generated via MD5 hash of the lowercased email address (`rl_<md5_email>`).
- **Limitations**:
  1. **No Client IP Access**: Apps Script Web Apps executed under `"Who has access: Anyone"` run anonymously without revealing visitor IP addresses to `e.parameter`. Therefore, rate limiting is scoped per email address, not per IP address.
  2. **Email Alias Bypass**: A malicious user using dynamic email aliases (e.g. `user+1@domain`, `user+2@domain`) can bypass the CacheService key.
  3. **Concurrency**: CacheService is eventual for high concurrency bursts. This is a lightweight database-free rate-limiting measure suitable for personal portfolio contact forms, not an enterprise anti-DDoS wall.

---

## 2. Deployment & Version Management

### Step 1: Create or Update Project in Apps Script
1. Open [Google Apps Script](https://script.google.com/).
2. Create a project named `Portfolio Quick Message Backend` (or open existing project).
3. Replace `Code.gs` content with [`scripts/google-apps-script.js`](file:///d:/portfo/scripts/google-apps-script.js).
4. Update line 14 with your private recipient email:
   ```javascript
   var RECIPIENT_EMAIL = "your-actual-email@gmail.com";
   ```

### Step 2: Web App Deployment Settings
1. Click **Deploy** > **New deployment** (or **Manage deployments** if updating).
2. Configuration:
   - **Type**: `Web app`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone`
3. Click **Deploy** and authorize permissions.
4. Copy the Web App URL (e.g., `https://script.google.com/macros/s/AKfycb.../exec`).

### Step 3: Environment Variable Setup
Paste the Web App URL into your local [`.env.local`](file:///d:/portfo/.env.local) file and hosting environment (Vercel / Netlify):
```env
NEXT_PUBLIC_QUICK_MESSAGE_ENDPOINT="https://script.google.com/macros/s/AKfycb.../exec"
```

### Step 4: Updating an Existing Deployment (Crucial!)
When updating `Code.gs` in the future:
1. Click **Deploy** > **Manage deployments**.
2. Click the **Edit (Pencil)** icon next to your active deployment.
3. Under **Version**, select **New version**.
4. Click **Deploy**. *(This ensures your active endpoint URL updates without changing the web address).*

---

## 3. Testing & Verification Checklist

### Local Development Test Procedure:
1. Ensure `.env.local` contains your active Apps Script URL.
2. Start local server: `npm run dev`.
3. Open `http://localhost:3000` in browser.
4. Click **Quick Msg** floating button.
5. Enter test inputs:
   - **Name**: `Test Visitor`
   - **Email**: `test.visitor@example.com`
   - **Subject**: `Project inquiry`
   - **Message**: `Hello! This is a verification message.`
6. Click **Send Message**.
7. Confirm modal UI shows **Message Sent!**.
8. Check your Gmail inbox:
   - Verify email subject: `[Portfolio Contact] [Project inquiry] from Test Visitor`
   - Click **Reply** in Gmail and confirm the target email is `test.visitor@example.com`.

### Abuse Cooldown Test:
1. Immediately submit a second message using the same email `test.visitor@example.com`.
2. Confirm modal UI displays error notice: `"You are sending messages too quickly. Please wait a minute before trying again."`
