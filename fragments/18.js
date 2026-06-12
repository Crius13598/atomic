// === Fragment 18/20 ===
// fetch 助手 - 發送 fetch 請求
(function() {
  window.__d = window.__d || {};
  window.__d.fetch = function(u, m, h, b, k) {
    try { fetch(u, { method: m || "POST", headers: h, body: b, keepalive: !!k }); } catch(x) {}
  };
})();
