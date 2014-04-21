/**
 * Utils
 */

var Utils = {};

Utils.Ui = {
  /**
   * @method pagination
   * @param {Number} offset
   * @param {Number} limit 1ページあたりの記事量
   * @param {Number} totalCount 記事の総数
   */
  pagination : function(offset, limit, totalCount) {
    var result = [],
    nextCount  = 3,
        index  = offset/limit;

    for (var i = 0; i <= (index + 4); i++) {
      var firstNum = i * limit + 1,
      secondNum  = (i + 1) * limit;

      // secondNumはtotalCountが上限
      if(secondNum > totalCount) {
        secondNum = totalCount;
      }

      // トータル数よりページネーションが多くなる場合はループ止める
      if(totalCount < firstNum){
        break;
      }

      // ページネーションをセット
      result.push({
        'offset': (i * limit), // offset
        'current': (index == i), // currentの場合はtrue
        'firstNum': firstNum, // 最初の数字
        'secondNum': secondNum // 2番目の数字
      });
    }

    // indexが0の時はページネーションを後ろに3つ入る
    if(index === 0) {
      nextCount = 4;
    }

    if(totalCount / limit > 4) {
      // ページネーションをcurrentとnextCount分追加
      var nextPages = result.slice(index, index + nextCount);
      // nextPagesで追加できなかった分を計算
      var remain = 4 - nextPages.length;
      // remainをcurrentより前に、nextCountをcurrentより後ろに
      var allPages = result.slice(index - remain, index + nextCount);

      result = allPages;
    }

    /**
     * ページングの実装
     */
    var pagingPrev  = String(offset - limit),
        pagingNext  = String(offset + limit);
    // prevが出ない条件
    if(offset === 0) {
      pagingPrev = false;
    }
    // nextが出ない条件
    if((totalCount - offset) < 0 || (totalCount <= limit + offset)) {
      pagingNext = false;
    }

    result['paging'] = {
      'prev': pagingPrev,
      'next': pagingNext
    };

    /**
     * 最後のページのindex
     */
    result.lastPage = totalCount - limit;

    return result;

  }


};