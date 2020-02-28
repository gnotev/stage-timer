
// usage: playSnd("folderpath","snd1.mp3" or "snd1.mp3,snd2.mp3,snd3.mp3....")
var aud = new Audio();
var isPlayingList = false;
var curSndInList = 0;
var sndList=[];
var sndPth = "snd";

function playSnd(pth,fn) {
    console.log("playSnd("+pth,fn+")")
    sndPth = pth;
    sndList=fn.split(",");
    if(sndList.length) {isPlayingList = true;curSndInList=0;}
    else isPlayingList = false;
    aud.src = sndPth+"/"+sndList[curSndInList];
    aud.play();

    console.log("playSnd ",sndList[0]);
}

function stopSnd() {
    console.log("stopSnd");
    if(isPlayingList) isPlayingList = false;

    // cant stop when not playing. to FIX LIST ALSO  aud.stop();
    $('#sndStopBut').css('background', 'url(img/spkrX.png)');
}


aud.onended = function() {
    if(isPlayingList){
        curSndInList++;
        if (curSndInList<sndList.length){
            console.log("snd.js: playing next sound");
            aud.src = sndPth+"/"+sndList[curSndInList];
            aud.play();
        }
        else{
            isPlayingList = false;
            console.log("gsjs: done");
        }
    }

};
