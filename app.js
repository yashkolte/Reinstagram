var arr = [
  {
    dp: "./assets/1671371016423.jpg",
    name: "yashkolte_",
    story:
    "https://images.unsplash.com/photo-1671644100365-61562d7298ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "_x_.chetan._x_",
    story:
    "https://images.unsplash.com/photo-1671828813327-47c64c010068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "its_.angeline_",
    story:
    "https://images.unsplash.com/photo-1671885764038-128b04223cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
    name: "abhinavjainn01",
    story:
    "https://images.unsplash.com/photo-1671886418077-685125dc35df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    name: "ana_shaikh1307",
    story:
    "https://images.unsplash.com/photo-1671736505318-eb19f2bb2304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "tanya__ray_04",
    story:
    "https://images.unsplash.com/photo-1671851476760-487cd6b3bb73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    name: "supriya.sharm",
    story:
    "https://images.unsplash.com/photo-1670934166570-1831b0b9a4ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

var clutter = "";

arr.forEach(function (val, index) {
  clutter =
    clutter +
    `
    <div id="story">
    <div class="outer">
    <div class="inner">
        <img id="${index}" src="${val.dp}" alt="">
    </div>
    </div>
    <div class="name">${val.name}</div>
    </div>`;
});
document.querySelector("#stories").innerHTML = clutter;
var x = 0;

document.getElementById("stories").addEventListener("click", function (dets) {
  document.getElementById("fs").style.display = "flex";
  document.querySelector("#fs img").setAttribute("src", arr[dets.target.id].story);

  timer = setTimeout(() => {
    document.getElementById("fs").style.display = "none";
  }, 3000);
    if (x < 90) {
      setInterval(() => {
        document.getElementById("progressmaker").style.width = `${x++}%`;
      }, 30);
    } else {
      x = 0;
    }
});


document.querySelector("#fs i").addEventListener("click", function () {
  document.querySelector("#fs").style.display = "none";
});


var post = "";

arr.forEach(function (val, index) {
  post =
    post +
    `<div id="post">
    <div class="post-header">
        <div class="post-header-left">
            <img src="${val.dp}" alt="">
            <div class="post-header-left-text">
                <h3>${val.name}</h3>
            </div>
        </div>
        <div class="post-header-right">
            <i class="ri-more-fill"></i>
        </div>
    </div>
    <div class="post-image">
        <img src="${val.story}" alt="">
        <div class="image-bottom">
            <div class="left">
                <i class="ri-heart-line"></i>
                <i class="ri-chat-1-line"></i>
                <i class="ri-send-plane-fill"></i>
            </div>
            <div class="right">
                <i class="ri-bookmark-line"></i>
            </div>
        </div>
        <p>61 likes<br>
            ${val.name} JavaScript Series : use strict... more<br>
            9 MINUTES AGO</p>
    </div>
    <div class="post-footer">
        <i class="ri-emotion-line"><input type="text" placeholder="Add a comment"></i>               
        <h3>Post</h3>
    </div>

</div>`;
});
document.querySelector("#posts").innerHTML = post;