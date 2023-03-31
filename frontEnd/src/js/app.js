import '../scss/app.scss';
import 'bootstrap/scss/bootstrap.scss';

/* Your JS Code goes here */

/* Demo JS */
// import './demo.js';

async function data() {
     await fetch(`http://localhost:8080/`)
      .then((res) => {
        return res.json();
      }).then((res)=>{
        console.log(res[0].hero.slide1.one);
      console.log(res[0].hero.slide2.two);
      document.getElementById(
        "landing_page"
      ).style.backgroundImage = `url(${res[0].hero.image})`;
      document.getElementById("carousel1").querySelector("img").src = res[0].hero.slide1.image;
      document.getElementById("carousel2").querySelector("img").src = res[0].hero.slide2.image;
      })
      .catch((err) => {
        alert(err);
      });
  
    // if (!res.error) {
    //   console.log(res[0].hero.slide1.one);
    //   console.log(res[0].hero.slide2.two);
    //   document.getElementById(
    //     "landing_page"
    //   ).style.backgroundImage = `url(${res[0].hero.image})`;
    //   document.getElementById("one").src = res[0].hero.slide1.image;
    //   document.getElementById("two").src = res[0].hero.slide2.image;
    // } else {
    //   console(res.error.message);
    // }
  }
  
  data();
  
  function handleForm(event) {
    event.preventDefault();
    let formData = {
      checkIn: document.getElementById("checkIn").value,
      checkOut: document.getElementById("checkOut").value,
      adults: document.getElementById("adult").value,
      childrens: document.getElementById("children").value,
    };
    console.log(formData);
    fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      alert("Form submitted!");
      document.getElementById("checkIn").value = null;
      document.getElementById("checkOut").value = null;
      document.getElementById("adults").value = "0";
      document.getElementById("childrens").value = "0";
    });
  }
  
  let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.getElementById("next").addEventListener("click", () => {
    console.log(swiper.activeIndex);
    if (swiper.activeIndex === 0) {
      document.getElementById(
        "roomType"
      ).innerHTML = `${res[0].hero.slide1.roomType}`;
      document.getElementById("price").innerHTML = `${res[0].hero.slide1.price}`;
    } else if (swiper.activeIndex === 1) {
      document.getElementById(
        "roomType"
      ).innerHTML = `${res[0].hero.slide2.roomType}`;
      document.getElementById("price").innerHTML = `${res[0].hero.slide2.price}`;}
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    console.log(swiper.activeIndex);
    if (swiper.activeIndex === 0) {
      document.getElementById(
        "roomType"
      ).innerHTML = `${res[0].hero.slide1.roomType}`;
      document.getElementById("price").innerHTML = `${res[0].hero.slide1.price}`;
    } else if (swiper.activeIndex === 1) {
      document.getElementById(
        "roomType"
      ).innerHTML = `${res[0].hero.slide2.roomType}`;
      document.getElementById("price").innerHTML = `${res[0].hero.slide2.price}`;
    } 
  });
  