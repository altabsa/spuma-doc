---
sidebar_position: 2
id: przyklad-dokument-z-pliku
title: Process for a Document Added from a File
---

## 1. Adding a Document from a File

![Adding a document from a file – steps 1–6](/img/przyklad1_7_3_en.png)

1. **Go to** the **Secretary** section.
2. **Click** **New**. The document adding window opens in **File selection** mode.
3. **Check** the **OCR** switch – enable it if you want to recognize the document content immediately. You can also run OCR later; see: [OCR](../przetwarzanie-pojedynczego-dokumentu/OCR.md).

   - When OCR is enabled, the system performs initial recognition (Tesseract: regions, words, and an attempt to recognize the **seller's Tax ID**). Then, if a **default OCR mechanism** is configured for the recognized seller, the system **automatically** processes the document again using that mechanism.
   - If the seller **does not have** an assigned OCR mechanism, the initial recognition result remains available. You can select another mechanism manually later.

4. **Click** the **+** icon to add a file from your computer.
5. In the system dialog, **select** the file and **click Open**.
6. When the file appears on the list, **click OK** to start adding it.

**Result:** the file is uploaded to SPUMA and appears in the **Secretary** list after processing.

## 2. Waiting for OCR Processing

Initially, the document status is indicated by an hourglass icon – the document is waiting for OCR processing.

![OCR status – processing](/img/przyklad2_en.png)

1. After a moment, **click Refresh** to check whether OCR processing has finished.

When processing is complete:

- the system automatically assigns a **Document Class** (e.g. Purchase Invoice),
- assigns a **name**,
- **saves information about the OCR mechanism used**,
- changes the status to processed.

![OCR status – completed](/img/przyklad3_en.png)

## 3. Resending the Document to OCR

After adding the document, **check which OCR mechanism was used**. This information is displayed on the document's **OCR** tab. In this example, it is **Tesseract**.

![OCR mechanism used](/img/przyklad28_en.png)

If the mechanism **was not selected automatically** or you want to use another one, you can run OCR again:

1. **Open** the document from the **Secretary** list by clicking its name.
2. In the top-right corner, **click the operations menu** icon (three lines).
3. From the drop-down menu, **select Send to OCR**.
4. Wait until the system finishes recognizing the document content.

![Resending the document to OCR](/img/przyklad6_en.png)

**Result:** the **Fields** and **Table** sections of the **OCR** tab, as well as the **General** and **Attributes** tabs, are automatically populated based on the OCR results. Information about the OCR mechanism used is also updated automatically.

## 4. Completing Data on the General Tab

The **General** tab contains basic document information.

1. **Check the document type** – OCR has assigned the **Invoice** class.
   - If it is correct, leave it unchanged.
   - Otherwise, **select the correct type** from the list.

2. **Check the document name** – it was assigned automatically (e.g. *DOCUMENT20261113*).
   - You can leave it unchanged or **edit** it to make it more readable.

3. **Enter a description** – add information such as *"Invoice for toner purchase – PCT Kwant"*.

4. **Enter the invoice number** – copy the number from the document (e.g. *100000*).
   - The number can also be recognized automatically by **OCR** – in this example, it was recognized correctly.
   - The saved number is used as the **supplier/customer reference** and transferred to **SAP**.

5. **Verify the dates**:
   - **Document date** (e.g. *2025-03-31*),
   - **Received** (e.g. *2026-11-13*).

   If the dates are incorrect, **enter the correct values** or **select them from the calendar**.

6. **Check the automatically completed data**:
   - **Creation date**,
   - **Company**,
   - **Owner**,
   - **Directory**,
   - **Unique ID**.

   These fields do not need to be changed.


## 5. Completing Data on the Attributes Tab

The **Attributes** tab contains detailed information associated with the Document Class.  
The available fields depend on the selected document type. For a **Purchase Invoice**, complete the following fields (they may vary depending on the implementation):

1. **Business Partner (BP)** – the system may automatically recognize the Business Partner based on OCR.
   - In this example, OCR incorrectly recognized the buyer instead of the supplier, so we must select the correct Business Partner manually.
   - **Click** the double-square icon next to the **Business Partner (BP)** field.
   - In the search window, enter part of the Business Partner name or code (e.g. *PCT*).
   - **Click the search icon** to start searching.
   - Find the correct Business Partner in the results and **click** to select it.

   ![Business Partner selection](/img/przyklad8_en.png)

3. **Due date** – in this example, it was correctly completed by OCR and does not need to be changed.

4. **Base document** – skip this field in this example.

5. **Gross and Net amounts** – the system transferred the values from OCR. They match the invoice and do not need to be corrected.

6. **Gross / Net** – select the appropriate option (**Net**).

7. **Payment Method** – OCR did not complete this field.
   - **Select** *PD30* from the list, according to the payment terms on the invoice.

Example of a correctly completed **Attributes** tab.

![Attributes tab – correctly completed](/img/przyklad9_en.png)

## 6. Adding Document Lines

The **Lines** tab contains detailed invoice items, such as goods or services.  
The easiest way to add them is to copy the recognized OCR table directly.

---

### 6.1 Copying Lines from OCR

1. **Go to** the **OCR** tab and select **Table**.
2. **Check** whether the system correctly recognized all invoice items.
   - In this example, OCR recognized the item *J.B. Officeprint 1420*.
3. **Select** the lines you want to copy to the document.
4. In the top-right corner, **click the operations menu** (three lines).
5. **Select Copy to lines**.
6. Select **Do not group**.

![Copying lines from OCR](/img/przyklad10_en.png)

**Result:** the selected OCR lines are copied to the **Lines** tab.

---

### 6.2 Completing Data on the Lines Tab

1. **Go to** the **Lines** tab.
2. **Verify** that the selected items were copied – in this example, the system completed only the amount (e.g. *1400.00*).
3. **Select the Item code** – this works in the same way as selecting a Business Partner:
   - **Click** the double-square icon next to the **Item** field.
   - **Search** for the appropriate item by entering part of its name or code.
   - **Select** the item from the results.
4. (Optional) **Complete other fields** if required, e.g. **Project**.
   - In this example, no additional fields are completed.
5. **Click Save** in the top-right corner.

![Lines tab – completing data](/img/przyklad11_en.png)

Example of a correctly completed line.

![Lines tab – completed line](/img/przyklad12_en.png)

## 7. Flow and Authorization

The **Flow** tab is used to send documents through the authorization process.

---

### 7.1 Selecting a Schema and Sending for Approval

1. **Go to** the **Flow** tab.
2. From the **Schema** list, select **OPEN**.
3. **Click Send for approval**.

![Open schema selection](/img/przyklad13_en.png)

**Result:** the document is sent to the first person specified in the process – in this example, **Jan Kran**.

---

### 7.2 Document Approval by One of

1. **Jan** opens the document and clicks **Approve**.
2. In the **Open** schema, the next user must be selected:
   - He selects **SEKRETARIAT** from the list.
   - He can enter additional **comments**, but leaves the field empty in this example.
3. Click **Approve**.

![Approval window](/img/przyklad14_en.png)

⚠️ After clicking **Approve**, the document is marked as initially processed. To save the decision in the system, you must also click **Save** in the top-right corner.

---

### 7.3 Sending an Additional Message

To speed up the approval process, Jan sends Adam a message containing a link to the document:

1. **Click the + icon** in the messages panel.
2. **Select the user** – Adam.
3. **Enter the message**, e.g. *"Hi, please approve document FVZ_VAT328_44. Urgent!!!"*.
4. **Paste the document link** (previously copied from the operations menu).
5. **Click Send**.


---

### 7.4 Document Approval by a Group Member

1. Adam (from the SEKRETARIAT group) receives the message, clicks the link, and opens the document.
2. On the **Flow** tab, he clicks **Approve**.
3. After approving the document, he replies to Jan in the chat to confirm that the document has been approved.

![Sending a message to a user](/img/przyklad15_en.png)

---

**Result:** the document has been approved using the **Open** schema. Both steps (Jan and Adam) are displayed in the flow, and Adam's confirmation is visible in the messages panel.

## 8. Posting to SAP

After the document has been approved, it can be posted to **SAP**.

---

### 8.1 Sending the Document to SAP

1. **Go to** the **Lines** tab.
2. In the top-right corner, **open the operations menu** (three lines).
3. **Select Add to SAP**.

![Add to SAP option](/img/przyklad17_en.png)

4. The system displays a message asking whether to add the document as a draft.
   - Click **Yes**.

**Result:** the document is sent to SAP as a draft document.

---

### 8.2 Finding the Document in SAP

1. In SAP, open the **Document Drafts** report.
2. Select the document type – in this example, **A/P Invoices**.
3. You can narrow the search to open documents only.
4. Click **OK** to start searching.

![Searching for a draft document in SAP](/img/przyklad18_en.png)

---

### 8.3 Previewing the Document in SAP

After running the report, a list of draft documents is displayed.  
Select the document from this example to open its detailed view.

![Draft document in SAP](/img/przyklad19_en.png)

**Result:** the document has been transferred from SPUMA to SAP as a draft document.  
It can be edited, completed with missing information, and finally posted.

## 9. Repository – Final Document

After the authorization process is completed, the document is automatically moved to the appropriate directory in the **Repository**.

- You can find the document using the search mechanism or by navigating directly to its directory.
- The document is available only to users who have the appropriate **permissions** for the Repository where it is stored.
- In the Repository, you can view the document, copy data, print it, or use it in reports.

**Result:** the document has completed the entire process – from being added in **Secretary**, through OCR, data completion, document lines, flow, and authorization, to being saved in the **Repository** as a final document.  
Additionally, it has been **added to SAP** as a draft document, ready for further editing and final posting.