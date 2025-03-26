let nebula = document.createElement("div");
nebula.style = "position:fixed;bottom:50px;right:50px;width:400px;height:200px;background:#000;color:#fff;padding:15px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.5);font-family:sans-serif;z-index:9999;cursor:grab;";
nebula.innerHTML = '<h3 style="margin:0 0 10px;cursor:move;">NebulaExecutor V1.0.0</h3><input id="keyInput" type="text" placeholder="Enter Key" style="width:100%;padding:8px;margin-bottom:10px;background:#222;color:#fff;border:none;border-radius:5px;"><button id="checkKey" style="width:48%;padding:8px;margin:2px;background:#444;color:#fff;border:none;border-radius:5px;cursor:pointer;">Check Key</button><button id="getKey" style="width:48%;padding:8px;margin:2px;background:#444;color:#fff;border:none;border-radius:5px;cursor:pointer;">Get Key</button>';
document.body.appendChild(nebula);

document.getElementById("getKey").onclick = function() {
  navigator.clipboard.writeText("https://your-key-website.com").then(() => alert("Key URL Copied!"));
};
