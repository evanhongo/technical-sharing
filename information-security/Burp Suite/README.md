# Convinient Tool: Burp Suite
https://portswigger.net/burp/releases/professional-community-2021-5-2?requestededition=community

---

# Business Logic Vulnerabilities
## 1. Excessive trust in client-side controls

### 1. Excessive trust in client-side controls
![img](img/01.jpg)
![img](img/02.jpg)

### 2. 2FA broken logic
![img](img/03.jpg)
![img](img/04.jpg)
### Brute-force the verification code.
![img](img/05.jpg)
![img](img/06.jpg)

## 2. Failing to handle unconventional input

### 1. High-level logic vulnerability
![img](img/07.jpg)
### Negative count.
![img](img/08.jpg)
![img](img/09.jpg)

### 2. Low-level logic flaw
![img](img/10.jpg)
![img](img/11.jpg)
### Value overflow.
![img](img/12.jpg)
![img](img/13.jpg)

### 3. Inconsistent handling of exceptional input
![img](img/14.jpg)
Email: very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string@ac4f1fbb1f47a1ae80d6bbac01fe00d5.web-security-academy.net
Email address is truncated to 255 characters.
![img](img/15.jpg)
Make sure that the very-long-string is the right number of characters so that the "m" at the end of @dontwannacry.com is character 255 exactly.
Email: **very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-very-long-string-@dontwannacry.com**.ac4f1fbb1f47a1ae80d6bbac01fe00d5.web-security-academy.net
![img](img/16.jpg)

## 3. Making flawed assumptions about user behavior

### 1. Inconsistent security controls
![img](img/17.jpg)

### 2. Weak isolation on dual-use endpoint
![img](img/18.jpg)

### 3. Password reset broken logic
![img](img/19.jpg)

### 4. 2FA simple bypass
![img](img/20.jpg)
![img](img/21.jpg)

### 5. Insufficient workflow validation
![img](img/22.jpg)

### 6. Authentication bypass via flawed state machine
![img](img/23.jpg)
![img](img/24.jpg)

## 4. Domain-specific flaws

### 1. Flawed enforcement of business rules
![img](img/25.jpg)

### 2. Infinite money logic flaw
![img](img/26.jpg)
![img](img/27.jpg)
![img](img/28.jpg)
![img](img/29.jpg)
![img](img/30.jpg)
![img](img/31.jpg)
![img](img/32.jpg)
![img](img/33.jpg)

## 5. Providing an encryption oracle

### 1. Authentication bypass via encryption oracle
![img](img/34.jpg)
![img](img/35.jpg)
![img](img/36.jpg)
![img](img/37.jpg)
![img](img/38.jpg)
![img](img/39.jpg)
![img](img/40.jpg)
![img](img/41.jpg)
23 bytes => "Invalid email address: "  <br>
Need to pad the "Invalid email address: " prefix with enough bytes so that the number of bytes you will remove is a multiple of 16.
![img](img/42.jpg)
Add 9 bytes to the start
![img](img/43.jpg)
![img](img/44.jpg)
![img](img/45.jpg)
![img](img/46.jpg)
![img](img/47.jpg)
