const playList = document.querySelector(".playList");
const form = document.querySelector("form");
const baseUrl = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyBl60n6hgJqyAN5PjAiqWyc23mJ85zOrA8";
async function fectchVideos(searchQuery,maxResults){
    try{
        const response = await fetch(baseUrl+"/search"+`?key=${API_KEY}`+'&part=snippet'+`&q=${searchQuery}`)
        let data = await response.json();
        renderData(data.items)
    }
    catch(e){
        console.log(e);
    }
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fectchVideos(form.search.value);
})
function renderData(data){
    console.log(data)
    for(let i=0;i<data.length;i++){
        let timer1 = new Date(data[i].snippet.publishedAt);
        let timer2 = new Date();
        let result = ((timer2-timer1)/1000);
        let time;
        if(result<60){
            time= `${Math.round(result)} seconds ago`;
        }
        else if(result>60 && result<(60*60)){
            time= `${Math.round(result/60)} minutes ago`;
        }
        else if(Math.round((result/(60*60))/24)<1){
            time= `${Math.floor(result/(60*60))} hours ago`;
        }
        else if(Math.round((result/(60*60))/24)>=1 && Math.round((result/(60*60))/24)<365){
            time= `${Math.floor((result/(60*60))/24)} days ago`;
        }
        else{
            time= `${Math.floor(((result/(60*60))/24)/365)} years ago`;
        }
        let div = document.createElement("div");
        div.className="video";
        div.innerHTML=`
            <img
              src="${data[i].snippet.thumbnails.medium.url}"
              alt=""
            />
          <div class="aboutVideo">
            <div class="title">${data[i].snippet.title}</div>
            <div class="time">${time}</div>
            <div class="channelName">
                <img src="" alt="">
                <span>${data[i].snippet.channelTitle}</span>
            </div>
            <div class="discription">${data[i].snippet.description}</div>
          </div>`
        playList.appendChild(div);
    }
}