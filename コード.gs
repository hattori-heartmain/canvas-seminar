function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('AI体験セミナー リソース集')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
