---
sidebar_position: 4
id: Atrybuty
title: Attributes
---

# Attributes

The **Attributes** tab contains a set of fields describing the document.  
The available fields depend on the selected **Document Class** configured on the **General** tab.

## Example: **Invoice Class**

For documents of the **Invoice** type, fields related to the **Business Partner (BP)** are displayed, among others.

### A. Attribute – Business Partner (BP)

Used to select the supplier or customer associated with the document.

#### Removing a Value

- Click the **X** icon to remove the currently assigned value.

![Remove value](/img/atrybuty1_7_6_en.png)

#### Adding a Value

1. Click the **double-square** icon.  
   The Business Partner selection window opens.

![Selection window](/img/atrybuty2_en.png)

2. In the new window, you can:

   - **Search for an existing BP from SAP**
     - Click the **search** icon – a list of all Business Partners from SAP is displayed.

![Business Partner list](/img/atrybuty3_en.png)

     - Enter a phrase to narrow the results.
     - After selecting a Business Partner, the data is completed automatically.

![Completed data](/img/atrybuty4_en.png)

     - Click **Select** in the bottom-left corner.

   - **Add a new BP**
     - Click **New** in the top-right corner.
     - Complete the Business Partner data.
     - Click **Save**, then **Select**.

   - **Use the Online button when adding a new BP**
     - Enter the **Tax ID**.
     - Click **Online**.
     - The remaining fields are completed automatically.

:::danger[]
A newly added Business Partner is also automatically saved in **SAP**.
:::

4. After selecting the Business Partner, the field on the **Attributes** tab is completed.

**No SAP connection**

![No SAP connection](/img/blad2_en.png)

If a message appears when attempting to select a value, the SAP integration is temporarily unavailable and you should contact the administrator.

:::tip[Preview Invoice Data While Selecting a BP]
Hold the top bar of the selection window and move it to the required position on the screen.

This allows you to view the data visible on the document, e.g. company name or Tax ID, while selecting the Business Partner.
:::

![Moving the window](/img/atrybuty6_en.png)

---

### B. Attribute – Electronic doc. number

The **Electronic doc. number** field stores the identification number of the electronic document, e.g. the **KSeF** number assigned by the National e-Invoice System.

---

### C. Attribute – Base document

This field allows you to select the document on which the current document is based.  
For example, it can be a **Purchase Order** or a **Goods Receipt PO** document.

1. **Click** the **double-square** icon next to the field.
2. **Click** the search icon to search for documents from SAP. You can also enter a phrase to narrow the document search.

![Order list](/img/linie11_en.png)

3. **Select** a document from the list available in the system.

After selecting the Base document, SPUMA allows you to later **copy data**, e.g. lines, values, or descriptions, from that document directly to the current one. This function is described in:

[**Document Lines → Copy from Base Document**](../przetwarzanie-pojedynczego-dokumentu/Linie.md#kopiuj-z-dokumentu-bazowego)

---

### D. "Date" Attribute

Date attributes, e.g. *Due date*, allow you to quickly enter or select a date.

- **Click the calendar icon** to select a date.
- You can also enter it manually.

:::tip[How to Enter a Date Quickly?]
- Enter the letter **t** and press **Tab** – the system automatically inserts **today's date**.
- Enter only the **day** (e.g. 16) and press **Tab** – the system completes the date with the **current month and year**.
- Enter the **day and month** (e.g. 1608) and press **Tab** – the system inserts **August 16 of the current year**.
- Enter the **full date** (e.g. 16082024) and press **Tab** – the system saves the date as **16-08-2024**.
:::

---

### E. Gross / Net Attribute

The **Gross / Net** attribute defines how the system should calculate document values. This allows SPUMA to determine whether the entered amounts refer to **Net** or **Gross** values and then automatically calculate the remaining fields. The image below shows the differences in the amount **to be settled** depending on the selected mode.

![Gross / Net mode](/img/przyklad29_en.png)

Selecting **Gross** or **Net** is also relevant when sending a document to **KSeF**, which requires the value type to be specified unambiguously.

---

### F. Dictionary Attributes (e.g. Payment Method, Currency, Project, Cost Center)

These attributes use values from **dictionary lists** retrieved from **SAP**.

- **Select a value** from the drop-down list.

**No SAP connection**

![No SAP connection](/img/blad3_en.png)

If a message appears when attempting to select a value, the SAP integration is temporarily unavailable and you should contact the administrator.

---

### G. "Amount" Attribute (e.g. on Document Lines)

Amount attributes available on the **Lines** tab apply to product or service items.  
You can enter them manually or use automatic operations that simplify splitting and recalculating values.

| Input Method | Description | Example |
|----------------------|------|----------|
| **Value entered manually** | Enter a specific amount and **press Enter** to confirm. | 1120.00 |
| **Split into X (/x)** | Enter the amount, **press Enter**, then enter `/` and the number of items into which the value should be split, e.g. `/3`, and **press Enter** again – the system adds three lines with the amount split equally. | /3 → the amount is split into 3 items |
| **Percentage of value (x%)** | Enter a number, **press Enter**, enter the percentage followed by `%`, and **press Enter** again – the system automatically calculates the line value according to the specified percentage. | 10% → the line is completed with 10% of the specified value |
| **OCR line item (pX)** | Enter `p` and the item number, e.g. `p3` – the system retrieves data from item 3 of the recognized OCR table and fills the current line with it. | p3 → data from the 3rd OCR line |

---

### H. Attribute – Bank Account

The **Bank account** attribute is used to specify the bank account number associated with the document.

#### Selecting a Bank Account

1. Click the **double-square** icon next to the field.
2. A window opens with bank accounts assigned to the selected Business Partner and retrieved from SAP.
3. Select an account from the available list.
4. Click **Select**.

**Result:**  
The **Bank account** field is completed with the selected account number.

---

#### White List

1. Click the **document with search icon** to verify whether the bank account number is included in the **VAT taxpayers' White List**.

---

#### Account Not Available on the List

If the required account is not available on the list:

- check whether the correct Business Partner is selected,
- make sure the account has been added in SAP,
- add a new bank account.

#### Adding a New Bank Account

1. Enter the bank account number.
2. Check whether the account is included in the White List.
3. Click the **plus** icon.
4. The following message appears:

![Message](/img/atrybuty7_en.png)

5. Click **OK** to add the account.

---
