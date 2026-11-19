---
sidebar_position: 7
id: OCR
title: OCR
---

# Document OCR

The **OCR** tab displays data automatically recognized from the document.  
It contains two tabs: **Fields** and **Table**.

- If OCR has not recognized any data, both tabs remain empty.
- If OCR has recognized data, the values from the **Fields** tab are also automatically populated in the **General** and **Attributes** tabs.

---

## OCR Mechanism Used

At the top of the **OCR** tab, you can see information about the **OCR mechanism used** (e.g. Tesseract, GPT).  
After **resending the document to OCR**, this information is **updated automatically**.

![OCR mechanism used – tab header](/img/przyklad28_en.png)

---

## Fields

The **Fields** tab displays header data such as invoice number, Tax ID, document date, etc.

![OCR – Fields](/img/ocr1_en.png)

---

## Table

The **Table** tab contains lines recognized in the document.

![OCR – Table](/img/ocr2_en.png)

You can select specific rows and copy them to the **Lines** tab:

1. Select the lines you want to copy.
2. Click the **operations menu** icon (three lines).
3. Select **Copy to lines** or **Copy with AI suggestion**.

### Messages and Options

- If you do not select any items, the following message appears:

  ![Message – no selection](/img/ocr3_en.png)

- After selecting items and choosing the copy option, a window opens where you can select the grouping method:

  ![Copy to lines – grouping](/img/ocr4_en.png)

  The following options are available:
  - **No grouping** – each item is copied as a separate line.
  - **All** – all items are summed and copied as a single line.

4. Click **OK** to confirm copying.

The selected items appear in the **Lines** tab and are included in the **To settle** amount.

---