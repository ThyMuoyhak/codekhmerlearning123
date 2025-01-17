// Fetch the JSON file and display the course cards
fetch('course_card.json')
  .then(response => response.json()) // Parse the JSON
  .then(data => {
      const coursesContainer = document.getElementById('courses');
      
      data.courses.forEach(course => {
          // Create card elements dynamically
          const courseCard = document.createElement('div');
          courseCard.classList.add('shadow-lg', 'rounded-lg', 'overflow-hidden', 'hover:shadow-xl', 'transition-shadow', 'duration-300');

          // Create course image element
          const courseImage = document.createElement('img');
          courseImage.src = course.image;
          courseImage.alt = course.title;
          courseImage.classList.add('w-full', 'h-48', 'object-cover');

          // Create card body
          const cardBody = document.createElement('div');
          cardBody.classList.add('p-6');
          
          // Create course title
          const courseTitle = document.createElement('h3');
          courseTitle.classList.add('text-xl', 'font-bold', 'mb-2');
          courseTitle.textContent = course.title;
          
          // Create course description
          const courseDescription = document.createElement('p');
          courseDescription.classList.add('mb-4');
          courseDescription.textContent = course.description;
          
          // Create "Learn more" button
          const learnMoreBtn = document.createElement('a');
          learnMoreBtn.href = "#";  // Prevent default link behavior, to control via JS
          learnMoreBtn.classList.add(
              'bg-gradient-to-r', 'from-indigo-500', 'to-purple-600', 'text-white', 'py-3', 'px-6',
              'rounded-lg', 'shadow-md', 'hover:from-indigo-600', 'hover:to-purple-700', 'transition',
              'duration-300', 'text-center',  'items-center', 'justify-center', 'gap-2'
          );
          learnMoreBtn.textContent = 'ចុចដើម្បីរៀន';

          // Add status label if available with color styles
          const statusLabel = document.createElement('span');
          statusLabel.classList.add('inline-block', 'mt-2', 'text-sm', 'font-medium');
          
          // Check the status and apply the right color and text
          if (course.status === 'មានមេរៀន') {
              statusLabel.classList.add('text-green-500', 'text-right');
              statusLabel.textContent = 'មានមេរៀន';

              // If status is "មានមេរៀន", make the button work as a link
              learnMoreBtn.href = course.link;  // Link to the course page
              learnMoreBtn.target = "_blank";  // Open in a new tab
          } else if (course.status === 'មិនទាន់មានមេរៀន') {
              statusLabel.classList.add('text-red-500', 'text-right');
              statusLabel.textContent = 'មិនទាន់មានមេរៀន';
              
              // If status is "មិនទាន់មានមេរៀន", show the modal when the button is clicked
              learnMoreBtn.addEventListener('click', (e) => {
                  e.preventDefault(); // Prevent default link behavior
                  showModal(); // Show the modal
              });
          }

          // Append elements to the card
          cardBody.appendChild(courseTitle);
          cardBody.appendChild(courseDescription);
          cardBody.appendChild(learnMoreBtn);
          cardBody.appendChild(statusLabel); // Add the status label here
          
          courseCard.appendChild(courseImage);
          courseCard.appendChild(cardBody);
          
          // Append the course card to the container
          coursesContainer.appendChild(courseCard);
      });
  })
  .catch(error => console.error('Error loading the courses:', error));

// Function to show the modal
function showModal() {
    const modal = document.getElementById('statusModal');
    modal.classList.remove('hidden');  // Show the modal
}

// Close the modal when the close button is clicked
const closeModalBtn = document.getElementById('closeModalBtn');
closeModalBtn.addEventListener('click', () => {
    const modal = document.getElementById('statusModal');
    modal.classList.add('hidden');  // Hide the modal
});
