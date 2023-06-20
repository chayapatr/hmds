---
title: "On implementation approaches"
description: "How to implement the HACKTH Modular Design System?"
pubDate: "Jun 19 2023"
updatedDate: "Jun 20 2023"
author: "https://www.github.com/chayapatr"
---

# Keywords
- Design System: philosophy ของระบบการออกแบบ โดยไม่ได้คำนึงถึง implementation
- UI/component library: Implementation ของ Design System
- framework-agnostic: การสร้างระบบที่ไม่ผูกติดกับ framework ใด framework หนึ่ง (อ่านเพิ่มเติม: [What does it mean by Framework agnostic?](https://stackoverflow.com/questions/64725017/what-does-it-mean-by-framework-agnostic))

# Backstory/Excerpts from Internal Discussions
ทีมงาน Hack TH ตั้งใจนำ Design System มาทดลอง implement ในตัวเว็บของ Hack TH* เพื่อใช้เป็น case study และสร้างมาตรฐานการใช้งาน

**remark**: เว็บ Hack TH ถูกสร้างโดยใช้ [Astro](https://astro.build) ซึ่งเป็น web framework ที่มีความยืดหยุ่นค่อนข้างสูงจากการสามารถดึง component ของ framework/library อื่น ๆ อย่าง react/vue/svelte เข้ามาใช้เป็นส่วนหนึ่งของโค้ดได้

แน่นอนว่าการ implement design system ออกมาเป็น ui library ย่อมมี constrain ที่เกิดขึ้นจากลักษณะของตัว framework ที่แตกต่างกัน ถึงแม้ Hack TH จะถูกสร้างโดยใช้ Astro และเน้นเขียนเป็น component-based โดย import react เข้ามา ซึ่งการสร้าง jsx component library เพื่อ implement HMDS ก็คงเป็นหนึ่งในวิธีที่มองได้ว่าสะดวกหรือได้รับความนิยมมากที่สุดวิธีหนึ่ง

แต่ปัญหาที่เกิดขึ้นจาก approach นี้คือ library ดังกล่าวจะถูกล็อคให้ใช้ได้กับ framework ที่เป็น JSX-based อย่าง React/Solid/Million/Astro เท่านั้น ต่างจากความตั้งใจดั้งเดิมที่ต้องการทำให้ ui library มีความเป็น framework-agnostic เพื่อเปิดให้นำไปใช้ได้อย่างแพร่หลาย (อย่างโปรเจกต์หนึ่งที่ตั้งใจจะนำ HMDS ไป implement ก็เป็น vue ซึ่งจะทำให้ไม่สามารถใช้ jsx component library ได้)

ทีมงาน Hack TH จึงได้ปรึกษาหารือถึงแนวทางการสร้าง early implementation ของ HMDS โดยเริ่มจากการ review library และวิธีการต่าง ๆ ที่มีในปัจจุบัน

```
@dtinth | Discord ก้าว Geek
https://discord.com/channels/1107893321440964628/1109386003606687744/1119942742949232651

เข้าใจว่ามีการ pivot ด้วยครับ จากเดิมที่สร้าง React based design system ไว้ให้โปรเจคอื่นๆ เอาไปใช้ มีไอเดียที่คุยกันว่า ทีม design system จริงๆ ควรจะเข้าไปแทรกซึมในทีมที่พัฒนา products ด้วย คือไปช่วย implement UI ด้วย design system นั้น (เพื่อลด gap ระหว่างทีมที่ทำ design system กับทีมที่เอา design system ไปใช้)

พอมองแบบนี้ก็พบทันทีว่า ถ้าขึ้น component library ด้วย React ก็จะไม่มีประโยชน์กับทีมที่ทำ participatory budgeting เพราะโปรดักส์ตัวนั้นใช้ Vue ทำ UI เลยเกิดการ pivot ไปทำ class based แทนครับ ทั้งนี้ ที่ผมเข้าใจอาจจะผิดหรือ out of date ไปแล้วก็ได้ เพราะไม่ได้คุยกับทีมมาพักใหญ่ละ 😂
```

## Radix / Headless UI based
Radix และ Headless UI เป็น library ของ unstyled components ที่ถูกสร้างขึ้นโดย WorkOS และ Tailwind Labs ตามลำดับ การสร้าง design system โดยขึ้นจากรากฐานของ library จำพวกนี้มีข้อดีในแง่ความสะดวกในการจัดการเรื่อง fundamental (ที่อาจมีความซับซ้อนและรายละเอียดสูง) เช่น accessibility หรือการไม่ต้อง reinvent the wheel เพื่อสร้าง component ที่ได้รับความนิยมอยู่แล้วอย่าง modal หรือ combobox ขึ้นมาใหม่

แต่ปัญหาก็ย้อนกลับมาในแง่ของ usage accessibility ที่ component library มีความผูกติดกับ base framework ค่อนข้างมาก หรือถึงแม้ headlessui จะมีการสร้าง vue library ขึ้นมาเสริมนอกเหนือจาก react library แล้วก็ตาม มันก็ยังสร้าง burden ให้ทีมงานต้อง keep track 2 library นี้ไปพร้อมกัน ซึ่งอาจไม่ sufficient สำหรับการดำเนินการในช่วงแรกที่ทีมงานมีจำนวนน้อย และยังติดข้อจำกัดตั้งต้นเรื่องผูกติดกับ library ที่เป็น jsx-based หรือ vue เท่านั้นอยู่ดี

## Mitosis
Mitosis เป็น library ที่ถูกสร้างโดย BuilderIO เพื่อสร้าง framework-agnostic component builder แต่จากความเคลื่อนไหวของ project ที่มีความ active ค่อนข้างน้อยในช่วงหลัง ทำให้ทีมงานเกิดความกังวลในแง่ maintainability ในระยะยาว

- [ ] TODO: Write an analysis on component-based implementation methodologies (e.g. ChakraUI approach, [@dtinth](https://github.com/dtinth) and [@riffy](https://github.com/rayriffy) approach (builder function-based), etc.)

## Web Component
ถึงแม้ WC จะวางตัวเองไว้เป็น framework-agnostic solution แต่ในความเป็นจริง WC ยังมีปัญหากับ react อยู่ค่อนข้างมาก หรือยัง mature มากพอในการใช้งานจริง แต่ทีมงานเห็นตรงกันว่าในระยะยาวการสร้าง WC library ขึ้นมาใช้ก็จะสามารถสร้างความสะดวกสบายในการ implement design system ให้กับหลายโปรเจกต์ในอนาคต

## Bootstrap/Tailwind (Class-based philosophy)
แนวทางที่พบเห็นได้บ่อยใน CSS library คือการสร้างเป็น class-based configuration ซึ่งอาจควบคุม default style ได้ในหลายระดับ เช่น Tailwind ที่เน้นการเขียน class จำนวนมากเพื่อประกอบสร้าง component ต่าง ๆ ขึ้นมาเอง โดยมี default config เช่นสี หรือ breakpoint ไว้ให้ ในขณะที่ class ของ Bootstrap จะมีลักษณะที่สั้นกว่า แต่มี default style ที่ชัดเจน

```html
<!-- Tailwind -->
<button type="button" class="px-2 py-1 text-white rounded-md bg-red-600">Danger</button>

<!-- Bootstrap -->
<button type="button" class="btn btn-danger">Danger</button>
```

แน่นอนว่าระบบของ Tailwind ย่อมมีความ customizable สูงกว่ามาก ซึ่งแลกมากับความยาวและความหลวมของข้อบังคับในการกำหนด styling (ซึ่งตรงกับจุดประสงค์ของ library ตั้งแต่แรกที่ไม่ได้ถูกออกแบบมาเพื่อสร้าง Design System แต่เป็นวิธีการ tackle กับการเขียน CSS เท่านั้น) ตรงกันข้ามกับ Bootstrap ที่แลกความ customizable กับรูปแบบแนวทางที่ชัดเจนและรัดกุมมากกว่า

ทีมงานเห็นตรงกันว่าแนวทางความเป็น class-based ในรูปแบบของ Bootstrap ดูเป็นแนวทางที่สมเหตุสมผลในการวางเป็นรากฐานของการดีไซน์ implementation ของ HMDS แต่จากการที่ Bootstrap ไม่ได้ตั้งใจล็อค design system อย่างรัดกุม ทำให้ยังมีความ customizable ที่ค่อนข้างสูง (เช่นการสามารถสร้าง link สีรุ้งได้ ซึ่งไม่จำเป็นใน HMDS) การออกแบบ HMDS จึงอาจเริ่มจากการลดทอน  Bootstrap ลง

# Government Design System: Case Studies
## GOV.UK Design System (อังกฤษ)
- Web: [Design your service using GOV.UK styles, components and patterns](https://design-system.service.gov.uk/)
- Github: [alphagov/govuk-frontend](https://github.com/alphagov/govuk-frontend/)

Implementation ของ GOV.UK Design System เป็น class-based ใช้ prefix `govuk-` โดยขึ้นรากฐานจาก Dart Sass นอกจากการใช้ class ใน HTML ทั่วไปแล้ว GOV.UK ยังได้เลือกใช้ Nunjuck มาเป็นอีกหนึ่งทางเลือกในการสร้าง HTML Component อีกด้วย โดยจะสามารถสังเกตได้ว่าใน Documentation ของแต่ละ Component ส่วนของโค้ดจะเขียนไว้สองรูปแบบเป็น plain HTML และ Nunjuck

นอกเหนือจาก Implementation มาตรฐาน มีทีมที่เชื่อว่าเป็น civic contributor* สร้าง [govuk-react](https://github.com/govuk-react/govuk-react) ขึ้นเป็น jsx-based component library พร้อมทำ storybook ไว้

**Remark**: govuk-react ถูกเก็บ repositary ใน org ชื่อ govuk-react ต่างจาก repo อื่น ๆ ของรัฐบาลอังกฤษที่จะถูกเก็บอยู่ใน alphagov ทำให้เชื่อได้ว่าเป็น civic contributor มากกว่าทีมงานของ GOV.UK โดยตรง

```html
<button class="govuk-button" data-module="govuk-button">
	Save and continue
</button>
```

```
{% from "govuk/components/button/macro.njk" import govukButton %} {{ govukButton({ text: "Save and continue" }) }}
```

## DSFR: Système de Design de l'État (ฝรั่งเศส)
- Web: [Système de Design de l'État](https://www.systeme-de-design.gouv.fr/)
- Github: [GouvernementFR/dsfr](https://github.com/GouvernementFR/dsfr)

DSFR เป็น Design System ที่ถูกสร้างขึ้นโดย Service d'Information du Gouvernement (SIG) / Government Information Service ของรัฐบาลฝรั่งเศส มีลักษณะเป็น class-based ใช้ prefix `fr-`

```html
<button class="fr-btn">
    Label bouton
</button>
```

นอกเหนือจากระบบ class-based หลักแล้ว ยังได้มีการ port DSFR สำหรับใช้ใน framework/library อื่น ๆ เช่น react/vue/django โดยหน่วยงานอื่นที่ไม่ใช่ SIG อีกด้วย เช่น [codegouvfr/react-dsfr](https://github.com/codegouvfr/react-dsfr) ที่สร้างและดูแลโดย [code.gouv.fr](https://code.gouv.fr) โดยมีข้อมูลรายละเอียดในหน้า [Portages en cours](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/developpeurs/portage-en-cours) ของ documentation Système de Design de l'État

### Remarks
- ระบบ DSFR ได้ถูกบังคับใช้โดยข้อกฎหมาย นั่นทำให้เว็บไซต์ภายใต้ `.gouv.fr` ต้องทำตาม Design System  DSFR และได้รับการอนุมัติจาก SIG ก่อน Deploy
- ปัญหาอย่างหนึ่งที่ผู้เขียนพบเจอในการ implement DSFR คือ ถึงแม้ component จะถูกนำไปใช้ได้อย่างเคร่งครัด แต่ layout ของแต่ละเว็บไซต์ก็มีความแตกต่างกันอย่างเห็นได้ชัด

## Singapore Government Design System (สิงคโปร์)
Web: [Singapore Government Design System](https://www.designsystem.tech.gov.sg/)
Github: [GovTechSG/sgds](https://github.com/GovTechSG/sgds/)

