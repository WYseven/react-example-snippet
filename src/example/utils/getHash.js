
// 抽离公共的
function gethash(callback) {
  let gethashHandle = () => {
    let hash = window.location.hash;
    if (hash) {
      hash = hash.slice(2);
    }
    if (!gethash.filterHash[hash]) {
      hash = 'all'
    }
    callback && callback(hash)
  }

  // 监听hash
  window.addEventListener('hashchange', gethashHandle);

  gethashHandle();
}

// 方法聚合在函数上
gethash.filterHash = {
  all(list) {
    return list
  },
  active(list) {
    return list.filter((item) => !item.checked)
  },
  completed(list) {
    return list.filter((item) => item.checked)
  }
}

export default gethash;