(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);




/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
var $collectionHolder; // setup an "add a tag" link

var $addTagButton = $('<button type="button" class="add_tag_link">Add a tag</button>');
var $newLinkLi = $('<li></li>').append($addTagButton);
jQuery(document).ready(function () {
  // Get the ul that holds the collection of tags
  $collectionHolder = $('ul.tags'); // add the "add a tag" anchor and li to the tags ul

  $collectionHolder.append($newLinkLi); // count the current form inputs we have (e.g. 2), use that as the new
  // index when inserting a new item (e.g. 2)

  $collectionHolder.data('index', $collectionHolder.find(':input').length);
  $addTagButton.on('click', function (e) {
    // add a new tag form (see next code block)
    addTagForm($collectionHolder, $newLinkLi);
  });
});

function addTagForm($collectionHolder, $newLinkLi) {
  // Get the data-prototype explained earlier
  var prototype = $collectionHolder.data('prototype'); // get the new index

  var index = $collectionHolder.data('index');
  var newForm = prototype; // You need this only if you didn't set 'label' => false in your tags field in TaskType
  // Replace '__name__label__' in the prototype's HTML to
  // instead be a number based on how many items we have
  // newForm = newForm.replace(/__name__label__/g, index);
  // Replace '__name__' in the prototype's HTML to
  // instead be a number based on how many items we have

  newForm = newForm.replace(/__name__/g, index); // increase the index with one for the next item

  $collectionHolder.data('index', index + 1); // Display the form in the page in an li, before the "Add a tag" link li

  var $newFormLi = $('<li></li>').append(newForm);
  $newLinkLi.before($newFormLi);
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiJGFkZFRhZ0J1dHRvbiIsIiQiLCIkbmV3TGlua0xpIiwiYXBwZW5kIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImRhdGEiLCJmaW5kIiwibGVuZ3RoIiwib24iLCJlIiwiYWRkVGFnRm9ybSIsInByb3RvdHlwZSIsImluZGV4IiwibmV3Rm9ybSIsInJlcGxhY2UiLCIkbmV3Rm9ybUxpIiwiYmVmb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFQLEMsQ0FFQTtBQUNBOzs7QUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksbURBQVo7QUFFQSxJQUFJQyxpQkFBSixDLENBRUE7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHQyxDQUFDLENBQUMsK0RBQUQsQ0FBckI7QUFDQSxJQUFJQyxVQUFVLEdBQUdELENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUUsTUFBZixDQUFzQkgsYUFBdEIsQ0FBakI7QUFFQUksTUFBTSxDQUFDQyxRQUFELENBQU4sQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVc7QUFDOUI7QUFDQVAsbUJBQWlCLEdBQUdFLENBQUMsQ0FBQyxTQUFELENBQXJCLENBRjhCLENBSTlCOztBQUNBRixtQkFBaUIsQ0FBQ0ksTUFBbEIsQ0FBeUJELFVBQXpCLEVBTDhCLENBTzlCO0FBQ0E7O0FBQ0FILG1CQUFpQixDQUFDUSxJQUFsQixDQUF1QixPQUF2QixFQUFnQ1IsaUJBQWlCLENBQUNTLElBQWxCLENBQXVCLFFBQXZCLEVBQWlDQyxNQUFqRTtBQUVBVCxlQUFhLENBQUNVLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2xDO0FBQ0FDLGNBQVUsQ0FBQ2IsaUJBQUQsRUFBb0JHLFVBQXBCLENBQVY7QUFDSCxHQUhEO0FBSUgsQ0FmRDs7QUFrQkEsU0FBU1UsVUFBVCxDQUFvQmIsaUJBQXBCLEVBQXVDRyxVQUF2QyxFQUFtRDtBQUMvQztBQUNBLE1BQUlXLFNBQVMsR0FBR2QsaUJBQWlCLENBQUNRLElBQWxCLENBQXVCLFdBQXZCLENBQWhCLENBRitDLENBSS9DOztBQUNBLE1BQUlPLEtBQUssR0FBR2YsaUJBQWlCLENBQUNRLElBQWxCLENBQXVCLE9BQXZCLENBQVo7QUFFQSxNQUFJUSxPQUFPLEdBQUdGLFNBQWQsQ0FQK0MsQ0FRL0M7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBRSxTQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixXQUFoQixFQUE2QkYsS0FBN0IsQ0FBVixDQWYrQyxDQWlCL0M7O0FBQ0FmLG1CQUFpQixDQUFDUSxJQUFsQixDQUF1QixPQUF2QixFQUFnQ08sS0FBSyxHQUFHLENBQXhDLEVBbEIrQyxDQW9CL0M7O0FBQ0EsTUFBSUcsVUFBVSxHQUFHaEIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlRSxNQUFmLENBQXNCWSxPQUF0QixDQUFqQjtBQUNBYixZQUFVLENBQUNnQixNQUFYLENBQWtCRCxVQUFsQjtBQUNILEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXG4vLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XG5cbnZhciAkY29sbGVjdGlvbkhvbGRlcjtcblxuLy8gc2V0dXAgYW4gXCJhZGQgYSB0YWdcIiBsaW5rXG52YXIgJGFkZFRhZ0J1dHRvbiA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkX3RhZ19saW5rXCI+QWRkIGEgdGFnPC9idXR0b24+Jyk7XG52YXIgJG5ld0xpbmtMaSA9ICQoJzxsaT48L2xpPicpLmFwcGVuZCgkYWRkVGFnQnV0dG9uKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBHZXQgdGhlIHVsIHRoYXQgaG9sZHMgdGhlIGNvbGxlY3Rpb24gb2YgdGFnc1xuICAgICRjb2xsZWN0aW9uSG9sZGVyID0gJCgndWwudGFncycpO1xuXG4gICAgLy8gYWRkIHRoZSBcImFkZCBhIHRhZ1wiIGFuY2hvciBhbmQgbGkgdG8gdGhlIHRhZ3MgdWxcbiAgICAkY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld0xpbmtMaSk7XG5cbiAgICAvLyBjb3VudCB0aGUgY3VycmVudCBmb3JtIGlucHV0cyB3ZSBoYXZlIChlLmcuIDIpLCB1c2UgdGhhdCBhcyB0aGUgbmV3XG4gICAgLy8gaW5kZXggd2hlbiBpbnNlcnRpbmcgYSBuZXcgaXRlbSAoZS5nLiAyKVxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnOmlucHV0JykubGVuZ3RoKTtcblxuICAgICRhZGRUYWdCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyBhZGQgYSBuZXcgdGFnIGZvcm0gKHNlZSBuZXh0IGNvZGUgYmxvY2spXG4gICAgICAgIGFkZFRhZ0Zvcm0oJGNvbGxlY3Rpb25Ib2xkZXIsICRuZXdMaW5rTGkpO1xuICAgIH0pO1xufSk7XG5cblxuZnVuY3Rpb24gYWRkVGFnRm9ybSgkY29sbGVjdGlvbkhvbGRlciwgJG5ld0xpbmtMaSkge1xuICAgIC8vIEdldCB0aGUgZGF0YS1wcm90b3R5cGUgZXhwbGFpbmVkIGVhcmxpZXJcbiAgICB2YXIgcHJvdG90eXBlID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XG5cbiAgICAvLyBnZXQgdGhlIG5ldyBpbmRleFxuICAgIHZhciBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XG5cbiAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZTtcbiAgICAvLyBZb3UgbmVlZCB0aGlzIG9ubHkgaWYgeW91IGRpZG4ndCBzZXQgJ2xhYmVsJyA9PiBmYWxzZSBpbiB5b3VyIHRhZ3MgZmllbGQgaW4gVGFza1R5cGVcbiAgICAvLyBSZXBsYWNlICdfX25hbWVfX2xhYmVsX18nIGluIHRoZSBwcm90b3R5cGUncyBIVE1MIHRvXG4gICAgLy8gaW5zdGVhZCBiZSBhIG51bWJlciBiYXNlZCBvbiBob3cgbWFueSBpdGVtcyB3ZSBoYXZlXG4gICAgLy8gbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX19sYWJlbF9fL2csIGluZGV4KTtcblxuICAgIC8vIFJlcGxhY2UgJ19fbmFtZV9fJyBpbiB0aGUgcHJvdG90eXBlJ3MgSFRNTCB0b1xuICAgIC8vIGluc3RlYWQgYmUgYSBudW1iZXIgYmFzZWQgb24gaG93IG1hbnkgaXRlbXMgd2UgaGF2ZVxuICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aXRoIG9uZSBmb3IgdGhlIG5leHQgaXRlbVxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIGZvcm0gaW4gdGhlIHBhZ2UgaW4gYW4gbGksIGJlZm9yZSB0aGUgXCJBZGQgYSB0YWdcIiBsaW5rIGxpXG4gICAgdmFyICRuZXdGb3JtTGkgPSAkKCc8bGk+PC9saT4nKS5hcHBlbmQobmV3Rm9ybSk7XG4gICAgJG5ld0xpbmtMaS5iZWZvcmUoJG5ld0Zvcm1MaSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==