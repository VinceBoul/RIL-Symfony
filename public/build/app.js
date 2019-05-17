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

var $addTagButton = $('<button type="button" class="add_tag_link btn">Ajouter un ingrédient</button>');
var $newLinkLi = $('<li class="mt-2"></li>').append($addTagButton);
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
  $collectionHolder.find('li').each(function () {
    addTagFormDeleteLink($(this));
  });
});

function addTagForm($collectionHolder, $newLinkLi) {
  // Get the data-prototype explained earlier
  var prototype = $collectionHolder.data('prototype'); // get the new index

  var index = $collectionHolder.data('index');
  var newForm = prototype;
  console.log(newForm); // You need this only if you didn't set 'label' => false in your tags field in TaskType
  // Replace '__name__label__' in the prototype's HTML to
  // instead be a number based on how many items we have
  // newForm = newForm.replace(/__name__label__/g, index);
  // Replace '__name__' in the prototype's HTML to
  // instead be a number based on how many items we have

  newForm = newForm.replace(/__name__/g, index); // increase the index with one for the next item

  $collectionHolder.data('index', index + 1); // Display the form in the page in an li, before the "Add a tag" link li

  var $newFormLi = $('<li class="mt-2"></li>').append(newForm);
  $newLinkLi.before($newFormLi);
  addTagFormDeleteLink($newFormLi);
}

