// Toggle Chapter Open/Close
function toggleEpisodes(header) {
    const list = header.nextElementSibling;
    list.classList.toggle('open');
}

// Smart Search for "Chapter X Verse Y"
document.getElementById('searchInput').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();

    const chapterMatch = query.match(/chapter\s*(\d+)/) || query.match(/ch\s*(\d+)/);
    const verseMatch = query.match(/verse\s*(\d+)/) || query.match(/v\s*(\d+)/) || query.match(/श्लोक\s*(\d+)/);

    if (chapterMatch && verseMatch) {
        const chap = chapterMatch[1];
        const verse = verseMatch[1];

        // Open the chapter if closed
        const chapterHeader = document.querySelector(`#chapter-${chap}`)?.previousElementSibling;
        if (chapterHeader && !chapterHeader.nextElementSibling.classList.contains('open')) {
            chapterHeader.click();
        }

        // Scroll to the verse
        const targetId = `chapter-${chap}-verse-${verse}`;
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.style.background = '#FFECB3';
            setTimeout(() => target.style.background = '#FFF8E1', 3000);
        }
    }
});