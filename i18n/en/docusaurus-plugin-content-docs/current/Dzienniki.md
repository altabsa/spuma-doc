---
sidebar_position: 13
id: Dzienniki korespondencji
title: Daily correspondence
---

# Daily correspondence

**Daily correspondence** is an additional feature used to store information about postal correspondence.  
You can add entries, filter data, link documents from SPUMA, and print or copy data.

---

## Main Options

The top toolbar contains three main buttons:

- **New** – add a new entry,
- **Refresh** – reload the list,
- **Menu** – additional operations.

![Main correspondence log options](/img/dziennikk_en.png)

---

## Operations Menu

Clicking the menu icon provides access to additional functions:

- **Print report** – print the list of correspondence entries,
- **Copy data** – copy data to the clipboard.

---

### Copy Data

The **Copy data** option allows you to copy the contents of the correspondence log table.

- Click **Copy data**.
- The data is copied to the clipboard.
- Values are enclosed in double quotation marks (`""`) and separated by tabs, allowing you to paste them directly into Excel.

---

### Print

The **Print** option allows you to prepare and save a printout of correspondence log data.

1. Click **Print**.
2. The **Print job** window opens.

   ![Print job](/img/dziennikk6_en.png)

3. In the **Operation type** field, select one of the following options:
   - **Lines only** – prints only the table data,
   - **Lines and documents** – prints the table data together with linked documents.

   ![Operation type](/img/dziennikk8_en.png)

4. Click **Prepare printout**.
   - A new item is added to the list with the **Pending** status and no available options.
   - After a moment, click **Refresh** to update the status.

5. When the status changes to **Ready**, two operations become available:
   - **Preview** – opens the printout in preview mode, where you can print it,
   - **Save** – allows you to save the printout as a file.

![Ready printout](/img/dziennikk7_en.png)

6. Click **Close** to close the print window.

---

## Adding a New Entry

1. Click **New**.
2. The system automatically displays basic entry information: number, owner, company, operation type, date, and time.

![New entry](/img/dziennikk2_en.png)

3. Complete the additional data:
   - **Operation type** – select one of the following options:
     - **Input** – incoming correspondence,
     - **Output** – outgoing correspondence,
     - **Other** – other cases.

     ![Operation type selection](/img/dziennikk9_en.png)

   - **Date and time** – manually select or edit the entry date and time.
   - **Description** – enter any additional information.

:::tip[Note]
Depending on the implementation or subsequent modifications made by the administrator, an entry may require **additional attributes**.
:::

4. Click **Add** in the bottom-right corner to confirm.
5. To discard changes before saving, click **Undo changes**.

---

## Document References

You can add **references** to a correspondence log entry. References are links to documents stored in SPUMA.

### How to Add a Reference

1. Open the document you want to link.
2. From the operations menu, select **Link to document** and copy the link.
3. Open **Daily correspondence** and select the entry to which you want to add the document.
4. Click **Paste references** – the document is linked as a reference.
5. After adding the reference, click **Add** in the bottom-right corner to save the new entry.

⚠️ If you make a mistake before saving, you can use **Undo changes** to restore the previous state.

![References](/img/dziennikk3_en.png)

### How to Remove a Reference

- Click the menu button and select **Delete reference** – the document link is removed, but the document itself remains in the system.

### Document Preview

To see which references are assigned to an entry, click **Show documents** – all linked documents are displayed on the left.

![Show documents](/img/dziennikk4_en.png)

---

## Entry Operations

After adding an entry, you can:

- open it and view its details,
- view the list of linked documents,
- add more references,
- delete references,
- delete the entire entry (available only after saving).

---

## Filtering Entries

The correspondence log allows you to filter data by:

- **date** – enter a range in the **Date from (log)** field,
- **type** – select a value from the **Table Type** field.

Filters allow you to quickly find the required correspondence.

## Linking to Documents

You can also open a correspondence log entry directly from a [document](./przetwarzanie-pojedynczego-dokumentu/pasek-narzedzi-dokumentu#daily-correspondence).