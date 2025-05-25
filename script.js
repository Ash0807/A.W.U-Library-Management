// Search function
  function performSearch() {
    const type = document.getElementById('search-type').value;
    const input = document.getElementById('search-input').value;
    alert(`Searching for ${type}: ${input}`);
  }

// Modal image preview functionality
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.gallery-grid img').forEach(img => {
      img.addEventListener('click', () => {
        document.getElementById('modalImage').src = img.src;
        document.getElementById('imageModal').style.display = 'flex';
      });
    });

    document.getElementById('imageModal').addEventListener('click', () => {
      document.getElementById('imageModal').style.display = 'none';
    });
  });

