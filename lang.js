// ---------------------------------------------
// Global Language Manager
// Supports:
//  - Text translation using data-key
//  - Placeholder translation using data-placeholder
//  - Persists language across pages
// ---------------------------------------------

// Load last language or default to English
let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    // UI language label
    language: "English | मराठी",

    // Login
    login: "Login",
    logout: "Logout",
    username: "Username",
    password: "Password",
    usernamePlaceholder: "Enter Username",
    passwordPlaceholder: "Enter Password",

    // Admin
    adminLogin: "Admin Login",
    adminPanelTitle: "Admin Panel",
    newUser: "Add New User",
    users: "Users",
    addUser: "Add User",
    delete: "Delete",

    // Main Form
    agroForm: "Agro Form",
    addPlot: "Add Plot",
    newPlotName: "New Plot Name",
    newPlotNamePlaceholder: "Enter Plot Name",

    plot: "Plot",
    date: "Date",
    pruningDate: "Pruning Date",
    daysAfterPruning: "Days After Pruning",

    medicineName: "Medicine & Fertilizers",
    medicinePlaceholder: "Enter medicine/fertilizer name",

    dosePerLiter: "Dose Per Liter",
    dosePerPlot: "Dose Per Plot",
    waterPerPlot: "Water Per Plot",
    sprayTime: "Spray Time",

    addData: "Add Data",
    save: "Save",
    filter: "Filter",
    year: "Year",
    downloadPDF: "Download PDF",
    irrigation: "Irrigation",
    adminPanel: "Admin Panel",
    mainPage: "Main Page",

    // Irrigation page
    irrigationForm: "Irrigation Form",
    irrigationTime: "Irrigation Time (minutes)",
    irrigationTimePlaceholder: "Enter time in minutes",

    waterUsed: "Water Used (Liters)",
    waterUsedPlaceholder: "Enter water in liters",

    irrigationType: "Irrigation Type",

    // Table Actions
    actions: "Actions",
  },

  mr: {
    language: "मराठी | English",

    login: "लॉगिन",
    logout: "लॉगआऊट",
    username: "वापरकर्तानाव",
    password: "पासवर्ड",
    usernamePlaceholder: "वापरकर्तानाव प्रविष्ट करा",
    passwordPlaceholder: "पासवर्ड प्रविष्ट करा",

    adminLogin: "Admin Login",
    adminPanelTitle: "Admin Panel",
    newUser: "नवीन वापरकर्ता",
    users: "वापरकर्ते",
    addUser: "वापरकर्ता जोडा",
    delete: "हटवा",

    agroForm: "कृषी फॉर्म",
    addPlot: "प्लॉट जोडा",
    newPlotName: "नवीन प्लॉट नाव",
    newPlotNamePlaceholder: "प्लॉटचे नाव प्रविष्ट करा",

    plot: "प्लॉट",
    date: "तारीख",
    pruningDate: "छाटणीची तारीख",
    daysAfterPruning: "छाटणीनंतरचे दिवस",

    medicineName: "औषधे व खते",
    medicinePlaceholder: "औषधे / खते प्रविष्ट करा",

    dosePerLiter: "प्रति लिटर डोस",
    dosePerPlot: "प्रति प्लॉट डोस",
    waterPerPlot: "प्रति प्लॉट पाणी",
    sprayTime: "स्प्रे वेळ",

    addData: "डेटा जोडा",
    save: "सेव्ह",
    filter: "फिल्टर",
    year: "वर्ष",
    downloadPDF: "PDF डाउनलोड",
    irrigation: "इरिगेशन",
    adminPanel: "Admin Panel",
    mainPage: "मुख्य पृष्ठ",

    irrigationForm: "इरिगेशन फॉर्म",
    irrigationTime: "इरिगेशन वेळ (मिनिटे)",
    irrigationTimePlaceholder: "वेळ (मिनिटे) लिहा",

    waterUsed: "वापरलेले पाणी (लिटर)",
    waterUsedPlaceholder: "पाणी (लिटर) लिहा",

    irrigationType: "इरिगेशन प्रकार",

    actions: "कारवाया",
  }
};

// ------------------------------------------------------------
// Apply translation to all elements
// ------------------------------------------------------------
function applyTranslations() {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-placeholder");
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
}

// ------------------------------------------------------------
// Switch Language
// ------------------------------------------------------------
function toggleLanguage() {
  currentLang = currentLang === "en" ? "mr" : "en";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}

// Load translations when page loads
document.addEventListener("DOMContentLoaded", applyTranslations);
