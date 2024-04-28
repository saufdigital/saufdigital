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
            dialogBox.classList.add("fade-in");
            line.classList.add("hidden");
        } else {
            dialogBox.classList.add("fade-out");
            line.classList.remove("hidden");
            setTimeout(() => {
                dialogBox.classList.add("hidden");
                dialogBox.classList.remove("fade-out");
            }, 300); // Adjust the time to match your transition duration
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
            dialogBox.classList.add("fade-out");
            line.classList.remove("hidden");
            setTimeout(() => {
                dialogBox.classList.add("hidden");
                dialogBox.classList.remove("fade-out");
            }, 300); // Adjust the time to match your transition duration
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
