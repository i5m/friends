//const con = document.getElementsByClassName("container")[0];
const sidecar = document.getElementById("sidecar");
const des_details = document.getElementById("des-details");
const des_details_time = document.getElementById("des-details-time");
const des_details_fav = document.getElementById("des-details-fav");
const des_num = document.getElementById("des-num");
const des_heading = document.getElementById("des-heading");
const des_text = document.getElementById("des-text");
const season_chooser = document.getElementById("season-chooser");
const cloud_btn = document.getElementById("cloud-btn");
const watch_btn = document.getElementById("watch-btn");
const season_list = document.getElementById("season-list");
const centercar = document.getElementById("centercar");
const main_section = document.getElementById("main-section");
const video_box = document.getElementById("video-box");
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
var data = jf = dh_temp = dt_temp = source = screen_width = '';
const char_names = ['chandler', 'monica', 'pheobe', 'joey', 'ross', 'rachel'];
const char_specialities = ['sarcastic', 'clean', 'live', 'flirt', 'care', 'dress'];

var explore = '<div id="char-special" class="pos-relative">' +
                '<h1>' +
                    '<span id="char-name"></span>' +
                    '<span id="like-middle">L.I.K.E</span>' +
                    '<span id="char-speciality"></span>' +
                '</h1>' +
                '<img class="char-img">' +
            '</div>';

function season_list_inject() {
    var s = '';
    for(var i = 1; i <= 10; i++) {
        s += '<button class="season-number p-4 mt-4 mb-4 tal" id="S'+i+'" onclick="season_open(this.id)">' +
                '<img src="img/s/'+i+'.svg" width="28" class="mr-8 ml-8 p-4 br-round sec-bg">' +
                '<span class="h5 bold-text ml-4">Season '+i+'</span>' +
            '</button>';
    }
    season_list.innerHTML = s;
}

if(screen.width > 960) { screen_width = true; }
else { screen_width = false; }

if(screen_width) {
    sidecar.classList.add("pos-fixed");
    centercar.classList.add("pos-absolute");
}

function opt_switcher() {
    /*wb.classList.add('animated', 'tada');
    wb.addEventListener('animationend', function() {
        wb.classList.remove('animated', 'tada');
    });*/
    if(screen_width) {
        sidecar.classList.toggle("pos-absolute");
        sidecar.classList.toggle("pos-fixed");
    }
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

function animationRouter(element, str, animationOutName, animationInName) {
    //element.classList.add('animated', animationOutName);
    //element.addEventListener('animationend', function() {
        //element.classList.remove('animated', animationOutName);
        if(str != null) { element.innerHTML = str; }
        element.classList.add('animated', animationInName);
        element.addEventListener('animationend', function() {
            element.classList.remove('animated', animationInName);
        });
    //});
}

function xreq(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(url == "ss.json") {
                data = JSON.parse(this.responseText);
            }
        }
    };
    xhttp.open("GET", files_loc + url, true);
    xhttp.send();
}

function go_home() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    cloud_btn.href = torrent_main;
    des_heading.innerHTML = "<h1 class='bold-text'>Friends</h1>";
    des_text.innerHTML = about;
    des_details_time.innerHTML = "Range: <b>1994 - 2004</b>";
    des_details_fav.innerHTML = "Most Viewed: <b>The One Where Rachel Has a Baby</b>";
    animationRouter(sidecar, null, null, "bounceInLeft");
    animationRouter(main_section, explore, null, "bounceInRight");
    char_transition();
}

function char_transition() {
    var char_name = document.getElementById("char-name");
    var char_speciality = document.getElementById("char-speciality");
    var i = 0;
    vasetInterval(function() {
        console.log(i);
        char_name.innerHTML = cs[i];
        char_speciality.innerHTML = cn[i];
        i++;
        if(i==6){ i = 0; }
    }, 1000);
}

