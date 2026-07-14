



function play(id,frames,fps,ping=false,delay=0){

    let img=document.getElementById(id),
        i=0,d=1;

    function run(){

        img.src=frames[i];

        i+=ping?d:1;

        if(ping){
            if(i>=frames.length-1||i<=0)d*=-1;
        }
        else if(i>=frames.length){
            i=0;
            return setTimeout(run,delay);
        }

        setTimeout(run,1000/fps);

    }

    run();
}



function swallow(id,duration=0.6){

    const wrap=document.getElementById(id);

    const box=wrap.firstElementChild;
    const text=wrap.lastElementChild;

    const tl=gsap.timeline();

    tl.to(box,{

        scaleX:1,

        transformOrigin:"center left",

        duration:duration,

        ease:"power2.out"

    })

    .to(text,{

        opacity:0,

        duration:0.01

    },"-=0.05")

    .to(box,{

        scaleX:0,

        transformOrigin:"right center",

        duration:duration,

        ease:"power2.in"

    });

    return tl;

}


function spit(id,duration=0.6){

    const wrap=document.getElementById(id);

    const box=wrap.firstElementChild;
    const text=wrap.lastElementChild;

    return gsap.timeline()

    .to(box,{

        scaleX:1,

        duration:duration,

        ease:"power2.out"

    })

    .to(text,{

        opacity:1,

        duration:0.01

    },"-=0.05")

    .to(box,{

        scaleX:0,

        transformOrigin:"right center",

        duration:duration,

        ease:"power2.in"

    });

}












const sky=[],
      clouds=[],
      mount=[],
      pvr=[],
      cat=[];

for(let i=1;i<=57;i++) sky.push(`assets/sky/${i}.png`);
for(let i=1;i<=20;i++) clouds.push(`assets/cloud/${i}.png`);
for(let i=1;i<=21;i++) mount.push(`assets/mount/${i}.png`);
for(let i=1;i<=20;i++) pvr.push(`assets/pvr/${i}.png`);
for(let i=1;i<=41;i++) cat.push(`assets/catlay/${i}.png`);


play("clouds",clouds,8,true);
play("mount",mount,10,false,3000);
play("pvr",pvr,10);
play("cat",cat,12);


gsap.set("#clouds",{y:"-120vh"});
gsap.set("#mount",{y:"120vh"});
gsap.set("#pvr",{y:"120vh"});
gsap.set("#cat",{x:"-120vw"});
gsap.set("#wandering",{

    x:"30vw",

    opacity:0

});

gsap.set("#adventures",{

    x:"30vw",

    opacity:0

});

gsap.set("#logo",{

    opacity:0,

    y:"80vh",

    scale:1.8

});

gsap.set("#location-wrap",{

    x:"-38vw",
    scale:1.3,
    y:"-43vh"

});











const skyState={frame:56};
document.getElementById("sky").src=sky[56];

const demoVideo=
document.getElementById("demo-video");














const introTL=gsap.timeline({

    onComplete:()=>{

    }

});

introTL.to(skyState,{

    frame:0,

    duration:2.8,

    ease:"none",

    onUpdate:()=>{

        document.getElementById("sky").src=
        sky[Math.round(skyState.frame)];

    }

},0);

introTL.to("#clouds",{

    y:0,

    duration:2,

    ease:"power3.out"

},0);


introTL.to("#mount",{

    y:0,

    duration:2,

    ease:"power3.out"

},0.3);

introTL.to("#pvr",{

    y:0,

    duration:2,

    ease:"power3.out"

},0.6);

introTL.to("#cat",{

    x:0,

    duration:2.4,

    ease:"power3.out"

},0.9);

introTL.to("#wandering",{

    x:0,

    opacity:1,

    duration:1.2,

    ease:"power3.out"

},1.3);

introTL.to("#adventures",{

    x:0,

    opacity:1,

    duration:1.2,

    ease:"power3.out"

},1.6);













const tl1=gsap.timeline({

    paused:true

});


















