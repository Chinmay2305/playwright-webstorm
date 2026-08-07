# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginDashboard.spec.js >> User workflow grouped tests >> viren.desai@theopeneyes.in workflow >> [TC-2] Assessment preview lock popup for viren.desai@theopeneyes.in
- Location: tests\loginDashboard.spec.js:50:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 24
```

# Page snapshot

```yaml
- generic [ref=f8e1]:
  - generic [ref=f8e12]:
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - heading [level=1]: IFMA's self-assessment
              - button: Back
              - text: 
              - paragraph: IFMA's self-assessment considers your skills and creates a blueprint for your FM training. This exercise will help you identify your strengths and weaknesses across the FM knowledge base. After answering the questions, you'll have a clear understanding of your specific knowledge gaps.
              - paragraph: IFMA’s self-assessment helps you accelerate your career by gaining expertise in the areas you need to become a well-rounded FM professional.
            - text:   
  - status [ref=f8e13]
  - dialog [ref=f8e15]:
    - generic [ref=f8e16]: i
    - heading "Assessment Preview Locked" [level=2] [ref=f8e18]
    - generic [ref=f8e19]: Assessment Preview is currently locked/unavailable.
    - text: "!"
    - button "OK" [active] [ref=f8e21] [cursor=pointer]
  - generic [ref=f8e23]:
    - button "Live Chat" [ref=f8e24] [cursor=pointer]
    - iframe [ref=f8e25]:
      - generic [ref=f13e3] [cursor=pointer]
