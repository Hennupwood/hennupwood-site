/* HENNUPWOOD MUSIC BBS — command prompt
   One file, used on every page. */
(function(){

/* ---------- where things live ---------- */
var LINKS = {
    main:'index.html', archives:'archives.html', about:'about.html', art:'art.html',
    games:'games.html', raid:'raid.html', tower:'tower.html',
    music:'https://soundcloud.com/hennupwoodmusic',
    soundcloud:'https://soundcloud.com/hennupwoodmusic',
    mixcloud:'https://www.mixcloud.com/ronald-van-toledo/',
    youtube:'https://www.youtube.com/@hennupwooddalamainstadub8583',
    facebook:'https://www.facebook.com/InstaDubDalama/'
};

/* number keys per page, matching the menus on each page */
var NUMS = {
    index:    { '1':'music', '2':'archives', '3':'about', '4':'contact', '5':'art', '6':'games' },
    about:    { '1':'soundcloud', '2':'mixcloud', '3':'youtube', '4':'facebook', '0':'main' },
    archives: { '0':'main' },
    art:      { '0':'main' },
    games:    { '1':'raid', '2':'tower', '0':'main' },
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

/* ---------- starfield behind the board (like the Space Raid title screen) ---------- */
(function(){
    var sc = document.createElement('canvas');
    sc.setAttribute('aria-hidden', 'true');
    sc.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;image-rendering:pixelated;';
    document.body.insertBefore(sc, document.body.firstChild);
    var sg = sc.getContext('2d');
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var stars = [], SW = 0, SH = 0, SCALE = 2;

    function resize(){
        SW = Math.ceil(window.innerWidth / SCALE);
        SH = Math.ceil(window.innerHeight / SCALE);
        sc.width = SW; sc.height = SH;
        var n = Math.round(SW * SH / 900);
        stars = [];
        for (var i = 0; i < n; i++){
            stars.push({ x:Math.random() * SW, y:Math.random() * SH, v:0.08 + Math.random() * 0.4 });
        }
        if (still) frame();
    }
    function frame(){
        sg.fillStyle = '#000';
        sg.fillRect(0, 0, SW, SH);
        for (var i = 0; i < stars.length; i++){
            var s = stars[i];
            if (!still){
                s.y += s.v;
                if (s.y > SH){ s.y = 0; s.x = Math.random() * SW; }
            }
            sg.fillStyle = s.v > 0.36 ? '#ffffff' : (s.v > 0.22 ? '#aaaaaa' : '#0000aa');
            sg.fillRect(s.x | 0, s.y | 0, 1, 1);
        }
    }
    function loop(){ frame(); requestAnimationFrame(loop); }
    window.addEventListener('resize', resize);
    resize();
    if (!still) requestAnimationFrame(loop);
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
    if (where === 'contact'){ print('MAILBOX UNDER CONSTRUCTION. TRY AGAIN SOON.', 'l-pk'); return; }
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
            '  MUSIC         SoundCloud',
            '  ARCHIVES      releases, artwork, live',
            '  ABOUT         sysop profile',
            '  ART           ANSI art archive',
            '  DOORS         door games',
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
    case 'MUSIC': case 'SOUNDCLOUD': go('music'); return;
    case 'MIXCLOUD': go('mixcloud'); return;
    case 'YOUTUBE': go('youtube'); return;
    case 'FACEBOOK': go('facebook'); return;
    case 'ARCHIVES': case 'ARCHIVE': case 'FILES': case 'F': go('archives'); return;
    case 'ABOUT': case 'INFO': case 'I': go('about'); return;
    case 'ART': case 'ANSI': case 'GFX': go('art'); return;
    case 'DOORS': case 'DOOR': case 'GAMES': case 'D': go('games'); return;
    case 'RAID': go('raid'); return;
    case 'TOWER': go('tower'); return;
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
