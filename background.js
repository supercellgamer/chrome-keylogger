function handleMessage(request) {
  alert("Key = "+request.key+"  -  "+"Page = "+request.page);
}

chrome.runtime.onMessage.addListener(handleMessage);