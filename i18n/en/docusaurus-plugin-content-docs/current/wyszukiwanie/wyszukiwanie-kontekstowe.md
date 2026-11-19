---
sidebar_position: 3
id: wyszukiwanie-kontekstowe
title: Contextual Search
---

# Contextual Search (Workspace)

Contextual Search is a mechanism available **inside the workspace** after opening a specific section from the Main Menu (e.g. Repository → SAP, KSEF, etc.).

---

## Where Is the Search Bar?

It appears automatically at the bottom of the workspace. It consists of several functional icons:

| Icon | Function | Description |
|-------|---------|------|
| ![Search](/img/szukaj3_en.png) | Search | Enter keywords to search documents only in the current location. |
| ![Sort](/img/sortuj.png) | Sorting | Allows you to change the order of results, e.g. alphabetically, by date, or by owner. |
| ![Filter](/img/filtr3.png) | Filters | Enables advanced filtering of results by type, owner, status, etc. |
| ![Clear filters](/img/usun_filtr.png)      ![Clear filters](/img/usun_filtr2.png) | Clear filters | The **blue** icon indicates active filters – click it to remove them. The **gray** icon indicates that no filters are active. |

---
## Contextual Filters

Filters open after clicking the funnel icon. Depending on the context (Repository/folder), they work in the same way as in Global Search. They may include sections such as:

- **Classes**
- **Schema**
- **User**
- **Authorization Status**
- **Business Partner**
- **Payment Method**
- **Currency**
- **Other**:
  - `Due date from`,
  - `Due date to`,
  - `Gross total from`,
  - `Gross total to`.

![Contextual filter](/img/filtr_kontekstowy_7_7_en.png)

In the **Pending** document list, the **Other** section additionally includes the following filters:

- **Only urgent** — displays only documents marked as urgent,
- **Only replacements** — displays only documents handled as part of a substitution,
- **Only locked** — displays only locked documents.

Additional filters are available only in the **Pending** document list and only when the list contains documents matching the given status.

<img
  src={require('@site/static/img/filtr_kontekstowy_pozostale_7.8_en.png').default}
  alt="Contextual-filter-other"
  style={{ width: '35%', height: 'auto' }}
/>

---
## Searching by Document Identifier

Contextual Search also allows documents to be searched by their **unique identifier (ID)**.

To search for a document by identifier:

1. Click the search field.
2. Enter the document's **unique identifier** (numeric value only).
3. Press **Enter** or click the **Search** icon.

If only a numeric value is entered in the search field, the system automatically searches for a document with the specified identifier in the currently displayed document list.

---

## Searching by Customer Name

In the **Repository** module, the search field can also be used to search records by customer name or related company.

You can enter:

- the full customer name,
- part of the customer name,
- the full customer code,
- part of the customer code.

![Search by full customer name](/img/wysz_kontekstowe1_en.png)

The search is not case-sensitive.

The search field can be used together with existing filters to further narrow the results.

---

## Contextual Results

After entering a phrase and confirming it by pressing Enter or clicking the search icon, the results are displayed **directly above** in the document table.

- The search results are limited to the currently open section, e.g. only the KSEF folder.
- Further operations can be performed on the results, including editing, previewing, exporting, etc.

---