function addTagFormDeleteLink($tagFormLi) {
  var $removeFormButton = $('<button class="btn ml-2 delete-ingredient" type="button">Supprimer cet ingrédient</button>'); // On place le bouton après le champ de texte

  $tagFormLi.find('input').after($removeFormButton);
  $removeFormButton.on('click', function (e) {
    // remove the li for the tag form
    $tagFormLi.remove();
  });
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIiRjb2xsZWN0aW9uSG9sZGVyIiwiJGFkZFRhZ0J1dHRvbiIsIiQiLCIkbmV3TGlua0xpIiwiYXBwZW5kIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImRhdGEiLCJmaW5kIiwibGVuZ3RoIiwib24iLCJlIiwiYWRkVGFnRm9ybSIsImVhY2giLCJhZGRUYWdGb3JtRGVsZXRlTGluayIsInByb3RvdHlwZSIsImluZGV4IiwibmV3Rm9ybSIsInJlcGxhY2UiLCIkbmV3Rm9ybUxpIiwiYmVmb3JlIiwiJHRhZ0Zvcm1MaSIsIiRyZW1vdmVGb3JtQnV0dG9uIiwiYWZ0ZXIiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVAsQyxDQUVBO0FBQ0E7OztBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWjtBQUVBLElBQUlDLGlCQUFKLEMsQ0FFQTs7QUFDQSxJQUFJQyxhQUFhLEdBQUdDLENBQUMsQ0FBQywrRUFBRCxDQUFyQjtBQUNBLElBQUlDLFVBQVUsR0FBR0QsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJFLE1BQTVCLENBQW1DSCxhQUFuQyxDQUFqQjtBQUVBSSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUM5QjtBQUNBUCxtQkFBaUIsR0FBR0UsQ0FBQyxDQUFDLFNBQUQsQ0FBckIsQ0FGOEIsQ0FJOUI7O0FBQ0FGLG1CQUFpQixDQUFDSSxNQUFsQixDQUF5QkQsVUFBekIsRUFMOEIsQ0FPOUI7QUFDQTs7QUFDQUgsbUJBQWlCLENBQUNRLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDUixpQkFBaUIsQ0FBQ1MsSUFBbEIsQ0FBdUIsUUFBdkIsRUFBaUNDLE1BQWpFO0FBRUFULGVBQWEsQ0FBQ1UsRUFBZCxDQUFpQixPQUFqQixFQUEwQixVQUFTQyxDQUFULEVBQVk7QUFDbEM7QUFDQUMsY0FBVSxDQUFDYixpQkFBRCxFQUFvQkcsVUFBcEIsQ0FBVjtBQUNILEdBSEQ7QUFLQUgsbUJBQWlCLENBQUNTLElBQWxCLENBQXVCLElBQXZCLEVBQTZCSyxJQUE3QixDQUFrQyxZQUFVO0FBQ3hDQyx3QkFBb0IsQ0FBQ2IsQ0FBQyxDQUFDLElBQUQsQ0FBRixDQUFwQjtBQUNILEdBRkQ7QUFHSCxDQW5CRDs7QUFzQkEsU0FBU1csVUFBVCxDQUFvQmIsaUJBQXBCLEVBQXVDRyxVQUF2QyxFQUFtRDtBQUMvQztBQUNBLE1BQUlhLFNBQVMsR0FBR2hCLGlCQUFpQixDQUFDUSxJQUFsQixDQUF1QixXQUF2QixDQUFoQixDQUYrQyxDQUkvQzs7QUFDQSxNQUFJUyxLQUFLLEdBQUdqQixpQkFBaUIsQ0FBQ1EsSUFBbEIsQ0FBdUIsT0FBdkIsQ0FBWjtBQUVBLE1BQUlVLE9BQU8sR0FBR0YsU0FBZDtBQUNBbEIsU0FBTyxDQUFDQyxHQUFSLENBQVltQixPQUFaLEVBUitDLENBUy9DO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQUEsU0FBTyxHQUFHQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJGLEtBQTdCLENBQVYsQ0FoQitDLENBa0IvQzs7QUFDQWpCLG1CQUFpQixDQUFDUSxJQUFsQixDQUF1QixPQUF2QixFQUFnQ1MsS0FBSyxHQUFHLENBQXhDLEVBbkIrQyxDQXFCL0M7O0FBQ0EsTUFBSUcsVUFBVSxHQUFHbEIsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJFLE1BQTVCLENBQW1DYyxPQUFuQyxDQUFqQjtBQUNBZixZQUFVLENBQUNrQixNQUFYLENBQWtCRCxVQUFsQjtBQUVBTCxzQkFBb0IsQ0FBQ0ssVUFBRCxDQUFwQjtBQUVIOztBQUVELFNBQVNMLG9CQUFULENBQThCTyxVQUE5QixFQUEwQztBQUN0QyxNQUFJQyxpQkFBaUIsR0FBR3JCLENBQUMsQ0FBQyw0RkFBRCxDQUF6QixDQURzQyxDQUV0Qzs7QUFDQW9CLFlBQVUsQ0FBQ2IsSUFBWCxDQUFnQixPQUFoQixFQUF5QmUsS0FBekIsQ0FBK0JELGlCQUEvQjtBQUVBQSxtQkFBaUIsQ0FBQ1osRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3RDO0FBQ0FVLGNBQVUsQ0FBQ0csTUFBWDtBQUNILEdBSEQ7QUFJSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxucmVxdWlyZSgnLi4vY3NzL2FwcC5jc3MnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuXG52YXIgJGNvbGxlY3Rpb25Ib2xkZXI7XG5cbi8vIHNldHVwIGFuIFwiYWRkIGEgdGFnXCIgbGlua1xudmFyICRhZGRUYWdCdXR0b24gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZF90YWdfbGluayBidG5cIj5Bam91dGVyIHVuIGluZ3LDqWRpZW50PC9idXR0b24+Jyk7XG52YXIgJG5ld0xpbmtMaSA9ICQoJzxsaSBjbGFzcz1cIm10LTJcIj48L2xpPicpLmFwcGVuZCgkYWRkVGFnQnV0dG9uKTtcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBHZXQgdGhlIHVsIHRoYXQgaG9sZHMgdGhlIGNvbGxlY3Rpb24gb2YgdGFnc1xuICAgICRjb2xsZWN0aW9uSG9sZGVyID0gJCgndWwudGFncycpO1xuXG4gICAgLy8gYWRkIHRoZSBcImFkZCBhIHRhZ1wiIGFuY2hvciBhbmQgbGkgdG8gdGhlIHRhZ3MgdWxcbiAgICAkY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld0xpbmtMaSk7XG5cbiAgICAvLyBjb3VudCB0aGUgY3VycmVudCBmb3JtIGlucHV0cyB3ZSBoYXZlIChlLmcuIDIpLCB1c2UgdGhhdCBhcyB0aGUgbmV3XG4gICAgLy8gaW5kZXggd2hlbiBpbnNlcnRpbmcgYSBuZXcgaXRlbSAoZS5nLiAyKVxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnOmlucHV0JykubGVuZ3RoKTtcblxuICAgICRhZGRUYWdCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyBhZGQgYSBuZXcgdGFnIGZvcm0gKHNlZSBuZXh0IGNvZGUgYmxvY2spXG4gICAgICAgIGFkZFRhZ0Zvcm0oJGNvbGxlY3Rpb25Ib2xkZXIsICRuZXdMaW5rTGkpO1xuICAgIH0pO1xuXG4gICAgJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGFkZFRhZ0Zvcm1EZWxldGVMaW5rKCQodGhpcykpO1xuICAgIH0pO1xufSk7XG5cblxuZnVuY3Rpb24gYWRkVGFnRm9ybSgkY29sbGVjdGlvbkhvbGRlciwgJG5ld0xpbmtMaSkge1xuICAgIC8vIEdldCB0aGUgZGF0YS1wcm90b3R5cGUgZXhwbGFpbmVkIGVhcmxpZXJcbiAgICB2YXIgcHJvdG90eXBlID0gJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XG5cbiAgICAvLyBnZXQgdGhlIG5ldyBpbmRleFxuICAgIHZhciBpbmRleCA9ICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XG5cbiAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZTtcbiAgICBjb25zb2xlLmxvZyhuZXdGb3JtKTtcbiAgICAvLyBZb3UgbmVlZCB0aGlzIG9ubHkgaWYgeW91IGRpZG4ndCBzZXQgJ2xhYmVsJyA9PiBmYWxzZSBpbiB5b3VyIHRhZ3MgZmllbGQgaW4gVGFza1R5cGVcbiAgICAvLyBSZXBsYWNlICdfX25hbWVfX2xhYmVsX18nIGluIHRoZSBwcm90b3R5cGUncyBIVE1MIHRvXG4gICAgLy8gaW5zdGVhZCBiZSBhIG51bWJlciBiYXNlZCBvbiBob3cgbWFueSBpdGVtcyB3ZSBoYXZlXG4gICAgLy8gbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX19sYWJlbF9fL2csIGluZGV4KTtcblxuICAgIC8vIFJlcGxhY2UgJ19fbmFtZV9fJyBpbiB0aGUgcHJvdG90eXBlJ3MgSFRNTCB0b1xuICAgIC8vIGluc3RlYWQgYmUgYSBudW1iZXIgYmFzZWQgb24gaG93IG1hbnkgaXRlbXMgd2UgaGF2ZVxuICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aXRoIG9uZSBmb3IgdGhlIG5leHQgaXRlbVxuICAgICRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcblxuICAgIC8vIERpc3BsYXkgdGhlIGZvcm0gaW4gdGhlIHBhZ2UgaW4gYW4gbGksIGJlZm9yZSB0aGUgXCJBZGQgYSB0YWdcIiBsaW5rIGxpXG4gICAgdmFyICRuZXdGb3JtTGkgPSAkKCc8bGkgY2xhc3M9XCJtdC0yXCI+PC9saT4nKS5hcHBlbmQobmV3Rm9ybSk7XG4gICAgJG5ld0xpbmtMaS5iZWZvcmUoJG5ld0Zvcm1MaSk7XG5cbiAgICBhZGRUYWdGb3JtRGVsZXRlTGluaygkbmV3Rm9ybUxpKTtcblxufVxuXG5mdW5jdGlvbiBhZGRUYWdGb3JtRGVsZXRlTGluaygkdGFnRm9ybUxpKSB7XG4gICAgdmFyICRyZW1vdmVGb3JtQnV0dG9uID0gJCgnPGJ1dHRvbiBjbGFzcz1cImJ0biBtbC0yIGRlbGV0ZS1pbmdyZWRpZW50XCIgdHlwZT1cImJ1dHRvblwiPlN1cHByaW1lciBjZXQgaW5ncsOpZGllbnQ8L2J1dHRvbj4nKTtcbiAgICAvLyBPbiBwbGFjZSBsZSBib3V0b24gYXByw6hzIGxlIGNoYW1wIGRlIHRleHRlXG4gICAgJHRhZ0Zvcm1MaS5maW5kKCdpbnB1dCcpLmFmdGVyKCRyZW1vdmVGb3JtQnV0dG9uKTtcblxuICAgICRyZW1vdmVGb3JtQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBsaSBmb3IgdGhlIHRhZyBmb3JtXG4gICAgICAgICR0YWdGb3JtTGkucmVtb3ZlKCk7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==