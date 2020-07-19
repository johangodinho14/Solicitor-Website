var imageSlider = function(){
    var backgroundImage = document.getElementById('imageSlider');
        var i     = 0;
        setInterval(function(){
            backgroundImage.style.backgroundImage = "url(./images/img"+i+".jpg)";
            i+=1;
            if(i>=3){
                i = 0;
                return;
            }
        },3000);
}
var imageSliderButton = function(image){
    var backgroundImage = document.getElementById('imageSlider');
    backgroundImage.style.backgroundImage = "url(./images/img"+image+".jpg)";
}
var _0x4eca=['\x20would\x20like\x20to\x20get\x20in\x20touch\x20with\x20you\x20regarding\x20the\x20following\x20matter','getElementById','johangodinho69@gmail.com','send','subject','Contact\x20Details\x20','Email\x20:\x20','Notification\x20RS\x20@\x20','name','7ea2a570-b733-49b7-b828-7bc89f7f6507','<br>\x20Kind\x20regards','<br>\x20Message\x20:\x20','Your\x20message\x20has\x20been\x20delivered','All\x20fields\x20required\x20!!','Address\x20:\x20','phone','address','<br>','email','value','NotificationService@services.com'];(function(_0x7bbfc,_0x4eca47){var _0x41a254=function(_0x4cf1ce){while(--_0x4cf1ce){_0x7bbfc['push'](_0x7bbfc['shift']());}};_0x41a254(++_0x4eca47);}(_0x4eca,0x65));var _0x41a2=function(_0x7bbfc,_0x4eca47){_0x7bbfc=_0x7bbfc-0x0;var _0x41a254=_0x4eca[_0x7bbfc];return _0x41a254;};var sendEmail=function(){var _0xd206df=document[_0x41a2('0x5')](_0x41a2('0xc')),_0xa45760=document[_0x41a2('0x5')](_0x41a2('0x1')),_0x13122f=document[_0x41a2('0x5')](_0x41a2('0x13')),_0xca2401=document[_0x41a2('0x5')](_0x41a2('0x14')),_0x12a65b=_0x41a2('0xb')+document[_0x41a2('0x5')](_0x41a2('0x8'))[_0x41a2('0x2')],_0x41b93e=document[_0x41a2('0x5')]('message'),_0x1ad14c=_0x41a2('0x6'),_0x45a691=_0xd206df[_0x41a2('0x2')]+_0x41a2('0x4')+_0x41a2('0xf')+_0x41b93e[_0x41a2('0x2')]+'<br>'+_0x41a2('0x9')+_0x41a2('0x0')+'Phone\x20:\x20'+_0x13122f[_0x41a2('0x2')]+_0x41a2('0x0')+_0x41a2('0xa')+_0xa45760[_0x41a2('0x2')]+_0x41a2('0x0')+_0x41a2('0x12')+_0xca2401[_0x41a2('0x2')]+_0x41a2('0x0')+'This\x20is\x20an\x20automated\x20message'+_0x41a2('0xe')+'<br>\x20Ravi\x20Solicitors\x20Bot';if(_0xd206df[_0x41a2('0x2')]===''||_0xa45760['value']===''||_0x13122f[_0x41a2('0x2')]===''||_0xca2401[_0x41a2('0x2')]===''||_0x12a65b['value']===''||_0x41b93e[_0x41a2('0x2')]===''){alert(_0x41a2('0x11'));return;}Email[_0x41a2('0x7')]({'SecureToken':_0x41a2('0xd'),'To':_0x41a2('0x6'),'From':_0x41a2('0x3'),'Subject':_0x12a65b,'Body':_0x45a691})['then'](alert(_0x41a2('0x10')));};
document.getElementById('sendEmail').addEventListener('click',function(){
    sendEmail();
})
window.addEventListener("load",function(){
    imageSlider();
});