// prevent viewport scrolling when inside scrolling divs.
document.onmouseover = function () { document.body.style.overflow='hidden';};
document.onmouseout = function () { document.body.style.overflow='auto';};
