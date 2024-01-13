var arr=[
    {dp:"./82729d9b043059cdb946acd018dcc806.jpg",
    story:"./HD-wallpaper-seth-rollins-wwe-jesus-monday-night-messiah-raw.jpg",
    name:"Seth Rollins",
    view:false
    },
    {
        dp:"./HD-wallpaper-wwe-roman-reigns-chest-music.jpg",
        story:"./r956952_1296x729_16-9.jpg",
        name:"Roman Reigns",  
        view:false    
    },
    {
        dp:"./download.jpeg",
        story:"./HD-wallpaper-dean-ambrose-war-wwe.jpg",
        name:"Dean Ambrose",  
        view:false           
    },
    {
        dp:"./HD-wallpaper-wwe-roman-reigns-chest-music.jpg",
        story:"./r956952_1296x729_16-9.jpg",
        name:"Roman Reigns",  
        view:false            
    },
    {
        dp:"./HD-wallpaper-wwe-roman-reigns-chest-music.jpg",
        story:"./r956952_1296x729_16-9.jpg",
        name:"Roman Reigns",  
        view:false            
    },
    {
        dp:"./HD-wallpaper-wwe-roman-reigns-chest-music.jpg",
        story:"./r956952_1296x729_16-9.jpg",
        name:"Roman Reigns",  
        view:false            
    },{
        dp:"./HD-wallpaper-wwe-roman-reigns-chest-music.jpg",
        story:"./r956952_1296x729_16-9.jpg",
        name:"Roman Reigns",  
        view:false            
    }
    
]
var fus=document.querySelector("#full");
var s=document.querySelector("#stories");
var clutter="";
arr.forEach(function(val,idx){
    clutter+=`<div class="is">
    <div id="s${idx}" class="story">
        <img id="${idx}" src="${val.dp}" alt="">
        <p>${val.name}</p>
    </div>
    `;
})
s.innerHTML=clutter;
s.addEventListener("click",function(dets){
    // document.querySelector("#full").style.backgroundImage=arr[dets.target.id].story;
    // document.querySelector("#full").style.display="block";
    var im=arr[dets.target.id].story;
    arr[dets.target.id].view=true;
    fus.style.display="block";
    fus.style.backgroundImage=`url(${im})`;
    fus.innerHTML=`<p class="tt">${arr[dets.target.id].name}</p>`
    setTimeout(()=>{
        fus.style.display="none";  
    },2000)
    arr[dets.target.id].view=true;
    document.getElementById(`s${dets.target.id}`).style.backgroundImage="linear-gradient(gray,gray)";
})
var btn=document.querySelector("#bt1");
var ic=document.querySelector("#img55");
var st=document.querySelector("h4");
var i=document.querySelector("#l");
var check=0;
var like=document.getElementById("bt2");
var flag=0;
var f=()=>{
    if(flag==0){
        like.innerHTML='<i id="sym" class="ri-heart-fill"></i>';
        flag=1;
        i.style.opacity="0.9"
    i.style.transform="translate(-50%, -50%) scale(4)";
    setTimeout(()=>{
        i.style.opacity="0.7";
        i.style.transform="translate(-50%, -50%) scale(2.8)";
        i.style.opacity="0";
    },800)
    }
    else{
        like.innerHTML='<i class="ri-heart-line"></i>';
        flag=0;
    }
};
var f1=function(){
    like.innerHTML='<i id="sym" class="ri-heart-fill"></i>';
    flag=1;
    i.style.opacity="0.9"
i.style.transform="translate(-50%, -50%) scale(4)";
setTimeout(()=>{
    i.style.opacity="0.7";
    i.style.transform="translate(-50%, -50%) scale(2.8)";
    i.style.opacity="0"
},800)
}
like.addEventListener("click",f);
ic.addEventListener("dblclick",f1);
btn.addEventListener("click",()=>{
    if(check===0){
        st.innerHTML="Followed";
        st.style.color="green";
        btn.innerHTML='<i class="ri-user-follow-line"></i>Following';
        btn.style.border="2px solid rgb(134, 171, 241)";
        btn.style.backgroundColor="white";
        btn.style.color="rgb(134, 171, 241)"
        check=1;
    }
    else{
            st.innerHTML="Strangers";
            st.style.color="red";
            btn.innerHTML='<i class="ri-add-line"></i>Follow';
            btn.style.backgroundColor="rgb(134, 171, 241)";
            btn.style.color="white";
            check=0;
        
    }
})

