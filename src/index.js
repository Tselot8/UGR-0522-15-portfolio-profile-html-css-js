document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.myimage');
    const caption = document.createElement('p');
    caption.textContent = 'This is Tselot Million';
    caption.style.display = 'none';
    caption.style.position = 'absolute';
    caption.style.top = '50%';
    caption.style.left = '85%';
    caption.style.transform = 'translate(-50%, -50%)';
    caption.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    caption.style.color = 'white';
    caption.style.padding = '5px';
    caption.style.borderRadius = '5px';
    caption.style.zIndex = '10';
    document.body.appendChild(caption);

    profileImage.addEventListener('mouseenter', () => {
        caption.style.display = 'block';
    });
    profileImage.addEventListener('mouseleave', () => {
        caption.style.display = 'none';
    });

    const socialLinks = document.querySelectorAll('header a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2)';
            link.style.transition = 'transform 0.3s';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });

    const filterInput = document.getElementById('filterInput');
    if (filterInput) {
        const skills = document.querySelectorAll('.cvmbox li');
        filterInput.addEventListener('keyup', () => {
            const filterValue = filterInput.value.toLowerCase();
            skills.forEach(skill => {
                if (skill.textContent.toLowerCase().includes(filterValue)) {
                    skill.style.display = '';
                } else {
                    skill.style.display = 'none';
                }
            });
        });
    }
});
