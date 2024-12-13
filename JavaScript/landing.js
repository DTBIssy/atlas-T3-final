ScrollTrigger.defaults({
  toggleActions: "play none reverse play",
});
const tl = gsap.timeline();

// All the texts
tl.to(".a", {
  scrollTrigger: {
    trigger: ".a",
    start: "top 75%",
    end: "bottom center",
    scrub: true,
    pin: "#spa_0",
    // markers: true,
  }, opacity: 1,
}).to(".b", {
  scrollTrigger: {
    trigger: ".b",
    start: "top 75%",
    end: "bottom center",
    scrub: true,
    // pin: ".left",
    // markers: true,
  }, opacity: 1,
}).to(".c", {
  scrollTrigger: {
    trigger: ".c",
    start: "top 75%",
    end: "bottom center",
    scrub: true,
    // markers: true,
  }, opacity: 1,
}).to(".d", {
  scrollTrigger: {
    trigger: ".d",
    start: "top 45%",
    bottom: "bottom 100px",
    scrub: true,
    // markers: true,
    pin: ".d",
  }, opacity: 0,
})


// Pins the image on the right
gsap.to('.right', {
  scrollTrigger: {
    trigger: ".right",
    start: "top 15%%",
    end: "bottom -100px",
    endTrigger: ".d",
    scrub: 1,
    pin: ".desktopPhotos",
    // markers: true,
  }, opacity: 0, ease: "power4.in"
})
gsap.to('.right', {
  scrollTrigger: {
    trigger: ".right",
    start: "top 15%%",
    end: "bottom -15px",
    endTrigger: ".a",
    scrub: 1,
    // pin: ".desktopPhotos",
    // markers: true,
  },
})

//Apply Section
gsap.from('.apply', {
  scrollTrigger:{
    toggleActions: "play none none reverse",
    trigger: ".form-label",
    start: "top center",
    end: "bottom center",
    //  markers: true,
  }, duration: 2, ease: "power4.out", left: "-150vw", opacity: 0,
})

gsap.from('#apply_sect', {
  scrollTrigger:{
    toggleActions: "play none none reverse",
    trigger:"#end",
    start: "top 70%",
    end: "bottom center",
    markers: true,
  }, duration: 2, opacity: 0
})



$(document).ready(function () {
  let submit = $("button[type=submit]")

  submit.click( function (){
    setData()
  });

  $('#submit_button').on('submit', function(event){
    event.preventDefault();
    window
  })

  let username = Cookies.get('FirstName') + " " + Cookies.get("LastName")

  $(`#username`).text("Hello, " + username)

})

// Sets the cookie and localStorage items
function setData() {
  let firstName = $('#first_name').val();
  let lastName = $('#last_name').val();
  let email = $('#exampleInputEmail1').val();
  let password = $('input[type=password]').val();
  let about = $('.text_area').val();

  if (firstName) {
    localStorage.setItem('firstname', firstName);
    Cookies.set('FirstName', firstName)
  }

  if (lastName) {
    localStorage.setItem('lastname', lastName);
    Cookies.set('LastName', lastName)
  }

  if (email) {
    localStorage.setItem('email', email);
    Cookies.set('Email', email)
  }




  if (password) {
    localStorage.setItem('password', password);
    Cookies.set('Password', password)
  }

  if (about) {
    localStorage.setItem('about', about);
    Cookies.set('About', about)
  }


  // Converts

}

function getCookiesAsJson() {
  const cookies = document.cookie.split(";");
  const cookieObject = {};

  cookies.forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    try {
      cookiesObject[name] = JSON.parse(decodeURICompenent(value));
    } catch(e) {
      cookieObject[name] = decodeURIComponent(value);
    }
  });

  return JSON.stringify(cookieObject);

}

const cookiesJSONString = getCookiesAsJson();


function getCookie(name) {
  console.log(cookiesJSONString);
  return localStorage.getItem('firstname', firstName);

}
// function handleReload() {
//   window.location.href = window.location.href;
// }
