---
title: "The First Note"
published: 2025-09-16
description: "Bài viết đầu tiên tôi tự viết trên web mới của tôi."
tags: [Blog]
category: Examples
licenseName: "Unlicensed"
draft: false
---

# Xin chào

Đây là **bài viết đầu tiên** của tôi trên blog cá nhân.  
Mình sẽ chia sẻ các ghi chú về **An toàn thông tin**, các thử nghiệm nhỏ và kinh nghiệm học tập.

## Test chèn video vào bài viết

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/yVj92IY4HRQ?list=RDyVj92IY4HRQ" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" allowfullscreen>
  </iframe>
</div>


## Mục tiêu ✨

- Luyện tập viết bằng Markdown
- Tạo blog cá nhân để ghi chú
- Chia sẻ kiến thức với cộng đồng


## Ví dụ code

```bash
nmap -sV -sC basang8798.id.vn
```
> test tý :>>

## test bảng
Kai0Kid|GrayHat|
-------|-------|
Biệt danh|Mục tiêu, lý thưởng|

------------
- [x] Việc đã làm
- [ ] Việc chưa làm

## nếu chọn ảnh bìa bài viết thì thêm trường 
```
cover: "Path"
```

## Thêm video
```
<iframe width="100%" height="468" src="https://www.youtube.com/embed/5gIf0_xpFPI?si=N1WTorLKL0uwLsU_" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
```
> cái này thì theo hdsd của source
---
**Hoặc**

```
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/yVj92IY4HRQ?list=RDyVj92IY4HRQ" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          frameborder="0" allowfullscreen>
  </iframe>
</div>
```
> cái này để tự động căn chỉnh
---
### Bài viết chỉ cần có đầu là đoạn mã bên dưới là đc
```
---
title: "The First Note"
published: 2025-09-16
description: "Bài viết đầu tiên tôi tự viết trên web mới của tôi."
tags: [Blog]
category: Examples
draft: false
---
```