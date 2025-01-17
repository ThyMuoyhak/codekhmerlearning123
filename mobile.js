const menuButton = document.getElementById('menuButton');
        const mobileMenu = document.getElementById('mobileMenu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const courseButton = document.getElementById('courseButton');
        const courseDropdown = document.getElementById('courseDropdown');

        courseButton.addEventListener('click', () => {
            courseDropdown.classList.toggle('hidden');
        });

        const mobileCourseButton = document.getElementById('mobileCourseButton');
        const mobileCourseDropdown = document.getElementById('mobileCourseDropdown');

        mobileCourseButton.addEventListener('click', () => {
            mobileCourseDropdown.classList.toggle('hidden');
        });

        function toggleAnswer(number) {
            const answer = document.getElementById(`answer${number}`);
            const arrow = document.getElementById(`arrow${number}`);
            
            if (answer.classList.contains("hidden")) {
                answer.classList.remove("hidden");
                arrow.style.transform = "rotate(180deg)";
            } else {
                answer.classList.add("hidden");
                arrow.style.transform = "rotate(0deg)";
            }
        }

        // Select the elements
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.querySelector('[@click="open = !open"]');
        const closeSidebar = document.getElementById('closeSidebar');

        // Toggle sidebar visibility when the toggle button is clicked
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
        });

        // Close sidebar when the close button (×) is clicked
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.add('hidden');
        });

        