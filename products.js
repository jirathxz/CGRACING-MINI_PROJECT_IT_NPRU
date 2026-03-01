const products = [
  {
    "name": "Bluetecboost บลูเทค น้ำยาล้างหัวฉีด ดีเซล | เบนซิน ขนาด 60ml และ 300ml",
    "price": 92,
    "category": "ดูแลรักษารถ",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztd-mju9uomnhipxba_tn.webp",
    "rating": 5.0,
    "sold": "795 ชิ้น"
  },
  {
    "name": "S-OIL SEVEN RIDER #9 MA2 10W-40, 10W-50 ขนาด 1 ลิตร น้ำมันเครื่องสังเคราะห์แท้จาก Aramco",
    "price": 260,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81zti-mky7yrmt7qpy50_tn.webp",
    "rating": 4.9,
    "sold": "574 ชิ้น"
  },
  {
    "name": "Bluetecboost บลูเทค สารเคลือบเครื่องยนต์ และ ล้างเครื่องยนต์ Hyperlube & FLUSH ขนาด 300 ml. และ 50 ml.",
    "price": 198,
    "category": "ดูแลรักษารถ",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztc-mjuwzl1f17nr00_tn.webp",
    "rating": 5.0,
    "sold": "3พัน+ ชิ้น"
  },
  {
    "name": "Bluetecboots บลูเทค น้ำยาฟลัชชิ่ง น้ำยาทำความสะอาดเครื่องยนต์ ขนาด 300 ml. และ 50 ml.",
    "price": 94,
    "category": "ดูแลรักษารถ",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztj-mjx7ijszd5hjbd_tn.webp",
    "rating": 5.0,
    "sold": "2พัน+ ชิ้น"
  },
  {
    "name": "Dexoil Red Max 4T 5W-50 กรุ๊ป 4+5 น้ำมันเครื่องสังเคราะห์แท้ขนาด 0.8L.",
    "price": 399,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztc-ml6jkqokeolced_tn.webp",
    "rating": 4.9,
    "sold": null
  },
  {
    "name": "**ฟรี Oil Additive** น้ำมันเครื่อง MMC SCOOTER TECH / SPORT TECH สังเคราะห์แท้ ขนาด 0.8 / 1 ลิตร",
    "price": 95,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztc-mjzoyqtyi6mbe0_tn.webp",
    "rating": 5.0,
    "sold": "2พัน+ ชิ้น"
  },
  {
    "name": "**ฟรี Oil Additive* มันเครื่องสังเคราะห์100% MMC SCOOTER TECH 5W-40 สำหรับสกู๊ตเตอร์ ขนาด 0.8 ลิตร",
    "price": 289,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztq-mjwxcvgiakg1e2_tn.webp",
    "rating": 5.0,
    "sold": "797 ชิ้น"
  },
  {
    "name": "เซต 3 ลิตร น้ำมันเครื่อง S-OIL SEVEN RIDER #9 MA2 สำหรับ HONDA CB500X CBR650",
    "price": 939,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81zti-mky7zdflgd8n45_tn.webp",
    "rating": 4.8,
    "sold": "27 ชิ้น"
  },
  {
    "name": "เซต 3 ลิตร น้ำมันเครื่อง S-OIL SEVEN RIDER #9 MA2 สำหรับ KAWASAKI Z300 NINJA300",
    "price": 939,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztd-mky7elitd893bc_tn.webp",
    "rating": 5.0,
    "sold": "5 ชิ้น"
  },
  {
    "name": "**ฟรี!! Oil Additive** น้ำมันเครื่อง LUMAX RS-1 10W-40,10W-50 API SP ขนาด 1 ลิตร",
    "price": 390,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztn-mjwxn2fah7uv13_tn.webp",
    "rating": 5.0,
    "sold": "13 ชิ้น"
  },
  {
    "name": "เซต 3 ลิตร น้ำมันเครื่อง S-OIL SEVEN RIDER #9 MA2 สำหรับ YAMAHA MT03 MT07 MT09",
    "price": 939,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztf-mky7cjxv4glg71_tn.webp",
    "rating": 5.0,
    "sold": "6 ชิ้น"
  },
  {
    "name": "ชุุด 3 ลิตร น้ำมันเครื่อง MMC SPORT TECH สำหรับ HONDA CB500X CBR650",
    "price": 1290,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztd-mk2pddukphc38a_tn.webp",
    "rating": 5.0,
    "sold": "28 ชิ้น"
  },
  {
    "name": "**ฟรี Oil Additive** น้ำมันเครื่อง MMC SPORT TECH 10W-40, 10W-50 ขนาด 1 ลิตร",
    "price": 390,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81zth-mjwxgecjn5s37e_tn.webp",
    "rating": 5.0,
    "sold": "166 ชิ้น"
  },
  {
    "name": "**ฟรี Oil Additive** น้ำมันเครื่องสังเคราะห์แท้ VOLTRONIC 10W40 TSZ-4T BLUE BASE OIL",
    "price": 490,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztg-mk2p5wqyvwg026_tn.webp",
    "rating": 5.0,
    "sold": "90 ชิ้น"
  },
  {
    "name": "[ยกลัง 12 ขวด] น้ำมันเครื่อง S-OIL 7 RIDER #9 10W-40 / 10W-50",
    "price": 2680,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztk-mjfs4ww1b20w70_tn.webp",
    "rating": 5.0,
    "sold": "4 ชิ้น"
  },
  {
    "name": "เซตน้ำมันเครื่อง MMC SCOOTER TECH 5W-40 สำหรับ Yamaha XMAX 300 พร้อมกรอง",
    "price": 765,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztn-mjjcc62gfugz16_tn.webp",
    "rating": 5.0,
    "sold": "28 ชิ้น"
  },
  {
    "name": "เซตน้ำมันเครื่อง LUMAX RS-1 10W-40 10W-50 สำหรับ Forza / ADV พร้อมกรอง",
    "price": 939,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztq-mjnvptz0lu6dee_tn.webp",
    "rating": 5.0,
    "sold": "1 ชิ้น"
  },
  {
    "name": "เซตน้ำมันเครื่อง MMC SCOOTER TECH 5W-40 สำหรับ Forza / ADV พร้อมกรอง",
    "price": 849,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztj-mjiilkjg36kj0b_tn.webp",
    "rating": 4.9,
    "sold": "70 ชิ้น"
  },
  {
    "name": "ชุุด 4 ลิตร น้ำมันเครื่อง MMC SPORT TECH สำหรับ KAWASAKI ZX-6R Z800 Z900",
    "price": 1680,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztp-mjjzz3oi4rut72_tn.webp",
    "rating": 4.9,
    "sold": "เรตติ้งร้าน"
  },
  {
    "name": "ยกลังx6 น้ำมันเครื่อง Lumax Rs-1 และ Ax-1 ขนาด 1 ลิตร",
    "price": 2190,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztn-miadmex7z9xj8b_tn.webp",
    "rating": 5.0,
    "sold": "2 ชิ้น"
  },
  {
    "name": "เซต 4 ลิตร น้ำมันเครื่อง S-OIL SEVEN RIDER #9 สำหรับ KAWASAKI ZX-6R Z800",
    "price": 1199,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztf-mky7cjxv4glg71_tn.webp",
    "rating": 5.0,
    "sold": "2 ชิ้น"
  },
  {
    "name": "แจกฟรี !! ไม่ได้จำหน่าย เสื้อ S-Oil SEVEN คละไซส์ จำนวน 1 ตัว",
    "price": 169,
    "category": "ดูแลรักษารถ",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztj-mg2j6lwahez35e_tn.webp",
    "rating": 4.9,
    "sold": "98 ชิ้น"
  },
  {
    "name": "เซต 3 ลิตร น้ำมันเครื่อง LUMAX RS-1 สำหรับ HONDA CB500X CBR650",
    "price": 1440,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztn-mhtdlsf2e9z890_tn.webp",
    "rating": 5.0,
    "sold": "2 ชิ้น"
  },
  {
    "name": "**เคลียร์สต็อก** FULBAT (12V 5.3Ah) แบตเตอรี่มอเตอร์ไซค์แบบ GEL",
    "price": 450,
    "category": "ดูแลรักษารถ",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81zti-mhdjwyb5getref_tn.webp",
    "rating": 1.0,
    "sold": "4 ชิ้น"
  },
  {
    "name": "เซต 3 ลิตร น้ำมันเครื่อง LUMAX RS-1 สำหรับ YAMAHA MT03 MT07 MT09",
    "price": 1440,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztj-mhtdla771s75aa_tn.webp",
    "rating": 4.9,
    "sold": "เรตติ้งร้าน"
  },
  {
    "name": "เซต 3 ลิตร น้ำมันเครื่อง LUMAX RS-1 สำหรับ KAWASAKI Z300 NINJA300",
    "price": 1440,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztj-mhtdn3jm1ix241_tn.webp",
    "rating": 4.9,
    "sold": "เรตติ้งร้าน"
  },
  {
    "name": "LUMAX RS-1 10W-40 10W-50 และ AX-1 10W-40 ขนาด 1 ลิตร",
    "price": 390,
    "category": "น้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztg-mhgh34sp1vr924_tn.webp",
    "rating": 5.0,
    "sold": "4 ชิ้น"
  },
  {
    "name": "เซต 4 ลิตร น้ำมันเครื่อง LUMAX RS-1 สำหรับ KAWASAKI ZX-6R Z800",
    "price": 1890,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-81ztq-mhtdkcqgc0zs69_tn.webp",
    "rating": 5.0,
    "sold": "1 ชิ้น"
  },
  {
    "name": "น้ำมันเฟืองท้ายโมตุล Motul Scooter Gear Oil PLUS 80w90 120ml.",
    "price": 60,
    "category": "น้ำมันเฟืองท้าย",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-7r98x-lvc35v80t29mf8_tn.webp",
    "rating": 5.0,
    "sold": "190 ชิ้น"
  },
  {
    "name": "ชุด 3 ลิตร น้ำมันเครื่อง Wix Moto XP สำหรับ KAWASAKI Z300 NINJA300",
    "price": 1140,
    "category": "ชุดเปลี่ยนถ่ายน้ำมันเครื่อง",
    "img_src": "https://down-th.img.susercontent.com/file/th-11134207-7rasf-m9x4fghug5e773_tn.webp",
    "rating": 5.0,
    "sold": "4 ชิ้น"
  }
]

function getProducts() {
    return products;
}