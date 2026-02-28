# Відповідність сторінок Codia AI → файли в CODIA_main_inzur

Якщо ти отримав код сторінок через **Codia AI Web2Figma → Figma2Code**, ось куди його підставляти в проєкті.

---

## Таблиця відповідності

| Codia (назва сторінки / папки) | Файл у проєкті | Маршрут у App | Примітка |
|--------------------------------|----------------|---------------|----------|
| **CODIA - contact page** | `src/pages/ContactPagePage.tsx` | `/contacts` | Контакти — контент сторінки контактів. |
| **CODIA - handbook reit Inzur** | `src/pages/HandbookReitInzurPage.tsx` | `/handbook` | Довідник REIT Inzhur. |
| **CODIA - humburger menu** | `src/pages/HumburgerMenuPage.tsx` | — | Це **UI блоку меню** (бургер), не окремий маршрут. Використовується всередині `Header.tsx` (слайд-меню). Якщо хочеш оновити вигляд меню — оновлюй цей компонент або вставляй разметку в `Header.tsx`. |
| **CODIA - registestration** | `src/pages/RegistestrationPage.tsx` | — | Реєстрація. Зараз маршруту немає; можна додати, напр. `/register`. |
| **CODIA - dashboard** | `src/pages/DashboardPage.tsx` | `/dashboard` | Головна сторінка кабінету (Огляд). |
| **CODIA - dashboard docs** | `src/pages/DashboardDocsPage.tsx` | `/dashboard/documents` | Сторінка «Документи» в кабінеті. |
| **CODIA - dashboard-menu** | `src/pages/DashboardMenuPage.tsx` | — | **UI блоку меню кабінету** (бокове меню). Показується в `DashboardHeader.tsx` при відкритті бургера. Не окремий маршрут. |
| **CODIA - inzhur Develpo** | `src/pages/InzhurDevelpoPage.tsx` | `/developer` | Девелоперська компанія Inzhur BUD. |
| **CODIA - inzhur energy** | `src/pages/InzhurEnergyPage.tsx` | `/energy` | **Депозитарій Inzhur Capital** — пункти меню «Депозитарій» та «Депозитарій Inzhur Capital» ведуть сюди. |
| **CODIA - referral** | `src/pages/ReferralPage.tsx` | `/dashboard/referral` | Реферальна сторінка **в кабінеті** (реферальне посилання, кнопка «Скопіювати» тощо). |
| **CODIA - referral description** | `src/pages/ReferralDescriptionPage.tsx` | `/referral` | Публічна сторінка «Реферальна програма» (опис програми). |

---

## Сторінки, які не змінюємо (за бажанням)

- **HumburgerMenuPage** — контент публічного бургер-меню (вже вшитий у `Header.tsx`). Не рухаємо.
- **DashboardMenuPage** — контент меню кабінету (вшитий у `DashboardHeader.tsx`). Не рухаємо.
- **RegistestrationPage** — реєстрація; маршрут не додавали. Не рухаємо.

---

## Як підставити код з Codia

1. Відкрий відповідний файл з таблиці вище (наприклад, `ContactPagePage.tsx`).
2. Скопіюй **контент** з Codia (JSX + стилі) у цей файл.
3. **Збережи ім’я компонента та export:**  
   наприклад, залиш `export default function ContactPagePage() { ... }` або заміни внутрішній вміст, зберігши той самий експорт.
4. Якщо в Codia є власна шапка/футер — у нашому проєкті вони вже в `Layout`; можна прибрати дублікати з коду Codia або обгорнути контент так, щоб не рендерити шапку/футер двічі.
5. Для **HumburgerMenuPage** та **DashboardMenuPage**: або оновлюй відповідний файл і потім переноси зміни в `Header.tsx` / `DashboardHeader.tsx`, або вставляй розмітку Codia прямо в слайд-меню в цих компонентах.

Якщо скинеш код конкретної сторінки з Codia (наприклад, contact або handbook), можу підказати, як саме вставити його в відповідний файл рядок за рядком.
