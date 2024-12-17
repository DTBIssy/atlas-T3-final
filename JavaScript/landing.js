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
    start: "top 80%",
    end: "bottom center",
     markers: true,
  }, duration: 2, ease: "power4.out", left: "-150vw", opacity: 0,
})

gsap.from('#apply_sect', {
  scrollTrigger:{
    toggleActions: "play none none reverse",
    trigger:"#end",
    start: "top 70%",
    end: "bottom center",
    // markers: true,
  }, duration: 2, opacity: 0
})

gsap.from('.page_wrap', {
  scrollTrigger:{
    toggleActions: "play none none reverse",
    trigger:".page_wrap",
    start: "top 70%",
    end: "bottom ",
    // markers: true,
  }, duration: 3, opacity: 0,
})





$(document).ready(function () {
  let submit = $("button[type=submit]")

  $(".loader").show()

  submit.click( function (){
    setData()
  });

  $("#join_us").on('click', function(){
    setData()
  })

  $('.accept').on('click', function(){
    acceptApp()
  })

  // $('.resubmit').on('click', function(){
  //   resubApp()
  // })

  $('#submit_button').on('submit', function(event){
    event.preventDefault();
  })

  let username = Cookies.get('FirstName') + " " + Cookies.get("LastName")
  let email = Cookies.get('Email')
  let about = Cookies.get('About')
  let password = Cookies.get('Password')


  $(`#username`).text("Hello, " + username)
  $(`.username`).text(username)
  $('#Email').text(email)
  $('#about').text(about)

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

}

function acceptApp() {
  $('.loader').hide();

  $(".app_h").text("Application Accepted! Welcome!")
}

function resubApp(){

  const relativeUrl = 'landing.html';
  const absoluteURL = new URL(relativeUrl, window.location.href)

  if(confirm("This will delete your current App form and return you to the application submit form. \nDo you wish to continue?")){
      localStorage.removeItem('firstname');
      Cookies.remove('FirstName')
      localStorage.removeItem('lastname');
      Cookies.remove('LastName')
      localStorage.removeItem('email');
      Cookies.remove('Email')
      localStorage.removeItem('password');
      Cookies.remove('Password')
      localStorage.removeItem('about');
      Cookies.remove('About')
      window.location.href = absoluteURL.href;


    } else{
  };


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
