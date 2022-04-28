# 什麼是區塊鍊
> ## 透過共識演算法實現**信任去中⼼化**的技術

---

# **區塊鏈如何解決3個一致性方面的問題**
## 1. 如何進行同步 => 僅維護一個區塊鍊
## 2. 如何防止紀錄被篡改 => 區塊的HASH的唯一性，只有篡改者的計算能力超過整個網路其他節點的計算能力總和時，篡改者所製作的區塊鏈的生長速度才有可能超過現有區塊鏈的生長速度
## 3. 如何防止同一筆紀錄被重複使用 => 檢查放入新區塊的每筆交易紀錄中的輸入值，是否在先前的區塊所包含的交易紀錄中使用過。

## **Note**：交易紀錄雖然放在區塊中，但區塊可能是支鏈的區塊，因此有可能會變成未確認的交易

---

# Reference
- ## [區塊鏈是什麼](https://medium.com/taipei-ethereum-meetup/blockchain-eli5-329891e367f9)
- ## [區塊鏈的共識機制](https://www.techbang.com/posts/93343-pow-pos-dpos)
- ## [P2P網路共識 - 拜占庭將軍問題](https://ithelp.ithome.com.tw/articles/10216159)
- ## [若想搞懂區塊鏈就不能忽視的經典：PBFT](https://medium.com/taipei-ethereum-meetup/intro-to-pbft-31187f255e68)
- ## [分散式分類帳和區塊鏈有何不同？](https://www.ithome.com.tw/news/105609)
- ## [Ethereum的EVM與智能合約](https://ithelp.ithome.com.tw/articles/10216369)