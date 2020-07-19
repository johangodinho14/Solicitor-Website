const imageSlider = ()=>{
    let backgroundImage = document.getElementById('imageSlider');
        let i     = 0;
        setInterval(()=>{
            backgroundImage.style.backgroundImage = "url(./images/img"+i+".jpg)";
            i+=1;
            if(i>=3){
                i = 0;
                return;
            }
        },3000);
}
const imageSliderButton = (image)=>{
    let backgroundImage = document.getElementById('imageSlider');
    backgroundImage.style.backgroundImage = "url(./images/img"+image+".jpg)";
}
const _0x4259=['Phone\x20:\x20','value','phone','Your\x20message\x20has\x20been\x20delivered','getElementById','<br>','Address\x20:\x20','This\x20is\x20an\x20automated\x20message','name','Email\x20:\x20','<br>\x20Kind\x20regards','subject','email','<br>\x20Ravi\x20Solicitors\x20Bot','Contact\x20Details\x20','johangodinho69@gmail.com','Notification\x20RS\x20@\x20','message','send','7ea2a570-b733-49b7-b828-7bc89f7f6507'];(function(_0x26d80a,_0x4259d3){const _0x59d1ca=function(_0x2d6773){while(--_0x2d6773){_0x26d80a['push'](_0x26d80a['shift']());}};_0x59d1ca(++_0x4259d3);}(_0x4259,0x107));const _0x59d1=function(_0x26d80a,_0x4259d3){_0x26d80a=_0x26d80a-0x0;let _0x59d1ca=_0x4259[_0x26d80a];return _0x59d1ca;};const sendEmail=()=>{const _0x1371d7=document['getElementById'](_0x59d1('0x5')),_0x423c44=document[_0x59d1('0x1')](_0x59d1('0x9')),_0x4ef353=document[_0x59d1('0x1')](_0x59d1('0x13')),_0x21f3da=document['getElementById']('address');let _0x2d3aba=_0x59d1('0xd')+document[_0x59d1('0x1')](_0x59d1('0x8'))[_0x59d1('0x12')];const _0xcfd1f7=document[_0x59d1('0x1')](_0x59d1('0xe')),_0x95aceb=_0x59d1('0xc'),_0x141832=_0x1371d7[_0x59d1('0x12')]+'\x20would\x20like\x20to\x20get\x20in\x20touch\x20with\x20you\x20regarding\x20the\x20following\x20matter'+'<br>\x20Message\x20:\x20'+_0xcfd1f7[_0x59d1('0x12')]+_0x59d1('0x2')+_0x59d1('0xb')+_0x59d1('0x2')+_0x59d1('0x11')+_0x4ef353[_0x59d1('0x12')]+'<br>'+_0x59d1('0x6')+_0x423c44[_0x59d1('0x12')]+_0x59d1('0x2')+_0x59d1('0x3')+_0x21f3da[_0x59d1('0x12')]+_0x59d1('0x2')+_0x59d1('0x4')+_0x59d1('0x7')+_0x59d1('0xa');if(_0x1371d7['value']===''||_0x423c44[_0x59d1('0x12')]===''||_0x4ef353[_0x59d1('0x12')]===''||_0x21f3da[_0x59d1('0x12')]===''||_0x2d3aba[_0x59d1('0x12')]===''||_0xcfd1f7[_0x59d1('0x12')]===''){alert('All\x20fields\x20required\x20!!');return;}Email[_0x59d1('0xf')]({'SecureToken':_0x59d1('0x10'),'To':'johangodinho69@gmail.com','From':'NotificationService@services.com','Subject':_0x2d3aba,'Body':_0x141832})['then'](alert(_0x59d1('0x0')));};
document.getElementById('sendEmail').addEventListener('click',()=>{
    sendEmail();
})
window.addEventListener("load",()=>{
    imageSlider();
});