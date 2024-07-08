const videos = document.querySelector(".video");
const form = document.querySelector("form");
const form2 = document.querySelector(".form2");
const mainBar = document.querySelector(".mainBar");
const sec2 = document.querySelector(".sec2");
const baseUrl = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyBqB77kHOwD6T6MnvD1bhQvOQpGlfBq18k";
async function fectchVideos() {
  try {
    const response = await fetch(
      baseUrl +
        "/search" +
        `?key=${API_KEY}` +
        "&part=snippet" +
        `&maxResults=45`
    );
    let data = await response.json();
    renderData(data.items);
  } catch (e) {
    console.log(e);
  }
}
form.addEventListener("submit", wantedVideos);
async function wantedVideos(e) {
  e.preventDefault();
  videos.style.display = "none";
  try {
    const response = await fetch(
      baseUrl +
        "/search" +
        `?key=${API_KEY}` +
        "&part=snippet" +
        `&q=${form.search.value}` +
        `&maxResults=20`
    );
    console.log(form.search.value)
    let data = await response.json();
    renderData1(data.items);
  } catch (e) {
    console.log(e);
  }
}
fectchVideos();

async function renderData1(data) {
  if(mainBar.children[1]){
    mainBar.children[1].remove();
  }
  const videos1 = document.createElement("div");
  videos1.className="videoContainer";
  mainBar.appendChild(videos1);
  for (let i = 0; i < data.length; i++) {
    let data3 = await fetchChannel(data[i].snippet.channelId);
    let data2 = await fetchVideostas(data[i].id.videoId, "statistics");
    function viewsLikes(count) {
      let views;
      if (count < 1000) {
        views = count;
      } else if (count > 1000 && count < 1000000) {
        views = Math.floor(count / 1000) + "K";
      } else {
        views = Math.floor(count / 1000000) + "M";
      }
      return views;
    }
    function time(t) {
      let timer2 = new Date();
      let timer1 = new Date(t);
      let result = Math.floor((timer2 - timer1) / 1000);
      if (result < 60) {
        result = `Just Now`;
      } else if (result > 60 && result < 60 * 60) {
        result = `${Math.floor(result / 60)} mintues before`;
      } else if (result > 60 * 60 && result < 60 * 60 * 24) {
        result = `${Math.floor(result / (60 * 60))} hours ago`;
      } else if (result > 60 * 60 * 24 && result < 60 * 60 * 24 * 30) {
        result = `${Math.floor(result / (60 * 60 * 24))} days ago`;
      } else if (
        result > 60 * 60 * 24 * 30 &&
        result < 60 * 60 * 24 * 30 * 12
      ) {
        result = `${Math.floor(result / (60 * 60 * 24 * 30))} months ago`;
      } else {
        result = `${Math.floor(result / (60 * 60 * 24 * 30 * 12))} year ago`;
      }
      return result;
    }
    let div = document.createElement("div");
    div.className = "box1";
    div.innerHTML = `
      <img src="${data[i].snippet.thumbnails.medium.url}" alt="">
      <div class="details1">
        <div class="font">${data[i].snippet.title}</div>
        <div class="timeViews1">
          <span>${viewsLikes(data2[0].statistics.viewCount)} views </span>-
          <span>${time(data[i].snippet.publishedAt)}</span>
        </div>
        <div class=channel1><img src="${data3[0].snippet.thumbnails.medium.url}" alt="">${data[i].snippet.channelTitle}</div>
        <div class="discription">${data[i].snippet.description}</div>
      </div>`;
      div.addEventListener("click",()=>{
        sec2.style.display="none";
        let div = document.createElement("div");
        div.id="videoPlayer";
        form2.appendChild(div);
        let videoId=data[i].id.videoId;
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
    videos1.appendChild(div);
  }
}
async function renderData(data) {
  for (let i = 0; i < data.length; i++) {
    let data3 = await fetchChannel(data[i].snippet.channelId);
    let data2 = await fetchVideostas(data[i].id.videoId, "statistics");
    function viewsLikes(count) {
      let views;
      if (count < 1000) {
        views = count;
      } else if (count > 1000 && count < 1000000) {
        views = Math.floor(count / 1000) + "K";
      } else {
        views = Math.floor(count / 1000000) + "M";
      }
      return views;
    }
    function time(t) {
      let timer2 = new Date();
      let timer1 = new Date(t);
      let result = Math.floor((timer2 - timer1) / 1000);
      if (result < 60) {
        result = `Just Now`;
      } else if (result > 60 && result < 60 * 60) {
        result = `${Math.floor(result / 60)} mintues before`;
      } else if (result > 60 * 60 && result < 60 * 60 * 24) {
        result = `${Math.floor(result / (60 * 60))} hours ago`;
      } else if (result > 60 * 60 * 24 && result < 60 * 60 * 24 * 30) {
        result = `${Math.floor(result / (60 * 60 * 24))} days ago`;
      } else if (
        result > 60 * 60 * 24 * 30 &&
        result < 60 * 60 * 24 * 30 * 12
      ) {
        result = `${Math.floor(result / (60 * 60 * 24 * 30))} months ago`;
      } else {
        result = `${Math.floor(result / (60 * 60 * 24 * 30 * 12))} year ago`;
      }
      return result;
    }
    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `<img src="${data[i].snippet.thumbnails.medium.url}" alt="">
            <div class="details">
            <h4>${data[i].snippet.title}</h4>              
              <div class=channel1><img src="${data3[0].snippet.thumbnails.medium.url}" alt="">${data[i].snippet.channelTitle}</div>
              <div class="timeViews1">
                <span>${viewsLikes(data2[0].statistics.viewCount)} views</span>-
                <span>${time(data[i].snippet.publishedAt)}</span>
              </div>`;
      div.addEventListener("click",()=>{
        sec2.style.display="none";
        let div = document.createElement("div");
        div.id="videoPlayer";
        form2.appendChild(div);
        let videoId=data[i].id.videoId;
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
    videos.appendChild(div);
  }
}

async function fetchVideostas(videoId, typeofDetails) {
  try {
    const response = await fetch(
      baseUrl +
        "/videos" +
        `?key=${API_KEY}` +
        `&id=${videoId}` +
        `&part=${typeofDetails}`
    );
    const data = await response.json();
    return data.items;
  } catch (e) {
    console.log(e);
  }
}

// async function fetchVideostas1(videoId, typeofDetails) {
//   try {
//     const response = await fetch(
//       baseUrl +
//         "/videos" +
//         `?key=${API_KEY}` +
//         `&id=${videoId}` +
//         `&part=${typeofDetails}`
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }
// fetchVideostas1("MeXH3zkUndM","contentDetails")

async function fetchChannel(channelId) {
  try {
    const response = await fetch(
      baseUrl +
        "/channels" +
        `?key=${API_KEY}` +
        "&part=snippet" +
        `&id=${channelId}`
    );
    const data = await response.json();
    return data.items;
  } catch (e) {
    console.log(e);
  }
}
// fetchChannel("UCK8sQmJBp8GCxrOtXWBpyEA")

// async function fectchVideoState(videoID,typeofDetails){
//     try{
//         const response = await fetch(baseUrl+"/videos"+`?key=${API_KEY}`+`&id=${videoID}`+`&part=${typeofDetails}`);
//         let data = await response.json();
//         console.log(data);
//     }
//     catch(e){
//         console.log(e);
//     }

// }
// fectchVideoState("uuXKuKZPPhg","statistics");

// async function comments(videoId){
//     try{
//         const response = await fetch(baseUrl+"/commentThreads"+`?key=${API_KEY}`+`&videoId=${videoId}`+"&maxresults=25&part=snippet");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// comments("y1-w1kUGuz8");
