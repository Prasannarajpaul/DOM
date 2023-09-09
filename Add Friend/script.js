var initialStatus=document.querySelector("h5");
var btn = document.querySelector("#add");
var imageChange = document.querySelector("img");
var flag=0;

btn.addEventListener("click", function(){
    if(flag == 0){
        initialStatus.innerHTML = "Friends";
        initialStatus.style.color="green";
        btn.innerHTML="Remove Friend";
        imageChange.src="https://media.istockphoto.com/id/536189669/photo/mark-zuckerberg-at-g8-in-deauville-france.jpg?s=612x612&w=0&k=20&c=1znssyAxMnUAbpx7AWMMhhWxAUsrzlxf1nVLWEUP-8A=";
        flag=1;
    }
    else{
        initialStatus.innerHTML = "Stranger";
        initialStatus.style.color="red";
        btn.innerHTML="Add Friend";
        imageChange.src="https://media.istockphoto.com/id/482954389/photo/mark-zuckerberg-at-g8-in-deauville-france.jpg?s=612x612&w=0&k=20&c=j_c-A3J7cIr19-l8cgvz6_uBpc5ZWA5reJGMPve5_2E=";
        flag=0;
    }
})
