//TODO: -- http://jsfiddle.net/elGrecode/00dgurnn/

(() => {
  const scrollContainer = document.querySelector(".scrollable");
  scrollContainer.innerHTML = `<div class='content-wrapper'> ${scrollContainer.innerHTML}</div>`;

  const scrollContentWrapper = document.querySelector('.scrollable .content-wrapper');

  let contentPosition = 0,
    scrollerBeingDragged = false,
    scroller,
    topPosition,
    scrollerHeight;

  const calculateScrollerHeight = () => {
    // *Calculation of how tall scroller should be
    const visibleRatio = scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight;
    return visibleRatio * scrollContainer.offsetHeight;
  }


  const moveScroller = (evt) => {
    // Move Scroll bar to top offset
    const scrollPercentage = evt.target.scrollTop / scrollContentWrapper.scrollHeight;

    topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5); // 5px arbitrary offset so scroll bar doesn't move too far beyond content wrapper bounding box
    scroller.style.top = topPosition + 'px';
  }

  const startDrag = (evt) => {
    normalizedPosition = evt.pageY;
    contentPosition = scrollContentWrapper.scrollTop;
    scrollerBeingDragged = true;
  }

  const stopDrag = (evt) => {
    scrollerBeingDragged = false;
  }

  const scrollBarScroll = (evt) => {
    if (scrollerBeingDragged === true) {
      const mouseDifferential = evt.pageY - normalizedPosition;
      const scrollEquivalent = mouseDifferential * (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight);
      scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent;
    }
  }

  const createScroller = () => {
    // *Creates scroller element and appends to '.scrollable' div
    // create scroller element
    scroller = document.createElement("div");
    scroller.className = 'scroller';

    // determine how big scroller should be based on content
    scrollerHeight = calculateScrollerHeight();


    if (scrollerHeight / scrollContainer.offsetHeight < 1) {
      // *If there is a need to have scroll bar based on content size
      scroller.style.height = scrollerHeight + 'px';

      // append scroller to scrollContainer div
      scrollContainer.appendChild(scroller);

      // show scroll path divot
      scrollContainer.className += ' showScroll';

      // attach related draggable listeners
      scroller.addEventListener('mousedown', startDrag);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('mousemove', scrollBarScroll)
    }

  }

  createScroller();

  // *** Listeners ***
  scrollContentWrapper.addEventListener('scroll', moveScroller);
})();