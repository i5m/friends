//const con = document.getElementsByClassName("container")[0];
const sc = document.getElementById("sidecar");
const dd = document.getElementById("des-details").getElementsByTagName("div");
const dh = document.getElementById("des-heading");
const dt = document.getElementById("des-text");
const scb = document.getElementById("season-chooser");
//const wb = document.getElementById("watch-btn");
const sl = document.getElementById("season-list");
const ms = document.getElementById("main-section");

const files_loc = "data/";
var data;
var explore;

const about = 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.';

function season_list_inject() {
    var s = '';
    for(var i = 1; i <= 10; i++) {
        s += '<button class="season-number p-4 m-4" id="S'+i+'" onclick="season_open(this.id)">' +
                '<img src="img/s/'+i+'.svg" width="35" class="mr-12 ml-12">' +
                '<span class="bold-text">Season '+i+'</span>' +
            '</button>';
    }
    sl.innerHTML = s;
}

if(screen.width > 850) {
    sc.classList.add("pos-fixed");
}

function opt_switcher() {
    if(screen.width > 850) {
        sc.classList.toggle("pos-absolute");
        sc.classList.toggle("pos-fixed");
    }
    document.body.scrollTop;
}

function xreq(url) {
    var res;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(url == "s.json") { data = JSON.parse(this.responseText); }
            else { explore = this.responseText; }
        }
    };
    xhttp.open("GET", files_loc + url, true);
    xhttp.send();
}

function season_open(s) {
    scb.toggleAttribute("open");
    opt_switcher();
    jf = data[s];
    dh.innerHTML = "Season " + jf["season"];
    dt.innerHTML = jf["about"];
    dd[0].getElementsByTagName("span")[0].innerHTML = "Year " + jf["year"];
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
                '<button class="pos-relative mb-4 tal" id="'+epi_num+'" onclick="watch_epi(this.id)">' +
                    '<span class="main-bg bold-text br-5 p-4 pr-8 pl-8 pos-absolute">'+wen+'</span>' +
                    '<img  src="'+img_src+'">' +
                    '<h6 class="m-4 title main-color">'+title+'</h6>' +
                '</button>' +
                '<details>' +
                    '<summary class="bold-text sec-color pointer">Description</summary>' +
                    '<p class="sec-color">'+desc+'</p>' +
                '</details>' +
            '</div>';
    }
    s += '</div>';
    s += '<button class="primary-border br-10 p-8 pr-12 pl-12 primary-color" onclick="go_home()"><h5>Go to Home</h5></button><br/><br/>';
    ms.innerHTML = s;
}

function go_home() {
    dh.innerHTML = "Friends";
    dt.innerHTML = about;
    ms.innerHTML = explore;
    dd[0].getElementsByTagName("span")[0].innerHTML = "Year " + "1994 - 2004";
    dd[1].getElementsByTagName("span")[0].innerHTML = "Rating: 8.9 Stars";
}

xreq("explore.html");
go_home();
season_list_inject();
xreq("s.json");
