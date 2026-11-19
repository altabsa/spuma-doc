---
sidebar_position: 4
id: przyklad-dokument-ksef
title: Process for a Document from KSeF
---

# Process for a Document from KSeF

## 1. Retrieving a Document from KSeF

1. **Go to** the **KSeF** section.
2. **Click Refresh**, then enable the **Only new** switch to retrieve the latest invoices.
3. Select the required document from the list.
4. **Click New document** to create it in SPUMA.
5. **Open** the document to start processing it.

![Retrieving a document from KSeF](/img/przyklad3_1_7_2_en.png)

**Result:** the document from KSeF is saved in **Secretary**.

---

## 2. Data Verification

For documents retrieved from KSeF, **there is no need to run OCR** – all data is recognized automatically.

- The **OCR** tab displays information about the data source (KSeF).
- **Check the General, Attributes, and Lines tabs** – in most cases, all fields are completed correctly.
- If necessary, **complete or correct** the data manually.

![General tab – document from KSeF](/img/przyklad3_2_en.png)

**Result:** the document has been created correctly based on data from KSeF.

---

## 3. Flow and Authorization

The flow works in the same way as for a document added from a file.

1. **Go to** the **Flow** tab.
2. **Select an Authorization Schema** (e.g. *Open*).
3. **Click Send for approval** to submit the document for approval.

![Sending for approval](/img/przyklad13_en.png)

4. Users specified in the schema **approve or reject** the document in the same way as in other processes.

![Document approval](/img/przyklad14_en.png)

**Result:** the document has been approved according to the selected Authorization Schema.

---

## 4. Adding to SAP

After the document has been approved, it can be posted to SAP.

1. **Go to** the **Lines** tab.
2. In the top-right corner, **open the operations menu** (three lines).
3. **Select Add to SAP**.

![Add to SAP option](/img/przyklad17_en.png)

**Result:** the document is sent to SAP as a draft document.

## 5. Repository – Final Document

After the flow is completed, the document is automatically moved to the appropriate directory in the **Repository**.

- You can search for the document or navigate directly to its directory.
- Only users with the appropriate **permissions** have access to the document.
- In the Repository, you can view the document, copy data, print it, or use it in reports.

**Result:** the document from KSeF has completed the entire process – from retrieval, through data verification, flow, and authorization, to being saved in the Repository.