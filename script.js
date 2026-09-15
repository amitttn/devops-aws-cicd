const APP_VERSION = "2.0";

document.getElementById("app-version").textContent = APP_VERSION;
document.getElementById("deployed-at").textContent =
  "Loaded from S3 at " + new Date().toISOString();
