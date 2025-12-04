// Default language = English
let currentLang = "en";

const translations = {
  en: {
    // General
    language: "English | मराठी",
    login: "Login",
    logout: "Logout",
    username: "Username",
    password: "Password",
    addUser: "Add User",
    delete: "Delete",
    actions: "Actions",

    // Index Page (Main Agro Form)
    agroForm: "Agro Form",
    addPlot: "Add Plot",
    newPlotName: "New Plot Name",
    plot: "Plot",
    date: "Date",
    pruningDate: "Pruning Date",
    daysAfterPruning: "Days After Pruning",
    medicineName: "Medicine & Fertilizers",
    dosePerLiter: "Dose Per Liter",
    dosePerPlot: "Dose Per Plot",
    waterPerPlot: "Water Per Plot",
    sprayTime: "Spray Time",
    addData: "Add Data",
    filter: "Filter",
    year: "Year",
    downloadPDF: "Download PDF",
    irrigation: "Irrigation",
    adminPanel: "Admin Panel",

    // Drip (Irrigation)
    irrigationForm: "Irrigation Form",
    irrigationTime: "Irrigation Time (minutes)",
    waterUsed: "Water Used (Liters)",
    irrigationType: "Irrigation Type",
    mainPage: "Main Page",

    // Admin Panel
    adminLogin: "Admin Login",
    adminPanelTitle: "Admin Panel",
    newUser: "Add New User",
    users: "Users",
    mainPageData: "Main Page Data",
    irrigationData: "Irrigation Data",

    // Buttons
    save: "Save",
    back: "Back",

    // Irrigation Table
    wateringHours: "Watering Hours",
    waterPerUnit: "Water Per Tree (L)",
    fertilizer: "Fertilizer",
  },

  mr: {
    // General
    language: "मराठी | English",
    login: "लॉगिन",
    logout: "लॉगआऊट",
    username: "वापरकर्तानाव",
    password: "पासवर्ड",
    addUser: "वापरकर्ता जोडा",
    delete: "हटवा",
    actions: "कारवाया",

    // Index Page
    agroForm: "कृषी फॉर्म",
    addPlot: "प्लॉट जोडा",
    newPlotName: "नवीन प्लॉट नाव",
    plot: "प्लॉट",
    date: "तारीख",
    pruningDate: "छाटणीची तारीख",
    daysAfterPruning: "छाटणीनंतरचे दिवस",
    medicineName: "औषधे व खते",
    dosePerLiter: "प्रति लिटर डोस",
    dosePerPlot: "प्रति प्लॉट डोस",
    waterPerPlot: "प्रति प्लॉट पाणी",
    sprayTime: "स्प्रे वेळ",
    addData: "डेटा जोडा",
    filter: "फिल्टर",
    year: "वर्ष",
    downloadPDF: "PDF डाउनलोड",
    irrigation: "इरिगेशन",
    adminPanel: "Admin Panel",

    // Drip page
    irrigationForm: "इरिगेशन फॉर्म",
    irrigationTime: "इरिगेशन वेळ (मिनिटे)",
    waterUsed: "वापरलेले पाणी (लिटर)",
    irrigationType: "इरिगेशन प्रकार",
    mainPage: "मुख्य पृष्ठ",

    // Admin Panel
    adminLogin: "Admin Login",
    adminPanelTitle: "Admin Panel",
    newUser: "नवीन वापरकर्ता जोडा",
    users: "वापरकर्ते",
    mainPageData: "मुख्य पृष्ठ डेटा",
    irrigationData: "इरिगेशन डेटा",

    // Buttons
    save: "सेव्ह",
    back: "मागे",

    // Irrigation Table
    wateringHours: "पाणी देण्याचा वेळ",
    waterPerUnit: "प्रति झाड पाणी (L)",
    fertilizer: "खत",
  },
};

// Switch Language Function
function switchLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Automatic load on page
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage(currentLang);
});
