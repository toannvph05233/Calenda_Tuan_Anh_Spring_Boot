function changeInputType(select) {
    const searchInput = document.getElementById('searchInput');
    if (select.value === 'userId') {
        searchInput.type = 'text';
        searchInput.placeholder = 'Input Mail';
    } else if (select.value === 'date') {
        searchInput.type = 'date';
        searchInput.placeholder = 'Date';
    }
}