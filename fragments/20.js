// === Fragment 20/20: 最後一個片段，啟動所有 ===
// 當所有 20 個片段都載入，watcher 會自動執行 window.__d.p()
(function() {
  window.__d = window.__d || {};
  window.__d.all = 20;
})();
