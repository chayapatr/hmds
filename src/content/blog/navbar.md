---
title: "A Recipe for an Ideal Navbar"
description: "i.e. how to make one"
pubDate: "Jun 22 2023"
author: "https://www.github.com/chayapatr"
---
# Keywords
- Information Architecture
- navigation bar

ผู้เขียนเชื่อว่ามีเหตุผลสามประการหลักที่ดีไซเนอร์หลายคนให้ความสำคัญกับการออกแบบ Navigation Bar **ประการแรก**คือการออกแบบ navigation ของ navigation bar จะเป็นการบังคับให้ผู้พัฒนาเว็บต้อง solidify โครงสร้างของตัวเว็บนั้น ๆ (i.e. Sitemap, Information Architecture) **ประการที่สอง**คือ Navigation Bar สามารถใช้เป็นตัวทดสอบการ apply design system ได้อย่างดี และ**ประการที่สาม**คือ Navigation Bar เป็นองค์ประกอบที่ปรากฏบ่อยในหน้าเว็บ ๆ หนึ่งเกือบทุกหน้า การออกแบบ Navigation Bar ที่ดีจึงอาจนับได้ว่าเป็นหนึ่งในต้นทางของการออกแบบ ecosystem ของเว็บที่ดีเช่นกัน

# ขนาด
บทความ [A quest for an ideal navbar height](https://blog.prototypr.io/a-quest-for-the-ideal-navbar-height-4d3898a41f2) ของ Pieter Heyman เป็น bullet remarks ขนาดสั้นว่าด้วยเรื่ององค์ประกอบและขนาดของ navigation bar ของเว็บไซต์ชื่อดังหลายเจ้า ข้อสังเกตที่น่าสนใจหนึ่งของ Heyman ก็คือเว็บไซต์สมัยใหม่มีแนวโน้มที่จะออกแบบ navigation bar ที่มีขนาดเล็กลง เพื่อเพิ่มพื้นที่การแสดงผลข้อมูล (และโฆษณา) ซึ่งหนึ่งในปัจจัยที่เอื้อให้ดีไซเนอร์สามารถลดขนาดของ navbar ได้ก็คือ การเปลี่ยน CTA จากตัวอักษรจำนวนมากเป็น icon ที่คนสมัยใหม่เริ่มมีความคุ้นชินกัน

ผู้เขียนทำการวิเคราะห์วิวัฒนาการของเว็บไซต์คร่าว ๆ อีกจำนวนหนึ่งและสังเกตเห็นปัจจัยอีกประการที่ส่งผลต่อการลดขนาดของ navigation bar ก็คือบทบาทหน้าที่ที่เปลี่ยนแปลงไป จากการทำหน้าที่เหมือน control panel (หรือมีการ integrate กับ component สำหรับการควบคุมที่อยู่ใกล้เคียงจำนวนมาก) ที่มีขนาดใหญ่ เหลือเป็นเพียง toolset หรือ shortcut ขนาดเล็กที่ provide CTA สำคัญแก่ผู้ใช้ หรือมีการซ่อน setting ขนาดใหญ่เข้าไปใน sub-menu (ซึ่งอาจเข้าถึงได้จาก Hamburger menu อีกที)

## กรณีการลดทอนข้อมูลปรากฏบน navigation bar ของ Facebook และ Youtube
![Youtube and Facebook Navigation Bar in 2008, 2013, 2018, and 2023](/hmds/youtube-facebook.webp)
ภาพด้านบนแสดงถึงวิวัฒนาการของ navigation bar ของเว็บไซต์สองเว็บได้แก่ Youtube และ Facebook จากในปี 2008, 2013, 2018, และ 2023 ทั้งสองกรณีมีจุดร่วมจากในปี 2008 ที่ส่วน navigation มีขนาดค่อนข้างใหญ่และเน้นการใช้ตัวอักษรในการระบุ CTA เป็นหลัก (เช่น Sign In / Search / Home) แต่ในปี 2013 จะเห็นได้ว่า navigation bar มีขนาดและ**ข้อมูลปรากฏ**ลดลงอย่างเห็นได้ชัด ในกรณีของ Youtube คำว่า Search ในปุ่มได้ถูกลดทอนเป็น search icon และ Navigation แถวที่สองได้ถูกตัดลงไปอยู่ที่ sidebar แทน ในขณะที่ Facebook ได้มีการใช้ icon ลดทอน text ลงไปเป็นจำนวนมาก (ใช้สัญลักษณ์คน/ข้อความ/โลก/ตัวล็อค/และเฟืองบน navbar แทนตัวอักษร)

ในปี 2018 Youtube ได้ลดทอน Text ในปุ่ม upload เหลือเพียง icon เท่านั้น ส่วน Facebook ก็ใช้ search icon ใน search bar ที่นำกลับเข้ามาแทนคำว่า search จนกระทั่งในปี 2023 Facebook ได้ย้าย Navigation หลายส่วนไปไว้ที่ sidebar ด้านซ้ายเช่นเดียวกับที่ Youtube ทำในช่วง 10 ปีก่อนหน้า ทำให้ข้อมูลที่ปรากฎบน top navigation bar เหลืออยู่เพียงน้อยมาก

ดังที่รู้กันโดยทั่วไปในทฤษฎีการออกแบบพื้นฐาน การใช้ icon ในการลดทอนข้อมูลที่ปรากฏจำเป็นต้องคำนึงถึง norm และ popularity ของ icon set นั้น ๆ เพื่อป้องกันการสับสนของผู้ใช้ในการเข้าใจข้อมูล (อ่านเพิ่มเติม: [Jakob's Law of Internet User Experience](https://www.nngroup.com/videos/jakobs-law-internet-ux/))

# Components and Information
![Example Navigation Bars](/hmds/navlist.webp)
ภาพด้านบนคือ navigation bar ของเว็บไซต์จำนวน 12 เว็บจากหลากหลายประโยชน์ใช้งานในเดือนมิถุนายนปี 2023 (กับกรณี Github ที่มีของ secondary navbar เพิ่มขึ้นมาในบางหน้า) ดังข้อสังเกตในหัวข้อก่อนหน้า จะเห็นได้ว่าองค์ประกอบที่ปรากฎบน navigation bar มีจำนวนค่อนข้างน้อย และตัว navigation bar เองก็มีความสูงค่อนข้างน้อยเช่นกัน โดยองค์ประกอบที่พบเห็นได้บ่อยมีดังต่อไปนี้

## Search component
หากเว็บไซต์ใด implement searchbox เข้าไปอยู่ใน navbar โดยตรง จะสังเกตได้ว่า searchbar นั้นจะเป็น element ที่มีขนาดใหญ่ที่สุด element หนึ่งในแต่ละ serachbar จากความซับซ้อนของ element ที่จะต้องมีกรอบรอบนอกครอบ placeholder text ด้านในซึ่งก็เป็นการบังคับความสูงของ navbar วิธีหนึ่ง

ในขณะที่หลายเว็บใช้วิธีวาง interactive search icon ที่บังคับให้ผู้ใช้กดเพื่อให้แสดง search box ขึ้นมา โดยในกรณีของ IBM และ TED การกด search icon จะลบ navigation element บน navbar ทิ้งและ replace ด้วย searchbox แทน ส่วนในกรณีของ Apple, GOV.UK, และ GovTech Singapore (ซึ่งเป็น implementation ของ SGDS) จะใช้วิธีการสร้าง search box element ขึ้นมาด้านใต้ของ navbar อีกทีหนึ่ง

ผู้เขียนเชื่อว่า search component เป็น element หนึ่งที่ benefit ต่อเว็บไซต์ใดเว็บไซต์หนึ่งจากการเพิ่ม navigatibility ของเว็บอย่างมหาศาล (i.e. แนะนำให้มี) แต่การพิจารณาว่าจะนำ searchbox ใส่เข้าไปใน navbar โดยตรง หรือทำการ "ซ่อน" ภายใน search icon อีกที อาจขึ้นอยู่กับพฤติกรรมของข้อมูลและตัวเว็บไซต์ใด ๆ อีกทีหนึ่ง (e.g. ความบ่อยในการใช้ search, dependent ของ user ต่อ search component เมื่อเทียบกับ navigation method อื่น ๆ  เช่น Youtube ที่ user มี dependent ต่อ search ค่อนข้างมากในการค้นหาวิดิโอ ที่อาจะทำได้ยากมากด้วย navigation method ชนิดอื่น)

- [ ] TODO: Write an analysis about GOV.UK Search **Page**

## Hamburger button
Hamburger button เป็น button design ที่ถูกออกแบบขึ้นในปี 1981 เพื่อใช้ในการแสดงหน้าเมนูของคอมพิวเตอร์ Xerox Star ในภายหลัง Hamburger button ได้ถูกนำไปประยุกต์ใช้กับ Graphic Interface Design ประเภทอื่นรวมไปถึง web design แน่นอนว่าเมื่อสิ่งใดสิ่งหนึ่งถูกนำไปต่อยอดเป็นวงกว้าง semantic ของสิ่ง ๆ นั้นย่อมเกิดการวิวัฒน์ไปพร้อมกันเช่นกั

ความหมายโดยคร่าวของ Hamburger button ในการแสดงเมนูที่ถูกซ่อนไว้ได้ถูกนำไปใช้ในหลากหลายพฤติกรรมตั้งแต่การเปลี่ยนหน้า แสดง component ที่เป็น menu ทั้งหมดในหน้าเดิม (ที่มักพบเจอในการลดทอน navbar ในโทรศัพท์จนเหลือเพียงโลโก้ CTA หลัก และ Hamburger) การซ่อน Navigation บางส่วน (เช่นในกรณีของ Github หรือ Wikipedia) หรือเพียงแค่การย่อ/ขยายขนาด Sidebar (เช่นในกรณีของระบบที่ implement Canonical Layout ของ Material Design 3 เช่น Gmail และ Youtube)

ถึงแม้ Hamburger menu จะเป็นที่รู้จักกันในหมู่ผู้ใช้อินเตอร์เน็ตในปัจจุบันโดยทั่วไปแล้ว แต่จากความหมายและพฤติกรรมที่หลากหลายของ Hamburger menu ในการ implement เว็บไซต์แต่ละเว็บ ก็ยังทำให้เกิดทัศนะที่วิพากษ์ในการใช้ Hamburger menu เกินความจำเป็นที่นักออกแบบหลายคนใช้ในการ"ซ่อน"ข้อมูลมากเกินไปจนก่อความลำบากและสับสนในกลุ่มผู้ใช้ (อ่านเพิ่มเติม: [Loving & Hating the Hamburger Icon](https://www.webdesignerdepot.com/2018/09/loving-hating-the-hamburger-icon/))

ผู้เขียนสนับสนุนการลดการใช้  Hamburger menu หากไม่จำเป็น โดยเน้นไปที่การ expose CTA อยู่ในส่วนหลัก มากกว่าการซ่อนใน Hidden layer (เช่นกรณีของ IBM) หรือแนวทางของ GOV.UK ที่รวม CTA ทั้งหมดไว้ภายใน Menu button เพียงอันเดียว เพื่อลดความสับสนของ navigation flow ของผู้ใช้

## Personalization component
มีการปรากฎของ personalization menu ใน navbar ของหลายเว็บไซต์ที่นำมาเป็นกรณีศึกษาตามภาพด้านบน เราอาจเริ่มพิจารณาความสัมพันธ์จากการสร้าง spectrum ของ dependency ของ user profile ต่อเว็บไซต์ เช่น facebook หรือ gmail ที่ core feature ขึ้นอยู่กับการมี profile ในขณะที่การมีอยู่ของ user profile ของ Youtube อาจไม่ได้สำคัญเท่า แต่ก็ส่งผลต่อ personalize content, TED หรือ Wikipedia (ในมุมมองผู้อ่าน) ที่เป็นการเก็บ config และข้อมูลคร่าว ๆ ที่อาจทำให้ experience ในการใช้เว็บไซต์ดียิ่งขึ้น ไปจนถึงเว็บไซต์อย่าง GovTech Singapore ที่การมีอยู่ของ profile อาจไม่ได้ข้องเกี่ยวกับการใช้งานของเว็บไซต์สักเท่าไหร่ ซึ่งอาจมองได้ว่าการเน้นความสำคัญในเชิงการดีไซน์ก็มัก/ควรแปรผันตาม spectrum นี้เช่นกัน

GOV.UK มี ground assumption หนึ่งที่น่าสนใจที่ส่งผลต่อแนวทางในการออกแบบเว็บไซต์ คือประชาชนส่วนใหญ่จะได้เข้ามาใช้เว็บไซต์ของพวกเขาไม่กี่ครั้งในช่วงปีเท่านั้น ซึ่ง assumption นี้ก็อาจมองได้ว่าส่งผลทำให้ GOV.UK ไม่ได้มี personalization menu/component ซึ่งก็อาจเป็นเบื้องหลังการดีไซน์พฤติกรรม Digital Government Service ของหลายประเทศโดยไม่รู้ตัวเช่นกัน

จากที่กล่าวมาทั้งหมดในหัวข้อนี้จะเห็นได้ว่าการมีอยู่ของ personalization menu อาจไม่ได้จำเป็นต่อทุกเว็บไซต์เสมอไป ซึ่งก็อาจส่งผลดีหรือผลเสียต่อการใช้งานเว็บไซต์ได้ เช่นการมี personalization ในบางเว็บไซต์ก็อาจลดทอนอารมณ์ความ inclusive ของการใช้งานแต่ละรอบของเว็บได้เช่นกัน

**remark**: ความสัมพันธ์ระหว่าง navigation bar และ sidebar และ body content -> เนื้อหาที่กล่าวมาเป็นการวิเคราะห์ภาพรวมของ navigation bar ด้านบนของเว็บไซต์ ซึ่งในหลายกรณี (เช่น website ที่ถูก implement ตาม canonical layout หรือ Facebook) เมื่อพิจารณาเห็น navbar ที่ดูเหมือนถูกลดทอนโดยตัวของมัน อาจสังเกตได้ว่า navigation dependency ใช้วิธีการย้ายไปไว้ที่ sidebar แทนมากกว่าการลดทอนข้อมูลปรากฎถึงในระดับโครงสร้าง

# Layout Design and Responsiveness
[Gestalt Principle](https://medium.com/the-existing/gestalt-principle-in-uidesign-33ee34ae8f21) เป็นหลักการหนึ่งที่ถูกนำมาประยุกต์ใช้ในเชิงการออกแบบ user experience อย่างกว้างขวาง โดยมีหัวใจสำคัญเกี่ยวกับพฤติกรรมรับรู้โครงสร้างหรือรูปแบบเชิงองค์รวมของมนุษย์ ซึ่งอาจมองว่านำมาซึ่ง practice ในการจัดหมวดหมู่สิ่งของที่อยู่ในกลุ่มเดียวกันให้อยู่ใกล้กันเพื่อความง่ายต่อการเข้าใจของผู้ใช้นั้นเอง และการจัดข้อมูลบน navbar ก็เป็นหนึ่งในกรณีศึกษาที่น่าสนใจเป็นอย่างมาก

จากตัวอย่างที่ยกมาทั้ง 12 ตัวจะเห็นได้ว่า navbar มีแนวโน้มจะจับกลุ่ม component เป็น 1-3 กลุ่ม (กลาง/ซ้าย-ขวา/ซ้าย-กลาง-ขวา) โดยอาจมอง function คร่าว ๆ  ของ component ได้เป็น 3 กลุ่ม ได้แก่ web-related menu (เช่น logo ที่มักถูกใช้เป็นลิงก์ไป home ในตัว หรือ navigation ต่าง ๆ), search menu, และ personalized/action menu

ในขณะที่ pattern ที่มักพบเจอในการย่อ navbar ให้มีขนาดเล็กลงเพื่อใช้ใน mobile view ก็คือการใส่ navigation ไว้ใน hamburger โดยส่วนที่ยัง expose ออกมามักเป็น personalized/action menu กับ search menu (ในรูปแบบของ search icon) เสียเป็นส่วนมาก โดยที่ hamburger ก็มีพฤติกรรมที่แตกต่างกันออกไปตั้งแต่การแสดง element เต็มหน้า (จากซ้ายของ IBM หรือจากบนของ Apple), การแสดง sidebar ที่กินพื้นที่ไม่เต็มทั้งหน้า (เช่น Github และ Wikipedia), หรือการ expand เป็น component ในหน้าหลัก (เช่น GOV.UK และ GovTech Singapore)

## Implication

ความหลากหลายของการจัด navbar ที่พบเจอได้อาจพิสูจน์ได้ว่าการออกแบบ layout ของ navbar ไม่ได้มี best practice ในเชิงรูปแบบที่มองเห็นได้เสียทีเดียว แต่ในขณะเดียวกันจะ context-dependent ต่อรูปแบบข้อมูลและพฤติกรรมการใช้เว็บไซต์เสียมากกว่า

ซึ่งถ้าจะให้ข้อเสนอแนะเกี่ยวกับการจัด layout design สำหรับ navbar ก็คงจะเป็นเรื่องของ Jacob's Law และ Gestalt Principle ดังที่ได้ระบุไว้ด้านบนมากกว่าการเป็น enforced pattern อย่างรัดกุม อย่างไรก็ตาม เพื่อการสร้าง consistency across ecosystem ตามจุดมุ่งหมายของ HMDS การวางรูปแบบของ navbar ก็เป็นหนึ่งในสิ่งสำคัญที่ทีม Hack TH ต้องพิจารณาอีกทีสำหรับระบบ Design System โดยอาจเริ่มจากการพิจารณา use case ของ web รัฐ แล้วหา common pattern ที่จะลด/ไม่ก่อ complexity ต่อตัวผู้ใช้งานเพิ่มมากเกินไป