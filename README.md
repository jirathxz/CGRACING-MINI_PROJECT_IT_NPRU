# 🏎️ CG RACING - E-Commerce Web Application

**โปรเจกต์พัฒนาระบบร้านค้าออนไลน์ (E-Commerce) สำหรับจำหน่ายน้ำมันเครื่อง อะไหล่ และอุปกรณ์ดูแลรักษารถ** พัฒนาด้วยเทคโนโลยี Web Fundamentals (HTML, CSS, JavaScript) โดยเน้นการออกแบบ UI/UX ที่ทันสมัย ใช้งานง่าย และรองรับการแสดงผลทุกขนาดหน้าจอ (Responsive Design)

---

## 🎯 วัตถุประสงค์ของโปรเจกต์
เพื่อพัฒนาระบบหน้าร้านออนไลน์ (Storefront) และระบบจัดการหลังบ้านเบื้องต้น (Seller Mode) ที่สามารถโต้ตอบกับผู้ใช้งานได้จริง โดยประยุกต์ใช้ JavaScript ในการจัดการข้อมูลและสถานะ (State) ภายในเบราว์เซอร์ผ่าน LocalStorage โดยไม่อาศัย Framework หรือ Database ภายนอก เพื่อแสดงให้เห็นถึงความเข้าใจในพื้นฐานการพัฒนาเว็บแอปพลิเคชันอย่างแท้จริง

---

## ✨ ฟีเจอร์เด่น (Key Features)

### 🛒 โหมดผู้ใช้งานทั่วไป (Customer Mode)
* **Dynamic Home Page:** หน้าหลักพร้อมแบนเนอร์สไลด์อัตโนมัติ และแสดงสินค้าแนะนำ
* **Smart Search & Filter:** ค้นหาสินค้าด้วยคีย์เวิร์ด และกรองหมวดหมู่สินค้าได้ทันที (Real-time Filtering)
* **Product Details:** แสดงรายละเอียดสินค้า รูปภาพ ราคา และเรตติ้ง
* **Shopping Cart System:** * เพิ่มสินค้าลงตะกร้า
  * ปรับเพิ่ม-ลดจำนวนสินค้า
  * คำนวณราคารวมอัตโนมัติ
  * ระบบแจ้งเตือนยืนยันการทำรายการด้วยดีไซน์สวยงาม (SweetAlert2)
* **Responsive Navigation:** เมนูนำทางแบบ Sidebar สำหรับคอมพิวเตอร์ และเปลี่ยนเป็น Bottom Navigation อัตโนมัติเมื่อใช้งานบนมือถือ

### 📦 โหมดผู้ขาย (Seller Mode)
* **Dashboard Management:** ตารางแสดงรายการสินค้าทั้งหมด
* **Inventory Control:** หน้าต่างจำลองสำหรับการ เพิ่ม/แก้ไข/ลบ สินค้า (UI Mockup พร้อมระบบแจ้งเตือนยืนยันการลบ)
* **Real-time Filter:** กรองดูสินค้าตามหมวดหมู่ในระบบหลังบ้านได้

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

* **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla ES6+)
* **State Management:** `localStorage` (สำหรับเก็บข้อมูลตะกร้าสินค้า และข้อมูลสินค้าที่กำลังเลือกดู)
* **Typography & Icons:** * Google Fonts (Prompt)
  * FontAwesome (Vector Icons)
* **UI/UX Libraries:** * SweetAlert2 (สำหรับ Custom Popup Dialogs)

---

## 💡 ไฮไลท์ทางเทคนิค (Technical Highlights สำหรับนำเสนอ)

1. **Vanilla Web Development:** พัฒนาระบบด้วย HTML, CSS, JS เพียวๆ แสดงให้เห็นถึงพื้นฐานที่แน่นและพร้อมต่อยอดสู่ Framework ในอนาคต
2. **Modular HTML Component:** ประยุกต์ใช้ JavaScript Fetch API (`fetch('nav.html')`) ในการดึงแท็บเมนู (Navigation) มาแสดงผลซ้ำในทุกหน้า ลดความซ้ำซ้อนของโค้ด (DRY Concept)
3. **Data Management:** จำลองฐานข้อมูลด้วย JSON Array (`products.js`) ทำให้ง่ายต่อการจัดการข้อมูลและจำลองการดึงข้อมูลจาก API
4. **Fluid Responsive Design:** ออกแบบด้วยแนวคิด Mobile-Friendly ใช้ CSS Flexbox, Grid และ Media Queries เพื่อให้แอปพลิเคชันแสดงผลได้สวยงามทั้งบน Desktop, Tablet และ Smartphone
5. **Dark Theme UI:** ออกแบบโทนสีเข้ม (Dark Mode) ที่ดูสปอร์ต ดุดัน เข้ากับธีมสินค้าประเภทรถยนต์/มอเตอร์ไซค์ พร้อมเอฟเฟกต์ Glassmorphism สบายตา

---

## 📂 โครงสร้างโฟลเดอร์และไฟล์ (Project Structure)

```text
├── index.html          # หน้าแรกของเว็บไซต์ (Home)
├── discover.html       # หน้าค้นหาและแสดงสินค้าทั้งหมด
├── view_product.html   # หน้าแสดงรายละเอียดสินค้าแบบเจาะจง
├── product_cart.html   # หน้าตะกร้าสินค้า และสรุปยอดสั่งซื้อ
├── seller.html         # หน้าจำลองระบบจัดการหลังบ้านสำหรับผู้ขาย
├── contact.html        # หน้าช่องทางการติดต่อ
├── nav.html            # โครงสร้างเมนูนำทาง (ถูกเรียกใช้ผ่าน JS)
├── style.css           # ไฟล์จัดการความสวยงามและ Responsive ทั้งหมด
└── products.js         # จำลองฐานข้อมูลสินค้า (JSON Array)
