"use strict";

// TODO: test
/**
 * paginationGenerator
 * @param {number} offset
 * @param {number} limit
 * @param {number} totalCount
 * @param {number} showCount
 * @returns {object} paging object
 */
export function paginationGenerator(offset, limit, totalCount, showCount) {
  let result = {};
  let pages = [];
  let nextCount = showCount - 1;
  let index = offset / limit;

  for (let i = 0; i <= (index + showCount); i++) {
    const firstNum = i * limit + 1;
    let secondNum = (i + 1) * limit;

    if (secondNum > totalCount) {
      secondNum = totalCount;
    }

    if (totalCount < firstNum) {
      break;
    }

    // set pagination
    pages.push({
      offset: (i * limit),
      current: (index === i),
      firstNum: firstNum,
      secondNum: secondNum,
      pageNum: i + 1
    });
  }

  if (index === 0) {
    nextCount = showCount;
  }

  if (totalCount / limit > showCount) {

    const nextPages = pages.slice(index, index + nextCount);

    const remain = showCount - nextPages.length;

    const begin = index - remain;
    const end = index + nextCount;

    pages = pages.slice(begin, end);;
  }

  result.pages = pages;

  let pagingPrev = String(offset - limit);
  let pagingNext = String(offset + limit);

  if (offset === 0) {
    pagingPrev = false;
  }

  if ((totalCount - offset) < 0 || (totalCount <= limit + offset)) {
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
