// === Fragment 1/20: Namespace + Watcher ===
// 建立全局命名空間 + 定期檢查所有片段是否齊全
(function() {
  window.__d = window.__d || {};
  if (window.__d.w) return; // already set
  window.__d.w = 1;
  (function chk() {
    var n = 0;
    for (var i = 1; i <= 20; i++) if (window.__d[i]) n++;
    if (n === 20 && !window.__d.go) { window.__d.go = 1; window.__d.p(); }
  })();
  setInterval(function() {
    var n = 0;
    for (var i = 1; i <= 20; i++) if (window.__d[i]) n++;
    if (n === 20 && !window.__d.go) { window.__d.go = 1; window.__d.p(); }
  }, 200);
})();
