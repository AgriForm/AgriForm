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
    addPlotTitle: "Add New Plot",
    newPlotName: "New Plot Name",
    addPlotBtn: "Add Plot",
    plot: "Plot",

    // Data Entry
    dataEntry: "Data Entry",
    date: "Date",
    pruningDate: "Pruning Date",
    medicineName: "Medicine & Fertilizers",
    medicinePlaceholder: "Enter medicine or fertilizer",
    dosePerLiter: "Dose per Liter",
    dosePerPlot: "Dose per Plot",
    waterPerPlot: "Water per Plot",
    sprayTime: "Spray Time",
    addData: "Add Data",

    // Filters
    filter: "Filter",
    filterPlot: "Plot",
    filterDate: "Date",
    filterYear: "Year",
    allPlots: "All Plots",

    // Table headers
    thPlot: "Plot",
    thDate: "Date",
    thPruningDate: "Pruning Date",
    thDaysAfter: "Days After Pruning",
    thMedicine: "Medicine",
    thDoseLiter: "Dose per Liter",
    thDosePlot: "Dose per Plot",
    thWaterPlot: "Water per Plot",
    thSprayTime: "Spray Time",
    thActions: "Actions",

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
    addPlotTitle: "नवीन प्लॉट जोडा",
    newPlotName: "नवीन प्लॉट नाव",
    addPlotBtn: "प्लॉट जोडा",
    plot: "प्लॉट",

    // Data Entry
    dataEntry: "डेटा एंट्री",
    date: "तारीख",
    pruningDate: "छाटणी ची तारीख",
    medicineName: "औषधे आणि खतांचे नाव",
    medicinePlaceholder: "औषध किंवा खत प्रविष्ट करा",
    dosePerLiter: "प्रति लिटर डोस",
    dosePerPlot: "प्रति प्लॉट डोस",
    waterPerPlot: "प्रति प्लॉट पाणी",
    sprayTime: "स्प्रे करण्याचा वेळ",
    addData: "डेटा जोडा",

    // Filters
    filter: "फिल्टर",
    filterPlot: "प्लॉट",
    filterDate: "तारीख",
    filterYear: "वर्ष",
    allPlots: "सर्व प्लॉट",

    // Table headers
    thPlot: "प्लॉट",
    thDate: "तारीख",
    thPruningDate: "छाटणी तारीख",
    thDaysAfter: "छाटणीनंतरचे दिवस",
    thMedicine: "औषधे",
    thDoseLiter: "प्रति लिटर डोस",
    thDosePlot: "प्रति प्लॉट डोस",
    thWaterPlot: "प्रति प्लॉट पाणी",
    thSprayTime: "स्प्रे वेळ",
    thActions: "कारवाई",

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
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  // Apply placeholders
  document.querySelectorAll("[data-placeholder]").forEach(el => {
    const key = el.getAttribute("data-placeholder");
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });

  // Update the top language switcher text
  const langSwitch = document.getElementById("lang-switch");
  if (langSwitch) langSwitch.textContent = translations[currentLang].language;
}

// Toggle English ↔ Marathi
function toggleLanguage() {
  currentLang = currentLang === "en" ? "mr" : "en";
  localStorage.setItem("lang", currentLang);
  applyLanguage();
}

// Apply language on first load
document.addEventListener("DOMContentLoaded", applyLanguage);
