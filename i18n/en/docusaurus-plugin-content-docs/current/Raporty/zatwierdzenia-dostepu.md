---
sidebar_position: 2
id: Zatwierdzenia-dostepu
title: Access Approvals
---

# Access Approvals

The **Access Approvals** report is a standard report in SPUMA.  
It is used when a user attempts to open a document for which they **do not have permission**.

---

## How Are Report Entries Created?

Sometimes a user receives a link to a document but does not have access to it.  
For example, another employee may have sent the link in a message.

1. The user clicks the document link.
2. The following message appears:

   - **You do not have permission for this document** – the user can choose:
     - **OK** – close the window without requesting access,
     - **Request access** – send an access request to an authorized user.

   ![Access denied](/img/dostep_en.png)

3. After submitting the request, the user receives a confirmation:

   ![The document is waiting for authorization](/img/dostep2_en.png)

---

## Access Approvals Report

Users authorized to grant access can view submitted requests in the **Access Approvals** report.

- Each entry contains:
  - Entry ID,
  - Sender (the user who requested access),
  - Documents ID and Document Name,
  - Approval status (Pending / Approved / Denied),
  - Approver,
  - Modification Date.

![Access requests list](/img/dostep3_en.png)

---

## Access Decision

The details of each request (sender, document, status, modification date) are displayed directly in the report. You can also open the document preview from the report.

To make an access decision:

1. Click the **Entry ID** of the selected request.
2. In the **Change access** window, select one of the following options:
   - **Grant** – grants the user access,
   - **Deny** – denies the access request,
   - **Cancel** – closes the window without making a decision.

:::tip[Before Granting Access]
Before granting access, **click the Documents ID**.  
The document preview opens in a new tab, allowing you to quickly verify which document the request concerns.
:::

![Change access](/img/dostep4_en.png)

---

## Important Information

- The user **does not receive an automatic notification** about the access decision.
- It is recommended to inform the user about the decision, e.g. through a SPUMA message or email.

---