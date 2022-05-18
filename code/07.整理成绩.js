const fs = require("fs");
fs.readFile("./files/成绩.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.error(err);
  }
  // console.log('成绩获取成功'+dataStr);
  // 1.把字符串变成数组的形式
  let oldArr = dataStr.split(" ");
  let newArr = [];
  // 2.遍历数组吧=改为：
  oldArr.forEach(function (item) {
    newArr.push(item.replace("=", ":"));
  });
  console.log(newArr);
  // 3.把得到的数组转化成字符串
  let newStr = newArr.join("\r\n");
  // console.log(newStr);
  fs.writeFile("./files/处理好的成绩.txt", newStr, function (err) {
    if (err) {
      return console.log("文件写入失败"+err.message);
    }
    console.log("文件写入成功");
  });
});
