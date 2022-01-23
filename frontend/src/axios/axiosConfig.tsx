const config = {
    
    url: '/api',  // 只有此為必需
    headers: { 'Content-Type': 'application/json' },
    
    // 添加在 url 前面，除非 url 為絕對路徑
    baseURL: 'http://localhost:3000',
    
    // 請求時間超過 1000毫秒(1秒)，請求會被中止
    timeout: 1000,

    // 伺服器回應的數據類型
    responseType: 'json', 

    // 伺服器回應的編碼模式 預設 'utf8'
    responseEncoding: 'utf8',

    // 在上傳、下載途中可執行的事情 (progressBar、Loading)
    onUploadProgress(progressEvt) { /* 原生 ProgressEvent */  },
    onDownloadProgress(progressEvt) { /* 原生 ProgressEvent */ },

    // return promise 並提供有效的回應 (valid response)
    // adapter (config) { /* 下方章節 補充詳細用法 */ },

  }