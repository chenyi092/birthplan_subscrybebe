function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var type = data.formType; 
    
    // 設定目標工作表 (如果沒有就自動建立)
    var targetSheetName = (type === 'consultation') ? "Consultations" : "Orders";
    var targetSheet = sheet.getSheetByName(targetSheetName);
    if (!targetSheet) {
      targetSheet = sheet.insertSheet(targetSheetName);
    }

    // 1. 儲存資料
    if (type === 'consultation') {
      // D 方案格式
      targetSheet.appendRow([
        new Date(), // 時間戳記
        data.name,
        data.email,
        data.phone,
        data.assetRange,
        data.preferredDate,
        data.notes,
        "Pending"
      ]);
    } else {
      // A/B/C 方案格式
      var itemsString = "";
      if (data.items && Array.isArray(data.items)) {
        itemsString = data.items.map(function(i) { return i.name + " x" + i.qty; }).join("\n");
      }
      targetSheet.appendRow([
        new Date(),
        data.productType,
        data.customerName,
        data.email,
        data.phone,
        data.address,
        data.paymentMethod,
        itemsString,
        data.finalPrice,
        data.orderDetailString
      ]);
    }

    // 2. 寄送 Email (增加除錯機制)
    if (data.email && data.email.toString().trim() !== "") {
      var subject = data.emailSubject || "通知";
      var body = data.emailBody || "內容";
      
      // 使用 GmailApp 寄信
      GmailApp.sendEmail(data.email, subject, body);
    }

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    // 發生錯誤時回傳錯誤訊息
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// *** 請執行這個函式來觸發授權視窗 ***
function sendTestEmail() {
  var myEmail = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(myEmail, "測試權限", "如果您收到這封信，代表 Google Script 寄信權限已開通！");
  Logger.log("測試信已寄出給: " + myEmail);
}