
window.history.replaceState('','','/');
// const slider = document.querySelector('.draggable');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 3; //scroll-fast
//     slider.scrollLeft = scrollLeft - walk;
// });

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("li")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// let slider = document.querySelector(".slider");
// let innerSlider = document.querySelector(".slider-inner");

// let pressed = false;
// let startx;
// let x;

// slider.addEventListener("mousedown", (e) => {
//   pressed = true;
//   startx = e.offsetX - innerSlider.offsetLeft;
//   console.log(
//     `OffsetX: ${e.offsetX}, InnerSlider OffsetLeft: ${innerSlider.offsetLeft}`
//   );
//   slider.style.cursor = "grabbing";
// });

// slider.addEventListener("mouseenter", () => {
//   slider.style.cursor = "grab";
// });

// slider.addEventListener("mouseup", () => {
//   slider.style.cursor = "grab";
// });

// window.addEventListener("mouseup", () => {
//   pressed = false;
// });

// slider.addEventListener("mousemove", (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX;
//   console.log(`x: ${x}, startx: ${startx}`);
//   console.log(`Diff: ${x - startx}`);

//   innerSlider.style.left = `${x - startx}px`;
//   checkBoundary();
// });

// function checkBoundary(x, startx) {
//   let outer = slider.getBoundingClientRect();
//   let inner = innerSlider.getBoundingClientRect();

//   if (parseInt(innerSlider.style.left) > 0) {
//     innerSlider.style.left = "0px";
//   }
//   if (inner.right < outer.right) {
//     innerSlider.style.left = `-${inner.width - outer.width}px`;
//   }
// }

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dropdownContent = document.getElementById('dropdown-content');
    const links = dropdownContent.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            dropdownContent.style.display = 'none';
        });
    }

    // Optional: Close the dropdown if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && !event.target.closest('.menu-button')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Optional: Toggle the dropdown visibility when clicking the menu button
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
        if (dropdownContent.style.display === 'block' || dropdownContent.style.display === '') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});
let currentIndex = 0;

function slideToNextItem() {
  // Get the UL element
  const ul = document.getElementById('listContainer');
  
  // Get all LI elements within the UL
  const items = ul.querySelectorAll('li');
  
  if (items.length > 0) {
    // Calculate the width of the first LI element (assuming all LI elements have the same width)
    const itemWidth = items[0].offsetWidth;

    // Calculate the new scroll position
    const newPosition = (currentIndex * itemWidth) % (items.length * itemWidth);

    // Scroll the UL to the new position
    ul.scrollLeft = newPosition;

    // Update the index to the next item
    currentIndex = (currentIndex + 1) % items.length;
  }
}

// Set an interval to automatically slide to the next item every 2 seconds
setInterval(slideToNextItem, 5000);

function changeImage() {
    var images = [ '../assets/cover1.png','../assets/cover2.png','../assets/cover3.png','../assets/cover4.png' , '../assets/cover5.png' , '../assets/cover7.png']; // Array of image sources
    var currentIndex = 0; // Start index
    
    setInterval(function() {
      var image = document.getElementById('myImage');
      // Change the source of the image
      image.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image source
    }, 2000); // Repeat every 2 seconds
  }
  
  // Call the function to initiate the change
document.addEventListener('DOMContentLoaded', changeImage);
$(document).ready(function() {
    // Hide myImg1 initially
    $("#myImg1").hide();

    // Show myImg1 on hover over the first .heading element
    $(".heading:first").hover(
        function() {
            $("#myImg1").show();
        },
        function() {
            $("#myImg1").hide();
        }
    );
});
$(document).ready(function() {
    // Hide myImg2 initially
    $("#myImg2").hide();

    // Show myImg2 on hover over the second .heading element
    $(".heading:eq(1)").hover(
        function() {
            $("#myImg2").show();
        },
        function() {
            $("#myImg2").hide();
        }
    );
});
$(document).ready(function() {
    // Hide myImg2 initially
    $("#myImg3").hide();

    // Show myImg2 on hover over the second .heading element
    $(".heading:eq(2)").hover(
        function() {
            $("#myImg3").show();
        },
        function() {
            $("#myImg3").hide();
        }
    );
});
$(document).ready(function() {
    // Hide myImg2 initially
    $("#myImg5").hide();

    // Show myImg2 on hover over the second .heading element
    $(".heading:eq(4)").hover(
        function() {
            $("#myImg5").show();
        },
        function() {
            $("#myImg5").hide();
        }
    );
});


document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    const descriptionDiv = document.getElementById('service-description');
    
    const descriptionText = descriptionDiv.querySelector('p');
    const descriptionHeading = descriptionDiv.querySelector('.scrolling-text');

    services.forEach(service => {
        service.addEventListener('click', () => {
            const description = service.getAttribute('data-description');
            const gradient = service.getAttribute('data-bg-image');

            descriptionHeading.textContent = service.textContent.trim();
            descriptionText.textContent = description;
            descriptionDiv.style.backgroundImage = gradient;
        });
    });
});

document.querySelectorAll('.service').forEach(item => {
    item.addEventListener('click', event => {
        // Remove 'selected' class from all items
        document.querySelectorAll('.service').forEach(el => el.classList.remove('selected'));
        // Add 'selected' class to the clicked item
        event.currentTarget.classList.add('selected');
    });
});


const form = document.getElementById('form');
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
