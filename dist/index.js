"use strict";

/**
 * paginationObjectGenerator
 * @param {number} offset
 * @param {number} limit
 * @param {number} totalCount
 * @param {number} showCount
 * @returns {object} paging object
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = paginationObjectGenerator;
function paginationObjectGenerator(offset, limit, totalCount, showCount) {
  var result = {};
  var pages = [];
  var nextCount = showCount - 1;
  var index = offset / limit;

  for (var i = 0; i <= index + showCount; i++) {
    var firstNum = i * limit + 1;
    var secondNum = (i + 1) * limit;

    if (secondNum > totalCount) {
      secondNum = totalCount;
    }

    if (totalCount < firstNum) {
      break;
    }

    // set pagination
    pages.push({
      offset: i * limit,
      current: index === i,
      firstNum: firstNum,
      secondNum: secondNum,
      pageNum: i + 1
    });
  }

  if (index === 0) {
    nextCount = showCount;
  }

  if (totalCount / limit > showCount) {

    var nextPages = pages.slice(index, index + nextCount);

    var remain = showCount - nextPages.length;

    var begin = index - remain;
    var end = index + nextCount;

    pages = pages.slice(begin, end);
  }

  result.pages = pages;

  var pagingPrev = offset - limit;
  var pagingNext = offset + limit;

  if (offset === 0) {
    pagingPrev = false;
  }

  if (totalCount - offset < 0 || totalCount <= limit + offset) {
    pagingNext = false;
  }

  result.paging = {
    prev: pagingPrev,
    next: pagingNext
  };

  /**
   * last page index
   */
  result.last = {
    index: Math.ceil(totalCount / limit),
    offset: Math.floor(totalCount / limit) * limit
  };

  return result;
}