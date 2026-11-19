---
sidebar_position: 6
id: Linie
title: Lines
---

# Document Lines

The **Lines** tab is used to enter detailed document items.  
Initially, the list is empty – only the search field and the **To settle: 0.00** information are displayed.

![Empty line list](/img/linie1_en.png)

---

## Adding Lines

To add a new item:

1. Click the **+** button on the right.
2. A new row appears and can be completed.

![Add line](/img/linie2_en.png)

The available fields include, among others:

- **Item** – enter the code or part of the name. Clicking the double-square icon allows you to search for items available in SAP.
- **Amount** – enter the value assigned to the item and press Enter to add it.

:::tip[How to Enter an Amount Quickly?]
- Enter the amount, **press Enter**, then enter `/` and the number of items into which the value should be split, e.g. `/3`, and **press Enter** again – the system adds three lines with the amount split equally, e.g. `/3` → the amount is split into 3 items.
- Enter a number, **press Enter**, enter the percentage followed by `%`, and **press Enter** again – the system automatically calculates the line value based on the specified percentage, e.g. `10%` → the line is completed with 10% of the specified value.
- Enter `p` and the item number, e.g. `p3` – the system retrieves data from item 3 of the recognized OCR table and fills the current line with it, e.g. `p3` → data is completed based on the 3rd OCR line.
- Enter `*` and **press Enter** – the system automatically fills the current line with the remaining amount to settle.
- You can use **Tab** instead of **Enter** – the system works in the same way and moves to the next field.
:::

- **Project / Cost Center** / **...** – depending on the Document Class configuration.
- **Order ID** – enter the base document item number. Clicking the double-square icon allows you to search for item numbers from the Base document if it has already been selected.

:::tip[Order Item]
If a **Base document** has been selected, you can use the **Order Item** field to complete the line with data from a specific item of that document.

1. Click the **double-square** icon.
2. Select an item from the list.
3. Click **Select**.

The system automatically completes the current line based on the selected Base document item.
:::

### Other Ways to Add Lines

In addition to manual entry, lines can also be completed in other ways:

- [**Load from file**](#wczytaj-z-pliku) – imports lines from a file, e.g. Excel.
- [**Copy from Base Document**](#kopiuj-z-dokumentu-bazowego) – copies lines from a related document, e.g. a Purchase Order.
- [**Copy to Lines**](../przetwarzanie-pojedynczego-dokumentu/OCR.md) – copies recognized OCR data directly to document lines.

---

## Operations Menu

Clicking the **three-line** icon (operations menu) opens a list of additional functions:

![Operations menu in Lines](/img/linie3_en.png)

The following options are available:

- **Save to file** – click to export document lines to an Excel file. <a id="wczytaj-z-pliku"></a>
- **Load from file** – click to import lines from a file.
  + First, the **Import Parameters** window opens, where you select:
    - whether the first row contains headers,
    - the separator character, e.g. `;`,
    - the text identifier.

    ![Import parameters](/img/linie4_en.png)

  + Next, the **Column Mapping** window opens – you can map file columns to document fields, e.g. Item, Amount, Project, Cost Centers.  
    If a column is not required, select the option to **not copy** it.

    ![Column mapping](/img/linie5_en.png)

  + If the file contains multiple items, the message **Distribute the document amount according to the key from the file?** is displayed.
    + **No** – lines are added to the document with the amounts defined in the source file.
    + **OK** – the **document amount** is distributed **proportionally** between individual lines based on their values from the file. Example: the document amount is PLN 1200. The file contains two items: x – PLN 50, y – PLN 100. This gives the proportions: x – 33.33%, y – 66.67%. The following values are added to the lines: x – PLN 1200 × 33.33% = PLN 400, y – PLN 1200 × 66.67% = PLN 800.

    ![Split document amount according to the key from the file?](/img/rozkl_lini_en.png)

- **Delete selected lines** – select lines in the list and delete them with one click. <a id="kopiuj-z-dokumentu-bazowego"></a>
- **Copy from Base Document** – this option becomes available only after the **Base document** field has been completed on the **Attributes** tab.

  1. In Attributes, in the *Base document* field, select the document type, e.g. **ZZ** – Purchase Order, **PZ** – Goods Receipt PO, or another type depending on the Document Class.

     ![Base document selection](/img/linie10_en.png)

  2. Enter the document number – if you know it, you can enter it directly.  
     You can also click the **double-square** icon to open the search window.

  3. Click the search icon – the system loads a list of available documents from SAP. You can also enter a phrase to narrow the document search.

     ![Order list](/img/linie11_en.png)

  4. Select the appropriate document and click **Select**.  
     A detailed preview with the item list is displayed.

     ![Base document preview](/img/linie12_en.png)

  5. Return to the **Lines** tab, open the **operations menu**, and select **Copy from Base Document**.  
     Lines from the selected Base document are completed automatically.

- **Add to SAP** – available only after authorization is completed. Click it to add the document to SAP as a draft document.

  1. Click **Add to SAP**.

  2. After clicking **Add to SAP**, the system displays the **Saved** message, confirming that the document has been successfully saved in SAP as a draft.

   ![Message – saved](/img/linie13_en.png)

   The *Remarks* field usually contains information that the document was added by SPUMA.

     **Messages and errors**
     - If not all required fields are completed, e.g. Business Partner code, the document **is not added** and an appropriate message is displayed.
     - If you try to add the document again, SPUMA informs you that such an SAP document already exists and asks whether you want to add another one.

     ![Message – document already exists](/img/linie9_en.png)

- **Suggest** – an example custom button (trigger). Other additionally configured buttons may also be displayed here.

Grayed-out options are currently unavailable.

---

## Important Information

:::danger[]
- The **To settle** field shows the difference between:
  - the **document value** (Net or Gross depending on the selected cost definition option) entered on the **Attributes** tab,
  - and the **sum of values entered on the lines**.

- This allows the user to immediately verify whether all amounts have been distributed correctly.

- Lines can also be added automatically by the **OCR** mechanism – details are available in the OCR section.
:::

---