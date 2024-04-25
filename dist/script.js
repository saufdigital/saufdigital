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
