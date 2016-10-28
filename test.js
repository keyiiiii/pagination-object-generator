"use strict";

import assert from 'power-assert';
import paginationObjectGenerator from './index';

const firstData = {
  pages: [{
    offset: 0,
    current: true,
    firstNum: 1,
    secondNum: 20,
    pageNum: 1
  },
    {
      offset: 20,
      current: false,
      firstNum: 21,
      secondNum: 40,
      pageNum: 2
    },
    {
      offset: 40,
      current: false,
      firstNum: 41,
      secondNum: 60,
      pageNum: 3
    },
    {
      offset: 60,
      current: false,
      firstNum: 61,
      secondNum: 80,
      pageNum: 4
    }],
  paging: {prev: false, next: 20},
  last: {index: 50, offset: 1000}
};

const params = {
  offset: 0,
  limit: 20,
  totalCount: 1000,
  showCount: 4
};

describe('pages result', () => {
  const results = paginationObjectGenerator(params.offset, params.limit, params.totalCount, params.showCount);
  it(`pages first offset`, (done) => {
    assert(results.pages[0].offset === firstData.pages[0].offset);
    done();
  });
  it(`pages first current`, (done) => {
    assert(results.pages[0].current === firstData.pages[0].current);
    done();
  });
  it(`pages first firstNum`, (done) => {
    assert(results.pages[0].firstNum === firstData.pages[0].firstNum);
    done();
  });
  it(`pages first secondNum`, (done) => {
    assert(results.pages[0].secondNum === firstData.pages[0].secondNum);
    done();
  });
  it(`pages first pageNum`, (done) => {
    assert(results.pages[0].pageNum === firstData.pages[0].pageNum);
    done();
  });

  it(`pages last offset`, (done) => {
    assert(results.pages[3].offset === firstData.pages[3].offset);
    done();
  });
  it(`pages last current`, (done) => {
    assert(results.pages[3].current === firstData.pages[3].current);
    done();
  });
  it(`pages last firstNum`, (done) => {
    assert(results.pages[3].firstNum === firstData.pages[3].firstNum);
    done();
  });
  it(`pages last secondNum`, (done) => {
    assert(results.pages[3].secondNum === firstData.pages[3].secondNum);
    done();
  });
  it(`pages last pageNum`, (done) => {
    assert(results.pages[3].pageNum === firstData.pages[3].pageNum);
    done();
  });
});

describe('paging result', () => {
  const results = paginationObjectGenerator(params.offset, params.limit, params.totalCount, params.showCount);
  it(`paging prev`, (done) => {
    assert(results.paging.prev === firstData.paging.prev);
    done();
  });
  it(`paging next`, (done) => {
    assert(results.paging.next === firstData.paging.next);
    done();
  });

});

describe('last result', () => {
  const results = paginationObjectGenerator(params.offset, params.limit, params.totalCount, params.showCount);
  it(`last index`, (done) => {
    assert(results.paging.index === firstData.paging.index);
    done();
  });
  it(`last offset`, (done) => {
    assert(results.paging.offset === firstData.paging.offset);
    done();
  });

});