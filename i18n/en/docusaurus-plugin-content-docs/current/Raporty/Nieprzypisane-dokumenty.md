---
sidebar_position: 3
id: Nieprzypisane-dokumenty
title: Unadvises Documents
---

# Unadvises Documents

The **Unadvises Documents** report is a standard report in SPUMA.  
It is used when a document (e.g. an invoice) reaches **Secretary**, but **its owner or the appropriate flow cannot be clearly identified**.

The report allows users to quickly identify documents that require assignment and determine who should be responsible for further processing.

---

## How Do Documents Appear in the Report?

A document appears in the **Unadvises** report when a Secretary employee cannot assign it to a specific [flow](../przetwarzanie-pojedynczego-dokumentu/Obieg.md) while processing the document.

The most common situations include:

- no matching Advice entry,
- no information about the document owner,
- uncertainty about which flow should be selected.

In this case, the Secretary employee can mark the document as **unassigned**. The document is automatically added to the report.

---

## Unadvises Documents List

Each report entry contains basic information about the document.

![Unadvises Documents list](/img/nieprzypisane1_en.png)

---

## Visibility Filter

The report allows you to filter documents by their assignment status:

- **0 - Only Unadvises** – documents waiting to be assigned,
- **1 - With Advice** – documents already assigned,
- **2 - All** – all entries.

To filter the data:

1. Select the appropriate **Visibility** filter.
2. Click **Refresh** to update the report.

---

## Assigning a Document

To assign a document to yourself:

1. Click the **Entry ID** of the selected document.

![Unadvises Documents list](/img/nieprzypisane2_en.png)

2. The **Assign document to yourself?** dialog appears.

![Assign document to yourself](/img/nieprzypisane3_en.png)

4. Click **Yes, assign** to assign the document to yourself.
5. Click **Cancel** to close the dialog without assigning the document.

After assignment, the document is removed from the unassigned documents list.

---

## Document Preview

If the available information is insufficient to identify the document or determine its owner, you can request access to its preview.

To open the document preview:

1. Click the **Documents ID** of the selected entry.
2. A message appears indicating that you do not have permission to access the document.

![No permission to access the document](/img/nieprzypisane4_en.png)

3. Click **OK** to close the dialog.
4. Click **Request access** to submit a request for access to the document.

After the request has been approved by an authorized user:

1. Return to the **Unadvises Documents** report.
2. Click the **Documents ID** again.
3. The system opens the document preview.

This allows you to verify the document content and assign it to the appropriate flow or owner.

## Important Information

- The report allows users to quickly handle documents without an assignment.
- Each user can access only documents permitted by their permissions.
- Correct document assignment speeds up further processing in SPUMA.