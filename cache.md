# 緩存讀寫機制

## **Read-Aside**
![img](img/31.jpg)
## 應用直接去緩存中找數據，命中緩存則直接返回，如果未命中緩存，則需要先去資料庫中查詢數據，並將查詢到的數據存儲到緩存中

<br/>

## **Read-Through**
![img](img/32.jpg)
## Read-Through 的方式與 Read-Aside 的方式很接近，區別在於，Read-Aside 是通過應用程式來更新緩存中的數據，而 Read-Through 則是通過緩存自身來更新數據，也就是說應用和資料庫之間不直接進行連接

<br/>

## **Write-Through**
![img](img/33.jpg)
## 先將數據寫入到緩存中，然後由緩存將數據存入到資料庫中
## Write-Through 與 Read-Through 相結合可以很好的解決緩存和資料庫中數據不一致的問題，Write-Through 每次都會先更新緩存中的數據，所以每次讀到的數據也是最新的

<br/>

## **Write-Around**
![img](img/34.jpg)
## 並不會用到緩存，而是會直接寫入到資料庫中

<br/>

## **Write-Back**
![img](img/35.jpg)
## 寫了多次緩存後才會寫一次資料庫，可以大大減輕伺服器的壓力，但如果緩存出現了問題，那麼緩存中這部分沒有持久化的數據就會丟失

<br/>

## `Use Case` :

## Read-Aside/Write-Around
## Read-Through/Write-Around : 只需要寫一次並且讀多次的情況，比如聊天信息的寫入和獲取

## Read-Through/Write-Through

## Read-Through/Write-Back

<br/>

## **Q & A**
## Q : Cache-Aside 為什麼要配合 Write-Around 而不能和 Write-Through 一起使用

## A : 因為 Write-Through 會先更新緩存，而如果這時剛好有另外一個線程將資料庫中舊的數據讀取出來將緩存中新的數據覆蓋，就會造成數據錯誤，而使用 Write-Around 就不會出現這個問題

---

# 使用快取所需要留意的事情
## **緩存雪崩(Cache Avalanche)**：緩存在同一時刻全部失效，造成瞬時DB請求量大、壓力驟增，引起雪崩。緩存雪崩通常因為緩存服務器宕機、緩存的 key 設置了相同的過期時間等引起。

<br/>

## **緩存擊穿(Cache Breakdown)**：一個存在的key，在緩存過期的一刻，同時有大量的請求，這些請求都會擊穿到 DB ，造成瞬時DB請求量大、壓力驟增。

<br/>

## **緩存穿透(Cache Penetration)**：查詢一個不存在的數據，因為不存在則不會寫到緩存中，所以每次都會去請求 DB，如果瞬間流量過大，穿透到 DB，導致當機。

---

# 使用 SingleFlight 防止**緩存擊穿**

## `原理`
## 多個並發請求對一個失效的key進行數據獲取時，只會有其中一個去直接獲取數據，其它請求會被阻塞，等待第一個請求返回給它們結果

---

# Reference
- ## [防止緩存擊穿](https://geektutu.com/post/geecache-day6.html)
- ## [Node.js實作Mutex(互斥鎖)防止緩存擊穿](https://notes.andywu.tw/2021/node-js%E5%AF%A6%E4%BD%9Cmutex%E4%BA%92%E6%96%A5%E9%8E%96%E9%98%B2%E6%AD%A2%E7%B7%A9%E5%AD%98%E6%93%8A%E7%A9%BF/)
- ## [Golang 用SingleFlight合併重複請求](https://zhuanlan.zhihu.com/p/340191872)
- ## [Golang SingleFlight 該怎麼用](https://zhuanlan.zhihu.com/p/343761986)