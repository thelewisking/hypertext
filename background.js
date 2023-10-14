browser.runtime.onMessage.addListener(function(message) {
    if (message.reload === true) {
        // Reload the current tab
        browser.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            if (tabs[0]) {
                browser.tabs.reload(tabs[0].id);
            }
        });
    }
});

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Updates main.js with the correct switch state
    if (message.requestState === true) {
        const isEnabled = JSON.parse(localStorage.getItem("checkboxStorageState"));
        sendResponse({
            enabled: isEnabled
        });
    }
});