window.addEventListener("load",()=>{
    let videoId= "MsL3Wl2XGeo";
    if(YT){
        new YT.Player("videoPlayer",{
            height:"500",
            width:"1000",
            videoId,
            events:{
                onReady:function(e){
                    e.target.playVideo();
                }
            }
        })
    }
})