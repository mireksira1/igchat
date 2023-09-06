function getUserInfo(){
   let UserName = document.getElementById("userName").value;

   document.getElementById("profileName").innerText = UserName;
   document.getElementById("contact0").innerText = UserName;

   let UserTag = document.getElementById("userTag").value;

   document.getElementById("profileTag").innerText = UserTag;
   document.getElementById("contact1").innerText = UserTag + " • Instagram";

   let UserFollowers = document.getElementById("userFollowers").value;
   let UserPosts = document.getElementById("userPosts").value;

   document.getElementById("contact2").innerText = UserFollowers + " followers • " + UserPosts + " posts";

}

var loadFile = function (event) {
   document.getElementById("userPhoto").src = URL.createObjectURL(event.target.files[0]);
   document.getElementById("userPhoto2").src = URL.createObjectURL(event.target.files[0]);

 };
