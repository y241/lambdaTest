exports.handler = async (event) => {
  var nomlish = require("nomlish");
  // TODO implement
  var beforeText = "今日の朝ご飯はパンでした。";
  nomlish.translate(beforeText, 2)
    .then(function(nomlishText) {
      const response = {
        statusCode: 200,
        body: JSON.stringify(nomlishText),
      };
      return response;
    });
};
