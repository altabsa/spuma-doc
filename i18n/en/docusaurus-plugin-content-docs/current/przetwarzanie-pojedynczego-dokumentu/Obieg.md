---
sidebar_position: 5
id: Obieg
title: Flow
---

# Document Flow

The **Flow** tab is used to send documents through the authorization process.  
This is where you select a schema, send the document for approval, and can also approve, reject, or – in specific cases – change the flow.

---

## Sending a Document for Approval

**1. Select an Authorization Schema** from the drop-down list.  
   ![Schema selection](/img/obieg1_en.png)

**2. Send the document for approval** – you can do this in two ways:
   - Click **Send for approval** on the left,
   - or click the **operations menu** icon (three lines) and select **Send for approval**.

   ![Send for approval](/img/obieg_en.png)

If the document has attachments that:

- belong to a class configured for automatic flow submission,
- are still in **Secretary** when the main document is sent,

the system displays a message informing you that the attachments will also be sent for approval.

![Attachment flow message](/img/zalacznik_obieg_en.png)

After confirmation:

- the main document is sent according to the selected schema,
- the attachments are automatically sent for approval according to the default authorization configured for their class.

---

## Selecting a Schema

When sending a document for approval, you can select one of the available Authorization Schemas:

- **None** – the document does not require approval and is moved directly to the Repository.
- **Predefined schemas** – prepared earlier during implementation, e.g. sales department, open, by customer.
- **Custom schema** – a schema that you can define yourself and edit when required.

![Open schema selection](/img/przyklad13_en.png)

If the selected schema can be edited or a custom schema is being created, a **blue edit icon** appears next to the field.  
Click it to open the configuration window.

![Schema edit icon](/img/obieg8_en.png)

---

## Defining a Custom Schema

After clicking the icon, the **Custom schema** window opens.

![Custom schema window](/img/obieg9_en.png)

### Schema Type

Select how the document should be approved:

- **All of** – all specified users or groups must approve the document.
- **One of** – approval by one recipient is sufficient.
- **(N) of** – a specified number of recipients, e.g. 2 of 3, must approve the document.

![Schema type](/img/obieg10_en.png)

### Schema Steps

Each schema consists of consecutive steps:

1. **Order** – step number, starting from 0.
2. **Type** – select the recipient type:
   - **User** – select a specific user,
   - **User group** – select a group, e.g. department or accounting,
   - **Authorization schema** – insert another schema.

![Schema steps](/img/obieg11_en.png)

3. **Recipient** – select a user or group from the list:
   - user:

![User](/img/obieg12_en.png)

   - group:

![Group](/img/obieg13_en.png)

   - or the appropriate schema.

![Schema](/img/obieg15_en.png)

New step lines are created automatically after adding a recipient.

---

### Removing Steps

If a line was added incorrectly:

1. Select it.
2. Click the menu in the top-right corner.
3. Select **Delete lines**.

![Delete line](/img/obieg14_en.png)

---

### Confirming the Schema

After completing all steps:

1. Click **OK**.
2. Then click **Save** in the main document window.

The schema is saved and used for the current flow.

---

## Approving and Rejecting

When the document has been sent for approval and requires authorization:

- The user responsible for the current process stage sees the **Approve** option on the left.
- The **Reject** option is also available in the operations menu.

![Approve or reject](/img/obieg2_en.png)

After selecting the schema, its flow is displayed in the tab. You can see the current document stage and who is currently responsible for the decision.

### Approval / Rejection Window

When selecting **Approve** or **Reject**, an additional window opens. Its content depends on the selected Authorization Schema. For example:

- Some schemas require selecting the **next user** who should receive the document for approval.
- Some schemas require selecting the appropriate **next schema**.
- You can also enter **comments** for the approval or rejection.

Leaving the field empty may redirect the document, for example, to accounting.

![Approval window](/img/obieg4_en.png)

When rejecting a document, the system may additionally require a reason. In this case, the following message is displayed:

![Rejection message](/img/obieg7_en.png)

---

### Approving and Rejecting – Saving Changes

After clicking **Approve** or **Reject**, the document is marked as initially processed and the appropriate message is displayed:

![Initial message](/img/obieg5_en.png)

The operation is not final yet. To confirm it:

1. Click **Save** in the top-right corner.

   ![Save document](/img/obieg6_en.png)

2. Only after saving is the decision permanently assigned to the document and displayed in its flow.

After saving:

1. **For approval:**
- the document disappears from the **Pending** section for the current user,
- it is displayed only to the user who is the **next participant in the approval process**,
- if the Authorization Process is complete, the document is moved to the appropriate folder in the **Repository**.

2. **For rejection:**
- the document disappears from the **Pending** section for the current user,
- it appears in the **Pending** list for the user who sent the document for approval.

---

## New Flow

In some schemas, the flow can be changed while it is in progress.  
If the **New flow** option is not grayed out:

![New flow](/img/obieg3_en.png)

- Click **New flow**.
- Select another Authorization Schema.

---

## Advice

Before sending the document for approval, you can verify who the document owner is. At this stage, you can assign the appropriate Advice entry or add the document to **unadvises**.

![Advice - document flow](/img/awizacja4_en.png)

This allows Secretary to assign the document to the appropriate flow more quickly.

---

### Adding Advice

To assign the document to an Advice entry:

1. Click **Menu**.
2. Select **Check the advice**.
3. Based on the displayed report, select the appropriate Advice entry. The report highlights matching values in green to make selection easier.

![Advice report - document flow](/img/awizacja5_en.png)

4. Click **Assign** to confirm the selection or **Cancel** to exit.

---

### Add to Unadvises

If the document does not have a matching Advice entry, you can add it to the unadvises pool:

1. Click **Menu**.
2. Click **Add to unadvises**.
3. The document is saved in the [Unassigned Documents report](../Raporty/Nieprzypisane-dokumenty.md). Users can later create a new Advice entry and link it to the document.

---

## Authorization Lock

For documents sent to a **user group**, each person in that group can reserve the document for processing. This prevents a document reserved by one user from being displayed to other group members as available for approval.

Before reviewing and approving the document, you can lock its authorization.

### Enabling Authorization Lock

1. Click **Menu**.
2. Select **Authorization lock**.

   ![Authorization lock](/img/blokada_en.png)

3. After selecting the option, a message is displayed informing you that the document has been preliminarily reserved. Click **OK**.

   ![Authorization lock message](/img/blokada1_en.png)

4. Click **Save**.

5. After saving, a ✔ marker appears next to **Authorization lock**, indicating that the lock is active.

   ![Active authorization lock](/img/blokada2_en.png)

After saving, the document:

- disappears from the **Pending** section for other users belonging to the same group,
- remains available to the user who reserved it,
- is not yet approved. The lock is used only to reserve the document for processing.

### Releasing the Lock

To make the document available again to other group members:

1. Click **Menu**.
2. Select **Authorization lock** again.
3. Confirm the message.
4. Click **Save**.

After saving, the lock is removed and the document appears again in the **Pending** section for other users authorized to approve it.

---