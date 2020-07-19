var imageSlider = ()=>{
    var backgroundImage = document.getElementById('imageSlider');
        var i     = 0;
        setInterval(()=>{
            backgroundImage.style.backgroundImage = "url(./images/img"+i+".jpg)";
            i+=1;
            if(i>=3){
                i = 0;
                return;
            }
        },3000);
}
var imageSliderButton = (image)=>{
    var backgroundImage = document.getElementById('imageSlider');
    backgroundImage.style.backgroundImage = "url(./images/img"+image+".jpg)";
}
var _0xd838=['address','Contact\x20Details\x20','This\x20is\x20an\x20automated\x20message','7ea2a570-b733-49b7-b828-7bc89f7f6507','Phone\x20:\x20','NotificationService@services.com','Notification\x20RS\x20@\x20','send','<br>\x20Message\x20:\x20','Address\x20:\x20','\x20would\x20like\x20to\x20get\x20in\x20touch\x20with\x20you\x20regarding\x20the\x20following\x20matter','name','<br>\x20Ravi\x20Solicitors\x20Bot','value','All\x20fields\x20required\x20!!','subject','phone','<br>\x20Kind\x20regards','email','getElementById','message','<br>','johangodinho69@gmail.com','then'];(function(_0x3430b2,_0xd838f9){var _0x3e78b5=function(_0x2b865d){while(--_0x2b865d){_0x3430b2['push'](_0x3430b2['shift']());}};_0x3e78b5(++_0xd838f9);}(_0xd838,0x13f));var _0x3e78=function(_0x3430b2,_0xd838f9){_0x3430b2=_0x3430b2-0x0;var _0x3e78b5=_0xd838[_0x3430b2];return _0x3e78b5;};var sendEmail=()=>{var _0x13214c=document[_0x3e78('0xc')](_0x3e78('0x4')),_0x210ce5=document['getElementById'](_0x3e78('0xb')),_0x25d9cc=document['getElementById'](_0x3e78('0x9')),_0x6c1f50=document[_0x3e78('0xc')](_0x3e78('0x11')),_0x2f8f27=_0x3e78('0x17')+document['getElementById'](_0x3e78('0x8'))[_0x3e78('0x6')],_0x5172c9=document[_0x3e78('0xc')](_0x3e78('0xd')),_0x39fb4a=_0x3e78('0xf'),_0x5f1dbf=_0x13214c[_0x3e78('0x6')]+_0x3e78('0x3')+_0x3e78('0x1')+_0x5172c9['value']+_0x3e78('0xe')+_0x3e78('0x12')+_0x3e78('0xe')+_0x3e78('0x15')+_0x25d9cc[_0x3e78('0x6')]+_0x3e78('0xe')+'Email\x20:\x20'+_0x210ce5['value']+_0x3e78('0xe')+_0x3e78('0x2')+_0x6c1f50[_0x3e78('0x6')]+_0x3e78('0xe')+_0x3e78('0x13')+_0x3e78('0xa')+_0x3e78('0x5');if(_0x13214c[_0x3e78('0x6')]===''||_0x210ce5[_0x3e78('0x6')]===''||_0x25d9cc[_0x3e78('0x6')]===''||_0x6c1f50[_0x3e78('0x6')]===''||_0x2f8f27['value']===''||_0x5172c9[_0x3e78('0x6')]===''){alert(_0x3e78('0x7'));return;}Email[_0x3e78('0x0')]({'SecureToken':_0x3e78('0x14'),'To':_0x3e78('0xf'),'From':_0x3e78('0x16'),'Subject':_0x2f8f27,'Body':_0x5f1dbf})[_0x3e78('0x10')](alert('Your\x20message\x20has\x20been\x20delivered'));};

document.getElementById('sendEmail').addEventListener('click',()=>{
    sendEmail();
})
window.addEventListener("load",()=>{
    imageSlider();
});