module.exports = {
   // If you want to debug regression tests, you will need the following.
   zapHostName: "192.168.56.20",
   zapPort: "8080",
   // Set ZAP_API_KEY in your local environment when debugging security tests.
   zapApiKey: process.env.ZAP_API_KEY || "",
   zapApiFeedbackSpeed: 5000 // Milliseconds.
};
