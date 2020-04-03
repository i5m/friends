var con = document.getElementsByClassName("container")[0];
var mi = document.getElementById("main-img");
var oc = document.getElementsByClassName("opt-container")[0];
var fc = document.getElementsByClassName("file-container")[0];
var wb = document.getElementById("watch-btn");
var eb = document.getElementById("explore-btn");
var scb = document.getElementById("season-chooser-box");

function season_box() {
    var slb = document.getElementById("season-list-box");
    var s = '';
    for(var i = 1; i <= 10; i++) {
        s += '<button class="season-number main-bg p-4 m-8" id="s'+i+'" onclick="season_open(this.id)">' +
                '<img src="img/s/s'+i+'.png" class="br-round mr-12 ml-12">' +
                '<span class="bold-text">Season '+i+'</span>' +
            '</button>';
    }
    slb.innerHTML = s;
}

if(screen.width > 850) {
    oc.classList.add("pos-fixed");
}

function opt_swithcer() {
    scb.classList.toggle("none-box");
    wb.classList.toggle("active-btn");
    if(screen.width > 850) {
        oc.classList.toggle("pos-absolute");
        oc.classList.toggle("pos-fixed");
    }
    oc.scrollTop = 0;
}

function xreq(h_file_url) {
    var hf = "files/";
    var a;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(h_file_url == "about.html" || h_file_url == "explore.html") {
                a = this.responseText;
            } else {
                jf = JSON.parse(this.responseText);
                a = season_epi_disp(jf);
            }
            fc.innerHTML = a;
        }
    };
    xhttp.open("GET", hf + h_file_url, true);
    xhttp.send();
}

function season_open(s_id) {
    mi.src = "img/sb/"+s_id+".jpg";
    if(s_id == "s10") { mi.classList.add("main-img-10"); }
    else { mi.classList.remove("main-img-10"); }
    opt_swithcer();
    xreq(s_id+".json");
}

function season_epi_disp(jf) {
    var s = '<div class="p-8 m-4 season-about"><h1>Season ' + jf["season"] + '</h1>' + jf["about"] + '</div>';
    s += '<div class="row-complex">';
    for (var i in jf["timeline"]) {

        epi_num = i;
        img_src = jf["timeline"][i]["img_src"];
        title = jf["timeline"][i]["title"];
        rating = jf["timeline"][i]["rating"];
        airdate = jf["timeline"][i]["airdate"];
        vid_link = jf["timeline"][i]["vid"];
        des = jf["timeline"][i]["des"];

        wen = epi_num.split("E");
        wen = wen[0] + "&#9900;E" + wen[1];

        s += '<div class="episode-number col">' +
                '<button class="main-bg pos-relative mb-4" id="'+epi_num+'" onclick="watch_epi(this.id)">' +
                    '<span class="main-bg sec-color bold-text br-5 p-4 pr-8 pl-8 pos-absolute">'+wen+'</span>' +
                    '<img  src="'+img_src+'">' +
                    '<h3>'+title+'</h3>' +
                '</button>' +
                '<details>' +
                    '<summary class="bold-text grey-color">Description</summary>' +
                    '<p class="grey-color">'+des+'</p>' +
                '</details>' +
            '</div>';
    }
    return s+"</div>";
}

function go_home() { mi.src = "img/f_main.png"; xreq("about.html"); }

function go_explore() { xreq("explore.html"); }

season_box();
xreq("about.html");