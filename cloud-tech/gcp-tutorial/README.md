![img](img/01.jpg)

<br>

# GCP Virtual Private Cloud (VPC) 網路架構
![img](img/10-1.jpg)
![img](img/10-2.jpg)
![img](img/10-3.jpg)
![img](img/10-4.jpg)

## **VPC外網 - Public VM to the Internet (Default Internet Gateway)**
![img](img/10-5.jpg)
![img](img/10-6.jpg)

### 允許ssh
![img](img/10-7.jpg)

## **VPC內網 - VM to VM**
![img](img/10-8.jpg)
### 允許ping
![img](img/10-9.jpg)

## **VPC內網 - Private VM to the Internet (NAT)**
### NAT 必須與 Subnet 的 Region 相同
![img](img/10-10.jpg)

## **VPC安全 - Routes & Firewall Rules - Network Tags**
![img](img/10-11.jpg)
![img](img/10-12.jpg)
![img](img/10-13.jpg)
![img](img/10-14.jpg)

---

# GCP Compute Engine (CE) 運算資源
![img](img/11-1.jpg)

## **CE儲存資源 - Local SSD vs Persistent Disk**
![img](img/11-2.jpg)

## **CE儲存資源 - Persistent Disk 方案比較**
![img](img/11-3.jpg)

## **CE儲存資源 - Persistent Disk 建立與使用**
![img](img/11-4.jpg)
![img](img/11-5.jpg)
### **`後續同AWS EBS`**

## **CE儲存資源 - Persistent Disk 備份建立與使用**
![img](img/11-6.jpg)

## **CE模板 - Machine Image 架構介紹**
![img](img/11-7.jpg)

## **CE模板 - Machine Image 建立與使用**
![img](img/11-8.jpg)
![img](img/11-9.jpg)

---

# GCP Cloud Storage 儲存資源

## **Cloud Storage vs Persistent Disk 方案比較**
![img](img/12-1.jpg)

## **Cloud Storage 架構與版本控管**
![img](img/12-2.jpg)
![img](img/12-3.jpg)
![img](img/12-4.jpg)
![img](img/12-5.jpg)
![img](img/12-6.jpg)

## **Cloud Storage 儲存類別與生命週期管理**
![img](img/12-7.jpg)
![img](img/12-8.jpg)
![img](img/12-9.jpg)

---

# GCP Cloud SQL & Cloud Spanner 資料庫儲存資源

## **Cloud SQL vs VM(+db) 方案比較**
![img](img/13-1.jpg)

## **Cloud SQL 架構**
![img](img/13-2.jpg)

## **建立雲端資料庫**
![img](img/13-3.jpg)

## **資料庫備份**
![img](img/13-4.jpg)

<br/>

![img](img/13-5.jpg)

<br/>

![img](img/13-6.jpg)

<br/>

![img](img/13-7.jpg)
![img](img/13-8.jpg)

## **備援機制**
![img](img/13-9.jpg)

## **流量分擔機制**
![img](img/13-10.jpg)

## **Cloud Spanner 架構**
![img](img/13-11.jpg)
![img](img/13-12.jpg)

<br/>

![img](img/13-13.jpg)

<br/>

---

# Identity and Access Management (IAM) 架構
![img](img/14-1.jpg)