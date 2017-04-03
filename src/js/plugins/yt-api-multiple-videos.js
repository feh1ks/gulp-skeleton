window.ytPlayerList = [];
window.players = [];

window.ytPlayerList.push({
    Id: 'js_youtube_video_1',
    DivId: 'js_youtube_video_1',
    VideoId: 'IaHxPi9dM7o',
    StateChangeHandler: 'hide_player_1'
});
window.ytPlayerList.push({
    Id: 'js_youtube_video_2',
    DivId: 'js_youtube_video_2',
    VideoId: 'IaHxPi9dM7o',
    StateChangeHandler: 'hide_player_2'
});
window.ytPlayerList.push({
    Id: 'js_youtube_video_3',
    DivId: 'js_youtube_video_3',
    VideoId: 'IaHxPi9dM7o',
    StateChangeHandler: 'hide_player_3'
});

function onYouTubeIframeAPIReady() {
    initVideos();
}

function initVideos() {
    for (var i = 0; i < ytPlayerList.length; i++) {
        var player = ytPlayerList[i];
        var pl = new YT.Player(player.DivId, {
            width: '100%',
            height: '240',
            videoId: player.VideoId,
        });
        window[player.Id] = pl;
    }
}

window.js_youtube_video_1.playVideo();

/*HTML
=====================================*/
//<div id="js_youtube_video_1"></div>
//<div id="js_youtube_video_2"></div>
//<div id="js_youtube_video_3"></div>