tl1.to("#title",{

    right:"50%",

    bottom:"50%",

    xPercent:50,

    yPercent:50,

    duration:2,

    ease:"power3.inOut"

},1);


tl1.to("#logo",{

    opacity:1,

    y:"-5vh",

    scale:1.4,

    duration:1.0,

    ease:"power3.out"

},2.5)

.to("#logo",{

    y:0,

    scale:1,

    duration:0.6,

    ease:"back.out(2)"

},"<0.6");

tl1.to("#cat",{

    x:"-120vw",

    duration:2,

    ease:"power2.in"

},0);

tl1.to("#pvr",{

    y:"120vh",

    duration:2,

    ease:"power2.in"

},0.4);

tl1.to("#mount",{

    y:"120vh",

    duration:2,

    ease:"power2.in"

},0.6);

tl1.to("#clouds",{

    y:"-120vh",

    duration:2,

    ease:"power2.in"

},1.0);

tl1.to(skyState,{

    frame:56,

    duration:3,

    ease:"none",

    onUpdate:()=>{

        document.getElementById("sky").src=
        sky[Math.round(skyState.frame)];

    }

},0.4);





















tl1.to("#logo",{

    rotationY:360,

    duration:2,

    ease:"power2.inOut"

},3.5);

tl1.add(

    swallow("wandering-wrap"),

    "<"

);

tl1.add(

    swallow("adventures-wrap"),

    "<0.3"

);

tl1.add(

    spit("founders-wrap"),

    4.0

);

tl1.to("#logo",{

    scale:0.16,

    y:"-43vh",

    duration:1.3,

    ease:"power3.inOut"

},"4.4")


.to("#logo",{

    scale:0.18,

    duration:0.15,

    ease:"power2.out"

})

.to("#logo",{

    scale:0.16,

    duration:0.15,

    ease:"back.out(2)"

})


.fromTo("#glass-ball",{
    y:"-43vh",
    scale:0,
    opacity:0

},{

    scale:1,
    opacity:1,
    width:"9vh",

    height:"9vh",

    y:"-43vh",
    duration:0.7,

    ease:"elastic.out(1,0.5)"

},"<");














tl1.to("#glass-ball",{

    width:"93vw",

    height:"9vh",

    borderRadius:"5vh",

    duration:1.3,

    ease:"back.out(1)"

});
tl1.to("#logo",{

    x:"-44vw",

    duration:1.45,

    ease:"back.out(0.8)"

},"<");

tl1.fromTo("#map-icon",{

    x:"42vw",
    y:"-44vh",

    scale:0,

    opacity:0

},{

    x:"45vw",
    y:"-45vh",

    scale:1.8,

    opacity:1,

    duration:0.6,

    ease:"back.out(1.7)"

},"<0.5");

tl1.set(

[
"#glass-ball"
],

{

zIndex:100

});

tl1 .set(

[
"#logo",
"#map-icon",
"#location-wrap"
],

{

zIndex:101

},"<");

tl1.add(

    swallow("founders-wrap"),

    6.4

);

tl1.add(

    spit("location-wrap"),

    7.4

);


tl1.to("#demo-video",{

    opacity:1,

    duration:0.8,

    ease:"power2.out"

});

tl1.to({},{

    duration:6

});

console.log(
tl1.duration()
);


































window.addEventListener("scroll",()=>{

    const max=
    document.body.scrollHeight-
    window.innerHeight;

    const p=Math.max(
        0,
        Math.min(
            1,
            window.scrollY/max
        )
    );

    tl1.progress(p);

    if(demoVideo.duration){

        const videoStart=0.6;

        if(p<videoStart){

            demoVideo.currentTime=0;

        }

        else{

            const vp=
            (p-videoStart)/
            (1-videoStart);

            demoVideo.currentTime=
            vp*demoVideo.duration;

        }

    }

});



demoVideo.addEventListener(
"loadedmetadata",
()=>{

    demoVideo.pause();

});


console.log(
demoVideo.duration,
demoVideo.currentTime
);




