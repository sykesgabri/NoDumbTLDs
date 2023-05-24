browser.webRequest.onBeforeRequest.addListener(
  blockZIPRequests,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
);

function blockZIPRequests(requestDetails) {
  const url = new URL(requestDetails.url);
  const hostname = url.hostname.toLowerCase();
  const tld = hostname.split('.').pop();
  if (tld === 'zip' || tld === 'mov') {
    return { cancel: true };
  }
}
