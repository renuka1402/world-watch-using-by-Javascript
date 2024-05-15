let xhr;
let timezonelist;
let timezoneName
let endpoint="http://worldtimeapi.org/api/timezone";
function loadTimeZone(){
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=processResponse;
    xhr.open("Get",endpoint,true);
    xhr.send(null);

}
function processResponse(){
    if (xhr.readyState===4 && xhr.status===200){
        let jsonstr= xhr.responseText;


               let str="";
                   let arr=JSON.parse(jsonstr);
                       arr.forEach((data)=>{
                               str+=`<option>${data}</option>`
        });
           timezonelist=document.getElementById("timezone");
             timezonelist.innerHTML=str;
                 }

         }
              function showData(){
                 timezoneName=timezonelist.value;
                 let endpoint2=endpoint+"/"+timezoneName;
                 xhr=new XMLHttpRequest();
                  xhr.onreadystatechange=processTime;
                  xhr.open("Get",endpoint2,true);
                  xhr.send(null);
     }
               function processTime(){
               if (xhr.readyState===4 && xhr.status===200){
               let jsonstr= xhr.responseText;


                 let obj=JSON.parse(jsonstr);
                 let dateTime=obj.datetime;
                
                      let today= new Date(dateTime);
                        let datestr=today.toLocaleString("en-us",{timeZone: timezoneName});
                        
                        console.log(datestr)
                          let globalDate =new Date(datestr);
                       console.log(globalDate)
                             let globalDateTimestr  =globalDate.toLocaleDateString() +"," +globalDate.toLocaleTimeString();
                             console.log(globalDateTimestr)

                  let span= document.getElementById("person");
                 span.innerHTML=globalDateTimestr+"👍";
    }
    }
window.onload=loadTimeZone;