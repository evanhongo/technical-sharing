# Process, Thread, Coroutine 是什麼？

## Process 可視為程式的實體，不同的 Process 所分配到的記憶體空間 (Memory Space) 是互相獨立的

<br />

## Process 的記憶體、變數可以讓其下所有 Thread 共享，也就是所有 Thread 都可以存取 Process 的記憶體和變數。而 Thread 之間也會共享記憶體、變數。

<br />

## Process 分派到 CPU 後，Process 上的 Thread 獲得 CPU 時間，此時 CPU 就會開始執行 Thread 內的任務。

<br />

## 要注意的是，Process 是作業系統分配記憶體資源的對象，而 Thread 是作業系統分配 CPU 時間的對象，有 CPU 時間，才可以執行 Thread 上的任務。

<br />

## 以蓋房子當作例子：

-  ### 建設公司 => OS
-  ### 磚塊、水泥、鋼筋、怪手 => Memory
-  ### 建案 => Process
-  ### 建築工人 => Thread

<br />

## 假設要蓋房子，建設公司就會分配磚塊、水泥、鋼筋、怪手….等建設資源給這個建案。建築工人就會利用建設資源來開始蓋房子。

<br />

## Coroutine 也是任務 (Task)，而 Coroutine 任務類似平常大家寫的 function，但又不像一般的 function，Coroutine 是可以隨時暫停執行，再從暫停的地方恢復執行的 function。

<br />

## 在 Python 中的 async, await, yield, generator…等，就是 Coroutine 很好的應用。

<br />

## 而在 Golang 中，除了使用 Coroutine 的機制暫停和恢復機制外，還另外加以優化，增加效能，在 Golang 之中稱為 Goroutine。

---

# Concurrency, Asynchronous, Parallelism 是什麼？

## **Blocking**

## 任務的類型是：在執行中，沒得到結果前不會返回結果。

<br />

## 因為任務是沒得到結果前不會返回結果的類型，因此任務開始執行後，Thread 會被 blocking，也就是暫停，導致該 Thread 無法繼續執行下去。

<br />

## 而如果該 Process 內是 Single Thread ，該 Thread 被 Blocking 就意味著該 Process 被 Blocking。

<br />

## **Non-blocking**

## 任務的類型是：一旦被執行，就立即返回結果，接著在任務內的工作完成後，會再通知 Thread。

<br />

## 因為任務是會立即返回結果的類型，因此任務開始執行後，Thread 是 Non-blocking，也就是不會暫停，該 Thread 可繼續執行下去。

<br />

## **Synchronous**

## 任務的類型是：在執行中，沒得到結果前不會返回結果。

<br />

## Process 上的 Tread 內會有多個任務，在執行各任務的過程中，如果需要等待 A 任務完成並返回結果，才能繼續執行 B 任務，則叫做 Synchronous。

<br />

## **Asynchronous**

## 任務的類型是：一旦被執行，就立即返回結果，接著在任務內的工作完成後，會再通知 Thread。

<br />

## 如果不需要等待 A 任務完成並返回結果，就繼續下去執行 B 任務，則叫做 Asynchronous。也就是說 A 任務先開始執行，接著換 B 任務開始執行，但是 A 任務和 B 任務哪個先完成是不一定的。

<br />

## **Concurrency**

## Concurrency 表示任務進入 Thread 內的順序等於開始執行的順序，但不一定等於任務的結束順序。也就是說， Concurrency 代表的是同時處理多個任務(不是同時執行多個任務，同時執行多個任務的是 Parallelism)

<br />

## 當原本在執行任務的 Thread 讓出 CPU 時間後，接著會遇到 3 種適用 Concurrency 的情況：

## 1. 該 Thread 所屬的 Process 上只有這個 Thread 或者有多個 Thread ，但也都被 Blocking 中。
## 2. 該 Thread 所屬的 Process 尚有其他未被 Blocking 的 Thread
## 3. 不論是上述 1 或 2 的情況，有其他優先權更高的 Process 要求 CPU 時間來執行任務。

<br />

