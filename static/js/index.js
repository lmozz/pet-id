(() => {
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
    });
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
            (e.key === 'F12') ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });
    document.addEventListener('dragstart', e => {
        e.preventDefault();
    });
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
            e.preventDefault();
        }
    });
})();