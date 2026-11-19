---
sidebar_position: 3
id: przyklad-dokument-pusty
title: Process for an Empty Document
---

## 1. Creating an Empty Document

Adding an empty document starts in the same way as adding a document from a file.

![Adding an empty document – steps 1–5](/img/przyklad20_7_3_en.png)

1. **Go to** the **Secretary** section.
2. **Click** **New**.
3. In the selection window, select the **Create document** tab.
4. **Select a template** – you can choose any template from the list or create a document **without a template**.
   - In this example, select **No template**.
5. **Click OK** to create the document.

**Result:** an empty document is added to the **Secretary** list and is ready for further processing.

## 2. Completing Data on the General Tab

After creating an empty document, **open it from the Secretary list**.  
Since the document is empty, it is not sent to OCR – the purpose is to create a new document manually.

In this example, we are preparing a **Purchase Order**.

1. **Select the document type** – from the drop-down list, select **Purchase Order** (in this example: *Purchase Order 2*).
2. **Enter the document name** – e.g. *ZZ20250916*.
3. **Add a description** – e.g. *"Order for laptop bags"*.
4. **Enter the document number** – e.g. *ZZ20250916*.
5. **Complete the dates**:
   - **Document date** – e.g. *2026-11-13*,
   - **Received** – e.g. *2026-11-13*.

![General tab – empty document](/img/przyklad21_en.png)

**Result:** the **General** tab is completed. The document has an assigned type, name, number, and dates.

## 3. Completing Data on the Attributes Tab

After completing the **General** tab, go to the **Attributes** tab.

1. **Select the Ordering Person** – from the drop-down list, select the person responsible for placing the order (in this example: *Jan Ordynacki*).
2. **SAP Number field** – leave it empty.
   - This number will be assigned automatically in SAP after the document is posted.
3. **Enter the dates**:
   - **Valid Until** – specify the date until which the order is valid (e.g. *2026-11-13*),
   - **Required Date** – specify the date by which the order should be fulfilled (e.g. *2026-11-27*).

![Attributes tab – empty document](/img/przyklad22_en.png)

**Result:** the **Attributes** tab is completed. The document has an assigned Ordering Person and specified dates, while the **SAP Number** field remains empty until posting.

## 4. Adding Document Lines

The next step is to add items to the document.

1. **Go to** the **Lines** tab.
2. **Click the + icon** to add a new item.
3. **Select an Item** from the drop-down list (in this example: *C00014 – Laptop bag*).
4. **Complete the item data**:
   - **Net Amount** – e.g. *720*,
   - **Quantity** – e.g. *3*,
   - **Remarks** – e.g. *"Bags for new employees"*.
5. **Click Save** to save the added lines.

![Lines tab – empty document](/img/przyklad23_en.png)

**Result:** lines containing the selected item, price, and quantity have been added to the document. The document is ready for further processing (flow, posting).

## 5. Flow and Authorization

After completing the data and adding lines, you can send the document for approval.

1. **Go to** the **Flow** tab.
2. In the **Schema** field, select **None**.
3. **Click Send for approval**.

![Flow tab – no authorization](/img/przyklad24_en.png)

**Result:** the document is marked as **No authorization** and is ready for further processing (e.g. posting to SAP).

## 6. Adding to SAP

The final stage of processing an empty document in SPUMA is sending it to **SAP**.

1. **Go to** the **Attributes** tab.
2. **Click Save to SAP**.
3. The system displays the question: *"Create Purchase Order in SAP?"*.
   - Click **Yes** to confirm.

![Save to SAP](/img/przyklad25_en.png)

**Result:** the document is sent to SAP, and the system automatically assigns a number, which appears in the **SAP Number** field on the **Attributes** tab.

![SAP Number – completed automatically](/img/przyklad26_en.png)

---

### Previewing the Document in SAP

In **SAP**, the document is displayed as a **Purchase Order**.  
To check it:

1. In SAP, go to the **Purchase Request** document.
2. Search for the document by its number (e.g. *5*).
3. Open the details to view all data – items, quantities, amounts, and dates.

![Purchase Order in SAP](/img/przyklad27_en.png)

**Result:** the empty document has completed the entire process – from creation in SPUMA, through manual data entry and adding lines, to creating the corresponding **Purchase Order** in SAP.

## 7. Repository – Final Document

After the flow is completed and the document is saved to SAP, it is also moved to the appropriate directory in the **Repository**.

- You can find the document using the search mechanism or by navigating directly to the directory where it was saved.
- Only users with the appropriate **permissions** to the Repository can access the document.
- In the Repository, you can view the document, copy data, print it, or use it in reports.

**Result:** the empty document has completed the entire process – from creation in SPUMA, through manual data entry and adding lines, to being saved in the Repository and creating the corresponding **Purchase Order** in SAP.