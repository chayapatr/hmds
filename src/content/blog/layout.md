---
title: "Layout Design, Grid System, and Responsiveness"
description: "(or how to design a presentation system for, and to stimulate meaningful informations)"
pubDate: "Jun 20 2023"
updatedDate: "Jun 21 2023"
author: "https://www.github.com/chayapatr"
---

สิ่งที่ผู้เขียนมองว่าสำคัญไม่แพ้ component design ก็คือเรื่องของ ​layout design จากกรณีของ [DSFR](https://github.com/codegouvfr/dsfr) (วิเคราะห์เพิ่มเติมใน [Implementation Approaches](https://chayapatr.github.io/hmds/blog/implementation)) จะสังเกตได้ว่าถึงแม้ Design System จะมีการออกแบบไว้ค่อนข้างรัดกุมแล้ว และ implementer นำ component ไปใช้ได้ถูก practice เว็บต่าง ๆ ของรัฐบาลฝรั่งเศสก็ยังไม่ได้ดู "ประสานกัน" ขนาดนั้นจาก layout design (และ pattern design/information architect ที่จะกล่าวต่อในบันทึกฉบับต่อ ๆ ไป) ที่ไม่ได้ถูกบังคับสักเท่าไหร่ -- ทีม Hack TH ได้ review ระบบ guideline และข้อบังคับ layout design ของ system ต่าง ๆ ไว้ดังนี้:

![France Government Websites](/hmds/france.webp)

# Keyword
- **Layout System**: ระบบการจัดการพื้นที่บนหน้าจอเพื่อจัดเรียงองค์ประกอบและข้อมูลต่าง ๆ บนหน้าเว็บไซต์
- **Grid System**: ส่วนประกอบ/วิธีการของ Layout System โดยเน้นการแบ่งพื้นที่ออกเป็นส่วนย่อย ๆ

# Why?
- [ ] TODO: Write content about information architecture

# Apple Human Interface Guideline
Human Interface Guideline (HIG) เป็นบันทึกรวม Guideline และ Practice ด้านการดีไซน์ digital product เพื่อใช้ใน platform ต่าง ๆ ของ Apple ตั้งแต่ macOS จนถึง watchOS

>"The HIG contains guidance and best practices that can help you design a great experience for any Apple platform." - Apple

อย่างไรก็ตาม ส่วน [Layout ของ HIG](https://developer.apple.com/design/human-interface-guidelines/layout) ไม่ได้มีการกำหนด layout design ไปมากกว่าคำแนะนำและ best practice เป็นหัวข้อแบบตัวอักษรเท่านั้น

# Google Material Design
## Material 2
Documentation ของ Material 2 มีการจัดหมวดหมู่ [Layout](https://m2.material.io/design/layout/understanding-layout.html#composition) ในส่วนของ Material Foundation ส่วนที่น่าสนใจคือ M2 ได้มีการนำเสนอ [Responsive layout grid](https://m2.material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins) เพื่อจัดการกับ Layout Design ในขนาดของหน้าจอที่แตกต่างกันโดยคำนึงถึงระบบ content anatomy (App bar/Navigation/Body) ที่ M2 ได้นำเสนอไว้ในส่วน [Understanding Layout](https://m2.material.io/design/layout/understanding-layout.html#layout-anatomy) 

ระบบ layout ของ M2 utilize การวางจำนวน column ของ grid ที่แตกต่างกันออกไป (4/8/12 column) ตามแต่ละ breakpoint ที่ M2 นำเสนอมา (ตารางในหน้า Responsive layout grid) ประกอบกับการแบ่ง gutter แบ่งแต่ละ column ของ grid และ margin ขนาบสี่ด้านของ grid system โดยระบบ layout ถูกใช้ประกอบกับการออกแบบ spacing และพฤติกรรมของแต่ละ element ตามที่ M2 ถูกกำหนดไว้ 

## Material 3
M3 มีการ extent ระบบของ M2 แต่นำเสนอระบบ [Canonical Layout](https://m3.material.io/foundations/layout/canonical-layouts/overview) ที่วางรูปแบบของ standard layout จากองค์ประกอบของข้อมูลที่มักพบเจอ (list-detail/supporting pane/feed) มาครอบทับ grid system เดิม

> "When creating new layouts, begin from a [canonical layout](https://m3.material.io/m3/pages/canonical-layouts/overview) rather than a layout grid. This helps ensure that your layouts can scale across devices and form factors." - M3

โดย M3 ได้กำหนดแนวทางการจัดการ layout ตามขนาดหน้าจอที่แตกต่างกันออกไปเป็นพื้นฐานเพื่อรองรับระบบ layout เชิงลึกที่ extend usage ของระบบ layout เดิมของ M2

กล่าวโดยสรุปคือ layout system ของ Material Design ถูกออกแบบและวางมาตรฐาน ด้วยการวาง ระบบที่ยืดหยุ่นตามขนาดของหน้าจอ ไปพร้อมกับการนำเสนอ content anatomy ซึ่งถูกออกแบบพฤติกรรมของแต่ละ content/component ไว้ รวมถึงวิธีการ compose component และ refine ระบบโดยคร่าว

อย่างไรก็ตาม Material Design ไม่ได้มีการกำหนดรูปแบบ template แบบเฉพาะเจาะจงไปมากกว่าการออกแบบ common component และวิธีการ compose โดยคร่าว โดยอิงจาก layout system ที่ถูกออกแบบไว้

# Tailwind / Chakra / Bootstrap
3 UI Library (ที่ถูกออกแบบมาเพื่อลดความยุ่งยากของการเขียน CSS มากกว่าเป็น cohesive design system ในตัวของมันเอง) ใช้วิธีการ wrap ระบบ grid system ของ CSS ตามปกติ ประกอบกับการสร้าง default breakpoint สำหรับจอแต่ละขนาด มากกว่าการกำหนดแนวทางหรือข้อบังคับในการใช้ layout system

```html
<!-- Tailwind -->
<div class="grid grid-cols-1 md:grid-cols-6">
	<!-- ... -->
</div>
<!-- https://tailwindcss.com/docs/grid-template-columns -->

<!-- Chakra Simple Grid System -->
<!-- Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}` // will have the same effect. -->
<SimpleGrid columns={[2, null, 3]} spacing='40px'>
	<!-- ... -->
</SimpleGrid>
<!-- https://chakra-ui.com/docs/components/simple-grid -->
```

อย่างไรก็ตามการสร้าง layout design โดยคำนึงถึง grid system ก็เป็น common sense ที่ควรต้องถูกพิจารณาในการสร้าง design system

remark: ถึงแม้ทั้งสาม library จะมีรากฐานจากแนวคิดที่ค่อนข้างคล้ายคลึงกันแต่ก็มีวิธีการ implement ที่แตกต่างกันพอสมควร อย่างกรณีของ bootstrap ([Grid system](https://getbootstrap.com/docs/4.0/layout/grid/)) ที่เรียกได้ว่ามีความซับซ้อนกว่าอีกสองตัวที่จะมีความแตกต่างในเรื่องรูปแบบการเขียนเสียมากกว่า

# Carbon Design System
Carbon เป็น open source design system ของ IBM ที่ได้ถูกนำไปใช้งานในส่วนต่าง ๆ ของบริษัท Carbon ได้ออกแบบระบบการจัดการ layout ในชื่อ 2x Grid ที่ถูกวางไว้เป็น core philosophy ของการออกแบบส่วนต่าง ๆ (หรืออาจ imply พฤติกรรมของระบบ Carbon หลายอย่างได้ถูก shape โดย 2x Grid System)

> "It’s fundamental to everything we design. The 2x Grid is the geometric foundation of all the visual elements of IBM Design, from typography to columns, boxes, icons, and illustrations. It provides structure and guidance for all creative decision-making." - Carbon Design System

โดยสรุป 2x Grid เป็นการจัดการ layout ด้วยรากฐานจากแนวคิดความเป็น Grid โดยใช้วิธีการแบ่งพื้นที่ (ซึ่งในกรณีของ website design คือขนาดหน้าจอ) ออกเป็น 2^n ส่วนตามขนาดพื้นที่ที่มี เช่น 1/2/4/8/16 ช่อง โดยมี margin ขนาบสี่ด้าน รวมถึงอาจจมี gutter เสริมเป็นตัวแย่งระหว่าง column ของ grid (แต่ระบบที่ไม่มี gutter ถูกนำมาใช้มากกว่า)

ในมุมมองของผู้เขียน ถ้าพิจารณาจาก implementation สำคัญของ 2x Grid และ Carbon Design System โดยรวมอย่าง[เว็บไซต์หลักของ  IBM](https://www.ibm.com) จะเห็นได้ถึงความไม่สมบูรณ์แบบของ layout system ที่ระบบที่ถูกออกแบบมาอย่างรัดกุม อาจไม่ยืดหยุ่นต่อการจัดวาง component ในบางกรณี (เช่น Content Skeleton ด้านซ้ายมือของหน้าข้อมูลแต่ละหน้า) รวมถึงเมื่อมองจาก Desktop แล้ว ระบบ Grid 4 ช่องที่ไม่มี gutter ที่ถูกใช้เป็นหลัก อาจส่งผลให้คอนเทนต์ดู "บวม" และกินพื้นที่หน้าจอได้เช่นกัน

![IBM Website](/hmds/ibm.webp)

อย่างไรก็ตาม **ทีมงาน Hack TH และตัวผู้เขียนเชื่อว่าความเรียบง่ายหลักการของระบบ 2x Grid สามารถถูกนำไปปรับใช้เป็นรากฐานของ HMDS ได้อย่างดี** จากประสิทธิภาพของระบบในการลด burden of choice สำหรับการสร้าง layout โดยการควบคุม grid อย่างรัดกุม ต่างจากระบบ grid ดังที่เห็นได้ใน Material Design ที่เน้นการสร้างรากฐานที่สามารถต่อยอดได้อย่างอิสระมากกว่า

เป็นไปได้ว่าหากระบบ HMDS สามารถปรับใช้แนวคิดเกี่ยวกับพฤติกรรมของ component ประกอบกับการสร้าง template (หรือที่มองว่าเป็น molecule/organism ตามแนวคิด atomic design) อาจจะลดความ "บวม" ของระบบที่รัดกุมนี้ได้

# Government Design Systems
ดังที่กล่าวไว้ในช่วงต้นของบันทึก ระบบ layout ของ DSFR ถูกวางไว้อย่างหลวม ๆ จากการกำหนด breakpoint และขนาดโดยคร่าวของ component เพียงเท่านั้น เมื่อพิจารณาในรัฐบาลของประเทศอื่น ๆ จะสังเกตได้ว่า design system ของรัฐบาลมักไม่กำหนด layout system อย่างรัดกุมเพื่อเพิ่มความยืดหยุ่นในการสร้างหน้าเว็บของแต่ละองค์กร ยกตัวอย่างเช่น

- **GOV.UK (อังกฤษ)**: ใช้ระบบ grid 3 column + margin เป็นหลัก โดยหน้าจอที่มีขนาดใหญ่จะใช้ grid 3 column + margin ในขณะที่หน้าจอที่เล็กลมาจะลดขนาด margin ไปจนถึงลดจำนวน column ใน grid ตามลำดับ
- **SDGS (สิงคโปร์)**: ใน version 1 มีการ document grid system ไว้อย่างหลวม ๆ คล้ายคลึงกับที่พบเจอใน bootstrap/tailwind มีการวาง breakpoint ของขนาดหน้าจอ แต่เนื้อหานี้ถูกตัดไปใน v2 โดยเพิ่ม page template เข้ามาแทน แต่ไม่ได้ระบุวิธีการจัดการ component ภายในแต่ละ template
- **DSFR**: ใช้วิธีการวางมาตรฐาน element size โดยคร่าว ประกอบกับการวาง breakpoint ของหน้าขอ
- **remark**: fascinating site -> [Government Design Systems](https://platformland.github.io/government-design-systems/data/design-systems/)

ในข้อเสนอแนะของทีม Hack TH และผู้เขียน การออกแบบ Design System ของรัฐบาลควรมีความยืดหยุ่นสูงเพื่อลดความยุ่งยากในการ implement ตาม use case ที่แตกต่างกันออกไป อย่างไรก็ตาม ข้อกำหนดก็ควรมีความรัดกุมระดับหนึ่งเพื่อลดความ "กลมกลืนอย่างขัดแย้ง" ที่มักพบเจอในการ implement โดยเน้นไปที่ component เป็นหลัก โดยลดข้อบังคับของ layout system เหลือเพียงแค่ breakpoint คร่าว ๆ

ทีม Hack TH เชื่อว่ารากฐานของระบบ 2x Grid ของ Carbon Design System เมื่อประกอบกับการคำนึงถึง content anatomy ตามข้อเสนอของ Material Design System จะสามารถวางระบบ layout design ที่รัดกุมแต่ยังยืดหยุ่นในระดับที่พอดีได้