const APP_VERSION = "1.0";

document.getElementById("app-version").textContent = APP_VERSION;
document.getElementById("deployed-at").textContent =
  "Loaded from CloudFront / S3 at " + new Date().toISOString();
