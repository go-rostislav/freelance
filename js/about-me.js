const wow = new WOW({
    boxClass:     'wow',
    animateClass: 'animate__animated',
    offset:       30,
    mobile:       true,
    live:         true
})
wow.init();

// For Live Projects
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")
});

anime.timeline({loop: true})
    .add({
        targets: '.ml15 .word',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 1000
});


// Wrap every letter in a span
var wraperText = document.querySelector('.ml10 .letters');
wraperText.innerHTML = wraperText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml16 .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});