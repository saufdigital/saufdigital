
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


//CAROUSEL SETTINGS
var $imagesCarousel = jQuery('.carouselOfImages').flickity({
    /* options, defaults listed */
  
    accessibility: false,
    /* enable keyboard navigation, pressing left & right keys */
  
    autoPlay: false,
    pauseAutoPlayOnHover: false,
    /* advances to the next cell
    if true, default is 3 seconds
    or set time between advances in milliseconds
    i.e. `autoPlay: 1000` will advance every 1 second */
  
    cellAlign: 'center',
    /* alignment of cells, 'center', 'left', or 'right'
    or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right) */
  
    // cellSelector: '.topic-switcher__item',
    /* specify selector for cell elements */
  
    contain: false,
    /* will contain cells to container
    so no excess scroll at beginning or end
    has no effect if wrapAround is enabled */
  
    draggable: true,
    /* enables dragging & flickin
    freeScroll: false,
    enables content to be freely scrolled and flicked
    without aligning cells */
  
    friction: 0.2,
    /* smaller number = easier to flick farther */
  
    initialIndex: 0,
    /* zero-based index of the initial selected cell */
  
    lazyLoad: false,
    /* enable lazy-loading images
    set img data-flickity-lazyload="src.jpg"
    set to number to load images adjacent cells */
  
    percentPosition: true,
    /* sets positioning in percent values, rather than pixels
    Enable if items have percent widths
    Disable if items have pixel widths, like images */
  
    prevNextButtons: false,
    /* creates and enables buttons to click to previous & next cells */
  
    pageDots: false,
    /* create and enable page dots */
  
    resize: true,
    /* listens to window resize events to adjust size & positions */
  
    rightToLeft: false,
    /* enables right-to-left layout */
  
    setGallerySize: true,
    /* sets the height of gallery
    disable if gallery already has height set with CSS */
  
    watchCSS: false,
    /* watches the content of :after of the element
    activates if #element:after { content: 'flickity' }
    IE8 and Android 2.3 do not support watching :after
    set watch: 'fallbackOn' to enable for these browsers */
  
    wrapAround: true
      /* at end of cells, wraps-around to first for infinite scrolling */
  });
  
  function resizeCells() {
    var flkty = $imagesCarousel.data('flickity');
    var $current = flkty.selectedIndex;
    var $length = flkty.cells.length;
    var $imageNumLimit = 5;
    if ($length < $imageNumLimit) {
      $imagesCarousel.flickity('destroy');
    }
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedLeft");
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedRight");
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedLeft2");
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedRight2");
    jQuery('.carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelectedLeft");
    jQuery('.carouselOfImages .carouselImage').eq($current - 2).addClass("nextToSelectedLeft2");
    var $endCell;
    if ($current + 1 == $length) {
      $endCell = "0";
    } else {
      $endCell = $current + 1;
    }
    jQuery('.carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelectedRight");
    if($endCell + 1 < $imageNumLimit){
      jQuery('.carouselOfImages .carouselImage').eq($endCell + 1).addClass("nextToSelectedRight2"); 
    } else {
      jQuery('.carouselOfImages .carouselImage').eq(0).addClass("nextToSelectedRight2");
    }
  }
  resizeCells();
  
  $imagesCarousel.on('scroll.flickity', function() {
    resizeCells();
  });
  
  
  //HOVER FUNCTIONS
  $('.carouselImage').bind("mouseover", function(){
    if (this.className === 'carouselImage nextToSelectedLeft') {
      $imagesCarousel.flickity('playLeftSlowPlayer');
    } else if (this.className === 'carouselImage nextToSelectedLeft2') {
      $imagesCarousel.flickity('playLeftFastPlayer');
    } else if (this.className === 'carouselImage nextToSelectedRight') {
      $imagesCarousel.flickity('playRightSlowPlayer');
    } else if (this.className === 'carouselImage nextToSelectedRight2') {
      $imagesCarousel.flickity('playRightFastPlayer');
    }
  });
  
  $('.carouselImage').bind("mouseout", function(){
    $imagesCarousel.flickity('pausePlayer');
  });
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
