// ye 3rd line se 71 tk jo line hai vo sirf #firsth1 ke animation ke liya tha taki tu ache se smj jaye ki #firsth1 ke liye aisa animation bnana hai. ye code hamra sirf #firsth1 tk ke liye hi hai is se #firsth1 hi animate hoga thik hai naaaaaaaa

// function locomotive() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,

//     // for tablet smooth
//     tablet: { smooth: true },

//     // for mobile
//     smartphone: { smooth: true },
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },

//     // follwoing line is not required to work pinning on touch screen

//     /* pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed"*/
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

// function SirfPehlaH1KaAnimation() {
//   var firstH1TextContent = document.querySelector("#firsth1").textContent;
//   var splittedText = firstH1TextContent.split("");
//   var clutter = "";
//   splittedText.forEach(function (element) {
//     clutter += `<span>${element}</span>`;
//   });
//   document.querySelector("#firsth1").innerHTML = clutter;
// }

// function GsapHaiYe() {
//   gsap.to("#page2 h1 span", {
//     color: "#E3E3C4",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: "#page2 h1",
//       scroller: "#main",
//       markers: true,
//       start: "top 80%",
//       end: "top 40%",
//       scrub: 5,
//     },
//   });
// }
// locomotive();
// SirfPehlaH1KaAnimation();
// GsapHaiYe();

// ab yaha se code suru hota hai jo ki saare h1 pr hamara animation chlega thik hai naaa.main code yaha se start hai 74 line se
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function AllH1KaAnimation() {
  var AllH1 = document.querySelectorAll("#page2 h1");
  AllH1.forEach(function (element) {
    var TxtContent = element.textContent;
    var splittedText = TxtContent.split("");
    var clutter = "";
    splittedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    element.innerHTML = clutter;
  });
}

function GsapHaiYe() {
  gsap.to("#page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 h1",
      //   trigger: "#page2",
      scroller: "#main",
      markers: true,
      start: "top 80%",
      end: "top -5%",
      //   start: "top 0%",
      //   end: "top -100%",
      scrub: 5,
      //   pin: true,
    },
  });
}

locomotive();
AllH1KaAnimation();
GsapHaiYe();
