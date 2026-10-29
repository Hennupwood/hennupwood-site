/* HENNUPWOOD BBS — terminal window. Loaded by bbs.js the first time it is opened. */
(function(){
if (window.HWTERM) return;
var MODS = [["dl_smart.xm", "DL_SMART.XM", 620254, "23-05-94", "SmarTaniA", "White Label"], ["dl_machi.xm", "DL_MACHI.XM", 1110144, "11-06-94", "DaLaMachine", "White Label"], ["dl_mag.xm", "DL_MAG.XM", 1022592, "27-06-94", "Underwater Magic", "White Label"], ["carnage.s3m", "CARNAGE.S3M", 519488, "19-01-95", "CARNAGE", "Weird Ed"], ["dl_mongo.s3m", "DL_MONGO.S3M", 649932, "28-01-95", "Freddy's Mongoose (RMX)", "Freddy Krueger"], ["dl_cort.s3m", "DL_CORT.S3M", 236510, "14-03-95", "CeReBraL CoRTeX", "White Label"], ["dl_quik.s3m", "DL_QUIK.S3M", 330876, "17-03-95", "Quick, Fast and in a Hurry.", "White Label"], ["dl_time.s3m", "DL_TIME.S3M", 322828, "05-04-95", "4 Da Old Times   (HakkuH)", "White Label"], ["dl_nocom.xm", "DL_NOCOM.XM", 948452, "07-04-95", "untitled", "SikeE"], ["dl_siblo.xm", "DL_SIBLO.XM", 1003838, "09-04-95", "Blowing My Mind", "SikeE"], ["dl_jungl.xm", "DL_JUNGL.XM", 180320, "12-04-95", "untitled", "Necron"], ["dl_loss.s3m", "DL_LOSS.S3M", 168856, "12-04-95", "Lost in X2C", "White Label"], ["dl_punch.xm", "DL_PUNCH.XM", 214223, "13-04-95", "EtErNaL PuNNiSHmeNT", "White Label"], ["c_o7day.xm", "(C)O7DAY.XM", 793529, "23-04-95", "CroNiCleS", "Necron"], ["dl_end.xm", "DL_END.XM", 1172466, "23-04-95", "No EnD....", "SikeE"], ["dl_immor.s3m", "DL_IMMOR.S3M", 294688, "24-04-95", "Immortality", "White Label"], ["dl_inhal.xm", "DL_INHAL.XM", 925911, "25-04-95", "Diep Inhaleren", "SikeE"], ["dl_not.xm", "DL_NOT.XM", 906012, "26-04-95", "Niks", "SikeE"], ["dl_osmo.s3m", "DL_OSMO.S3M", 161513, "26-04-95", "Osmosis", "White Label"], ["dl_monda.s3m", "DL_MONDA.S3M", 121156, "02-05-95", "Monday Mornings", "White Label"], ["dl_thrut.xm", "DL_THRUT.XM", 170448, "04-05-95", "The Thruth", "Weird Ed"], ["dl_artis.xm", "DL_ARTIS.XM", 952793, "14-05-95", "SenSiSmilE", "SikeE"], ["dl_india.xm", "DL_INDIA.XM", 478118, "14-05-95", "DaiLa LamA", "SikeE"], ["dl_dream.xm", "DL_DREAM.XM", 139405, "15-05-95", "Dream On", "Weird Ed"], ["the_forc.xm", "THE_FORC.XM", 854360, "15-05-95", "ThE_Force$_Off.....", "Phrenetic"], ["neigh.xm", "NEIGH.XM", 851040, "19-05-95", "NEigHbouRs", "Phrenetic"], ["the_feel.xm", "THE_FEEL.XM", 968345, "20-05-95", "ThE FeeLiNg", "Phrenetic"], ["dl_mind.s3m", "DL_MIND.S3M", 215696, "22-05-95", "OfF_BeaT MiNd_F#Ck", "White Label"], ["fk-free.s3m", "FK-FREE.S3M", 406270, "27-05-95", "Freddy free's the world", "Freddy Krueger"], ["dl_chaos.s3m", "DL_CHAOS.S3M", 225060, "29-05-95", "Monotoned ChaOs", "White Label"], ["dl_last.s3m", "DL_LAST.S3M", 111860, "31-05-95", "Da last 70 weeks", "White Label"], ["champs.xm", "CHAMPS.XM", 955997, "13-06-95", "CHamPioN$", "Phrenetic"], ["dl_tran.xm", "DL_TRAN.XM", 215173, "26-06-95", "The Trance Journey", "Weird Ed"], ["dl_perso.xm", "DL_PERSO.XM", 1202292, "29-06-95", "No Personality", "White Label"], ["dl_hill.xm", "DL_HILL.XM", 915787, "18-07-95", "The HiLL", "SikeE"], ["dl_money.xm", "DL_MONEY.XM", 733557, "18-07-95", "Money Money Money", "Necron"], ["dl_speed.xm", "DL_SPEED.XM", 193469, "01-08-95", "Da Speed Freak", "Weird Ed"], ["dl_hthvn.xm", "DL_HTHVN.XM", 170038, "10-08-95", "HardTranze Heaven", "Weird Ed"], ["dl_parab.xm", "DL_PARAB.XM", 547742, "19-08-95", "ParAbNorMal", "SikeE"], ["dogs.xm", "DOG$.XM", 1572582, "27-12-95", "MooNDoG$", "Phrenetic"], ["flow.xm", "FLOW.XM", 1358663, "27-12-95", "ThE  FLoW", "Phrenetic"], ["dl_back.xm", "DL_BACK.XM", 1946945, "02-01-96", "BrainScan", "Phrenetic"], ["dl_ent.xm", "DL_ENT.XM", 1202332, "20-01-96", "Entrance of Madness", "SikeE"], ["dl_glow.xm", "DL_GLOW.XM", 797662, "20-01-96", "Glowing Whispers", "White Label"], ["physica.xm", "PHYSICA.XM", 754340, "23-01-96", "PhySyCaL MaDdDnEs", "Phrenetic"], ["dl_hyper.xm", "DL_HYPER.XM", 1276809, "24-01-96", "HyPeRZz", "White Label"], ["dl_menab.xm", "DL_MENAB.XM", 521242, "23-03-96", "mental absence", "Weird Ed"], ["dl_pure.xm", "DL_PURE.XM", 593466, "07-05-96", "pure tribute", "Weird Ed"], ["dl_space.xm", "DL_SPACE.XM", 1978016, "04-06-96", "SPACE  ESCAPED", "SikeE"], ["dl_tranz.xm", "DL_TRANZ.XM", 1216261, "04-06-96", "T R A N Z I N G  X", "White Label"], ["dl_compa.xm", "DL_COMPA.XM", 462432, "15-07-96", "Compadrez", "Weird Ed"], ["dl_hard.xm", "DL_HARD.XM", 419955, "20-08-96", "7 : 45", "White Label"], ["dl_melli.xm", "DL_MELLI.XM", 1854205, "20-08-96", "Just Another Mellow Tune", "SikeE"], ["dl_sound.xm", "DL_SOUND.XM", 833640, "28-08-96", "Sound", "White Label"], ["dl_prof.xm", "DL_PROF.XM", 617215, "24-09-96", "Profound", "Weird Ed"], ["dl_once.xm", "DL_ONCE.XM", 165280, "03-10-96", "Once and NO MORE!", "Weird Ed"], ["dl_dta.xm", "DL_DTA.XM", 1001252, "06-10-96", "D T A", "SikeE"], ["dl_equa.xm", "DL_EQUA.XM", 459499, "12-12-96", "eQualipse", "Weird Ed"], ["dl_groov.xm", "DL_GROOV.XM", 553997, "14-01-97", ".grooverider.", "Weird Ed"], ["dl_sined.xm", "DL_SINED.XM", 497625, "23-01-97", "SinedToTheUndefined", "Weird Ed"], ["dl_simpl.xm", "DL_SIMPL.XM", 724866, "16-04-97", "Simplistex One", "SikeE"], ["dl_simpt.xm", "DL_SIMPT.XM", 1241398, "16-04-97", "Simplistex Two", "SikeE"], ["dl_stit.xm", "DL_STIT.XM", 1060994, "18-04-97", "Techno or Not", "SikeE"], ["dl_whyme.xm", "DL#WHYME.XM", 864625, "28-09-98", "Why Me", "SikeE"]];

var ANSIFILES = [
    ['BROTHER.ANS', 2496, '01-10-95', 'THA BROTHERS'],
    ['DA-LAMA.ANS', 1682, '11-05-95', 'SPYCO BBS LOGIN'],
    ['DALAMA.ANS', 2605, '04-06-96', 'DALAMA'],
    ['DALAMI.ANS', 2539, '04-06-96', 'DALAMA NATION SUBSTANCE'],
    ['DALAMO.ANS', 3054, '04-06-96', 'DALAMA RED'],
    ['JUICE.ANS', 1619, '20-01-95', 'JUICE BY WEIRD ED'],
    ['SHURE.ANS', 2102, '04-06-96', 'DALAMA NATION'],
    ['SPYCO2.ANS', 1904, '26-01-95', 'SPYCO BBS LOGIN V2'],
    ['YEAAH.ANS', 3400, '15-09-96', 'SPYCO RED'],
    ['SPYCO.ASC', 1401, '04-06-96', 'SPYCO ASCII']
];
var DOORS = [['RAID.EXE', 65536, '20-10-26', 'raid.html', 'SPYCO SPACE RAID'],
             ['TOWER.EXE', 73728, '20-10-26', 'tower.html', "THE SYSOP'S TOWER"],
             ['CHESS.EXE', 81920, '29-10-26', 'chess.html', 'SYSOP CHESS']];

var PAL = ['#000000','#aa0000','#00aa00','#aa5500','#0000aa','#aa00aa','#00aaaa','#aaaaaa',
           '#555555','#ff5555','#55ff55','#ffff55','#5555ff','#ff55ff','#55ffff','#ffffff'];
var CP437 = 'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\u00a0';
var LOW = '\u0000☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼';
function cp(c){ return c >= 128 ? CP437[c - 128] : c < 32 ? LOW[c] : String.fromCharCode(c); }

/* ---------- window ---------- */
var css = ''
 + '#hwterm{position:fixed;z-index:900;left:50%;top:50%;transform:translate(-50%,-50%);width:min(94vw,860px);height:min(82vh,600px);'
 +   'display:none;flex-direction:column;background:#000;border:3px double #aa00aa;box-shadow:0 0 30px #8800aa,0 0 80px #440055;'
 +   'font-family:"DejaVu Sans Mono","Consolas","Courier New",monospace;}'
 + '#hwterm.open{display:flex;}'
 + '#hwterm .bar{display:flex;align-items:center;gap:10px;background:#aa00aa;color:#fff;padding:4px 10px;cursor:move;user-select:none;-webkit-user-select:none;font-size:13px;letter-spacing:1px;}'
 + '#hwterm .bar .tt{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
 + '#hwterm .bar button{font:inherit;background:#000;color:#ffff55;border:1px solid #fff;padding:0 7px;cursor:pointer;}'
 + '#hwterm .scr{flex:1;overflow-y:auto;overflow-x:auto;padding:8px 10px;color:#aaaaaa;cursor:text;'
 +   'font-size:min(15px,calc((min(94vw,860px) - 40px) / 48.5));line-height:1.18;}'
 + '#hwterm .ln{white-space:pre;min-height:1.18em;}'
 + '#hwterm .ansi .ln{line-height:1;min-height:1em;}'
 + '#hwterm .in{display:flex;white-space:pre;}'
 + '#hwterm .in .pr{color:#55ffff;}'
 + '#hwterm .in .tx{color:#ffff55;}'
 + '#hwterm .cur{display:inline-block;width:0.6em;background:#55ffff;animation:hwblink 1s step-end infinite;}'
 + '@keyframes hwblink{50%{opacity:0;}}'
 + '#hwterm input{position:absolute;left:-9999px;width:1px;height:1px;opacity:0;}'
 + '#hwterm .c-hi{color:#ffff55;} #hwterm .c-pk{color:#ff55ff;} #hwterm .c-cy{color:#55ffff;} #hwterm .c-bl{color:#5555ff;} #hwterm .c-er{color:#ff5555;} #hwterm .c-dim{color:#555555;} #hwterm .c-gr{color:#55ff55;}'
 + '@media (max-width:640px){#hwterm{width:100vw;height:100%;left:0;top:0;transform:none;border-width:0;}#hwterm .bar{cursor:default;}}';
var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

var win = document.createElement('div');
win.id = 'hwterm';
win.setAttribute('role', 'dialog');
win.setAttribute('aria-label', 'Hennupwood BBS terminal');
win.innerHTML = '<div class="bar"><span class="tt">HENNUPWOOD BBS \u2014 NODE 01 \u2014 <span id="hwbaud">33600</span> BPS</span>'
              + '<button data-a="cls" title="Clear screen">CLS</button><button data-a="close" title="Close (Esc)">X</button></div>'
              + '<div class="scr" id="hwscr"><div id="hwout"></div><div class="in"><span class="pr" id="hwpr"></span><span class="tx" id="hwtx"></span><span class="cur">\u00a0</span></div></div>'
              + '<input id="hwin" type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Terminal input">';
document.body.appendChild(win);
var scr = win.querySelector('#hwscr'), outEl = win.querySelector('#hwout'), prEl = win.querySelector('#hwpr'),
    txEl = win.querySelector('#hwtx'), inp = win.querySelector('#hwin'), inLine = win.querySelector('.in');

/* drag the window by its title bar */
(function(){
    var bar = win.querySelector('.bar'), dx = 0, dy = 0, drag = false;
    bar.addEventListener('pointerdown', function(e){
        if (e.target.tagName === 'BUTTON' || window.innerWidth <= 640) return;
        var r = win.getBoundingClientRect();
        win.style.transform = 'none'; win.style.left = r.left + 'px'; win.style.top = r.top + 'px';
        dx = e.clientX - r.left; dy = e.clientY - r.top; drag = true; bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', function(e){
        if (!drag) return;
        win.style.left = Math.max(0, Math.min(window.innerWidth - 120, e.clientX - dx)) + 'px';
        win.style.top = Math.max(0, Math.min(window.innerHeight - 40, e.clientY - dy)) + 'px';
    });
    bar.addEventListener('pointerup', function(){ drag = false; });
    bar.addEventListener('click', function(e){
        var a = e.target.getAttribute && e.target.getAttribute('data-a');
        if (a === 'close') close();
        if (a === 'cls'){ outEl.innerHTML = ''; }
    });
})();
scr.addEventListener('click', function(){ inp.focus(); });

/* ---------- output at modem speed ---------- */
var BAUD = 33600, queue = [], cur = null, raf = null;
function cps(){ return BAUD / 10; }
function newLine(cls){
    var d = document.createElement('div'); d.className = 'ln' + (cls ? ' ' + cls : '');
    outEl.appendChild(d);
    while (outEl.children.length > 600) outEl.removeChild(outEl.firstChild);
    return d;
}
function say(text, cls){ String(text).split('\n').forEach(function(l){ queue.push({ t:'text', s:l, c:cls }); }); pump(); }
function sayAnsi(rows, cols){ queue.push({ t:'ansi', rows:rows, cols:cols }); pump(); }
function then(fn){ queue.push({ t:'fn', f:fn }); pump(); }
function busy(){ return !!cur || queue.length > 0; }
function pump(){ if (!raf) raf = requestAnimationFrame(step); setPrompt(); }
var last = 0, carry = 0;
function step(ts){
    raf = null;
    var dt = last ? Math.min(100, ts - last) : 16; last = ts;
    var budget = carry + cps() * dt / 1000;
    while (budget >= 1 || (cur === null && queue.length && (queue[0].t === 'fn' || queue[0].t === 'load'))){
        if (!cur){
            if (!queue.length) break;
            if (queue[0].t === 'load'){
                var ld = queue[0];
                if (!ld.rows && !ld.failed) break;                 // still on the line, wait for it
                queue.shift();
                if (ld.failed){ queue.unshift({ t:'text', s:'FILE NOT FOUND OR LINE DROPPED: ' + ld.file, c:'c-er' }); continue; }
                queue.unshift({ t:'ansi', rows:ld.rows });
                continue;
            }
            cur = queue.shift();
            if (cur.t === 'fn'){ var f = cur.f; cur = null; f(); continue; }
            if (cur.t === 'text'){ cur.el = newLine(cur.c); cur.i = 0; }
            if (cur.t === 'ansi'){ cur.wrap = newLine('ansi'); cur.wrap.className = 'ansi'; cur.r = 0; cur.i = 0; cur.el = null; }
        }
        if (cur.t === 'text'){
            var take = Math.min(cur.s.length - cur.i, Math.floor(budget));
            if (cur.s.length === 0) take = 0;
            cur.el.textContent += cur.s.substr(cur.i, take); cur.i += take; budget -= Math.max(1, take);
            if (cur.i >= cur.s.length){ cur = null; }
        } else if (cur.t === 'ansi'){
            if (cur.r >= cur.rows.length){ cur = null; continue; }
            if (!cur.el){ cur.el = document.createElement('div'); cur.el.className = 'ln'; cur.wrap.appendChild(cur.el); cur.i = 0; }
            var row = cur.rows[cur.r], n = Math.min(row.length - cur.i, Math.floor(budget));
            cur.i += n; budget -= Math.max(1, n);
            cur.el.innerHTML = rowHTML(row, cur.i);
            if (cur.i >= row.length){ cur.r++; cur.el = null; }
        }
    }
    carry = Math.min(budget, 1);
    scr.scrollTop = scr.scrollHeight;
    if (cur || (queue.length && !(queue[0].t === 'load' && !queue[0].rows && !queue[0].failed))) raf = requestAnimationFrame(step);
    else { last = 0; setPrompt(); }
}
function skip(){                                       // ESC: show everything right away
    var saved = BAUD; BAUD = 1e9; last = 0; step(performance.now() + 1000); BAUD = saved;
}
function esc(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function rowHTML(row, upto){
    var h = '', i = 0, end = Math.min(upto, row.length);
    while (i < end){
        var c = row[i], run = '', j = i;
        while (j < end && row[j].fg === c.fg && row[j].bg === c.bg){ run += row[j].ch; j++; }
        h += '<span style="color:' + PAL[c.fg] + (c.bg ? ';background:' + PAL[c.bg] : '') + '">' + esc(run) + '</span>';
        i = j;
    }
    return h || '\u00a0';
}

/* ---------- ANSI parser (CP437 + ANSI.SYS escape codes) ---------- */
function parseAnsi(bytes){
    var grid = [], x = 0, y = 0, fg = 7, bg = 0, bold = false, saved = [0, 0], maxY = 0, cols = 80, i = 0, n = bytes.length;
    for (var k = 0; k < n; k++) if (bytes[k] === 26){ n = k; break; }      // stop at SAUCE / EOF marker
    function put(ch){
        if (x >= cols){ x = 0; y++; }
        if (!grid[y]) grid[y] = [];
        grid[y][x] = { ch:ch, fg:fg + (bold ? 8 : 0), bg:bg };
        if (y > maxY) maxY = y; x++;
    }
    while (i < n){
        var c = bytes[i];
        if (c === 27 && bytes[i + 1] === 91){
            var j = i + 2, ps = '';
            while (j < n && bytes[j] >= 0x30 && bytes[j] <= 0x3f){ ps += String.fromCharCode(bytes[j]); j++; }
            var cmd = String.fromCharCode(bytes[j]); i = j + 1;
            var p = ps.replace('?', '').split(';').map(function(v){ return v === '' ? null : parseInt(v, 10); });
            var p1 = p[0] == null ? null : p[0];
            if (cmd === 'm'){
                (ps === '' ? [0] : p).forEach(function(v){
                    v = v || 0;
                    if (v === 0){ fg = 7; bg = 0; bold = false; }
                    else if (v === 1) bold = true;
                    else if (v >= 30 && v <= 37) fg = v - 30;
                    else if (v >= 40 && v <= 47) bg = v - 40;
                });
            } else if (cmd === 'C') x = Math.min(cols - 1, x + (p1 || 1));
            else if (cmd === 'D') x = Math.max(0, x - (p1 || 1));
            else if (cmd === 'A') y = Math.max(0, y - (p1 || 1));
            else if (cmd === 'B') y += (p1 || 1);
            else if (cmd === 'H' || cmd === 'f'){ y = (p[0] || 1) - 1; x = (p[1] || 1) - 1; }
            else if (cmd === 's') saved = [x, y];
            else if (cmd === 'u'){ x = saved[0]; y = saved[1]; }
            else if (cmd === 'J' && p1 === 2){ grid = []; x = y = 0; }
            continue;
        }
        i++;
        if (c === 13){ x = 0; continue; }
        if (c === 10){ y++; continue; }
        if (c === 9){ x = Math.min(cols - 1, (Math.floor(x / 8) + 1) * 8); continue; }
        put(cp(c));
    }
    var rows = [];
    for (var r = 0; r <= maxY; r++){
        var src = grid[r] || [], row = [], w = src.length;
        while (w > 0 && (!src[w - 1] || (src[w - 1].ch === ' ' && !src[w - 1].bg))) w--;
        for (var q = 0; q < w; q++) row.push(src[q] || { ch:' ', fg:7, bg:0 });
        rows.push(row);
    }
    while (rows.length && !rows[rows.length - 1].length) rows.pop();
    return rows;
}
function showAnsi(file){
    say('LOADING ' + file + '...', 'c-bl');
    var item = { t:'load', rows:null, failed:false };
    fetch('ansi/' + file).then(function(r){ if (!r.ok) throw 0; return r.arrayBuffer(); })
        .then(function(buf){ item.rows = parseAnsi(new Uint8Array(buf)); pump(); })
        .catch(function(){ item.failed = true; item.file = file; pump(); });
    queue.push(item); say(''); pump();
}

/* ---------- the virtual drive ---------- */
var cwd = [];
var README = [
    'HENNUPWOOD MUSIC BBS \u2014 NODE 01',
    '',
    'You are on the board. Some things to try:',
    '  DIR            what is here',
    '  CD MODS        go into the tracker music area',
    '  PLAY WHYME     play a Da Lama track',
    '  CD ANSI        the ANSI art area',
    '  TYPE JUICE.ANS show an ANSI the way it came over the modem',
    '  BAUD 2400      feel the pain of 1991',
    '  HELP           everything else',
    '',
    'Greetz to everyone who still remembers the sound of a 33k6 handshake.'
].join('\n');
var SECRET = 'ACCESS DENIED.\nHINT: \u2191 \u2191 \u2193 \u2193 \u2190 \u2192 \u2190 \u2192 B A  (on the board, not in here)';
function path(){ return 'C:\\BBS' + (cwd.length ? '\\' + cwd.join('\\') : '') + '>'; }
function setPrompt(){
    prEl.textContent = path();
    inLine.style.visibility = busy() ? 'hidden' : 'visible';
}
function entries(){
    var d = cwd[0] || '';
    if (!d) return {
        dirs:['ANSI', 'BULLETIN', 'DOORS', 'MODS'],
        files:[['README.TXT', README.length, '29-10-26', 'txt'], ['FILE_ID.DIZ', 730, '10-02-96', 'ansi'], ['SECRET.TXT', 1337, '??-??-??', 'secret']]
    };
    if (d === 'MODS') return { dirs:[], files:MODS.map(function(m){ return [m[1], m[2], m[3], 'mod', m]; }) };
    if (d === 'ANSI') return { dirs:[], files:ANSIFILES.map(function(a){ return [a[0], a[1], a[2], 'ansi', a]; }) };
    if (d === 'DOORS') return { dirs:[], files:DOORS.map(function(a){ return [a[0], a[1], a[2], 'door', a]; }) };
    if (d === 'BULLETIN') return { dirs:[], files:bulletins.map(function(b, i){ return ['BULL' + (b.n < 10 ? '0' : '') + b.n + '.TXT', b.text.length, b.date, 'bull', b]; }) };
    return { dirs:[], files:[] };
}
function pad(s, n){ s = String(s); while (s.length < n) s += ' '; return s.substr(0, n); }
function lpad(s, n){ s = String(s); while (s.length < n) s = ' ' + s; return s; }
function num(n){ return Number(n).toLocaleString('en-US'); }
function dir(wide){
    var e = entries(), lines = [' Volume in drive C is HENNUPWOOD', ' Directory of ' + path().slice(0, -1), ''];
    if (cwd.length) lines.push(pad('.', 13) + '<DIR>', pad('..', 13) + '<DIR>');
    var total = 0;
    if (wide){
        var names = e.dirs.map(function(d){ return '[' + d + ']'; }).concat(e.files.map(function(f){ return f[0]; })), row = '';
        names.forEach(function(nm, i){ row += pad(nm, 16); if ((i + 1) % 5 === 0){ lines.push(row); row = ''; } });
        if (row) lines.push(row);
        e.files.forEach(function(f){ total += f[1]; });
    } else {
        e.dirs.forEach(function(d){ lines.push(pad(d, 13) + pad('<DIR>', 12) + '29-10-26'); });
        e.files.forEach(function(f){
            var nm = f[0].split('.'), extra = '';
            if (f[3] === 'mod') extra = '  ' + pad(f[4][4], 26) + ' ' + f[4][5];
            if (f[3] === 'ansi' && f[4]) extra = '  ' + f[4][3];
            if (f[3] === 'door') extra = '  ' + f[4][4];
            if (f[3] === 'bull') extra = '  ' + f[4].title;
            lines.push(pad(nm[0], 9) + pad(nm[1] || '', 4) + lpad(num(f[1]), 11) + '  ' + f[2] + extra);
            total += f[1];
        });
    }
    lines.push(lpad(e.files.length, 9) + ' file(s)  ' + lpad(num(total), 12) + ' bytes');
    lines.push(lpad(e.dirs.length, 9) + ' dir(s)            0 bytes free');
    say(lines.join('\n'));
}
function findFile(name){
    name = name.toUpperCase();
    var e = entries();
    for (var i = 0; i < e.files.length; i++){
        var f = e.files[i], base = f[0].split('.')[0];
        if (f[0] === name || base === name || base.replace(/^DL[_#]/, '') === name) return f;
    }
    return null;
}
function findMod(name){
    name = name.toUpperCase().replace(/\.(XM|S3M)$/, '');
    for (var i = 0; i < MODS.length; i++){
        var m = MODS[i], base = m[1].split('.')[0];
        if (base === name || base.replace(/^DL[_#]/, '') === name || base.replace(/^\(C\)/, '') === name) return m;
    }
    for (i = 0; i < MODS.length; i++) if (MODS[i][4].toUpperCase().replace(/[^A-Z0-9]/g, '').indexOf(name.replace(/[^A-Z0-9]/g, '')) === 0) return MODS[i];
    return null;
}

/* bulletins come straight from bulletins.html, so they are always up to date */
var bulletins = [];
fetch('bulletins.html').then(function(r){ return r.text(); }).then(function(h){
    var doc = new DOMParser().parseFromString(h, 'text/html');
    bulletins = Array.prototype.map.call(doc.querySelectorAll('.bulletin'), function(b){
        var head = (b.querySelector('.b-head') || {}).textContent || '', n = parseInt((head.match(/#(\d+)/) || [0, 0])[1], 10);
        var body = ((b.querySelector('.b-body') || {}).textContent || '').replace(/\s+/g, ' ').trim();
        var date = (((b.querySelector('.b-date') || {}).textContent || '').match(/\d\d-\d\d-\d{4}/) || ['2026'])[0];
        return { n:n, title:head.replace(/^BULLETIN #\d+\s*[\u2014-]\s*/, ''), date:date.length === 10 ? date.slice(0, 6) + date.slice(8) : '--', text:body, head:head };
    }).sort(function(a, b){ return a.n - b.n; });
}).catch(function(){});
function wrap(text, w){
    var out = [], line = '';
    text.split(' ').forEach(function(word){
        if ((line + ' ' + word).trim().length > w){ out.push(line); line = word; } else line = (line + ' ' + word).trim();
    });
    if (line) out.push(line);
    return out.join('\n');
}

/* ---------- music ---------- */
var player = null, playerReady = null, nowPlaying = null;
function getPlayer(){
    if (playerReady) return playerReady;
    playerReady = import('https://cdn.jsdelivr.net/npm/chiptune3@0.8.9/chiptune3.js').then(function(mod){
        return new Promise(function(res){
            var P = new mod.ChiptuneJsPlayer(), done = false;
            var fin = function(){ if (!done){ done = true; player = P; res(P); } };
            try { if (typeof P.onInitialized === 'function') P.onInitialized(fin); else P.onInitialized = fin; } catch(e){ P.onInitialized = fin; }
            try { if (typeof P.onEnded === 'function') P.onEnded(function(){ if (nowPlaying){ say('END OF TRACK: ' + nowPlaying[4], 'c-dim'); nowPlaying = null; } }); } catch(e){}
            setTimeout(fin, 4000);
        });
    });
    return playerReady;
}
function play(m){
    say('LOADING ' + m[1] + ' (' + num(m[2]) + ' BYTES)...', 'c-bl');
    getPlayer().then(function(p){
        try { p.stop(); } catch(e){}
        p.load('mods/' + m[0]);
        nowPlaying = m;
        say('\u266B NOW PLAYING: ' + m[4] + ' \u2014 ' + m[5] + '  (type STOP to stop)', 'c-hi');
        if (window.HWCOUNT){ HWCOUNT.event('play/' + m[0], 'PLAY ' + m[1] + ' (terminal)'); }
    }).catch(function(){ say('THE PLAYER COULD NOT LOAD. TRY THE MOD AREA.', 'c-er'); });
}

/* ---------- commands ---------- */
var BAUDS = [300, 1200, 2400, 9600, 14400, 28800, 33600, 56000];
var history = [], hpos = 0;
function help(){
    say([
        '\u2550\u2550\u2550 TERMINAL HELP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550',
        ' DIR [/W]        list files            CD <DIR> / CD ..   change directory',
        ' TYPE <FILE>     read a file / show an ANSI',
        ' PLAY <TRACK>    play a module          STOP              stop the music',
        ' RUN <DOOR>      open a door game       BAUD <SPEED>      change modem speed',
        ' CLS             clear the screen       VER / TIME / WHO  system info',
        ' EXIT            close the terminal     BYE               log off the board',
        ' TELNET          call other boards (coming soon)',
        '',
        ' Every board command works here too: MUSIC, MODS, ART, DOORS, NOVA, UFO, SYSOP...',
        ' TAB completes names, \u2191 \u2193 recall commands, ESC skips slow output.',
        '\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550'
    ].join('\n'));
}
function exec(raw){
    var line = raw.trim();
    say(path() + line, 'c-cy');
    if (!line) return;
    history.push(line); hpos = history.length;
    var parts = line.split(/\s+/), c = parts[0].toUpperCase(), arg = parts.slice(1).join(' '), A = arg.toUpperCase();

    if (/^CD\.\.$/.test(c)){ c = 'CD'; A = '..'; }
    if (/^CD\\$/.test(c)){ c = 'CD'; A = '\\'; }

    switch (c){
    case 'HELP': case '?': help(); return;
    case 'CLS': case 'CLEAR': outEl.innerHTML = ''; return;
    case 'DIR': case 'LS': dir(/\/W/.test(A)); return;
    case 'CD': case 'CHDIR':
        if (!A){ say(path().slice(0, -1)); return; }
        if (A === '..' ){ cwd.pop(); return; }
        if (A === '\\' || A === '/'){ cwd = []; return; }
        var target = A.replace(/^\\?BBS\\?/, '').replace(/[\\\/]+$/, '');
        if (!cwd.length && entries().dirs.indexOf(target) >= 0){ cwd = [target]; return; }
        say('Invalid directory', 'c-er'); return;
    case 'TYPE': case 'CAT': case 'MORE': case 'VIEW':
        if (!A){ say('Required parameter missing', 'c-er'); return; }
        var f = findFile(A);
        if (!f && cwd[0] !== 'ANSI'){ var a = null; ANSIFILES.forEach(function(x){ if (x[0] === A || x[0].split('.')[0] === A) a = x; }); if (a) f = [a[0], a[1], a[2], 'ansi', a]; }
        if (!f){ say('File not found - ' + A, 'c-er'); return; }
        if (f[3] === 'txt'){ say(README); return; }
        if (f[3] === 'secret'){ say(SECRET, 'c-er'); return; }
        if (f[3] === 'ansi'){ showAnsi(f[0]); return; }
        if (f[3] === 'bull'){ var b = f[4]; say(b.head, 'c-hi'); say('POSTED ' + b.date, 'c-dim'); say(wrap(b.text, 76)); say(''); return; }
        if (f[3] === 'mod'){ say('That is music, not text. Try: PLAY ' + f[0].split('.')[0], 'c-pk'); return; }
        if (f[3] === 'door'){ say('MZ\u00ff\u00ff\u2591\u2592\u2593 ...binary. Try: RUN ' + f[0].split('.')[0], 'c-pk'); return; }
        return;
    case 'PLAY':
        if (!A){ say('Usage: PLAY <TRACK>   e.g. PLAY WHYME  \u2014 see DIR in MODS', 'c-er'); return; }
        var m = findMod(A);
        if (!m){ say('Track not found - ' + A, 'c-er'); return; }
        play(m); return;
    case 'STOP':
        if (player){ try { player.stop(); } catch(e){} }
        say(nowPlaying ? 'STOPPED: ' + nowPlaying[4] : 'NOTHING IS PLAYING.', 'c-dim'); nowPlaying = null; return;
    case 'RUN': case 'START': case 'RAID': case 'TOWER': case 'CHESS': case 'RAID.EXE': case 'TOWER.EXE': case 'CHESS.EXE':
        var name = (c === 'RUN' || c === 'START' ? A : c).replace('.EXE', '');
        var d = null; DOORS.forEach(function(x){ if (x[0].split('.')[0] === name) d = x; });
        if (!d){ say('Bad command or file name', 'c-er'); return; }
        say('LOADING ' + d[0] + '...', 'c-bl');
        then(function(){ setTimeout(function(){ location.href = d[3]; }, 400); });
        return;
    case 'BAUD': case 'SPEED': case 'MODE':
        var sp = parseInt(A, 10);
        if (!sp){ say('CURRENT SPEED: ' + BAUD + ' BPS. Try: BAUD 2400  (' + BAUDS.join(' / ') + ')'); return; }
        if (BAUDS.indexOf(sp) < 0){ say('NO CARRIER AT THAT SPEED. Try one of: ' + BAUDS.join(' / '), 'c-er'); return; }
        BAUD = sp; document.getElementById('hwbaud').textContent = sp;
        say('CONNECT ' + sp + (sp <= 2400 ? '  ...grab a coffee.' : ''), 'c-bl'); return;
    case 'VER':
        say('HENNUPWOOD BBS v1.0 \u2014 TERMINAL MODE \u2014 ANSI-BBS EMULATION, ' + BAUD + ' BPS', 'c-hi'); return;
    case 'ECHO': say(arg); return;
    case 'MEM': say('655,360 bytes total conventional memory\n640K ought to be enough for anybody.'); return;
    case 'TELNET':
        say('TELNET is being wired up by the sysop. Coming soon: call real BBSes that are still online.', 'c-pk'); return;
    case 'EXIT': case 'QUIT': case 'Q': close(); return;
    }
    /* everything else: the normal board commands (NOVA, UFO, SYSOP, WHO, TIME, MUSIC, ...) */
    if (window.HWBBS && HWBBS.exec(line, function(t, cls){
        var map = { 'l-cmd':'c-cy', 'l-hi':'c-hi', 'l-pk':'c-pk', 'l-bl':'c-bl', 'l-err':'c-er' };
        say(t, map[cls] || '');
    })) return;
    say('Bad command or file name', 'c-er');
}

/* ---------- keyboard ---------- */
function complete(){
    var v = inp.value, parts = v.split(/\s+/), lastW = (parts[parts.length - 1] || '').toUpperCase();
    var pool = parts.length === 1
        ? ['HELP','DIR','CD','TYPE','PLAY','STOP','RUN','BAUD','CLS','VER','EXIT','BYE','TELNET','WHO','TIME','NOVA','UFO','UFOS']
        : (parts[0].toUpperCase() === 'CD' ? entries().dirs.concat(['..'])
           : parts[0].toUpperCase() === 'PLAY' ? MODS.map(function(m){ return m[1].split('.')[0].replace(/^DL[_#]/, '').replace(/^\(C\)/, ''); })
           : parts[0].toUpperCase() === 'RUN' ? DOORS.map(function(d){ return d[0].split('.')[0]; })
           : entries().files.map(function(f){ return f[0]; }));
    var hits = pool.filter(function(p){ return p.indexOf(lastW) === 0; });
    if (hits.length === 1){ parts[parts.length - 1] = hits[0]; inp.value = parts.join(' ') + (parts.length === 1 ? ' ' : ''); }
    else if (hits.length > 1) say(hits.join('  '), 'c-dim');
    txEl.textContent = inp.value;
}
inp.addEventListener('input', function(){ inp.value = inp.value.toUpperCase().slice(0, 70); txEl.textContent = inp.value; });
inp.addEventListener('keydown', function(e){
    e.stopPropagation();
    if (e.key === 'Escape'){ e.preventDefault(); if (busy()) skip(); else close(); return; }
    if (busy()) { if (e.key === 'Enter') e.preventDefault(); return; }
    if (e.key === 'Enter'){ e.preventDefault(); var v = inp.value; inp.value = ''; txEl.textContent = ''; exec(v); }
    else if (e.key === 'Tab'){ e.preventDefault(); complete(); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); if (history.length){ hpos = Math.max(0, hpos - 1); inp.value = history[hpos]; txEl.textContent = inp.value; } }
    else if (e.key === 'ArrowDown'){ e.preventDefault(); hpos = Math.min(history.length, hpos + 1); inp.value = history[hpos] || ''; txEl.textContent = inp.value; }
    else if (e.key === 'l' && e.ctrlKey){ e.preventDefault(); outEl.innerHTML = ''; }
});
inp.addEventListener('keyup', function(e){ e.stopPropagation(); });

/* ---------- open / close ---------- */
var opened = false;
function open(){
    win.classList.add('open');
    setTimeout(function(){ inp.focus(); }, 30);
    if (!opened){
        opened = true;
        say('ATDT HENNUPWOOD', 'c-dim');
        say('CONNECT ' + BAUD + '/ARQ/V34/LAPM/V42BIS', 'c-bl');
        say('');
        showAnsi('DA-LAMA.ANS');
        then(function(){
            say('Welcome to the HENNUPWOOD BBS terminal, caller.', 'c-hi');
            say('Type HELP for commands, or TYPE README.TXT to start.', '');
            say('');
        });
        if (window.HWCOUNT) HWCOUNT.event('terminal/open', 'TERMINAL opened');
    }
    setPrompt();
}
function close(){ win.classList.remove('open'); inp.blur(); }
function toggle(){ if (win.classList.contains('open')) close(); else open(); }

window.HWTERM = { open:open, close:close, toggle:toggle, say:say, exec:exec };
})();
