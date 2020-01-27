const hart_1 = new TimelineMax({});
const letters = new TimelineMax({});

const vierkant = document.querySelector('#_vierkant_');

const hart = document.querySelector('.cls-6');

const a = document.querySelector('#_aAnders_');
const n = document.querySelector('#n');
const d = document.querySelector('#d');
const e = document.querySelector('#e');
const r = document.querySelector('#r');
const s = document.querySelector('#s');

TweenMax.to(hart, 0.7, {scaleX: 1.5, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: 1.5})
TweenMax.to(hart, 0.7, {rotate: -360, transformOrigin: "center"})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: 1.5})
TweenMax.to(hart, 0.7, {scaleY: -1.5})
TweenMax.to(hart, 0.7, {scaleY: 1.5});

hart_1
      .to(vierkant, 3, {y: 0})
      .to(vierkant, 3, {y: 200})
      .to(vierkant, .5, {y: -225})
      .to(vierkant, .5, {y: 10})
      .to(vierkant, .2, {y: 0});

letters
      .to(a, 0.25, {x: -240})
      .to(a, 0.25, {y: -200})
      .to(a, 0.25, {y:  -20})

      .to(n, 0.25, {x:  -230})
      .to(n, 0.25, {y:  200})
      .to(n, 0.25, {y: -20})

      .to(d, 0.25, {x: -220})
      .to(d, 0.25, {y: -200})
      .to(d, 0.25, {y: -20})

      .to(e, 0.25, {x: -210})
      .to(e, 0.25, {y: 200})
      .to(e, 0.25, {y: -20})

      .to(r, 0.25, {x: -200})
      .to(r, 0.25, {y: -200})
      .to(r, 0.25, {y: -20})

      .to(s, 0.25, {x: -190})
      .to(s, 0.25, {y: 200})
      .to(s, 0.25, {x: -800})
      .to(s, 0.25, {y: -200})
      .to(s, 0.25, {x: -190})
      .to(s, 0.25, {y: -20});
