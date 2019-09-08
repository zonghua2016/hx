/**
 * 获取&&设置-页面垂直滚动值
 * */
export function getPageScrollY(top) {
  if (top || Number(top) == 0) { //设置垂直滚动值
    if (self.pageYOffset) {
      self.pageYOffset = Number(top);
    }
    if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
      document.documentElement.scrollTop = Number(top);
    }
    if (document.body) { // all other Explorers
      document.body.scrollTop = Number(top);
    }
    return true;
  } else { //获取垂直滚动值
    var yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
    } else if (document.body) { // all other Explorers
      yScroll = document.body.scrollTop;
    }
    return yScroll;
  }
}