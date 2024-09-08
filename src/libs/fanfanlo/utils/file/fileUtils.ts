export function exportFile(data: any, fileName: string) {
  // 声明blob对象
  const streamData = new Blob([data], { type: 'application/octet-stream' });
  // ie || edge 浏览器
  if (window.navigator && 'msSaveOrOpenBlob' in window.navigator) {
    // msSaveOrOpenBlob => 提供保存和打开按钮
    // msSaveBlob => 只提供一个保存按钮
    (window.navigator as any).msSaveOrOpenBlob(streamData, fileName);
  } else {
    // 创建隐藏的可下载链接
    const link = document.createElement('a');
    // 下载文件名称
    link.download = fileName;
    // link.style.visibility = 'hidden';
    link.style.display = 'none';
    // 字符内容转变为blob地址
    link.href = window.URL.createObjectURL(streamData);
    // 触发点击
    document.body.appendChild(link);
    link.click();
    // 移除
    document.body.removeChild(link);
  }
}
