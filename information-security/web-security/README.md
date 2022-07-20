# Same Origin Policy

## `瀏覽器基於安全性的考量所制定的規範`

## 網站跟 API Server「不同源」的時候，瀏覽器一樣會幫你發送 Request，但會把 Response 給擋下來，不讓你的 JavaScript 拿到並傳回錯誤。

<br/>

## 不同源之間如何互相傳輸資料?
### 1. <strike>關掉瀏覽器的安全性設置</strike>
### 2. JSONP，JSON with Padding `(<a>，<img>，<link>，<script>, <iframe> 不會受到 Same Origin Policy 限制)`
### 3. AJAX (ex: XMLHttpRequest, fetch) 搭配 後端設置 CORS header

<br/>
  
## `Cross-Origin Resource Sharing (CORS)`

<br/>

## CORS 將 Request 分成兩種：
## 1. 簡單請求
- ## HEAD or GET or POST
- ## HTTP Header 訊息在以下範圍內
  - ## Accept
  - ## Accept-Language
  - ## Content-Language
  - ## Last-Event-ID
  - ## Content-Type
- ## Header 的 Content-Type 為：
  - ## text/plain
  - ## application/x-www-form-urlencoded
  - ## multipart/form-data

<br/>

## 2. 非簡單請求
## 先透過 Preflight Request 去確認後續的請求能否送出，如果 Preflight Request 沒有通過的話，真正的 Request 也就不會發送

<br/>

## `為何需要 Preflight Request?`
## 假設今天某個 Server 提供了一個 API ，網址為`https://example.com/data/16`，只要對它發送 GET，就能夠拿到 id 是 16 的資料，只要對它發送 DELETE，就可以把這筆資料刪除。

## 如果沒有 Preflight Request 這個機制的話，就可以隨便往一個 Domain 發送 DELETE 的 Request 給這支 API。雖然有CORS規範，但瀏覽器還是會幫你發送 Request，只是 Response 被瀏覽器擋住而已。因此儘管沒有 Response，Server 還是會把這筆資料刪除。

<br/>

## `跨來源請求預設是不會把 cookie 帶上去的，需要在使用 xhr 或是 fetch 的時候多加一個設定，而後端也需要加一個額外的 header 才行`
## 前端
```
credentials: 'include'
```
## 後端
## 1. `Access-Control-Allow-Origin 不能是 *，一定要明確指定 origin`
## 2. header 要帶上 `Access-Control-Allow-Credentials: true`

<br/>

## 存取自定義 header
## 後端
## 1. header 要帶上 `Access-Control-Expose-Headers`

---

# List of Attacks
- ## [CSRF](https://owasp.org/www-community/attacks/csrf)
- ## [XSS](https://owasp.org/www-community/attacks/xss)
- ## [Reverse Tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing)

---

# Reference
- ## [HTTPS 背後的功臣](https://medium.com/starbugs/security-ssl-https-%E8%83%8C%E5%BE%8C%E7%9A%84%E5%8A%9F%E8%87%A3-df714e4df77b)
- ## [HTTPS是什麼？](https://www.bilibili.com/video/BV1KY411x7Jp?spm_id_from=333.999.0.0)
- ## [不要用JWT替代session管理](https://zhuanlan.zhihu.com/p/38942172)
- ## [淺談CSRF](https://blog.huli.tw/2017/03/12/csrf-introduction/)
- ## [與安全性有關的 HTTP Header](https://ithelp.ithome.com.tw/articles/10272394)
