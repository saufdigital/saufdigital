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
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const dialogBox = document.getElementById("dialogBox");
    const line = document.getElementById("line");
    const menubox = document.getElementById("menubox");
    const startbutton = document.getElementById("startbutton");

    // Function to show or hide the dialog box with smooth transitions
    function toggleDialogBox() {
        if (dialogBox.classList.contains("hidden")) {
            dialogBox.classList.remove("hidden");
            line.classList.add("hidden");
        } else {
            line.classList.remove("hidden");
                dialogBox.classList.add("hidden");
        }
    }
    // Event listener for the menu button
    menuButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents the click event from propagating to the document
        toggleDialogBox();
    });

    // Event listener for clicks outside the dialog box
    document.addEventListener("click", function(event) {
        if (!menubox.contains(event.target) && !startbutton.contains(event.target) && event.target !== menuButton) {
            line.classList.remove("hidden");
                dialogBox.classList.add("hidden");
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
    var images = [ '../assets/cover1.png','../assets/cover2.png','../assets/cover3.png','../assets/cover4.png' ]; // Array of image sources
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
