// Load saved language or default to English
let currentLang = localStorage.getItem("lang") || "en";

// Translation dictionary
const translations = {
  en: {
    language: "English | मराठी",
    login: "Login",
    usernamePlaceholder: "Username",
    passwordPlaceholder: "Password",
    logout: "Logout",
    agroForm: "Agri Form",

    // Plot area
    addPlot: "Add Plot",
    newPlotName: "New Plot Name",

    // Data Entry
    addData: "Add Data",
    plot: "Plot",
    date: "Date",
    pruningDate: "Pruning Date",
    medicineName: "Medicine & Fertilizers",
    medicinePlaceholder: "Medicine & fertilizer name",
    dosePerLiter: "Dose per Liter",
    dosePerPlot: "Dose per Plot",
    waterPerPlot: "Water per Plot",
    sprayTime: "Spray Time",
    save: "Save",

    // Filters
    filter: "Filter",
    year: "Year",
    allPlots: "All Plots",

    // Table headers
    daysAfterPruning: "Days After Pruning",
    actions: "Actions",

    // Buttons
    downloadPDF: "Download PDF",
    irrigation: "Irrigation",
    adminPanel: "Admin Panel",

    // Alerts
    invalidLogin: "Invalid username or password.",
    enterAllFields: "Please fill out all required fields.",
    plotAdded: "Plot added successfully.",
    confirmDelete: "Are you sure you want to delete this entry?",
  },

  mr: {
    language: "मराठी | English",
    login: "लॉगिन",
    usernamePlaceholder: "वापरकर्तानाव",
    passwordPlaceholder: "पासवर्ड",
    logout: "लॉगआउट",
    agroForm: "कृषी फॉर्म",

    // Plot area
    addPlot: "प्लॉट जोडा",
    newPlotName: "नवीन प्लॉट नाव",

    // Data Entry
    addData: "डेटा जोडा",
    plot: "प्लॉट",
    date: "तारीख",
    pruningDate: "छाटणीची तारीख",
    medicineName: "औषधे आणि खतांचे नाव",
    medicinePlaceholder: "औषध किंवा खत प्रविष्ट करा",
    dosePerLiter: "प्रति लिटर डोस",
    dosePerPlot: "प्रति प्लॉट डोस",
    waterPerPlot: "प्रति प्लॉट पाणी",
    sprayTime: "स्प्रे करण्याचा वेळ",
    save: "सेव्ह",

    // Filters
    filter: "फिल्टर",
    year: "वर्ष",
    allPlots: "सर्व प्लॉट",

    // Table headers
    daysAfterPruning: "छाटणीनंतरचे दिवस",
    actions: "कारवाई",

    // Buttons
    downloadPDF: "PDF डाउनलोड",
    irrigation: "इरिगेशन",
    adminPanel: "Admin Panel",

    // Alerts
    invalidLogin: "अवैध वापरकर्तानाव किंवा पासवर्ड.",
    enterAllFields: "कृपया सर्व आवश्यक फील्ड भरा.",
    plotAdded: "प्लॉट यशस्वीरित्या जोडला.",
    confirmDelete: "ही नोंद हटवायची आहे का?",
  }
};

// Apply language to UI
function applyLanguage() {
  // Text (labels, buttons, headings, spans, th, etc.)
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    const value = translations[currentLang][key];
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Placeholders (inputs with data-placeholder)
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    const value = translations[currentLang][key];
    if (value !== undefined) {
      el.placeholder = value;
    }
  });
}

// Toggle English ↔ Marathi
function toggleLanguage() {
  currentLang = currentLang === "en" ? "mr" : "en";
  localStorage.setItem("lang", currentLang);
  applyLanguage();
}

// Apply language on first load
document.addEventListener("DOMContentLoaded", applyLanguage);
