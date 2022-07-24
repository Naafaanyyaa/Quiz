document.addEventListener('DOMContentLoaded', (event) => {

function handleDragStart(e) {
    this.style.opacity = '0.4';
    this.classList.add('no-trash');
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    this.classList.remove('no-trash');
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
   
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
   
  }

  function handleDrop(e) {
    e.stopPropagation(); // препятствует перенаправлению в браузере.
    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
    
      return false;
  }

  let items = document.querySelectorAll('.list-of-druggable-elements .list');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });
});