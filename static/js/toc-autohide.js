document.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.book-toc a');
    const tocControl = document.getElementById('toc-control');
    const mobileBreakpoint = 902; // Keep the same as the mobile breakpoint in _defaults.scss
    
    function handleTocClick(e) {
      if (window.innerWidth <= mobileBreakpoint) {
        tocControl.checked = false;
      }
    }
  
    // Add click event for each TOC link
    tocLinks.forEach(link => {
      link.addEventListener('click', handleTocClick);
    });
  });