function season_open(s) {
    season_chooser.toggleAttribute("open");
    opt_switcher();
    jf = data[s];
    des_heading.innerHTML = "<h2 class='bold-text'>Season " + jf["season"] + "</h2>";
    des_text.innerHTML = jf["about"];
    des_details_time.innerHTML = "Year: <b>" + jf["year"] + "</b>";
    des_details_fav.innerHTML = "Most Viewed: <b>" + jf["mv"] + "</b>";
    cloud_btn.href = torrents[s.slice(1)-1];
    var s = '';
    s += '<div class="row-complex tal">';
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
                '<button id="'+epi_num+'-btn" class="pos-relative tal" onclick="watch_epi(this.id)">' +
                    '<span class="main-bg p-4 pr-8 pl-8 pos-absolute">'+wen+'</span>' +
                    '<video id="'+epi_num+'-vid" loop autoplay poster="'+img_src+'" onmouseover="showSVid(this)" onmouseout="hideSVid(this)"></video>' +
                    '<h5 class="p-4 title main-color bold-text br-5">'+title+'</h5>' +
                '</button>' +
                '<details onclick="showSVid_det(this)">' +
                    '<summary class="sec-color pointer">Description</summary>' +
                    '<p class="sec-color p-4 m-4 pl-8 br-5">'+desc+'</p>' +
                '</details>' +
            '</div>';
    }
    s += '</div>';
    s += '<br/><button class="primary-border br-10 p-8 pr-12 pl-12 primary-color" onclick="go_home()"><h6>Go to Home</h6></button><br/><br/><br/>';
    animationRouter(sidecar, null, null, "bounceInLeft");
    animationRouter(main_section, s, null, "bounceInRight");
}

function showSVid(x) { x.setAttribute("src", "data/clips/" + x.id.substring(0, x.id.length-4) + ".mp4"); }
function hideSVid(x) { x.setAttribute("src", ""); }
function showSVid_det(x) {
    if(x.open == false) { showSVid(x.previousSibling.getElementsByTagName("video")[0]); }
    else { hideSVid(x.previousSibling.getElementsByTagName("video")[0]); }
}

function watch_epi(epi_id) {
    epi_id = epi_id.substring(0, epi_id.length-4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(screen_width) {
        centercar.style.left = 0;
        centercar.style.right = "auto";
        sidecar.style.right = 0;
        sidecar.style.left = "auto";
    } else {
        centercar.parentNode.insertBefore(centercar, sidecar);
    }
    var nb_lst = [main_section, video_box, watch_btn, des_details, des_num];
    for(var i in nb_lst) {
        nb_lst[i].classList.toggle("none-box");
    }
    wen = epi_id.split("E");
    wen = wen[0] + " &#9900; E" + wen[1];
    des_num.innerHTML = wen;
    dh_temp = des_heading.innerHTML;
    des_heading.innerHTML = "<h3 class='bold-text'>" + jf["timeline"][epi_id]["title"] + "</h3>";
    dt_temp = des_text.innerHTML;
    des_text.innerHTML = jf["timeline"][epi_id]["des"];
    animationRouter(centercar, null, null, "bounceInLeft");
    animationRouter(sidecar, null, null, "bounceInRight");

    source = document.createElement('source');
    source.setAttribute("poster", jf["timeline"][epi_id]["img_src"]);
    //source.setAttribute("type", "video/mp4");
    source.setAttribute("src", "data/clips/S3E5.mp4");
    video.appendChild(source);
    video.play();
    
    /*source = document.createElement("iframe");
    source.setAttribute("src", "https://youtube.googleapis.com/embed/?autohide=1&html5=1&ps=picasaweb&use_native_controls=0&enablecastapi=0&color=white&mute=false&enablejsapi=1&origin=https%3A%2F%2Fphotos.google.com&widgetid=1");
    video.appendChild(source);
    video.setAttribute("src", "https://download948.mediafire.com/xtt3cyz8uvag/8dryh3bn9jqqmc7/Friends.S02E02.The.One.with.the.Breast.Milk.720p.BluRay.2CH.x265.HEVC-PSA.mkv");*/
}

function back_epi() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    video.removeChild(source);
    if(screen_width) {
        centercar.style.left = "auto";
        centercar.style.right = 0;
        sidecar.style.right = "auto";
        sidecar.style.left = 0;
    } else {
        sidecar.parentNode.insertBefore(sidecar, centercar);
    }
    animationRouter(centercar, null, null, "bounceInRight");
    animationRouter(sidecar, null, null, "bounceInLeft");
    var nb_lst = [main_section, video_box, watch_btn, des_details, des_num];
    for(var i in nb_lst) {
        nb_lst[i].classList.toggle("none-box");
    }
    des_heading.innerHTML = dh_temp;
    des_text.innerHTML = dt_temp;
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
go_home();