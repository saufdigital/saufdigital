document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.draggable');
    const items = slider.children;
    const middleIndex = Math.floor(items.length / 2);
    const middleElement = items[middleIndex];

    // Calculate the position of the middle of the ul
    const ulMiddle = slider.offsetWidth / 2;

    // Calculate the position of the middle of the middle element
    const middleElementMiddle = middleElement.offsetLeft + middleElement.offsetWidth / 2;

    // Calculate the initial scroll position to center the middle element
    let initialScrollLeft = middleElementMiddle - ulMiddle;

    // Make sure initialScrollLeft is within bounds
    initialScrollLeft = Math.max(0, Math.min(initialScrollLeft, slider.scrollWidth - slider.offsetWidth));

    // Scroll to the initial position
    slider.scrollTo({
        left: initialScrollLeft,
        behavior: 'smooth'
    });

    let mouseDown = false;
    let startX, startScrollLeft;

    const startDragging = (e) => {
        mouseDown = true;
        startX = e.pageX;
        startScrollLeft = slider.scrollLeft;
    }

    const stopDragging = (e) => {
        mouseDown = false;
    }

    const move = (e) => {
        e.preventDefault();
        if (!mouseDown) { return; }

        const currentX = e.pageX;
        const distance = currentX - startX;
        const threshold = 5; // Adjust this threshold as needed

        // Determine the direction of the swipe
        const direction = distance < 0 ? 1 : -1;

        // Check if the distance moved is greater than the threshold
        if (Math.abs(distance) >= threshold) {
            // Calculate the new scroll position based on the direction
            const newScrollLeft = startScrollLeft + (slider.clientWidth * direction);

            // Update the scroll position
            slider.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth' // Add smooth scrolling effect
            });

            // Reset mouseDown and startX to prevent continuous scrolling
            mouseDown = false;
            startX = currentX;
        }
    }

    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.draggable2');
    const items = slider.children;
    const middleIndex = Math.floor(items.length / 2);
    const middleElement = items[middleIndex];

    // Calculate the position of the middle of the ul
    const ulMiddle = slider.offsetWidth / 2;

    // Calculate the position of the middle of the middle element
    const middleElementMiddle = middleElement.offsetLeft + middleElement.offsetWidth / 2;

    // Calculate the initial scroll position to center the middle element
    let initialScrollLeft = middleElementMiddle - ulMiddle;

    // Make sure initialScrollLeft is within bounds
    initialScrollLeft = Math.max(0, Math.min(initialScrollLeft, slider.scrollWidth - slider.offsetWidth));

    // Scroll to the initial position
    slider.scrollTo({
        left: initialScrollLeft,
        behavior: 'smooth'
    });

    let mouseDown = false;
    let startX, startScrollLeft;

    const startDragging = (e) => {
        mouseDown = true;
        startX = e.pageX;
        startScrollLeft = slider.scrollLeft;
    }

    const stopDragging = (e) => {
        mouseDown = false;
    }

    const move = (e) => {
        e.preventDefault();
        if (!mouseDown) { return; }

        const currentX = e.pageX;
        const distance = currentX - startX;
        const threshold = 5; // Adjust this threshold as needed

        // Determine the direction of the swipe
        const direction = distance < 0 ? 1 : -1;

        // Check if the distance moved is greater than the threshold
        if (Math.abs(distance) >= threshold) {
            // Calculate the new scroll position based on the direction
            const newScrollLeft = startScrollLeft + (slider.clientWidth * direction);

            // Update the scroll position
            slider.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth' // Add smooth scrolling effect
            });

            // Reset mouseDown and startX to prevent continuous scrolling
            mouseDown = false;
            startX = currentX;
        }
    }

    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
});


document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('carouselContainer');
    const items = carouselContainer.children;
    const firstItem = items[0].cloneNode(true);
    const lastItem = items[items.length - 1].cloneNode(true);

    carouselContainer.appendChild(firstItem); // Add a copy of the first item to the end
    carouselContainer.insertBefore(lastItem, items[0]); // Insert a copy of the last item at the beginning

    // Scroll event listener
    carouselContainer.addEventListener('scroll', function() {
        // Check if scroll reaches the end
        if (carouselContainer.scrollLeft + carouselContainer.clientWidth >= carouselContainer.scrollWidth) {
            // Move the first item to the end
            carouselContainer.appendChild(items[0].cloneNode(true));
            // Reset the scroll position to maintain the illusion of continuity
            carouselContainer.scrollLeft = 0;
        }
        // Check if scroll reaches the beginning
        else if (carouselContainer.scrollLeft === 0) {
            // Move the last item to the beginning
            carouselContainer.insertBefore(items[items.length - 1].cloneNode(true), items[0]);
            // Adjust the scroll position to maintain the illusion of continuity
            carouselContainer.scrollLeft = items[1].offsetLeft;
        }
    });
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

document.addEventListener("DOMContentLoaded", function() {
    // Function to move to the next element
    function moveToNextElement() {
        // Get the container element
        const container = document.getElementById('listContainer');
    
        // Calculate the current scroll position
        const currentPosition = container.scrollLeft;
    
        // Get the width of the container
        const containerWidth = container.offsetWidth;
    
        // Find the index of the current visible element
        const currentIndex = Math.floor(currentPosition / containerWidth);
    
        // Calculate the position to scroll to (next element)
        const nextPosition = (currentIndex + 1) * containerWidth;
        console.log(currentPosition)
        console.log(nextPosition);
    
        // Scroll to the next position smoothly
        container.scrollTo({
            left: nextPosition,
            behavior: 'smooth'
        });
    }
    
    // Automatically call moveToNextElement every 5 seconds
    setInterval(moveToNextElement, 5000); // Adjust the interval as needed (in milliseconds)
});

function changeImage() {
    var images = [ '../assets/cover1.png','../assets/cover2.png','../assets/cover3.png','../assets/cover4.png' , '../assets/cover5.png','../assets/cover6.png' , '../assets/cover7.png']; // Array of image sources
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

    services.forEach(service => {
        service.addEventListener('click', () => {
            const description = service.getAttribute('data-description');
            descriptionDiv.textContent = description;
        });
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
