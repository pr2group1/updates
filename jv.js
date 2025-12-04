
document.getElementById('sort-select').addEventListener('change', function() {
  const sortOrder = this.value;
  const achievements = document.querySelectorAll('#achievements .achievement-container');
  const achievementsArray = Array.from(achievements);

  achievementsArray.sort((a, b) => {
    const dateA = new Date(a.getAttribute('data-date'));
    const dateB = new Date(b.getAttribute('data-date'));
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const achievementsSection = document.getElementById('achievements');
  achievementsArray.forEach(item => achievementsSection.appendChild(item));
});
