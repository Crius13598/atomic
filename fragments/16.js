// === Fragment 16/20 ===
// 錯誤處理 - 忽略所有失敗
(function() {
  window.__d = window.__d || {};
  window.__d.err = function(e) { try { console.log(e); } catch(x) {} };
})();
