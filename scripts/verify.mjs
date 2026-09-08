import { chromium } from "playwright";

const url = process.argv[2] ?? "http://127.0.0.1:4173";
const screenshotPath = process.argv[3] ?? ".tmp/verification.png";
const viewportWidth = Number(process.argv[4] ?? 1440);
const viewportHeight = Number(process.argv[5] ?? 1200);
const fullPage = process.argv[6] !== "viewport";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: viewportWidth, height: viewportHeight } });
const errors = [];

page.on("console", (msg) => {
  if (msg.type() === "error") {
    errors.push(msg.text());
  }
});

page.on("pageerror", (err) => {
  errors.push(String(err));
});

await page.goto(url, { waitUntil: "networkidle" });

const result = {
  title: await page.title(),
  textLength: (await page.locator("body").innerText()).trim().length,
  h1: await page.locator("h1").innerText(),
  hasHeroButtons: (await page.locator("a").allInnerTexts()).slice(0, 4),
  errors,
};

await page.screenshot({ path: screenshotPath, fullPage });
await browser.close();

console.log(JSON.stringify(result, null, 2));
