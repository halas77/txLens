chrome.tabs.onUpdated.addListener(async (changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    console.log("bg script");
  }
});
