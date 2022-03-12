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