```

# Test source

```ts
  7   | const { users } = require('../test-data/users');
  8   | 
  9   | // Run user groups sequentially so one browser context handles all tests per user
  10  | test.describe.serial('User workflow grouped tests', () => {
  11  |   for (const user of users) {
  12  |     test.describe(`${user.email} workflow`, () => {
  13  |       let context;
  14  |       let page;
  15  |       let loginPage;
  16  |       let dashboardPage;
  17  | 
  18  |       test.beforeAll(async ({ browser }) => {
  19  |         // Create a dedicated context and page for this user
  20  |         context = await browser.newContext();
  21  |         page = await context.newPage();
  22  |         loginPage = new LoginPage(page);
  23  |         dashboardPage = new DashboardPage(page);
  24  | 
  25  |         // Login once per user
  26  |         await loginPage.goto();
  27  |         await loginPage.login(user.email, user.password);
  28  | 
  29  |         // Ensure landed on dashboard before running TCs
  30  |         await dashboardPage.verifyLandingUrl();
  31  |       });
  32  | 
  33  |       test.afterAll(async () => {
  34  |         await context.close();
  35  |       });
  36  | 
  37  |       // TC-1: Preview button should NOT be visible (per reverse case)
  38  |       test(`[TC-1] Preview button not visible for ${user.email}`, async () => {
  39  |         const preview = page.getByRole('button', { name: /Preview/i });
  40  |         const count = await preview.count();
  41  |         if (count === 0) {
  42  |           return; // pass when no preview buttons present
  43  |         }
  44  |         for (let i = 0; i < count; i++) {
  45  |           await expect(preview.nth(i)).not.toBeVisible({ timeout: 1000 });
  46  |         }
  47  |       });
  48  | 
  49  |       // TC-2: Direct navigation to /assessment shows locked popup and page is blurred
  50  |       test(`[TC-2] Assessment preview lock popup for ${user.email}`, async () => {
  51  |         await page.goto('https://sat.ifma-qa.devbyopeneyes.com/assessment');
  52  | 
  53  |         const header = page.locator("//h2[contains(@class,'swal2-title')]");
  54  |         const content = page.locator("//div[contains(@class,'swal2-html-container')]");
  55  | 
  56  |         await expect(header).toBeVisible({ timeout: 15000 });
  57  |         await expect(header).toHaveText('Assessment Preview Locked');
  58  | 
  59  |         await expect(content).toBeVisible({ timeout: 5000 });
  60  |         await expect(content).toHaveText('Assessment Preview is currently locked/unavailable.');
  61  | 
  62  |         // Modal selector used by the app (cover common swal2 classes)
  63  |         const modalSelector = '.swal2-popup, .swal2-modal, .swal2-container';
  64  | 
  65  |         // Ensure the modal element itself is not blurred
  66  |         const modalNotBlurred = await page.evaluate((modalSel) => {
  67  |           const modal = document.querySelector(modalSel);
  68  |           if (!modal) return false;
  69  |           const s = window.getComputedStyle(modal);
  70  |           const f = (s.filter || s.backdropFilter || '').toString();
  71  |           return !f.includes('blur(');
  72  |         }, modalSelector);
  73  |         expect(modalNotBlurred).toBeTruthy();
  74  | 
  75  |         // Ensure every visible element outside the modal has a blur >= 2px applied
  76  |         const notBlurredOutsideCount = await page.evaluate((modalSel) => {
  77  |           const modal = document.querySelector(modalSel);
  78  |           const elements = Array.from(document.body.querySelectorAll('*'));
  79  | 
  80  |           const isVisible = (el) => {
  81  |             const s = window.getComputedStyle(el);
  82  |             if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) === 0) return false;
  83  |             const r = el.getBoundingClientRect();
  84  |             return r.width > 0 && r.height > 0;
  85  |           };
  86  | 
  87  |           const blurRadius = (s) => {
  88  |             const str = (s.filter || s.backdropFilter || '').toString();
  89  |             const m = str.match(/blur\(([^)]+)\)/);
  90  |             if (!m) return 0;
  91  |             const num = parseFloat(m[1]);
  92  |             return isNaN(num) ? 0 : num;
  93  |           };
  94  | 
  95  |           const notBlurred = elements.filter(el => {
  96  |             if (modal && (modal === el || modal.contains(el))) return false; // skip modal contents
  97  |             if (!isVisible(el)) return false; // ignore invisible elements
  98  |             const s = window.getComputedStyle(el);
  99  |             const br = blurRadius(s);
  100 |             return br < 2; // treat <2px as not sufficiently blurred
  101 |           });
  102 | 
  103 |           // Return number of elements that are visible and not sufficiently blurred
  104 |           return notBlurred.length;
  105 |         }, modalSelector);
  106 | 
> 107 |         expect(notBlurredOutsideCount).toBe(0);
      |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  108 | 
  109 |         // Ensure images outside modal are present in DOM but have blur applied (not sharp)
  110 |         const sharpImageOutside = await page.evaluate((modalSel) => {
  111 |           const modal = document.querySelector(modalSel);
  112 |           return Array.from(document.querySelectorAll('img')).some(img => {
  113 |             if (modal && modal.contains(img)) return false;
  114 |             const s = window.getComputedStyle(img);
  115 |             const f = (s.filter || s.backdropFilter || '').toString();
  116 |             const m = f.match(/blur\(([^)]+)\)/);
  117 |             if (!m) return true; // no blur => sharp image
  118 |             const val = parseFloat(m[1]);
  119 |             return isNaN(val) || val < 2; // consider <2px sharp
  120 |           });
  121 |         }, modalSelector);
  122 |         expect(sharpImageOutside).toBeFalsy();
  123 |       });
  124 | 
  125 |       // Additional: verify dashboard cards (keeps original behavior)
  126 |       test(`[TC-3] Dashboard cards for ${user.email}`, async () => {
  127 |         // After TC-2 the page might have a modal blocking interactions — navigate back home first
  128 |         await page.goto('https://sat.ifma-qa.devbyopeneyes.com/landing-dashboard');
  129 |         await dashboardPage.verifyLandingUrl();
  130 |         await dashboardPage.verifyDashboardCards(user.expectedCards);
  131 |       });
  132 |     });
  133 |   }
  134 | });
  135 | 
```