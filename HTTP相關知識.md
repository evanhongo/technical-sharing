# What You Should Know About HTTP 
![img](img/20.jpg)
![img](img/04.jpg)
![img](img/05.jpg)
![img](img/06.jpg)

---

# HTTP/1.1

## **1. [Cache Control](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Headers/Cache-Control)**

<br/>

## **2. Persistent Connection**
![img](img/21.jpg)

<br/>

## **3. Request Pipelining**
![img](img/22.jpg)

---

# HTTP/2

## **1. Multiplexing**
## Multiplexing will allow multiple requests and response messages to retrieve resources in a single TCP connection simultaneously.
![img](img/14.jpg)

<br/>

## **2. Header Compression**
## Each request via HTTP contains header information. With HTTP/1.1, many headers are repeated in one session and duplicate the same info. This overhead is considerable, HTTP/2 removes the excess header while pressing the remaining headers and forcing all HTTP headers to be sent in a compressed format.

<br/>

## **3. Server Push**
## With HTTP/1.1 it must wait for the client to send the connection. Server Push allows the server to avoid delays in sending data by “pushing” responses that it claims the client needs to cache it and automatically this will speed up page load time by reducing the number of requests.
![img](img/15.jpg)

<br/>

## **4. Binary Format**
## HTTP/1.1 sends data in the textual format, while HTTP/2 sends data in binary format. Binary protocols are more efficient to parse and reduce the number of errors, compared to previous versions of textual protocols.
![img](img/16.jpg)

---

# Reference
- ## [HTTP隊頭阻塞是什麼](https://itw01.com/I97CEU2.html)
- ## [TCP隊頭阻塞與HTTP隊頭阻塞](https://linkexin.github.io/notes/TCP-%E9%98%9F%E5%A4%B4%E6%8B%A5%E5%A1%9E-%E5%92%8C-HTTP-%E9%98%9F%E5%A4%B4%E6%8B%A5%E5%A1%9E-%E5%92%8C-QUIC)