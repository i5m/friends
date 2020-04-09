const sc = document.getElementById("sidecar");
const dd = document.getElementById("des-details").getElementsByTagName("div");
const dn = document.getElementById("des-num");
const dh = document.getElementById("des-heading");
const dt = document.getElementById("des-text");
const scb = document.getElementById("season-chooser");
const cb = document.getElementById("cloud-btn");
const wb = document.getElementById("watch-btn");
const sl = document.getElementById("season-list");
const cc = document.getElementById("centercar");
const ms = document.getElementById("main-section");
const vb = document.getElementById("video-box");
const video = document.getElementById('epi-video');
const files_loc = "data/";
const about = 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.';
const torrent_main = 'magnet:?xt=urn:btih:09408d97dd210ba9835e566fd390c8ad09c177bf&dn=Friends.Complete.Series.S01-S10.720p.BluRay.2CH.x265.HEVC-PSA&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969';
const torrents = [
    'magnet:?xt=urn:btih:1df3b55a3c4ff2cc1de22012ca18c548afcecf8e&dn=Friends+Season+1+COMPLETE+720p.BRrip.sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:888c2eaaec08af1eab6fa8ead16776910d0832f9&dn=Friends+Season+2+COMPLETE.720p.BRrip.sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:d2503e8cf9766743978135772cdd533af57cb3ee&dn=Friends+Season+3+Complete+720p.BRrip.Sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:b4a8fc36109ba5499702a3c62255880e90ca2f46&dn=Friends+Season+4+Complete+720p.BRrip.Sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:59edfa942325bbf240d26cac366d65f9baaedde4&dn=Friends+Season+5+Complete+720p.BRrip.mrlss.sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:072c34f7b5bde907829a32e60e55d22182c78c41&dn=Friends+Season+6+Complete+720p.BRrip.mrlss.sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:98f33c6f1f9d40a9014f02841d8bc1e0ef9ee1bd&dn=Friends+Season+7+Complete.720p.BRrip.mrlss.sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:ec55d00bbde4f92d94dbb9268bfee258178f20df&dn=Friends+Season+8+Complete+720p.BRrip.mrlss.sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:95e340a37867ce9270b9fda9270ed9236f093bba&dn=Friends+Season+9+Complete+720p.BRrip.mrlss.Sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
    'magnet:?xt=urn:btih:753c3b362e22ee808b49f8e864b99fded7fdab57&dn=Friends+Season+10+Complete+720p.BRrip.Sujaidr+%28pimprg%29&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
]
var data = explore = jf = dh_temp = dt_temp = source = sw = '';

function season_list_inject() {
    var s = '';
    for(var i = 1; i <= 10; i++) {
        s += '<button class="season-number p-4 m-4 tal" id="S'+i+'" onclick="season_open(this.id)">' +
                '<img src="img/s/'+i+'.svg" width="35" class="mr-12 ml-12">' +
                '<span>Season '+i+'</span>' +
            '</button>';
    }
    sl.innerHTML = s;
}

if(screen.width > 950) { sw = true; }
else { sw = false; }

if(sw) {
    sc.classList.add("pos-fixed");
    cc.classList.add("pos-absolute");
}

function opt_switcher() {
    if(sw) {
        sc.classList.toggle("pos-absolute");
        sc.classList.toggle("pos-fixed");
    }
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

function animationRouter(element, str, animationOutName, animationInName) {
        if(str != null) { element.innerHTML = str; }
        element.classList.add('animated', animationInName);
        element.addEventListener('animationend', function() {
            element.classList.remove('animated', animationInName);
        });
}

function xreq(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(url == "ss.json") {
                data = JSON.parse(this.responseText);
            } else if(url == "explore.html") {
                explore = this.responseText;
                go_home();
            }
        }
    };
    xhttp.open("GET", files_loc + url, true);
    xhttp.send();
}

function go_home() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    cb.href = torrent_main;
    dh.innerHTML = "Friends";
    dt.innerHTML = about;
    dd[0].getElementsByTagName("span")[0].innerHTML = "Range: <b>1994 - 2004</b>";
    dd[1].getElementsByTagName("span")[0].innerHTML = "Most Viewed: <b>The One Where Rachel Has a Baby</b>";
    animationRouter(sc, null, null, "bounceInLeft");
    animationRouter(ms, explore, null, "bounceInRight");
}

