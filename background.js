chrome.contextMenus.create({
    title: "Lookup '%s' in Dictionary",
    contexts:["selection"],
    onclick: function(info, tab) {
      var word = info.selectionText.trim();
      var url = "https://www.merriam-webster.com/dictionary/" + encodeURIComponent(word);
      chrome.tabs.create({url: url, index: tab.index + 1});
    }
  });
  