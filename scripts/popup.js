document.getElementById("start-scraping").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "scrapeData" }, function(response) {
        document.getElementById("result").innerText = 
          `Heading: ${response.heading}\nParagraph: ${response.paragraph}`;
      });
    });
  });
  