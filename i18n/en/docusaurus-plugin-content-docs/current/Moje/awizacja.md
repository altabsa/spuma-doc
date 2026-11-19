---
sidebar_position: 4
id: Awizacja
title: Advice
---

# Advice

The **Advice** section helps identify the owner of an invoice within the company without providing users with excessive amounts of data.  
The functionality consists of two elements:

- **Advice** – allows the person responsible for the document to be indicated before the document is sent into workflow. This allows the [Secretary](../przetwarzanie-pojedynczego-dokumentu/Obieg.md#awizacja) to select the appropriate document workflow more quickly.
- **Unadvises** – allows [documents to be marked](../przetwarzanie-pojedynczego-dokumentu/Obieg.md#dodanie-do-nieprzypisanych) when no owner has yet been identified. This makes it possible to quickly assign them to the correct person because the documents are later visible in the [Unassigned Documents](../Raporty/Nieprzypisane-dokumenty.md) report.

This makes the document assignment process faster and limits access to data only to the appropriate users.

---

## Main Options

The top bar contains three basic buttons:

- **New** – adds a new entry,
- **Refresh** – reloads the list,
- **Menu** – additional operations.

![Main Advice options](/img/awizacja_en.png)

---

## Operations Menu

After clicking the menu icon, additional functions are available:

- **Print** – prints the list of entries,
- **Copy data** – copies data to the clipboard.

### Copy Data

The **Copy** option allows you to copy the contents of the table.

- Click **Copy data**.
- The data is copied to the clipboard.
- Values are enclosed in quotation marks `""` and separated by tabs, so they can be pasted directly, for example, into Excel.

### Print

The **Print** option allows you to prepare and save a printout of the data.

1. Click **Print**.
2. The **Print job** window opens.

   ![Print job](/img/dziennikk6_en.png)

3. In the **Operation type** field, select one of the following options:
   - **Lines only** – prints only the table data,
   - **Lines and documents** – prints the data together with linked documents.

   ![Operation type](/img/dziennikk8_en.png)

4. Click **Prepare printout**.
   - A new file is added to the list with the **Pending** status and no available options.
   - After a moment, click the **Refresh** icon to update the status.

5. When the status changes to **Ready**, two operations become available:
   - **Preview** – opens the printout in preview mode, from where it can be printed,
   - **Save** – allows the printout to be saved as a file.

![Ready printout](/img/dziennikk7_en.png)

6. Click **Close** to finish working with the printout window.

---

## Registering Advice by a User

This section is intended for users who made a purchase and want to inform the Secretary about an expected document.

1. Click **New**.
2. The system automatically displays basic information about the entry: owner, company, date, and time.

![New entry](/img/awizacja2_en.png)

3. Complete the data (all fields are optional):
   - **Date** – the field is completed automatically, but you can change the value manually.
     - **Days of tolerance** – defines the allowed difference in the number of days when searching for or matching documents.
     - **Client name** – you can enter the full name or only part of it.
     - **Tax ID**
     - **Total** – net invoice amount.
     - **Total (tolerance)** – defines the allowed value difference when matching documents.
     - **Item name** – name of the product, service, or item included on the invoice.
   - **Description** – additional information or a comment for the entry.

4. To confirm, click **Add** in the bottom-right corner.
5. To exit, click the curved arrow icon.

---

## Entry Operations

After adding an entry, you can:

- open it and view its details,
- view the list of linked documents (**Show documents**),
- add additional references (**Menu**),
- remove references (**Menu**),
- delete the entire entry (the option becomes available in the menu after the entry is saved).

---

## Filtering Entries

Advice allows you to list entries:

- without a linked document,
- with a linked document.

To change the list view:

1. Select or clear the **Show all** checkbox.
2. Click **Refresh**.

![Filtering](/img/awizacja3_en.png)

---

## Linking Advice to a Document

After adding an entry, the Secretary can link a document to an existing Advice entry while adding the document and selecting the [workflow](../przetwarzanie-pojedynczego-dokumentu/Obieg.md).

The system automatically displays the most relevant Advice entries based on the completed data.

This allows the Secretary to quickly assign the document to the correct person without manually searching for entries.