function season_open(s) {
    scb.toggleAttribute("open");
    opt_switcher();
    jf = data[s];
    dh.innerHTML = "Season " + jf["season"];
    dt.innerHTML = jf["about"];
    dd[0].getElementsByTagName("span")[0].innerHTML = "Year: <b>" + jf["year"] + "</b>";
    dd[1].getElementsByTagName("span")[0].innerHTML = "Most Viewed: <b>" + jf["mv"] + "</b>";
    cb.href = torrents[s.slice(1)-1];
    var s = '';
    s += '<div class="row-complex">';
    for (var i in jf["timeline"]) {
        epi_num = i;
        img_src = jf["timeline"][i]["img_src"];
        title = jf["timeline"][i]["title"];
        rating = jf["timeline"][i]["rating"];
        airdate = jf["timeline"][i]["airdate"];
        vid_link = jf["timeline"][i]["vid"];
        desc = jf["timeline"][i]["des"];
        wen = epi_num.split("E");
        wen = wen[0] + " &#9900; E" + wen[1];
        s += '<div class="episode-number col">' +
                '<button class="pos-relative tal" id="'+epi_num+'" onclick="watch_epi(this.id)" onmouseover="showSVidLong(this)" onmouseout="hideSVidLong(this)">' +
                    '<span class="main-bg p-4 pr-8 pl-8 pos-absolute">'+wen+'</span>' +
                    '<img src="'+img_src+'">' +
                    '<video class="none-box" loop autoplay></video>' +
                    '<h6 class="m-4 p-4 title main-color bold-text br-5">'+title+'</h6>' +
                '</button>' +
                '<details onclick="showSVid_det(this)">' +
                    '<summary class="sec-color pointer">Description</summary>' +
                    '<p class="sec-color p-4 m-4 pl-8 br-5">'+desc+'</p>' +
                '</details>' +
            '</div>';
    }
    s += '</div>';
    s += '<br/><button class="primary-border br-10 p-8 pr-12 pl-12 primary-color" onclick="go_home()"><h6>Go to Home</h6></button><br/><br/><br/>';
    animationRouter(sc, null, null, "bounceInLeft");
    animationRouter(ms, s, null, "bounceInRight");
}

function showSVidLong(x) {
    vvv = x.getElementsByTagName("video")[0];
    vvv.setAttribute("src", "data/clips/" + x.id + ".mp4");
    vvv.classList.remove("none-box");
    x.getElementsByTagName("img")[0].classList.add("none-box");
}
function hideSVidLong(x) {
    vvv = x.getElementsByTagName("video")[0];
    vvv.setAttribute("src", "");
    vvv.classList.add("none-box");
    x.getElementsByTagName("img")[0].classList.remove("none-box");
}
function showSVid_det(x) {
    if(x.open == false) { showSVidLong(x.previousSibling); }
    else { hideSVidLong(x.previousSibling); }
}

function watch_epi(epi_id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(sw) {
        cc.style.left = 0;
        cc.style.right = "auto";
        sc.style.right = 0;
        sc.style.left = "auto";
    } else {
        cc.parentNode.insertBefore(cc, sc);
    }
    var nb_lst = [ms, vb, wb, dd[0], dd[1], dn];
    for(var i in nb_lst) {
        nb_lst[i].classList.toggle("none-box");
    }
    wen = epi_id.split("E");
    wen = wen[0] + " &#9900; E" + wen[1];
    dn.innerHTML = wen;
    dh_temp = dh.innerHTML;
    dh.innerHTML = jf["timeline"][epi_id]["title"];
    dt_temp = dt.innerHTML;
    dt.innerHTML = jf["timeline"][epi_id]["des"];
    animationRouter(cc, null, null, "bounceInLeft");
    animationRouter(sc, null, null, "bounceInRight");

    source = document.createElement('source');
    source.setAttribute("poster", jf["timeline"][epi_id]["img_src"]);
    //source.setAttribute("type", "video/mp4");
    source.setAttribute("src", "data/clips/S3E5.mp4");
    video.appendChild(source);
    video.play();
}

function back_epi() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    video.removeChild(source);
    if(sw) {
        cc.style.left = "auto";
        cc.style.right = 0;
        sc.style.right = "auto";
        sc.style.left = 0;
    } else {
        sc.parentNode.insertBefore(sc, cc);
    }
    animationRouter(cc, null, null, "bounceInRight");
    animationRouter(sc, null, null, "bounceInLeft");
    var nb_lst = [ms, vb, wb, dd[0], dd[1], dn];
    for(var i in nb_lst) {
        nb_lst[i].classList.toggle("none-box");
    }
    dh.innerHTML = dh_temp;
    dt.innerHTML = dt_temp;
}

function share_btn() {
    var dummy = document.createElement('input'),
    txt = window.location.href;
    document.body.appendChild(dummy);
    dummy.value = txt;
    dummy.select();
    dummy.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("URL copied, share with friends & family!");
}

season_list_inject();
xreq("ss.json");
xreq("explore.html");
