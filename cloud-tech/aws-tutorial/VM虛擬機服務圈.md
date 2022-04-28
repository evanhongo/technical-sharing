![img](img/01.jpg)

<br/>

# AWS Virtual Private Cloud (VPC) 網路架構
![img](img/02.jpg)
![img](img/03.jpg)
![img](img/04.jpg)
![img](img/05.jpg)

<br/>

## **VPC外網 - Public Subnet to the Internet (IGW)**
![img](img/3-14.jpg)
![img](img/3-1.jpg)
![img](img/3-2.jpg)
![img](img/3-3.jpg)
![img](img/3-4.jpg)
![img](img/3-5.jpg)
![img](img/3-6.jpg)
![img](img/3-7.jpg)
![img](img/3-8.jpg)
![img](img/3-9.jpg)
![img](img/3-10.jpg)
![img](img/3-11.jpg)
![img](img/3-12.jpg)
![img](img/3-13.jpg)

## **VPC內網 - Private Subnet to Private Subnet**
![img](img/3-20.jpg)
![img](img/3-15.jpg)
![img](img/3-16.jpg)
![img](img/3-17.jpg)
![img](img/3-18.jpg)
![img](img/3-19.jpg)
```sh
ssh-add -k vpc-ec2.pem
ssh-add -L
ssh -A ec2-user@3.21.106.235
```

## **VPC內網 - Private Subnet to the Internet (NAT)**
![img](img/3-21.jpg)
![img](img/3-22.jpg)
![img](img/3-23.jpg)
![img](img/3-24.jpg)

## **VPC安全 - NACL & SG 網路安全配置**
![img](img/3-25.jpg)
![img](img/3-26.jpg)

## **VPC資源清理**
![img](img/3-27.jpg)
![img](img/3-28.jpg)
![img](img/3-29.jpg)
![img](img/3-30.jpg)

---

# AWS Elastic Compute Cloud (EC2) 運算資源
![img](img/4-1.jpg)

## **EC2儲存資源 - Instance Storage vs Elastic Block Storage (EBS)**
![img](img/4-2.jpg)

## **EC2儲存資源 - EBS Types 方案比較**
![img](img/4-3.jpg)

## **EC2儲存資源 - EBS Volume 建立與使用**
![img](img/4-4.jpg)

<br/>

![img](img/4-5.jpg)

<br/>

**尚未格式化**
![img](img/4-6.jpg)

<br/>

![img](img/4-7.jpg)

<br/>

**已格式化**
![img](img/4-8.jpg)

<br/>

![img](img/4-9.jpg)

<br/>

![img](img/4-10.jpg)

<br/>

**產假資料**
![img](img/4-11.jpg)

## **EC2儲存資源 - EBS Snapshot 備份建立與使用**
![img](img/4-12.jpg)
![img](img/4-13.jpg)

## **EC2模板 - AMI 架構介紹**
![img](img/4-14.jpg)

## **EC2模板 - EBS-backed AMI 建立與使用**
![img](img/4-15.jpg)
![img](img/4-16.jpg)
![img](img/4-17.jpg)

---

# AWS Simple Storage Service (S3) 儲存資源

## **S3 vs EBS 方案比較**
![img](img/5-1.jpg)

## **S3 架構與版本控管**
![img](img/5-2.jpg)
![img](img/5-3.jpg)
![img](img/5-4.jpg)
![img](img/5-5.jpg)
![img](img/5-6.jpg)

## **S3 儲存類別與生命週期管理**
![img](img/5-7.jpg)

---

# AWS Relational Database Service (RDS) 資料庫儲存資源

## **RDS vs EC2(+db) 方案比較**
![img](img/6-1.jpg)

## **RDS架構**
![img](img/6-2.jpg)

## **建立雲端資料庫**
![img](img/6-3.jpg)
![img](img/6-4.jpg)
![img](img/6-5.jpg)
![img](img/6-6.jpg)
![img](img/6-7.jpg)
![img](img/6-8.jpg)
![img](img/6-9.jpg)

## **資料庫備份**
![img](img/6-10.jpg)
![img](img/6-11.jpg)
![img](img/6-12.jpg)
![img](img/6-13.jpg)
![img](img/6-14.jpg)
![img](img/6-15.jpg)

## **備援機制**
![img](img/6-16.jpg)
![img](img/6-17.jpg)
![img](img/6-18.jpg)

## **流量分擔機制**
![img](img/6-19.jpg)

---

# Identity and Access Management (IAM) 架構
![img](img/7-1.jpg)