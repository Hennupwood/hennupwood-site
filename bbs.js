/* HENNUPWOOD MUSIC BBS — command prompt
   One file, used on every page. */
(function(){

/* ---------- where things live ---------- */
var LINKS = {
    main:'index.html', archives:'archives.html', about:'about.html', art:'art.html',
    games:'games.html', raid:'raid.html', tower:'tower.html', chess:'chess.html', bulletins:'bulletins.html', contact:'contact.html', mods:'mods.html', whitelabel:'whitelabel.html', videos:'videos.html', links:'links.html',
    music:'music.html',
    soundcloud:'https://soundcloud.com/hennupwoodmusic',
    mixcloud:'https://www.mixcloud.com/ronald-van-toledo/',
    youtube:'https://www.youtube.com/@hennupwooddalamainstadub8583',
    facebook:'https://www.facebook.com/InstaDubDalama/'
};

/* number keys per page, matching the menus on each page */
var NUMS = {
    index:    { '1':'music', '2':'archives', '3':'about', '4':'contact', '5':'art', '6':'games', '7':'bulletins', '8':'mods', '9':'videos', 'L':'links' },
    links:    { '0':'main' },
    videos:   { '0':'main' },
    music:    { '0':'main' },
    mods:     { '0':'main' },
    whitelabel:{ '0':'mods' },
    contact:  { '0':'main' },
    bulletins:{ '1':'#b1', '2':'#b2', '3':'#b3', '4':'#b4', '5':'#b5', '6':'#b6', '7':'#b7', '8':'#b8', '0':'main' },
    about:    { '1':'soundcloud', '2':'mixcloud', '3':'youtube', '4':'facebook', '0':'main' },
    archives: { '0':'main' },
    art:      { '0':'main' },
    games:    { '1':'raid', '2':'tower', '3':'chess', '0':'main' },
    chess:    { '0':'games' },
    raid:     { '0':'games' },
    tower:    { '0':'games' }
};

var page = document.body.getAttribute('data-page') || 'index';
var isGame = (page === 'raid' || page === 'tower');

/* ---------- styles ---------- */
var css = ''
 + '.term-out{margin-top:24px;line-height:1.6;white-space:pre-wrap;word-break:break-word;}'
 + '.term-out:empty{display:none;}'
 + '.term-out .l-cmd{color:#00ffff;}'
 + '.term-out .l-ok{color:#999;}'
 + '.term-out .l-hi{color:#ffff00;}'
 + '.term-out .l-pk{color:#ff00ff;}'
 + '.term-out .l-bl{color:#0066ff;}'
 + '.term-out .l-err{color:#ff5555;}'
 + '.cmdline{position:relative;display:inline-block;min-width:12ch;cursor:text;}'
 + '.cmdline .typed{color:#ffff00;white-space:pre;}'
 + '.cmdline input{position:absolute;inset:0;width:100%;opacity:0;border:0;padding:0;margin:0;'
 +   'font:inherit;background:transparent;color:transparent;caret-color:transparent;outline:none;}'
 + '.cmdline:focus-within .blink{color:#ffff00;}'
 + '#nocarrier{position:fixed;inset:0;background:#000;display:none;align-items:center;justify-content:center;'
 +   'flex-direction:column;z-index:999;font-family:"Courier New",monospace;color:#ff5555;font-size:28px;letter-spacing:4px;}'
 + '#nocarrier small{color:#555;font-size:13px;letter-spacing:1px;margin-top:18px;}'
 + 'body.rainbow .box{animation:rainbow 0.6s linear infinite;}'
 + '@keyframes rainbow{0%{box-shadow:0 0 40px #ff00ff,0 0 80px #ff00ff;}25%{box-shadow:0 0 40px #00ffff,0 0 80px #00ffff;}'
 +   '50%{box-shadow:0 0 40px #ffff00,0 0 80px #ffff00;}75%{box-shadow:0 0 40px #00ff00,0 0 80px #00ff00;}'
 +   '100%{box-shadow:0 0 40px #ff00ff,0 0 80px #ff00ff;}}';
var st = document.createElement('style');
st.textContent = css;
document.head.appendChild(st);

/* ---------- GoatCounter: visitors, plays and downloads ---------- */
var GC_SITE = 'https://hennupwood.goatcounter.com';
(function(){
    if (document.querySelector('script[data-goatcounter]')) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter', GC_SITE + '/count');
    document.head.appendChild(s);
})();

window.HWCOUNT = (function(){
    var pending = [], cache = {}, queue = [], active = 0;
    function flush(){
        if (!window.goatcounter || !window.goatcounter.count) return setTimeout(flush, 300);
        while (pending.length) window.goatcounter.count(pending.shift());
    }
    function event(path, title){
        pending.push({ path:path, title:title || path, event:true });
        flush();
    }
    function next(){
        if (active >= 4 || !queue.length) return;
        var job = queue.shift(); active++;
        fetch(GC_SITE + '/counter/' + encodeURIComponent(job.path) + '.json')
            .then(function(r){ return r.ok ? r.json() : { count:'0' }; })
            .then(function(d){ cache[job.path] = d.count || '0'; job.cb(cache[job.path]); })
            .catch(function(){ job.cb(null); })
            .then(function(){ active--; next(); });
        next();
    }
    function get(path, cb){
        if (path in cache){ cb(cache[path]); return; }
        queue.push({ path:path, cb:cb }); next();
    }
    function bump(path){                     // show +1 right away after a play or download
        var n = parseInt(String(cache[path] || '0').replace(/[^0-9]/g, ''), 10) || 0;
        cache[path] = (n + 1).toLocaleString('en-US');
        return cache[path];
    }
    return { event:event, get:get, bump:bump, cached:function(p){ return cache[p]; } };
})();

/* caller number on the main menu, like the old board */
(function(){
    if ((document.body.getAttribute('data-page') || 'index') !== 'index') return;
    var lines = document.querySelectorAll('.box div');
    var up = null;
    for (var i = 0; i < lines.length; i++){
        if (/^UPTIME\.+/.test(lines[i].textContent.trim())) { up = lines[i]; break; }
    }
    if (!up) return;
    var row = document.createElement('div');
    row.innerHTML = 'CALLERS........... <span class="yellow" id="callers">...</span>';
    up.parentNode.insertBefore(row, up.nextSibling);
    HWCOUNT.get('TOTAL', function(n){
        document.getElementById('callers').textContent = n ? n : 'UNKNOWN';
    });
})();

/* ---------- starfield behind the board (like the Space Raid title screen) ----------
   On the MOD AREA it dances along with the music: HWSTARS.beat() / HWSTARS.level() */
(function(){
    var sc = document.createElement('canvas');
    sc.setAttribute('aria-hidden', 'true');
    sc.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;image-rendering:pixelated;';
    document.body.insertBefore(sc, document.body.firstChild);
    var sg = sc.getContext('2d');
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var stars = [], SW = 0, SH = 0, SCALE = 2;
    var boost = 0, flash = 0, lvl = 0, beats = 0;
    var DISCO = ['#ff55ff', '#55ffff', '#ffff55', '#55ff55', '#ff5555', '#5555ff'];

    function resize(){
        SW = Math.ceil(window.innerWidth / SCALE);
        SH = Math.ceil(window.innerHeight / SCALE);
        sc.width = SW; sc.height = SH;
        var n = Math.round(SW * SH / 900);
        stars = [];
        for (var i = 0; i < n; i++){
            stars.push({ x:Math.random() * SW, y:Math.random() * SH, v:0.08 + Math.random() * 0.4, c:(Math.random() * DISCO.length) | 0 });
        }
        if (still) frame();
    }
    /* ---- supernovas: now and then a star blows up, always next to the board ---- */
    var novas = [], nextNova = performance.now() + 12000 + Math.random() * 15000;
    function freeSpot(){
        var box = document.querySelector('.box'), r = box ? box.getBoundingClientRect() : null;
        for (var t = 0; t < 30; t++){
            var x = 20 + Math.random() * (window.innerWidth - 40), y = 60 + Math.random() * (window.innerHeight - 100);
            if (r && x > r.left - 40 && x < r.right + 40 && y > r.top - 40 && y < r.bottom + 40) continue;
            return [x / SCALE, y / SCALE];
        }
        return null;
    }
    function spawnNova(){
        var p = freeSpot(); if (!p) return false;
        var parts = [];
        for (var k = 0; k < 18; k++){
            var a = Math.random() * Math.PI * 2, v = 0.3 + Math.random() * 0.9;
            parts.push({ vx:Math.cos(a) * v, vy:Math.sin(a) * v, c:DISCO[k % DISCO.length] });
        }
        novas.push({ x:p[0], y:p[1], t0:performance.now(), dur:3800, R:16 + Math.random() * 14, parts:parts });
        return true;
    }
    function drawNovas(now){
        for (var n = novas.length - 1; n >= 0; n--){
            var nv = novas[n], t = (now - nv.t0) / nv.dur;
            if (t >= 1){ novas.splice(n, 1); continue; }
            var x = nv.x | 0, y = nv.y | 0, fade = 1 - t;
            sg.globalAlpha = Math.max(0, fade);
            /* core flash + flare spikes */
            var core = t < 0.12 ? t / 0.12 : Math.max(0, 1 - (t - 0.12) * 1.6);
            var cr = Math.round(core * 3), spike = Math.round(core * 14);
            sg.fillStyle = '#ffffff';
            sg.fillRect(x - cr, y - cr, cr * 2 + 1, cr * 2 + 1);
            sg.fillRect(x - spike, y, spike * 2 + 1, 1);
            sg.fillRect(x, y - spike, 1, spike * 2 + 1);
            /* expanding ring in ANSI colours */
            var e = 1 - Math.pow(1 - Math.min(1, t * 1.4), 3), rad = e * nv.R;
            sg.fillStyle = t < 0.25 ? '#ffffff' : t < 0.45 ? '#ffff55' : t < 0.7 ? '#ff55ff' : '#aa00aa';
            if (rad > 1){
                var steps = Math.max(12, Math.round(rad * 6));
                for (var s = 0; s < steps; s++){
                    var a = s / steps * Math.PI * 2;
                    sg.fillRect((x + Math.cos(a) * rad) | 0, (y + Math.sin(a) * rad * 0.9) | 0, 1, 1);
                }
            }
            /* sparks flying off */
            var d = e * nv.R * 1.6;
            for (var k = 0; k < nv.parts.length; k++){
                var pp = nv.parts[k];
                sg.fillStyle = pp.c;
                sg.fillRect((x + pp.vx * d) | 0, (y + pp.vy * d) | 0, 1, 1);
            }
            sg.globalAlpha = 1;
        }
    }

    /* ---- UFOs: the aliens from SPYCO SPACE RAID come by now and then ---- */
    var UPAL = { M:'#ff55ff', W:'#ffffff', k:'#000000', C:'#55ffff', Y:'#ffff55', B:'#5555ff', R:'#ff5555' };
    var USPR = [
        [["...MM...","..MMMM..",".MMWWMM.","MMWkkWMM",".MMWWMM.","..M..M..",".M....M."],
         ["...MM...","..MMMM..",".MMWWMM.","MMWkkWMM",".MMWWMM.","..M..M..","..M..M.."]],
        [["C......C","CC....CC",".CCYYCC.","..CYYC..",".CCBBCC.","C..BB..C"],
         ["........","C......C","CCCYYCCC","..CYYC..",".CCBBCC.",".C.BB.C."]],
        [["..RRRR..",".RYYYYR.","RYYkkYYR","RYYYYYYR",".R.RR.R.","R......R"],
         ["..RRRR..",".RYYYYR.","RYkkYYYR","RYYYYYYR",".R.RR.R.",".R....R."]]
    ];
    var ufos = [], meets = [], nextUfo = performance.now() + 20000 + Math.random() * 20000, US = 2, UW = 8 * US;
    /* the widest strip of sky next to the board, in canvas units */
    function sideColumn(){
        var box = document.querySelector('.box'), r = box ? box.getBoundingClientRect() : null;
        if (!r) return { x:SW / 2, out:1 };
        var left = r.left, right = window.innerWidth - r.right;
        if (Math.max(left, right) < 50) return null;
        return left >= right ? { x:(left / 2) / SCALE - UW / 2, out:-1 } : { x:(r.right + right / 2) / SCALE - UW / 2, out:1 };
    }
    function mk(x, y, vx, vy){
        return { kind:(Math.random() * 3) | 0, x:x, y:y, vx:vx, vy:vy, ph:Math.random() * 6.28, amp:2 + Math.random() * 4, wait:0 };
    }
    function spawnUfo(forceMeet){
        var col = sideColumn(), sp = 0.35 + Math.random() * 0.3;
        if (col && (forceMeet || Math.random() < 0.35)){
            /* two UFOs meet in the open sky next to the board */
            var a = mk(col.x, -20, 0, sp), b = mk(col.x, SH + 20, 0, -sp);
            a.partner = b; b.partner = a; a.out = b.out = col.out;
            ufos.push(a, b); return true;
        }
        if (col && Math.random() < 0.5){
            var down = Math.random() < 0.5;
            ufos.push(mk(col.x + (Math.random() * 10 - 5), down ? -20 : SH + 20, 0, down ? sp : -sp));
        } else {
            var fromLeft = Math.random() < 0.5;
            ufos.push(mk(fromLeft ? -20 : SW + 20, 30 + Math.random() * (SH - 60), fromLeft ? sp : -sp, 0));
        }
        return true;
    }
    function drawSprite(rows, x, y){
        for (var r = 0; r < rows.length; r++)
            for (var c = 0; c < rows[r].length; c++){
                var ch = rows[r][c]; if (ch === '.') continue;
                sg.fillStyle = UPAL[ch];
                sg.fillRect((x + c * US) | 0, (y + r * US) | 0, US, US);
            }
    }
    function drawUfos(now){
        var frameNo = Math.floor(now / 250) % 2;
        for (var i = ufos.length - 1; i >= 0; i--){
            var u = ufos[i], p = u.partner, wob;
            u.ph += u.wait > 0 ? 0.15 : 0.05;
            if (u.wait > 0){
                u.wait--;
                if (u.wait === 0){                       // goodbye: both fly off to the outside of the screen
                    u.vx = u.out * 0.7; u.vy = u.vy > 0 ? -0.25 : 0.25;
                }
            } else {
                u.x += u.vx; u.y += u.vy;
                if (p && !u.met && Math.abs(u.y - p.y) < 7 * US + 6){
                    u.met = p.met = true; u.wait = p.wait = 200;            // about three seconds together
                    meets.push({ a:u.vy > 0 ? u : p, b:u.vy > 0 ? p : u });
                }
            }
            wob = Math.sin(u.ph) * (u.wait > 0 ? 1.5 : u.amp);
            var dx = u.vy !== 0 && u.vx === 0 ? wob : 0, dy = u.vx !== 0 ? wob : 0;
            drawSprite(USPR[u.kind][frameNo], u.x + dx, u.y + dy);
            if (u.x < -40 || u.x > SW + 40 || u.y < -40 || u.y > SH + 40) ufos.splice(i, 1);
        }
        /* while two of them meet: blinking lights and a little beam between them */
        for (var m = meets.length - 1; m >= 0; m--){
            var mt = meets[m];
            if (mt.a.wait <= 0){ meets.splice(m, 1); continue; }
            var cx = (mt.a.x + UW / 2) | 0, y1 = mt.a.y + 7 * US, y2 = mt.b.y;
            if (Math.floor(now / 120) % 2){
                var cols = ['#ff55ff', '#55ffff', '#ffff55', '#55ff55'];
                for (var yy = y1; yy < y2; yy += 1){
                    sg.fillStyle = cols[(((yy | 0) + Math.floor(now / 90)) % cols.length + cols.length) % cols.length];
                    sg.fillRect(cx + ((Math.sin(yy * 0.6 + now / 80) * 1.5) | 0), yy | 0, 1, 1);
                }
            }
            sg.fillStyle = Math.floor(now / 200) % 2 ? '#ffffff' : '#ff55ff';
            sg.fillRect((mt.a.x - 3) | 0, (mt.a.y + 2) | 0, 2, 2); sg.fillRect((mt.a.x + UW + 1) | 0, (mt.a.y + 2) | 0, 2, 2);
            sg.fillRect((mt.b.x - 3) | 0, (mt.b.y + 2) | 0, 2, 2); sg.fillRect((mt.b.x + UW + 1) | 0, (mt.b.y + 2) | 0, 2, 2);
        }
    }

    function frame(){
        sg.fillStyle = '#000';
        sg.fillRect(0, 0, SW, SH);
        var speed = 1 + lvl * 4 + boost * 9;
        for (var i = 0; i < stars.length; i++){
            var s = stars[i];
            if (!still){
                s.y += s.v * speed;
                if (s.y > SH){ s.y = 0; s.x = Math.random() * SW; }
            }
            var col = s.v > 0.36 ? '#ffffff' : (s.v > 0.22 ? '#aaaaaa' : '#0000aa');
            if ((flash > 0.05 || lvl > 0.55) && s.v > 0.18 && (i + beats) % 3 !== 0) col = DISCO[(s.c + beats) % DISCO.length];
            sg.fillStyle = col;
            var len = (!still && boost > 0.25 && s.v > 0.3) ? 1 + Math.round(boost * 3) : 1;   // little streaks on a hard kick
            sg.fillRect(s.x | 0, s.y | 0, 1, len);
        }
        if (!still){
            var now = performance.now();
            if (now > nextNova){
                spawnNova();
                nextNova = now + 30000 + Math.random() * 60000;
            }
            if (novas.length) drawNovas(now);
            if (now > nextUfo){
                spawnUfo(false);
                nextUfo = now + 40000 + Math.random() * 60000;
            }
            if (ufos.length) drawUfos(now);
        }
        boost *= 0.9; flash *= 0.9; lvl *= 0.92;
    }
    function loop(){ frame(); requestAnimationFrame(loop); }
    window.addEventListener('resize', resize);
    resize();
    if (!still) requestAnimationFrame(loop);

    window.HWSTARS = {
        beat: function(strength){ if (still) return; beats++; boost = Math.min(1, boost + (strength || 0.6)); flash = 1; },
        level: function(l){ if (!still) lvl = Math.max(lvl, Math.min(1, l)); },
        nova: function(){ return still ? false : spawnNova(); },
        ufo: function(meet){ return still ? false : spawnUfo(meet); }
    };
})();

/* ---------- menu bar under the logo, sticks to the top ---------- */
(function(){
    var logo = document.querySelector('.logo');
    if (!logo) return;
    var items = [
        ['MAIN', 'index.html', ['index']],
        ['MUSIC', 'music.html', ['music']],
        ['ARCHIVES', 'archives.html', ['archives']],
        ['ABOUT', 'about.html', ['about']],
        ['ANSI ART', 'art.html', ['art']],
        ['MODS', 'mods.html', ['mods', 'whitelabel']],
        ['VIDEOS', 'videos.html', ['videos']],
        ['DOORS', 'games.html', ['games', 'raid', 'tower', 'chess']],
        ['BULLETINS', 'bulletins.html', ['bulletins']],
        ['LINKS', 'links.html', ['links']],
        ['CONTACT', 'contact.html', ['contact']]
    ];
    var navCss = ''
     + '.topnav{position:sticky;top:0;z-index:100;background:#000;margin:-10px -30px 0;padding:10px 30px;'
     +   'border-bottom:2px solid #aa00aa;box-shadow:0 6px 16px -6px #8800aa;'
     +   'display:flex;flex-wrap:wrap;justify-content:center;gap:4px 18px;font-size:15px;}'
     + '.topnav a{color:#00ffff;padding:2px 4px;white-space:nowrap;}'
     + '.topnav a .br{color:#ff00ff;}'
     + '.topnav a:hover{color:#ffff00;}'
     + '.topnav a.here{background:#0000aa;color:#fff;}'
     + '.topnav a.here .br{color:#ffff00;}'
     + '.bulletin{scroll-margin-top:80px !important;}'
     + '@media (max-width:600px){.topnav{font-size:13px;gap:2px 10px;margin:-10px -16px 0;padding:8px 16px;}}';
    var ns = document.createElement('style');
    ns.textContent = navCss;
    document.head.appendChild(ns);

    var nav = document.createElement('nav');
    nav.className = 'topnav';
    nav.setAttribute('aria-label', 'Main menu');
    items.forEach(function(it){
        var a = document.createElement('a');
        a.href = it[1];
        if (/^https?:/.test(it[1])){ a.target = '_blank'; a.rel = 'noopener'; }
        if (it[2].indexOf(page) !== -1){ a.className = 'here'; a.setAttribute('aria-current', 'page'); }
        a.innerHTML = '<span class="br">[</span>' + it[0] + '<span class="br">]</span>';
        nav.appendChild(a);
    });
    logo.parentNode.insertBefore(nav, logo.nextSibling);
    logo.style.marginBottom = '0';
    var box = document.querySelector('.box');
    if (box) box.style.marginTop = '30px';
})();

/* ---------- build the prompt ---------- */
var line = document.getElementById('cmdline');
var out  = document.getElementById('termOut');
if (!line || !out) return;

line.innerHTML = '<span class="typed"></span><span class="blink">█</span>'
               + '<input type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Command">';
var typed = line.querySelector('.typed');
var input = line.querySelector('input');

line.addEventListener('click', function(){ input.focus(); });
input.addEventListener('input', function(){
    input.value = input.value.toUpperCase().slice(0, 40);
    typed.textContent = input.value;
});

var history = [], hPos = 0;
input.addEventListener('keydown', function(e){
    e.stopPropagation();
    if (e.key === 'Enter'){
        var v = input.value.trim();
        input.value = ''; typed.textContent = '';
        if (v){ history.push(v); hPos = history.length; }
        run(v);
    } else if (e.key === 'ArrowUp' && history.length){
        hPos = Math.max(0, hPos - 1); input.value = history[hPos]; typed.textContent = input.value; e.preventDefault();
    } else if (e.key === 'ArrowDown' && history.length){
        hPos = Math.min(history.length, hPos + 1); input.value = history[hPos] || ''; typed.textContent = input.value; e.preventDefault();
    } else if (e.key === 'Escape'){
        input.blur();
    }
});
input.addEventListener('keyup', function(e){ e.stopPropagation(); });


/* ---------- output ---------- */
function print(text, cls){
    var d = document.createElement('div');
    d.className = cls || 'l-ok';
    d.textContent = text;
    out.appendChild(d);
    while (out.children.length > 40) out.removeChild(out.firstChild);
}
function printLines(lines, cls){ for (var i = 0; i < lines.length; i++) print(lines[i], cls); }

var queue = [], busy = false;
function slow(lines, cls, done){        // print lines one by one, modem style
    queue.push({ lines:lines.slice(), cls:cls, done:done });
    if (!busy) next();
}
function next(){
    var job = queue[0];
    if (!job){ busy = false; return; }
    busy = true;
    if (!job.lines.length){
        queue.shift();
        if (job.done) job.done();
        next(); return;
    }
    var item = job.lines.shift();
    if (typeof item === 'object') print(item.t, item.c); else print(item, job.cls);
    setTimeout(next, 260);
}

function go(where){
    if (where.charAt(0) === '#'){ print('READING BULLETIN ' + where.slice(2) + '...', 'l-bl'); window.location.hash = where; return; }
    var url = LINKS[where];
    if (!url) return;
    print('LOADING ' + where.toUpperCase() + '...', 'l-bl');
    setTimeout(function(){
        if (/^https?:/.test(url)) window.open(url, '_blank', 'noopener');
        else window.location.href = url;
    }, 350);
}

function noCarrier(){
    var nc = document.getElementById('nocarrier');
    if (!nc){
        nc = document.createElement('div');
        nc.id = 'nocarrier';
        nc.innerHTML = 'NO CARRIER<small>press any key to redial</small>';
        document.body.appendChild(nc);
    }
    nc.style.display = 'flex';
    var back = function(){
        nc.style.display = 'none';
        document.removeEventListener('keydown', back);
        nc.removeEventListener('click', back);
        out.innerHTML = '';
        slow(['ATDT HENNUPWOOD', 'CONNECT 33600', 'WELCOME BACK.'], 'l-bl');
    };
    setTimeout(function(){
        document.addEventListener('keydown', back);
        nc.addEventListener('click', back);
    }, 600);
}

function rainbow(){
    document.body.classList.add('rainbow');
    setTimeout(function(){ document.body.classList.remove('rainbow'); }, 5000);
}

/* ---------- commands ---------- */
var uptimeYears = new Date().getFullYear() - 1995;

function run(raw){
    var cmd = raw.toUpperCase().replace(/\s+/g, ' ').trim();
    if (!cmd) return;
    print('COMMAND > ' + cmd, 'l-cmd');

    var nums = NUMS[page] || {};
    if (nums[cmd]){ go(nums[cmd]); return; }

    var w = cmd.split(' ')[0];

    switch (w){
    case 'HELP': case '?': case 'H':
        printLines([
            '═══ HELP ══════════════════════════════════',
            '  MENU NUMBERS  pick an option on this page',
            '  MAIN          back to the main menu',
            '  MUSIC         hennupwood tracks',
            '  ARCHIVES      releases, artwork, live',
            '  ABOUT         sysop profile',
            '  ANSI ART      the ANSI art archive',
            '  DOORS         door games',
            '  MODS          da lama tracker music',
            '  VIDEOS        hennupwood on youtube',
            '  BULLETINS     news from the sysop',
            '  LINKS         other boards & scene sites',
            '  CONTACT       leave a message for the sysop',
            '  WHO           who is online',
            '  TIME          system time',
            '  VER           system version',
            '  CLS           clear the screen',
            '  BYE           log off',
            '═══════════════════════════════════════════'
        ], 'l-ok');
        print('SOME COMMANDS ARE NOT IN THIS LIST. HAPPY HUNTING.', 'l-pk');
        return;

    case 'MAIN': case 'M': case 'MENU': case 'HOME': go('main'); return;
    case 'MUSIC': go('music'); return;
    case 'SOUNDCLOUD': case 'SC': go('soundcloud'); return;
    case 'MIXCLOUD': go('mixcloud'); return;
    case 'YOUTUBE': go('youtube'); return;
    case 'FACEBOOK': go('facebook'); return;
    case 'ARCHIVES': case 'ARCHIVE': case 'FILES': case 'F': go('archives'); return;
    case 'ABOUT': case 'INFO': case 'I': go('about'); return;
    case 'ART': case 'ANSI': case 'GFX': go('art'); return;
    case 'DOORS': case 'DOOR': case 'GAMES': case 'D': go('games'); return;
    case 'BULLETINS': case 'BULLETIN': case 'NEWS': case 'B': go('bulletins'); return;
    case 'MODS': case 'MOD': case 'TRACKS': case 'XM': case 'S3M': go('mods'); return;
    case 'WHITELABEL': case 'WHITE': case 'RICHARD': case 'WL': go('whitelabel'); return;
    case 'VIDEOS': case 'VIDEO': case 'YT': case 'TV': go('videos'); return;
    case 'LINKS': case 'BOARDS': case 'BBSLIST': go('links'); return;
    case 'RAID': go('raid'); return;
    case 'TOWER': go('tower'); return;
    case 'CHESS': case 'SCHAAK': case 'SCHAKEN': go('chess'); return;
    case 'CONTACT': case 'MAIL': case 'E': go('contact'); return;

    case 'CLS': case 'CLEAR':
        out.innerHTML = ''; return;

    case 'WHO': case 'W':
        printLines([
            'NODE  USER              ACTIVITY',
            '01    HENNUPWOOD        IN THE STUDIO',
            '02    YOU               BROWSING THE BOARD'
        ], 'l-ok');
        return;

    case 'TIME': case 'DATE': case 'T':
        var d = new Date();
        print('SYSTEM TIME: ' + d.toLocaleDateString('nl-NL') + ' ' + d.toLocaleTimeString('nl-NL'), 'l-ok');
        print('TIME LEFT: UNLIMITED', 'l-hi');
        return;

    case 'VER': case 'VERSION':
        print('HENNUPWOOD MUSIC BBS v1.0', 'l-hi');
        print('RUNNING ON 33600 BAUD OF PURE NOSTALGIA.', 'l-ok');
        return;

    case 'UPTIME':
        print('UPTIME: ' + uptimeYears + ' YEARS. NO REBOOTS. ALMOST.', 'l-ok');
        return;

    case 'BYE': case 'G': case 'LOGOFF': case 'LOGOUT': case 'GOODBYE': case 'QUIT': case 'EXIT':
        slow(['THANKS FOR CALLING HENNUPWOOD MUSIC BBS!', 'HANGING UP...'], 'l-hi', noCarrier);
        return;

    /* ---- hidden commands ---- */
    case 'ATZ':
        print('OK', 'l-ok'); return;
    case 'ATDT': case 'ATD':
        slow(['DIALING ' + (cmd.split(' ')[1] || 'HENNUPWOOD') + '...', 'RING... RING...', 'CONNECT 33600'], 'l-bl');
        return;
    case 'ATH': case '+++': case 'ATH0':
        print('NO CARRIER', 'l-err'); return;
    case 'UFO': case 'UFOS':
        if (window.HWSTARS && HWSTARS.ufo(cmd === 'UFOS')) print(cmd === 'UFOS' ? 'TWO UFOS ON A COLLISION COURSE. WATCH THE SKY.' : 'UNIDENTIFIED FLYING OBJECT ON RADAR.', 'l-hi');
        else print('THE SKY IS CLOSED TODAY.', 'l-ok');
        return;
    case 'NOVA': case 'SUPERNOVA': case 'BOOM':
        if (window.HWSTARS && HWSTARS.nova()) print('SUPERNOVA DETECTED. LOOK NEXT TO THE BOARD.', 'l-hi');
        else print('NO ROOM IN THE SKY RIGHT NOW. SCROLL A BIT AND TRY AGAIN.', 'l-ok');
        return;
    case 'XYZZY':
        print('NOTHING HAPPENS.', 'l-ok'); return;
    case 'SYSOP': case 'PAGE': case 'CHAT': case 'C':
        slow(['PAGING SYSOP...', '*BEEP*', '*BEEP*', '*BEEP*',
              { t:'THE SYSOP IS IN THE STUDIO. TRY AGAIN AFTER THE DROP.', c:'l-pk' }], 'l-hi');
        return;
    case 'SPYCO':
        print('SPYCO BBS — EST. 1995. STILL ANSWERING ON THE FIRST RING.', 'l-pk'); return;
    case 'DALAMA':
        print('DALAMA — ART + MUSIC. GREETZ TO THE WHOLE CREW.', 'l-pk'); return;
    case 'SIKE': case '=SIKE=':
        print('░▒▓█ =SiKE= WAS HERE █▓▒░', 'l-pk'); return;
    case 'GREETZ': case 'GREETS':
        printLines(['GREETZ FLY OUT TO:', '  ALL SYSOPS WHO KEPT THE LINES OPEN', '  ALL ANSI ARTISTS AND TRACKER MUSICIANS',
                    '  EVERYONE WHO EVER WAITED FOR A ZMODEM TRANSFER', '  AND YOU, FOR CALLING.'], 'l-hi');
        return;
    case 'DIR': case 'LS':
        printLines([
            ' VOLUME IN DRIVE C IS HENNUPWOOD',
            ' DIRECTORY OF C:\\BBS',
            '',
            'HENNUPWD MOD      128,512  01-01-95',
            'SPYCO    ANS       14,336  03-07-95',
            'SIKE     ANS       11,264  09-11-96',
            'RAID     EXE       65,536  20-10-26',
            'TOWER    EXE       73,728  20-10-26',
            'SECRET   TXT            ?  ??-??-??',
            '        6 FILE(S)   0 BYTES FREE'
        ], 'l-ok');
        return;
    case 'TYPE': case 'CAT': case 'READ':
        if (/SECRET/.test(cmd)){ print('ACCESS DENIED. TRY ↑ ↑ ↓ ↓ ← → ← → B A', 'l-err'); }
        else print('FILE NOT FOUND', 'l-err');
        return;
    case 'SUDO': case 'ROOT': case 'SU':
        print('NICE TRY. ONLY THE SYSOP HAS ROOT.', 'l-err'); return;
    case 'FORMAT': case 'DEL': case 'DELETE': case 'DELTREE': case 'RM':
        slow(['ARE YOU SURE (Y/N)? Y', 'DELETING...', { t:'JUST KIDDING. THE BOARD IS SAFE.', c:'l-pk' }], 'l-err');
        return;
    case '42':
        print('THE ANSWER. BUT WHAT WAS THE QUESTION?', 'l-ok'); return;
    case 'KOFFIE': case 'COFFEE':
        print('SYSOP ZET KOFFIE... EVEN GEDULD.', 'l-hi'); return;
    case 'PLAY':
        go('games'); return;
    case 'HELLO': case 'HI': case 'HOI': case 'HALLO':
        print('HOI HOI! TYPE HELP IF YOU ARE LOST.', 'l-hi'); return;
    }

    print('BAD COMMAND OR FILE NAME', 'l-err');
}

/* ---------- typing anywhere + konami code (normal pages only) ---------- */
if (!isGame){
    var seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    var pos = 0;
    document.addEventListener('keydown', function(e){
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (document.activeElement === input) return;
        var tag = (e.target && e.target.tagName) || '';
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (e.target && e.target.isContentEditable)) return;

        var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        pos = (key === seq[pos]) ? pos + 1 : (key === seq[0] ? 1 : 0);
        if (pos === seq.length){
            pos = 0;
            rainbow();
            print('CHEAT ACTIVATED: 99 CREDITS.', 'l-hi');
            print('SECRET.TXT: THANK YOU FOR CALLING. YOU ARE ELITE.', 'l-pk');
            return;
        }
        if (pos >= 8) return;                 // halfway through the code: don't grab the keys

        /* just start typing, like on a real board */
        if (e.key.length === 1 && e.key !== ' ') input.focus();
    });
}

})();
