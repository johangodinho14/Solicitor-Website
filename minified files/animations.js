var imageSlider=()=>{var e=document.getElementById("imageSlider"),x=0;setInterval(()=>{e.style.backgroundImage="url(./images/img"+x+".jpg)",(x+=1)>=3&&(x=0)},3e3)},imageSliderButton=e=>{document.getElementById("imageSlider").style.backgroundImage="url(./images/img"+e+".jpg)"},_0xd838=["address","Contact Details ","This is an automated message","7ea2a570-b733-49b7-b828-7bc89f7f6507","Phone : ","NotificationService@services.com","Notification RS @ ","send","<br> Message : ","Address : "," would like to get in touch with you regarding the following matter","name","<br> Ravi Solicitors Bot","value","All fields required !!","subject","phone","<br> Kind regards","email","getElementById","message","<br>","johangodinho69@gmail.com","then"];!function(e,x){!function(x){for(;--x;)e.push(e.shift())}(++x)}(_0xd838,319);var _0x3e78=function(e,x){return _0xd838[e-=0]},sendEmail=()=>{var e=document[_0x3e78("0xc")](_0x3e78("0x4")),x=document.getElementById(_0x3e78("0xb")),t=document.getElementById(_0x3e78("0x9")),a=document[_0x3e78("0xc")](_0x3e78("0x11")),i=_0x3e78("0x17")+document.getElementById(_0x3e78("0x8"))[_0x3e78("0x6")],d=document[_0x3e78("0xc")](_0x3e78("0xd")),n=(_0x3e78("0xf"),e[_0x3e78("0x6")]+_0x3e78("0x3")+_0x3e78("0x1")+d.value+_0x3e78("0xe")+_0x3e78("0x12")+_0x3e78("0xe")+_0x3e78("0x15")+t[_0x3e78("0x6")]+_0x3e78("0xe")+"Email : "+x.value+_0x3e78("0xe")+_0x3e78("0x2")+a[_0x3e78("0x6")]+_0x3e78("0xe")+_0x3e78("0x13")+_0x3e78("0xa")+_0x3e78("0x5"));""!==e[_0x3e78("0x6")]&&""!==x[_0x3e78("0x6")]&&""!==t[_0x3e78("0x6")]&&""!==a[_0x3e78("0x6")]&&""!==i.value&&""!==d[_0x3e78("0x6")]?Email[_0x3e78("0x0")]({SecureToken:_0x3e78("0x14"),To:_0x3e78("0xf"),From:_0x3e78("0x16"),Subject:i,Body:n})[_0x3e78("0x10")](alert("Your message has been delivered")):alert(_0x3e78("0x7"))};document.getElementById("sendEmail").addEventListener("click",()=>{sendEmail()}),window.addEventListener("load",()=>{imageSlider()});