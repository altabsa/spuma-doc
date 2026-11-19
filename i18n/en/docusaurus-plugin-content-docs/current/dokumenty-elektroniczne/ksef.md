---
sidebar_position: 1
id: ksef
title: KSeF Integration
---

# KSeF Integration

The **KSeF** section in the **Electronic Documents** menu allows you to view invoices downloaded automatically from the National e-Invoice System (KSeF).

After clicking **KSeF**, the workspace displays a list of all documents downloaded from KSeF.

![KSeF view](/img/dokumenty-elektroniczne2_v5_en.png)

---
## Filtering Documents

You can narrow down the document list:

- **Only new** – enable the switch in the top-right corner to display only documents that have not yet been added to Secretary and have not been processed.

  **Switch enabled – only new documents are visible**

  ![New only enabled](/img/nowe_ksef.png)

  **Switch disabled – all documents are visible**

  ![New only disabled](/img/nowe2_ksef.png)

- **Filter field** – enter any phrase at the bottom of the list, e.g. invoice number or company name. After entering the phrase, confirm the search by pressing **Enter**, **Tab**, or clicking anywhere with the mouse.

---

## Refreshing the Document List

To download the latest documents:

1. Click the **Refresh** button ![Refresh](/img/generuj_nazwe.png) in the top-right corner.
2. The system downloads the current invoices from KSeF and displays them in the list.

---

## Document Operations

In the top-right corner of the list, there is an **Operations Menu** that allows operations to be performed on selected documents.

To perform an operation:

1. Select a document using the checkbox on the left side of the list.
2. Click the **Operations Menu** on the toolbar.
3. Select the required action from the list.

![KSeF view](/img/dokumenty-elektroniczne2_v5_2_en.png)

---

### Adding Multiple Documents to Secretary

You can add multiple KSeF invoices to Secretary at the same time.

1. Select the documents you want to add.
2. Click the **Operations Menu**.
3. Select **New documents**.

The system creates documents in **Secretary** based on the selected invoices.

---

### Hiding Documents

If you do not want selected documents to be visible in the list:

1. Select the documents in the list.
2. Click the **Operations Menu**.
3. Select **Hide documents**.
4. In the displayed message, confirm the operation by clicking **Yes**.

The following message is displayed:

![Message](/img/ksef_kom_ukryw_en.png)

After confirmation, the documents are hidden from the list.

---

## Opening Documents and Adding Them to Secretary

Each document downloaded from KSeF can be opened and previewed directly in SPUMA.

![KSeF document preview](/img/dokumenty-elektroniczne3_en.png)

---

### Adding a Document to Secretary

1. Click the **New document** button in the top-right corner.
2. The document is moved to **Secretary**, where you can start its standard workflow, including approval, authorization workflow, and assignment to Directories.

---

### Further Processing

After adding the invoice to Secretary, an additional icon appears.

- Click the icon to open the document created based on the KSeF invoice.
- The new document view opens in SPUMA, where the full set of operations is available.

![Link to document in SPUMA](/img/dokumenty-elektroniczne4_en.png)

This allows you to move directly from the KSeF invoice preview to its working version in SPUMA and start the full document workflow.

---

## Automatic Processing of KSeF Documents Based on Business Partner Tax ID

It is possible to configure automatic processing of documents downloaded from KSeF based on the Business Partner Tax ID.

The administrator can define how documents for a selected Business Partner are processed by specifying, among others:

- BP Code,
- OCR Profile,
- Document Class,
- Line Grouping,
- Automatic Add from KSeF,
- Owner,
- Authorization Schema.

After a document is downloaded from KSeF, the system reads the Business Partner Tax ID and checks whether appropriate settings exist in the administration configuration.

If a configuration is found, the document is processed according to the defined parameters and sent to the specified document workflow.