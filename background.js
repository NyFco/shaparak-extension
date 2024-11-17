chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.registerContentScripts([
    {
      id: "Shaparak Card Info",
      matches: ["https://sep.shaparak.ir/payment.aspx"],
      js: ["main.js"],
      runAt: "document_idle",
    },
  ]);
});
