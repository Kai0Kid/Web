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
