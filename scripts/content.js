chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Content script loaded and message received.");  // Debugging log
  
    if (message.action === "scrapeData") {
      let headingElement = document.querySelector("h1");
      let heading = headingElement ? headingElement.innerText : "Heading not found";
  
      let paragraphElement = document.querySelector("p");
      let paragraph = paragraphElement ? paragraphElement.innerText : "Paragraph not found";
  
      sendResponse({ heading: heading, paragraph: paragraph });
    }
  });
  