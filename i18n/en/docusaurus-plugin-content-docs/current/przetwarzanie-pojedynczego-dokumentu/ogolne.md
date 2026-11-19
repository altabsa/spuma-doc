---
sidebar_position: 3
id: ogolne
title: General
---

# General

The **General** tab contains basic information about the document. Some fields are completed by the user, while others are generated automatically by the system. The most important field in this section is **Type (Document Class)**.

![General tab view](/img/ogolne_en.png)

---

## Type (Document Class)

- A document added to **Secretary** initially **has no class assigned**.
- The user must select the appropriate class from the drop-down list.
- **Document Classes are prepared individually for each customer** according to their business requirements.

Based on the selected class:

- the appropriate **Attributes** are displayed,
- the appropriate workflow schemas are determined.

**Invoice** is a standard class and includes invoice-type documents, e.g. cost invoices or sales invoices.  
Other classes are defined according to customer requirements, e.g. Purchase Order, Agreement, or Request.

---

## Other Fields to Complete

- **Name** – document name. It is assigned automatically by default, but it can be changed manually or generated again using the ![Generate name](/img/generuj_nazwe.png) button on the right side of the field.
- **Description** – text field for additional information.
- **Number** – document number.
- **Document date** – document issue date.
- **Received** – date when the document was received in the system.

---

## Information Fields

- **Creation date** – exact date and time when the document was added to the system.
- **Company** – name of the company in whose context the user is working.
- **Owner** – user responsible for the document.
- **Directory** – current location of the document, e.g. Secretary or Repository.
- **External documents**
- **Unique identifier** – technical number assigned to the document in the system.

---

## External Documents

If a SPUMA document has also been added to **SAP** as an actual document, rather than only as a draft, the **External documents** section appears on the **General** tab.

Clicking the link opens a window with the list of external documents:

- click the selected document to view its details,
- check basic information, e.g. invoice number, date, amount, sender,
- click **Refresh data** to retrieve the latest data from SAP.

![External documents list](/img/ogolne2_en.png)

After opening a document, you can view the full details stored in SAP, e.g.:

- invoice number, date, and due date,
- Business Partner, responsible person, amount,
- payment balance – the amount remaining to be settled,
- additional remarks,
- document lines, including description, quantity, net prices, and gross prices.

![External document details](/img/ogolne3_7_7_en.png)

The **Payment balance** field is updated based on data from SAP. After a payment is registered in SAP and the data is refreshed, the current amount remaining to be settled is displayed.

![External document details](/img/ogolne3_7_7.1_en.png)