## **第 1 種 Concurrency**
## 該 Thread 所屬的 Process 上只有這個 Thread 或者有多個 Thread ，但也都被 Blocking 中。

<br />

## 因為此 Process 上的所有 Thread 都被 Blocking 了，代表該 Process 也處於 Blocking。此時，作業系統內的調度器 (Scheduler) 會立刻將 CPU 讓給其他目前未被 Blocking 的 Process。(Context-Switch 到其他 Process)

<br />

## **第 2 種 Concurrency**
## 該 Thread 所屬的 Process 尚有其他未被 Blocking 的 Thread

<br />

## 類似第 1 種情況，此時其他 Thread 會拿走 CPU 時間，要來執行其 Thread 上的任務。至於是哪個 Thread 拿走，主要是比較 Thread 的優先權和任務們進入各 Thread 內的順序。(Context-Switch 到其他 Thread)

<br />

## 因為 Process 分配到的記憶體和變數都可以讓其下所有 Thread 共享，也就是所有 Thread 都可以存取同一個 Process 的記憶體和變數。而每個 Thread 也有自己的 local variable。

<br />

## Thread 會遇到以下的問題
## **Race Condition**
## 多個 Thread 同時存取修改同一個資源時，會產生同步問題 (Synchronization），也就是 Race Condition，此時需要加鎖 (lock) 保護，以控制程式執行的流程。每個鎖同一時間只有一個 Thread 可以擁有他，Thread 擁有鎖的時候，才可以使用 CPU 時間來執行任務。

<br />

## **Deadlock**
## 多個 Thread 分別取得鎖來執行各別的任務，但彼此互相等待任務執行完成才能繼續下去，此時就會產生 Deadlock，使程式無法繼續下去，其實就是種互搶資源造成的問題。

<br />

## 舉例來說，A Thread 有 moveLeft key 在執行任務， B Thread 有 moveRight key 在執行任務。A Thread 同時在等待 moveRight key ，才會將 moveLeft key 釋出，B Thread 同時在等待 moveLeft key ，才會將 moveRight key 釋出，兩個互相等待彼此，形成 Deadlock。

<br />
<br />

## 在多執行緒時 ( multi-threading )，常會產生 Race Condition, Deadlock 的問題，維持線程安全 (Thread-Safe) 就是個十分重要的課題。

<br />

## **第 3 種 Concurrency**
## 不論是上述 1 或 2 的情況，有其他 Process 要求 CPU 時間來執行任務。

<br />

## 其他 Process 可能優先權更高或是有搶佔 (preemption) 的情況發生 ，總之就是被中途攔截，都有可能導致 CPU 強行切到其他 Process。

<br />

## **Serial**

## 跟 Concurrency 相反的概念，Concurrency 是遇到 Thread Blocking 時，CPU 就會切給其他 Thread 或是其他 Process 繼續執行其上的任務。

<br />

## 而 Serial 相反，Thread Blocking 的時候，CPU 會繼續在那邊等待，直到任務返回結果。因此，在 Serial 的情況下，任務進入 Thread 內的順序等於開始執行的順序，也等於任務的結束順序。

<br />

## 使用 Serial 的優點在於：任務可以依據想要的順序執行，並且對於共享資源的取用不需要競爭。

<br />

## **Parallelism**

## 上面 Concurrency 和 Serial 探討的是同一個 CPU 上的運作模式，也就是同一個 CPU 在 Thread 或 Process 之間切來切去的執行任務。而 Parallelism 探討的則是多個 CPU 核心上的運作模式。也就是說 Concurrency 描述的與 CPU 的核心數無關，但 parallelism 描述的與多核心及硬體有關。

<br />

## 多個 Process 分別分配到不同 CPU 核心的情況下，每個 Process 上的 Thread 同時執行任務，此即為 Parallelism，也就是真正的同時執行多個任務。

<br />

## 當然，各 CPU 核心內一樣可以是 Concurrency 或 Serial 的執行任務，Parallelism 和 Concurrency 是完全不同的概念，但同時也能共存。

<br />

## 在 Concurrency 或 Serial 之下，所有任務的總執行時間不會變短，但 Parallelism 之下，所有任務的總執行時間會變短。