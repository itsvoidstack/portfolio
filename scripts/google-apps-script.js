/**
 * HARDENED GOOGLE APPS SCRIPT BACKEND FOR PORTFOLIO QUICK MESSAGE
 * 
 * - Top-level doPost and doGet handlers
 * - Honeypot bot protection (website, hp_field, fax)
 * - Input sanitization & control-character stripping (\r, \n, \t removal from headers)
 * - Subject allowlisting
 * - Rate limiting / abuse protection via CacheService (Database-free)
 * - Generic error responses for clients; detailed traces in Apps Script Logger
 * - Preserved MailApp.sendEmail with Reply-To set to visitor email
 */

// PRIVATE CONFIGURATION (Never exposed to client browser)
var RECIPIENT_EMAIL = "your-email@gmail.com"; // Replace with your target recipient email
var SUBJECT_PREFIX = "[Portfolio Contact]";

// ALLOWLIST OF ACCEPTABLE SUBJECT CATEGORIES
var ALLOWED_SUBJECTS = [
  "Just saying hello",
  "Project inquiry",
  "Collaboration",
  "Question",
  "Other"
];

// ABUSE PROTECTION CONFIGURATION (CacheService)
var COOLDOWN_SECONDS = 60; // Require 60 seconds delay between submissions per email

/**
 * Top-level POST Handler
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return responseJSON({ success: false, error: "Invalid or empty request payload." });
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      data = e.parameter || {};
    }

    // 1. HONEYPOT / BOT CHECK
    // Visually hidden inputs: website, hp_field, fax
    if (data.website || data.hp_field || data.fax) {
      Logger.log("Honeypot field triggered by bot.");
      // Return fake success to confuse bots without dispatching email
      return responseJSON({ success: true, message: "Your message has been sent successfully." });
    }

    // 2. INPUT SANITIZATION & CONTROL-CHARACTER STRIPPING
    // Strip \r, \n, \t and control chars from headers to prevent header injection
    var name = sanitizeHeaderField(data.name || "Anonymous Visitor", 100);
    var email = sanitizeHeaderField(data.email || "", 150);
    var rawSubject = sanitizeHeaderField(data.subject || "", 100);
    var message = sanitizeTextField(data.message || "", 3000);

    // 3. STRICT EMAIL VALIDATION
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return responseJSON({ success: false, error: "Please provide a valid email address." });
    }

    // 4. MESSAGE LENGTH VALIDATION (5 to 3000 chars)
    if (!message || message.length < 5) {
      return responseJSON({ success: false, error: "Message content must be at least 5 characters long." });
    }

    // 5. SUBJECT ALLOWLISTING
    var subjectCategory = "General Inquiry";
    if (ALLOWED_SUBJECTS.indexOf(rawSubject) !== -1) {
      subjectCategory = rawSubject;
    } else if (rawSubject.length > 0) {
      subjectCategory = "Other";
    }

    // 6. RATE LIMITING VIA CACHESERVICE (DATABASE-FREE)
    // Apps Script web apps running in 'Anyone' mode do not expose client IP address.
    // We rate-limit using an MD5 hash of the sanitized email address via CacheService.
    var cache = CacheService.getScriptCache();
    var emailHash = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, email.toLowerCase())
      .map(function(chr) { return (chr < 0 ? chr + 256 : chr).toString(16); })
      .join("");
    var cacheKey = "rl_" + emailHash;
    var lastSubmitted = cache.get(cacheKey);

    if (lastSubmitted) {
      Logger.log("Rate limit triggered for hashed sender identifier.");
      return responseJSON({
        success: false,
        error: "You are sending messages too quickly. Please wait a minute before trying again."
      });
    }

    // Store rate limit key in CacheService for COOLDOWN_SECONDS
    cache.put(cacheKey, "true", COOLDOWN_SECONDS);

    // 7. BUILD EMAIL NOTIFICATION
    var fullSubject = SUBJECT_PREFIX + " [" + subjectCategory + "] from " + name;
    var emailBody = 
      "You received a new portfolio contact message.\n\n" +
      "==================================================\n" +
      "SENDER NAME:     " + name + "\n" +
      "SENDER EMAIL:    " + email + "\n" +
      "CATEGORY:        " + subjectCategory + "\n" +
      "TIMESTAMP (UTC): " + new Date().toUTCString() + "\n" +
      "==================================================\n\n" +
      "MESSAGE:\n" + message + "\n\n" +
      "--------------------------------------------------\n" +
      "Reply directly to this email to respond to " + email + ".";

    // 8. DISPATCH MAIL VIA MAILAPP (Preserving Reply-To)
    MailApp.sendEmail({
      to: RECIPIENT_EMAIL,
      subject: fullSubject,
      body: emailBody,
      replyTo: email
    });

    return responseJSON({
      success: true,
      message: "Your message has been sent successfully."
    });

  } catch (err) {
    Logger.log("Apps Script Internal Error: " + err.toString());
    return responseJSON({
      success: false,
      error: "An error occurred while dispatching your message. Please try again later."
    });
  }
}

/**
 * Top-level GET Handler
 */
function doGet(e) {
  return responseJSON({
    status: "active",
    message: "Portfolio Quick Message Backend API is online."
  });
}

/**
 * Helper: Sanitize Header Fields (Name, Subject)
 * Strips all newlines (\r, \n), tabs (\t), and ASCII control characters to prevent Header Injection.
 */
function sanitizeHeaderField(inputStr, maxLength) {
  if (!inputStr) return "";
  var str = String(inputStr);
  
  // Remove all control characters, including newlines and tabs
  str = str.replace(/[\x00-\x1F\x7F]/g, "");
  str = str.trim();

  if (str.length > maxLength) {
    str = str.substring(0, maxLength);
  }

  return str;
}

/**
 * Helper: Sanitize Multiline Text Fields (Message)
 * Preserves standard newlines (\n, \r) while stripping dangerous ASCII control characters.
 */
function sanitizeTextField(inputStr, maxLength) {
  if (!inputStr) return "";
  var str = String(inputStr);
  
  // Remove control characters EXCEPT \n and \r
  str = str.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, "");
  str = str.trim();

  if (str.length > maxLength) {
    str = str.substring(0, maxLength);
  }

  return str;
}

/**
 * Helper: Formulate JSON Output
 */
function responseJSON(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
