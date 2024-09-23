chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "startScraping") {
      const port = chrome.runtime.connectNative("com.mycompany.myextension");
  
      port.postMessage({ command: "scrape" });
  
      port.onMessage.addListener((response) => {
        sendResponse({ data: response.data });
      });
  
      return true;
    }
  });
  